import { Vote, Play, CheckCircle } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrandPill } from "@/components/ui/BrandPill";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Szavazz",
    description:
      "Minden pénteken Alexa felrak 4 opciót. 🌱 Gyengéd ébresztő, 🔥 Erősítés, ⚡ Kardió, 🧘 Nyújtás — ti döntötök.",
    Icon: Vote,
    bg: "bg-[var(--tag-peach)]",
    floatLabel: "Péntek",
    floatEmoji: "\u{1F5F3}",
  },
  {
    number: "02",
    title: "Csináld",
    description:
      "Hétfőtől péntekig, napi 10–15 perc. Alexa minden nap mutatja a gyakorlatokat.",
    Icon: Play,
    bg: "bg-[var(--tag-rose)]",
    floatLabel: "Napi 15 perc",
    floatEmoji: "⏱",
  },
  {
    number: "03",
    title: "Jelezz",
    description:
      "Megcsináltad? Beírsz egy ✅-t. Ma 12-en írtak. Holnap te is ott leszel.",
    Icon: CheckCircle,
    bg: "bg-[var(--tag-blush)]",
    floatLabel: "Egy ✅ is elég",
    floatEmoji: "\u{1F389}",
  },
];

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 2L3 14h7l-1 8 11-12h-7l0-8z" />
    </svg>
  );
}

export function HowItWorks() {
  return (
    <div>
      <SectionHeader
        badge={
          <BrandPill icon={<ZapIcon className="w-3.5 h-3.5 text-[var(--pink-dark)]" />}>
            Hogyan működik
          </BrandPill>
        }
        eyebrow="A folyamat"
        headlineLight="Három lépés,"
        headlineBold="egy szokás."
      />

      {/* Pastel tile row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`relative ${step.bg} rounded-[28px] p-8 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]`}
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-[40px] font-extralight text-[var(--dark)]/30 leading-none tabular-nums">
                {step.number}
              </span>
              <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
                <step.Icon className="w-5 h-5 text-[var(--dark)]" strokeWidth={2} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--dark)] tracking-tight">
              {step.title}
            </h3>
            <p className="text-[var(--dark)]/70 text-[14px] leading-[1.65] mt-2.5">
              {step.description}
            </p>

            {/* Floating mini-badge */}
            <div className="absolute -bottom-3 right-5 bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-xl border border-[var(--border)]">
              <span className="text-xs">{step.floatEmoji}</span>
              <p className="text-[10px] font-bold text-[var(--dark)] tracking-wider">
                {step.floatLabel}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dark CTA card */}
      <FeatureCard bg="dark" className="p-8 md:p-12 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white text-[clamp(20px,3vw,28px)] font-light leading-tight">
              {"A legtöbben hétfőn kezdik és szerdán hagyják abba."}
            </p>
            <p className="text-white/70 text-sm mt-1">
              {"Nálunk a szerdai ✅ a legnépszerűbb nap. Gyere, és értsd meg, miért."}
            </p>
          </div>
          <Button variant="white-on-dark" size="lg" href="#csoport" arrow>
            {"Csatlakozz most"}
          </Button>
        </div>
      </FeatureCard>
    </div>
  );
}
