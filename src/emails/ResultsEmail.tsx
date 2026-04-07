import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { CalculatorResults, UserInput, Tempo } from "@/lib/types";
import { LINKS } from "@/lib/links";

interface ResultsEmailProps {
  email: string;
  formData: UserInput;
  tempo: Tempo;
  targetWeight?: number | null;
  results: CalculatorResults;
}

// ── Hard-coded palette (CSS variables don't work in email clients) ──
const COLOR = {
  pink: "#F4A7B9",
  pinkLight: "#FDE8EE",
  pinkDark: "#D65C84",
  pinkDeep: "#B83E68",
  cream: "#FBF4F6",
  white: "#FFFFFF",
  dark: "#2A1F23",
  mid: "#7A6670",
  light: "#B8A4AC",
  border: "#EAD9DF",
  protein: "#5BB5A6",
  carb: "#E8B44C",
  fat: "#E89AAE",
  waterBg: "#E8F4FD",
  waterText: "#2D5F73",
  waterAccent: "#4A8FA8",
};

// ── Styles ──
const main = {
  backgroundColor: COLOR.cream,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  padding: "32px 0",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: COLOR.white,
  borderRadius: "16px",
  overflow: "hidden",
};

const heroSection = {
  backgroundColor: COLOR.pinkDark,
  padding: "40px 32px",
  textAlign: "center" as const,
};

const eyebrow = {
  color: "rgba(255,255,255,0.75)",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  margin: "0 0 12px 0",
};

const heroNumber = {
  color: COLOR.white,
  fontSize: "64px",
  fontWeight: 800,
  lineHeight: 1,
  margin: "0",
};

const heroUnit = {
  color: "rgba(255,255,255,0.8)",
  fontSize: "18px",
  fontWeight: 400,
  marginLeft: "6px",
};

const heroDesc = {
  color: "rgba(255,255,255,0.85)",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "16px auto 0",
  maxWidth: "440px",
};

const bmiBadge = {
  display: "inline-block",
  marginTop: "20px",
  padding: "10px 18px",
  backgroundColor: "rgba(255,255,255,0.18)",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.3)",
};

const bmiLabel = {
  color: "rgba(255,255,255,0.8)",
  fontSize: "9px",
  fontWeight: 700,
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0",
};

const bmiValue = {
  color: COLOR.white,
  fontSize: "22px",
  fontWeight: 800,
  margin: "2px 0 0 0",
  lineHeight: 1,
};

const bmiCategory = {
  color: "rgba(255,255,255,0.75)",
  fontSize: "11px",
  fontWeight: 600,
  margin: "2px 0 0 0",
};

const sectionPadding = {
  padding: "28px 32px",
};

const sectionLabel = {
  color: COLOR.pinkDark,
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "1.8px",
  textTransform: "uppercase" as const,
  margin: "0 0 16px 0",
};

const macroCell = {
  padding: "18px 8px",
  textAlign: "center" as const,
  borderRadius: "14px",
  border: `1.5px solid ${COLOR.border}`,
  backgroundColor: COLOR.white,
};

const macroDot = {
  display: "inline-block",
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  marginBottom: "6px",
};

const macroLabel = {
  color: COLOR.light,
  fontSize: "9px",
  fontWeight: 700,
  letterSpacing: "1.2px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const macroValue = {
  color: COLOR.dark,
  fontSize: "28px",
  fontWeight: 800,
  margin: "0",
  lineHeight: 1,
};

const macroUnit = {
  color: COLOR.mid,
  fontSize: "11px",
  fontWeight: 600,
  margin: "4px 0 0 0",
};

const exerciseStat = {
  textAlign: "center" as const,
  padding: "12px 8px",
};

const exerciseValue = {
  color: COLOR.dark,
  fontSize: "34px",
  fontWeight: 800,
  margin: "0",
  lineHeight: 1,
};

const exerciseLabel = {
  color: COLOR.mid,
  fontSize: "11px",
  fontWeight: 600,
  margin: "6px 0 0 0",
};

