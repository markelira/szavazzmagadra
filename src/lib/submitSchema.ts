import { z } from "zod";

export const submitSchema = z.object({
  email: z.string().email("Érvénytelen email cím").max(255),
  formData: z.object({
    gender: z.enum(["no", "ferfi"]),
    age: z.number().int().min(10).max(100),
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
  // GDPR consent — must be exactly true
  consentGdpr: z.literal(true, {
    message: "El kell fogadnod az adatkezelési tájékoztatót.",
  }),
});

export type SubmitPayload = z.infer<typeof submitSchema>;
