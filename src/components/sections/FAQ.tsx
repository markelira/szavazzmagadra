"use client";

import { Accordion } from "@/components/ui/Accordion";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrandPill } from "@/components/ui/BrandPill";

function HelpIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

const faqItems = [
  {
    question: "Mennyire kell fittnek lennem, hogy csatlakozzak?",
    answer:
      "Semennyire. A kihívások mindig tartalmaznak könnyű opciót. Egy ✅ is elég. Napi 5 perc is szavazás magadra.",
  },
  {
    question: "Mi van, ha kimaradok egy hétből?",
    answer:
      "Semmi. Jövő héten újra szavazol magadra. A szabály: nincs ítélkezés.",
  },
  {
    question: "Kell hozzá eszköz?",
    answer:
      "Nem. Minden kihívás testsúllyal végezhető, otthon.",
  },
  {
    question: "Mennyibe kerül?",
    answer:
      "Nulla forint. Most is, és mindig. A csoport, a kihívások, a közösség — mind ingyenes. Később lesz részletesebb platform, de a csoport mindig ingyenes marad. Ez nem marketing. Ez ígéret.",
  },
  {
    question: "Ez egy fogyókúrás csoport?",
    answer:
      "Nem. Ez egy szokásépítő közösség. A cél nem a fogyás - hanem a kitartás. Ami utána jön, az a tiéd.",
  },
];

export function FAQ() {
  return (
    <div>
      <SectionHeader
        badge={
          <BrandPill icon={<HelpIcon className="w-3.5 h-3.5 text-[var(--pink-dark)]" />}>
            Kérdések
          </BrandPill>
        }
        eyebrow="GY.I.K."
        headlineLight="Amit"
        headlineBold="kérdezni szoktak."
      />
      <div className="relative max-w-3xl mx-auto">
        <FeatureCard bg="cream" className="p-6 md:p-12 overflow-visible">
          <Accordion items={faqItems} />

          {/* Floating "Q" mark */}
          <div className="hidden md:flex absolute -top-5 -right-5 w-12 h-12 rounded-full bg-[var(--pink-dark)] items-center justify-center shadow-xl text-white font-bold text-lg ring-4 ring-white">
            ?
          </div>
        </FeatureCard>
      </div>
    </div>
  );
}
