import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "@/lib/firebase-admin";
import { submitSchema } from "@/lib/submitSchema";
import { checkAndCleanup } from "@/lib/rateLimit";
import { calculate } from "@/lib/calculations";
import ResultsEmail from "@/emails/ResultsEmail";

// firebase-admin requires Node runtime, not Edge
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate input
    const parsed = submitSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Érvénytelen adatok" },
        { status: 400 }
      );
    }
    const { email, formData, tempo, targetWeight } = parsed.data;

    // 2. Rate-limit per IP+email
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (!checkAndCleanup(`${ip}:${email.toLowerCase()}`)) {
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

    // 5. Persist submission + enqueue email (in parallel)
    await Promise.all([
      adminDb.collection("submissions").add({
        email,
        formData,
        tempo,
        targetWeight: targetWeight ?? null,
        results,
        createdAt: FieldValue.serverTimestamp(),
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