const numberedItem = {
  padding: "10px 0",
  borderBottom: `1px solid ${COLOR.border}`,
};

const numberedItemLast = {
  padding: "10px 0",
};

const itemNumber = {
  display: "inline-block",
  width: "22px",
  height: "22px",
  lineHeight: "22px",
  textAlign: "center" as const,
  borderRadius: "50%",
  backgroundColor: COLOR.pinkLight,
  color: COLOR.pinkDark,
  fontSize: "11px",
  fontWeight: 800,
  marginRight: "10px",
};

const itemText = {
  color: COLOR.mid,
  fontSize: "13px",
  lineHeight: "20px",
  fontWeight: 500,
  margin: "0",
  display: "inline",
};

const waterCard = {
  marginTop: "8px",
  padding: "20px 24px",
  backgroundColor: COLOR.waterBg,
  borderRadius: "14px",
};

const waterEyebrow = {
  color: COLOR.waterAccent,
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0 0 6px 0",
};

const waterValue = {
  color: COLOR.waterText,
  fontSize: "30px",
  fontWeight: 800,
  margin: "0",
  lineHeight: 1,
};

const waterUnit = {
  color: COLOR.waterText,
  fontSize: "16px",
  fontWeight: 600,
  marginLeft: "4px",
};

const waterNote = {
  color: COLOR.waterAccent,
  fontSize: "11px",
  fontWeight: 500,
  margin: "8px 0 0 0",
  lineHeight: "16px",
};

const ctaButton = {
  display: "inline-block",
  padding: "16px 32px",
  backgroundColor: COLOR.dark,
  color: COLOR.white,
  textDecoration: "none",
  borderRadius: "999px",
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
};

const disclaimer = {
  padding: "16px 24px",
  backgroundColor: COLOR.pinkLight,
  border: `1px solid ${COLOR.pink}`,
  borderRadius: "12px",
  textAlign: "center" as const,
};

const disclaimerText = {
  color: COLOR.pinkDark,
  fontSize: "11px",
  fontWeight: 600,
  lineHeight: "16px",
  margin: "0",
};

const footerText = {
  color: COLOR.light,
  fontSize: "11px",
  textAlign: "center" as const,
  margin: "24px 0 0 0",
};

const goalPlanRow = {
  marginTop: "16px",
};

const goalPlanCell = {
  textAlign: "center" as const,
  padding: "16px 8px",
  borderRadius: "12px",
  border: `1.5px solid ${COLOR.border}`,
  backgroundColor: COLOR.white,
};

const goalPlanCellHighlight = {
  ...goalPlanCell,
  border: `1.5px solid ${COLOR.pink}`,
  backgroundColor: COLOR.pinkLight,
};

