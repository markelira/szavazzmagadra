import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { adminDb } from "@/lib/firebase-admin";
import { submitSchema } from "@/lib/submitSchema";
import { checkAndCleanup } from "@/lib/rateLimit";
import { calculate } from "@/lib/calculations";
import ResultsEmail from "@/emails/ResultsEmail";

// firebase-admin requires Node runtime, not Edge
export const runtime = "nodejs";

const TWO_YEARS_MS = 2 * 365 * 24 * 60 * 60 * 1000;

/**
 * Truncate the IP address to /24 (IPv4) or /48 (IPv6) for data minimisation.
 * The truncated value is still useful for fraud detection and consent audit
 * but no longer uniquely identifies a single household / individual.
 * GDPR Art. 5(1)(c) - data minimisation principle.
 */
function truncateIp(ip: string): string {
  if (!ip || ip === "unknown") return "unknown";
  if (ip.includes(":")) {
    // IPv6 - keep first 3 hextets (≈ /48)
    const parts = ip.split(":");
    return parts.slice(0, 3).join(":") + "::";
  }
  // IPv4 - keep first 3 octets (/24)
  const parts = ip.split(".");
  if (parts.length === 4) {
    return `${parts[0]}.${parts[1]}.${parts[2]}.0`;
  }
  return "unknown";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate input (strict zod schema with both consents required)
    const parsed = submitSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Érvénytelen adatok" },
        { status: 400 }
      );
    }
    const {
      email,
      formData,
      tempo,
      targetWeight,
      consentHealthData,
      consentPrivacyPolicy,
      consentAnalytics,
      policyVersion,
    } = parsed.data;

    // 2. Truncate IP for minimisation, then rate-limit
    const rawIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const truncatedIp = truncateIp(rawIp);
    if (!checkAndCleanup(`${truncatedIp}:${email.toLowerCase()}`)) {
      return NextResponse.json(
        { error: "Túl sok próbálkozás. Próbáld újra később." },
        { status: 429 }
      );
    }

    // 3. Recompute results server-side (anti-tampering)
    const results = calculate(formData, tempo, targetWeight ?? undefined);

    // 4. Render email HTML
    const html = await render(
      ResultsEmail({
        email,
        formData,
        tempo,
        targetWeight,
        results,
      })
    );

    // 5. Capture consent metadata for the GDPR Art. 7(1) audit trail
    const userAgent = req.headers.get("user-agent") ?? "unknown";
    const consentRecord = {
      consentHealthData,         // Article 9(2)(a) - explicit
      consentPrivacyPolicy,      // Article 6(1)(a)
      consentAnalytics: consentAnalytics ?? false, // ePrivacy
      consentTimestamp: FieldValue.serverTimestamp(),
      consentIp: truncatedIp,    // /24 or /48 truncated
      consentUserAgent: userAgent,
      policyVersion,             // which version of the notice was agreed to
    };

    // 6. Compute the TTL expiry timestamp (2 years from now).
    //    The Firestore TTL policy on `expiresAt` will auto-delete the doc.
    const expiresAt = Timestamp.fromMillis(Date.now() + TWO_YEARS_MS);

    // 7. Persist submission + enqueue email (in parallel)
    await Promise.all([
      adminDb.collection("submissions").add({
        email,
        formData,
        tempo,
        targetWeight: targetWeight ?? null,
        results,
        ...consentRecord,
        createdAt: FieldValue.serverTimestamp(),
        expiresAt, // Firestore TTL policy field
      }),
      adminDb.collection("mail").add({
        to: email,
        message: {
          subject: "A te személyes terved – Szavazz Magadra",
          html,
        },
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Strip PII from logs
    console.error("[send-results] error:", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: "Szerver hiba történt" },
      { status: 500 }
    );
  }
}
