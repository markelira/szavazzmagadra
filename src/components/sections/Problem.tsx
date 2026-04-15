import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrandPill } from "@/components/ui/BrandPill";

const problems = [
  {
    emoji: "\u{1F4C5}",
    lines: [
      "„Hétfőn elkezdem.",
      "Szerdára hagyom.",
      "Péntekre bűntudatom van.\u201D",
    ],
  },
  {
    emoji: "\u{1F501}",
    lines: [
      "„Újra és újra nekifutok,",
      "de soha nem tartom ki.\u201D",
    ],
  },
  {
    emoji: "\u{1F614}",
    lines: [
      "„Tudom, mit kellene csinálnom.",
      "Csak egyedül nem megy.\u201D",
    ],
  },
];

export function Problem() {
  return (
    <div>
      <SectionHeader
        badge={
          <BrandPill icon={<span className="text-sm">{"\u{1F4AC}"}</span>}>
            A probléma
          </BrandPill>
        }
        eyebrow="Így érzed?"
        headlineLight="Ismerős"
        headlineBold="ez?"
      />

      <div className="relative">
        <FeatureCard bg="pink" className="p-8 md:p-12 lg:p-16 overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="bg-white rounded-[20px] p-7 md:p-8 text-center shadow-[0_4px_20px_rgba(42,31,35,0.06)] border border-white/40"
              >
                <div className="text-3xl mb-4">{problem.emoji}</div>
                <p className="text-[15px] text-[var(--mid)] leading-[1.7] italic">
                  {problem.lines.map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < problem.lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* Floating: hashtag pill (top-right) */}
          <div className="hidden md:flex absolute -top-5 right-8 bg-white rounded-full px-4 py-2 shadow-xl border border-[var(--border)]">
            <p className="text-[11px] font-bold text-[var(--pink-dark)] tracking-wider">
              {"#szavazzmagadra"}
            </p>
          </div>

          {/* Floating: encouragement from the group (bottom-left) */}
          <div className="hidden md:flex absolute -bottom-8 left-8 bg-white rounded-[16px] p-3 shadow-xl border border-[var(--border)] max-w-[220px]">
            <div className="space-y-1.5">
              <p className="text-[10px] text-[var(--mid)]">
                {"bárcsak \u{1F61E}"}
              </p>
              <p className="text-[10px] font-medium text-[var(--dark)]">
                {"sikerülni fog, kitartáson múlik!! \u{1F4AA}"}
              </p>
            </div>
          </div>
        </FeatureCard>
      </div>

      <p className="text-center text-[var(--mid)] text-base md:text-lg mt-12 leading-relaxed max-w-md mx-auto">
        {"Nem azért, mert lusta vagy."}
        <br />
        <span className="font-semibold text-[var(--dark)]">
          {"Hanem mert egyedül tényleg nehéz."}
        </span>
        <br />
        <span className="text-[var(--mid)] mt-2 block">
          {"De mi lenne, ha látnád, hogy mások is pont így éreznek — és mégis csinálják?"}
        </span>
      </p>
    </div>
  );
}
