import { z } from "zod";

export const submitSchema = z.object({
  email: z.string().email("Érvénytelen email cím").max(255),
  formData: z.object({
    gender: z.enum(["no", "ferfi"]),
    // Min age 16 — Hungarian Infotv. § 6 digital consent age.
    age: z.number().int().min(16).max(100),
    height: z.number().min(100).max(250),
    weight: z.number().min(30).max(300),
    goal: z.enum(["fogyas", "tonusosodas", "tomegeles"]),
    activityLevel: z.union([
      z.literal(1.2),
      z.literal(1.375),
      z.literal(1.55),
      z.literal(1.725),
    ]),
  }),
  tempo: z.enum(["laza", "kozepes", "intenziv"]),
  targetWeight: z.number().min(30).max(300).nullable().optional(),

  // GDPR Art. 9(2)(a) — explicit consent for special category (health) data.
  // Must be exactly true.
  consentHealthData: z.literal(true, {
    message:
      "El kell fogadnod a különleges (egészségügyi) adatok kezelésére vonatkozó hozzájárulást.",
  }),

  // GDPR Art. 6(1)(a) — consent to the privacy notice.
  consentPrivacyPolicy: z.literal(true, {
    message: "El kell fogadnod az adatkezelési tájékoztatót.",
  }),

  // ePrivacy + GDPR Art. 6(1)(a) — optional analytics consent.
  consentAnalytics: z.boolean().optional().default(false),

  // Records which version of the privacy notice the user agreed to.
  policyVersion: z.string().min(1).max(64),
});

export type SubmitPayload = z.infer<typeof submitSchema>;
