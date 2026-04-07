import { Calculator } from "@/components/calculator/Calculator";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrandPill } from "@/components/ui/BrandPill";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l1.9 5.8L20 9.7l-5 3.6 1.8 6.2L12 16l-4.8 3.5L9 13.3 4 9.7l6.1-1.9L12 2z" />
    </svg>
  );
}

export function CalculatorSection() {
  return (
    <div>
      <SectionHeader
        badge={
          <BrandPill icon={<SparkleIcon className="w-3.5 h-3.5 text-[var(--pink-dark)]" />}>
            Személyre szabott
          </BrandPill>
        }
        eyebrow="A te terved"
        headlineLight="Számold ki a"
        headlineBold="személyes terved"
        subtitle="Add meg az adataidat, és megmutatjuk a napi kalória-, makró- és mozgáscélodat - másodpercek alatt."
      />

      <div className="relative">
        <FeatureCard bg="pink-light" className="p-6 md:p-12 lg:p-16 overflow-visible">
          <Calculator />

          {/* Floating: instant pill (top-right) */}
          <div className="hidden md:flex absolute -top-5 right-10 bg-white rounded-full px-4 py-2 items-center gap-2 shadow-xl border border-[var(--border)]">
            <div className="w-6 h-6 rounded-full bg-[var(--pink-dark)] flex items-center justify-center">
              <SparkleIcon className="w-3 h-3 text-white" />
            </div>
            <p className="text-[11px] font-bold text-[var(--dark)]">
              {"Azonnali eredmény"}
            </p>
          </div>

          {/* Floating: free pill (top-left) */}
          <div className="hidden md:flex absolute -top-5 left-10 bg-white rounded-full px-4 py-2 items-center gap-2 shadow-xl border border-[var(--border)]">
            <span className="text-sm">{"\u{1F381}"}</span>
            <p className="text-[11px] font-bold text-[var(--pink-dark)] tracking-wider">
              {"100% INGYENES"}
            </p>
          </div>
        </FeatureCard>
      </div>
    </div>
  );
}
