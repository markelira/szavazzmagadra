import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "@/lib/firebase-admin";
import { checkAndCleanup } from "@/lib/rateLimit";

// firebase-admin requires Node runtime
export const runtime = "nodejs";

const requestSchema = z.object({
  email: z.string().email().max(255),
  requestType: z.enum(["access", "delete", "rectify", "withdraw", "object"]),
  message: z.string().max(2000).optional(),
});

const requestTypeLabels: Record<string, string> = {
  access: "Hozzáférés (GDPR 15. cikk)",
  delete: "Törlés (GDPR 17. cikk)",
  rectify: "Helyesbítés (GDPR 16. cikk)",
  withdraw: "Hozzájárulás visszavonása (GDPR 7. cikk)",
  object: "Tiltakozás (GDPR 21. cikk)",
};

function truncateIp(ip: string): string {
  if (!ip || ip === "unknown") return "unknown";
  if (ip.includes(":")) {
    const parts = ip.split(":");
    return parts.slice(0, 3).join(":") + "::";
  }
  const parts = ip.split(".");
  if (parts.length === 4) {
    return `${parts[0]}.${parts[1]}.${parts[2]}.0`;
  }
  return "unknown";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = requestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Érvénytelen adatok" },
        { status: 400 }
      );
    }
    const { email, requestType, message } = parsed.data;

    // Rate limit: max 3 requests / 24h per truncated-IP+email
    const rawIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const truncatedIp = truncateIp(rawIp);
    if (!checkAndCleanup(`dr:${truncatedIp}:${email.toLowerCase()}`)) {
      return NextResponse.json(
        { error: "Túl sok kérés. Próbáld újra később." },
        { status: 429 }
      );
    }

    const userAgent = req.headers.get("user-agent") ?? "unknown";
    const requestLabel = requestTypeLabels[requestType] ?? requestType;
    const safeMessage = message ? escapeHtml(message) : "";

    // 1. Log the request to Firestore for the controller's records
    const requestRef = await adminDb.collection("dataRequests").add({
      email,
      requestType,
      message: message ?? null,
      ip: truncatedIp,
      userAgent,
      createdAt: FieldValue.serverTimestamp(),
      status: "pending",
    });

    // 2. Send acknowledgement email to the requester
    const ackHtml = `<!DOCTYPE html>
<html lang="hu">
<body style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #2A1F23;">
  <h1 style="font-size: 24px; font-weight: 300;">Megkaptuk a kérésed</h1>
  <p>Kedves Felhasználó!</p>
  <p>Megkaptuk az alábbi adatkezelési kérésedet:</p>
  <table style="border-collapse: collapse; margin: 16px 0;">
    <tr><td style="padding: 4px 12px; font-weight: 600;">Kérés típusa:</td><td style="padding: 4px 12px;">${escapeHtml(requestLabel)}</td></tr>
    <tr><td style="padding: 4px 12px; font-weight: 600;">Email:</td><td style="padding: 4px 12px;">${escapeHtml(email)}</td></tr>
    <tr><td style="padding: 4px 12px; font-weight: 600;">Azonosító:</td><td style="padding: 4px 12px; font-family: monospace;">${requestRef.id}</td></tr>
  </table>
  ${safeMessage ? `<p><strong>Üzeneted:</strong></p><p style="background: #FBF4F6; padding: 12px; border-radius: 8px;">${safeMessage}</p>` : ""}
  <p>A GDPR 12. cikk (3) bekezdése alapján a megkereséseket <strong>30 napon belül</strong> dolgozzuk fel. Ha a kérés komplex, ezt további 60 nappal meghosszabbíthatjuk, amiről értesítünk.</p>
  <p>Az azonosság ellenőrzése érdekében előfordulhat, hogy további információt kérünk tőled.</p>
  <p>Köszönjük türelmedet,<br/>AM Studios Group Kft.<br/><a href="mailto:info@amstudios.hu" style="color: #D65C84;">info@amstudios.hu</a></p>
</body>
</html>`;

    // 3. Send notification email to the operator
    const opHtml = `<!DOCTYPE html>
<html lang="hu">
<body style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #2A1F23;">
  <h1 style="font-size: 20px;">⚠️ Új adatkezelési kérés</h1>
  <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
    <tr><td style="padding: 6px 12px; font-weight: 600; background: #FBF4F6;">Kérés típusa</td><td style="padding: 6px 12px;">${escapeHtml(requestLabel)}</td></tr>
    <tr><td style="padding: 6px 12px; font-weight: 600; background: #FBF4F6;">Email</td><td style="padding: 6px 12px;">${escapeHtml(email)}</td></tr>
    <tr><td style="padding: 6px 12px; font-weight: 600; background: #FBF4F6;">Azonosító</td><td style="padding: 6px 12px; font-family: monospace;">${requestRef.id}</td></tr>
    <tr><td style="padding: 6px 12px; font-weight: 600; background: #FBF4F6;">IP (csonkolt)</td><td style="padding: 6px 12px; font-family: monospace;">${escapeHtml(truncatedIp)}</td></tr>
    <tr><td style="padding: 6px 12px; font-weight: 600; background: #FBF4F6;">User-Agent</td><td style="padding: 6px 12px; font-family: monospace; font-size: 11px;">${escapeHtml(userAgent)}</td></tr>
  </table>
  ${safeMessage ? `<p><strong>Üzenet:</strong></p><p style="background: #FBF4F6; padding: 12px; border-radius: 8px;">${safeMessage}</p>` : ""}
  <p style="margin-top: 24px; padding: 12px; background: #FDECEC; border-left: 4px solid #C4463A;">
    <strong>Határidő:</strong> 30 nap (GDPR Art. 12(3))<br/>
    <strong>Művelet:</strong> Azonosítsd a kérést, ellenőrizd az érintett személyazonosságát, és válaszolj.
  </p>
</body>
</html>`;

    await Promise.all([
      adminDb.collection("mail").add({
        to: email,
        message: {
          subject: `Megkaptuk a kérésed - ${requestLabel}`,
          html: ackHtml,
        },
      }),
      adminDb.collection("mail").add({
        to: "info@amstudios.hu",
        message: {
          subject: `[ADATKEZELÉSI KÉRÉS] ${requestLabel} - ${email}`,
          html: opHtml,
        },
      }),
    ]);

    return NextResponse.json({ ok: true, requestId: requestRef.id });
  } catch (err) {
    console.error("[data-request] error:", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: "Szerver hiba történt" },
      { status: 500 }
    );
  }
}