// ── Component ──
export function ResultsEmail({
  email: _email,
  results,
}: ResultsEmailProps) {
  const tempoEmojis = ["🌿", "⚡", "🔥"];
  const tempoNames = ["Laza", "Közepes", "Intenzív"];

  return (
    <Html lang="hu">
      <Head />
      <Preview>
        {`A személyes terved: ${results.targetCalories} kcal/nap, ${results.macros.protein}g fehérje`}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* HERO ── Daily kcal */}
          <Section style={heroSection}>
            <Text style={eyebrow}>Napi kalóriacélod</Text>
            <Heading as="h1" style={heroNumber}>
              {results.targetCalories}
              <span style={heroUnit}>kcal</span>
            </Heading>
            <Text style={heroDesc}>{results.calorieDescription}</Text>

            <div style={bmiBadge}>
              <Text style={bmiLabel}>Testtömegindex</Text>
              <Text style={bmiValue}>{results.bmi.toFixed(1)}</Text>
              <Text style={bmiCategory}>{results.bmiCategory}</Text>
            </div>
          </Section>

          {/* MACROS */}
          <Section style={sectionPadding}>
            <Text style={sectionLabel}>Napi makrók</Text>
            <table width="100%" cellPadding="0" cellSpacing="0" role="presentation">
              <tr>
                <td style={{ padding: "0 4px", width: "33.33%" }}>
                  <div style={macroCell}>
                    <div style={{ ...macroDot, backgroundColor: COLOR.protein }} />
                    <Text style={macroLabel}>Fehérje</Text>
                    <Text style={macroValue}>{results.macros.protein}</Text>
                    <Text style={macroUnit}>gramm / nap</Text>
                  </div>
                </td>
                <td style={{ padding: "0 4px", width: "33.33%" }}>
                  <div style={macroCell}>
                    <div style={{ ...macroDot, backgroundColor: COLOR.carb }} />
                    <Text style={macroLabel}>Szénhidrát</Text>
                    <Text style={macroValue}>{results.macros.carbs}</Text>
                    <Text style={macroUnit}>gramm / nap</Text>
                  </div>
                </td>
                <td style={{ padding: "0 4px", width: "33.33%" }}>
                  <div style={macroCell}>
                    <div style={{ ...macroDot, backgroundColor: COLOR.fat }} />
                    <Text style={macroLabel}>Zsír</Text>
                    <Text style={macroValue}>{results.macros.fat}</Text>
                    <Text style={macroUnit}>gramm / nap</Text>
                  </div>
                </td>
              </tr>
            </table>
          </Section>

          <Hr style={{ borderColor: COLOR.border, margin: "0 32px" }} />

          {/* EXERCISE */}
          <Section style={sectionPadding}>
            <Text style={sectionLabel}>Mozgáscél</Text>
            <table width="100%" cellPadding="0" cellSpacing="0" role="presentation">
              <tr>
                <td style={{ width: "50%" }}>
                  <div style={exerciseStat}>
                    <Text style={exerciseValue}>{results.exerciseCount}</Text>
                    <Text style={exerciseLabel}>× 30 perces edzés / hét</Text>
                  </div>
                </td>
                <td style={{ width: "50%" }}>
                  <div style={exerciseStat}>
                    <Text style={exerciseValue}>{results.stepCount}</Text>
                    <Text style={exerciseLabel}>lépés / nap ajánlott</Text>
                  </div>
                </td>
              </tr>
            </table>

            <div style={{ marginTop: "16px" }}>
              {results.exerciseDescription.map((point, i) => {
                const isLast = i === results.exerciseDescription.length - 1;
                return (
                  <div key={i} style={isLast ? numberedItemLast : numberedItem}>
                    <span style={itemNumber}>{i + 1}</span>
                    <span style={itemText}>{point}</span>
                  </div>
                );
              })}
            </div>
          </Section>

          <Hr style={{ borderColor: COLOR.border, margin: "0 32px" }} />

          {/* WATER */}
          <Section style={sectionPadding}>
            <Text style={sectionLabel}>Napi vízfogyasztás</Text>
            <div style={waterCard}>
              <Text style={waterEyebrow}>💧 Napi cél</Text>
              <Text style={waterValue}>
                {results.waterIntake.toFixed(1)}
                <span style={waterUnit}>liter</span>
              </Text>
              <Text style={waterNote}>
                Testsúly + aktivitási szint alapján számítva. Edzés napján adj hozzá 0,5 litert.
              </Text>
            </div>
          </Section>

          {/* GOAL PLAN (optional) */}
          {results.goalPlan && (
            <>
              <Hr style={{ borderColor: COLOR.border, margin: "0 32px" }} />
              <Section style={sectionPadding}>
                <Text style={sectionLabel}>Célterved</Text>
                <Text style={{ color: COLOR.mid, fontSize: "13px", margin: "0 0 8px 0" }}>
                  {results.goalPlan.difference.toFixed(1)} kg-ot szeretnél{" "}
                  {results.goalPlan.direction}.
                </Text>

                <table
                  width="100%"
                  cellPadding="0"
                  cellSpacing="0"
                  role="presentation"
                  style={goalPlanRow}
                >
                  <tr>
                    {results.goalPlan.tempos.map((t, i) => (
                      <td key={t.tempo} style={{ padding: "0 4px", width: "33.33%" }}>
                        <div style={i === 1 ? goalPlanCellHighlight : goalPlanCell}>
                          <Text
                            style={{
                              fontSize: "16px",
                              margin: "0 0 4px 0",
                              lineHeight: 1,
                            }}
                          >
                            {tempoEmojis[i]}
                          </Text>
                          <Text
                            style={{
                              color: i === 1 ? COLOR.pinkDark : COLOR.dark,
                              fontSize: "11px",
                              fontWeight: 800,
                              margin: "0",
                            }}
                          >
                            {tempoNames[i]}
                          </Text>
                          <Text
                            style={{
                              color: i === 1 ? COLOR.pinkDark : COLOR.mid,
                              fontSize: "10px",
                              fontWeight: 600,
                              margin: "2px 0 10px 0",
                            }}
                          >
                            {t.weeks > 0
                              ? `~${t.weeklyKg.toFixed(2)} kg/hét · ${t.weeks} hét`
                              : "Célsúly elérve"}
                          </Text>
                          <Text
                            style={{
                              color: COLOR.pinkDark,
                              fontSize: "20px",
                              fontWeight: 800,
                              margin: "0",
                              lineHeight: 1,
                            }}
                          >
                            {t.calories}
                          </Text>
                          <Text
                            style={{
                              color: i === 1 ? COLOR.pinkDark : COLOR.mid,
                              fontSize: "9px",
                              fontWeight: 600,
                              margin: "2px 0 10px 0",
                            }}
                          >
                            kcal / nap
                          </Text>
                          <Text
                            style={{
                              color: COLOR.dark,
                              fontSize: "10px",
                              margin: "0",
                              lineHeight: "16px",
                            }}
                          >
                            <strong>F:</strong> {t.macros.protein}g
                            <br />
                            <strong>SZ:</strong> {t.macros.carbs}g
                            <br />
                            <strong>Zs:</strong> {t.macros.fat}g
                          </Text>
                        </div>
                      </td>
                    ))}
                  </tr>
                </table>
              </Section>
            </>
          )}

          <Hr style={{ borderColor: COLOR.border, margin: "0 32px" }} />

          {/* CTA */}
          <Section style={{ ...sectionPadding, textAlign: "center" }}>
            <Heading
              as="h2"
              style={{
                color: COLOR.dark,
                fontSize: "20px",
                fontWeight: 700,
                margin: "0 0 8px 0",
                lineHeight: "26px",
              }}
            >
              A terved kész. Most jön a neheze: végigcsinálni.
            </Heading>
            <Text
              style={{
                color: COLOR.mid,
                fontSize: "14px",
                lineHeight: "22px",
                margin: "0 0 20px 0",
              }}
            >
              Egyedül? Hétfőn elkezded, szerdára hagyod.
              <br />
              Velünk? Hétfőtől péntekig együtt csináljátok.
            </Text>
            <Link href={LINKS.facebookGroup} style={ctaButton}>
              Csatlakozz a Facebook csoporthoz
            </Link>
            <Text
              style={{
                color: COLOR.light,
                fontSize: "11px",
                margin: "12px 0 0 0",
              }}
            >
              Zárt csoport · Ingyenes · Egy ✅ is elég
            </Text>
          </Section>

          {/* DISCLAIMER */}
          <Section style={{ padding: "0 32px 32px" }}>
            <div style={disclaimer}>
              <Text style={disclaimerText}>
                Ez egy tájékoztató segédeszköz, nem orvosi tanács. Egyéni egészségügyi
                kérdésekben fordulj szakemberhez.
              </Text>
            </div>
          </Section>
        </Container>

        <Text style={footerText}>#SzavazzMagadra · © 2026</Text>
      </Body>
    </Html>
  );
}

export default ResultsEmail;
