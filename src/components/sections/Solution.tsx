import { FeatureCard } from "@/components/ui/FeatureCard";
import { BrandPill } from "@/components/ui/BrandPill";
import { CheckList } from "@/components/ui/CheckList";
import { Button } from "@/components/ui/Button";

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l1.9 5.8L20 9.7l-5 3.6 1.8 6.2L12 16l-4.8 3.5L9 13.3 4 9.7l6.1-1.9L12 2z" />
    </svg>
  );
}

export function Solution() {
  return (
    <div>
      <FeatureCard bg="dark" className="p-8 md:p-14 lg:p-20 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <BrandPill
              variant="dark"
              icon={<SparkleIcon className="w-3.5 h-3.5 text-[var(--pink)]" />}
              className="mb-5"
            >
              {"A megoldás"}
            </BrandPill>
            <h2 className="text-white text-[clamp(28px,4vw,48px)] font-light leading-[1.2] tracking-tight">
              {"Mi lenne, ha nem"}
              <br />
              <span className="font-bold">{"egyedül csinálnád?"}</span>
            </h2>
            <p className="text-white/70 text-base md:text-[17px] leading-[1.75] max-w-md mt-7">
              {"A Szavazz Magadra egy közösség, ahol minden héten együtt döntötök, mit csináltok - és együtt csináljátok végig."}
            </p>

            <CheckList
              variant="dark"
              className="mt-7"
              items={[
                "Nem kell edző. Nem kell edzőterem.",
                "Csak egy csoport, aki megtart.",
                "Heti rutin, ami valóban beleilleszkedik.",
              ]}
            />

            <div className="mt-9">
              <Button variant="white-on-dark" href="#csoport" arrow>
                {"Mutasd a csoportot"}
              </Button>
            </div>
          </div>

          {/* Floating community card composition */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[280px] md:w-[320px] h-[320px] md:h-[360px]">
              {/* Center card: member count */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[220px] bg-white rounded-[20px] p-5 shadow-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--pink-dark)] flex items-center justify-center">
                    <UsersIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[var(--mid)]">
                      {"Közösség"}
                    </p>
                    <p className="text-base font-bold text-[var(--dark)] leading-tight">
                      {"800+ tag"}
                    </p>
                  </div>
                </div>
                {/* Avatar stack */}
                <div className="flex -space-x-2 mb-3">
                  {[
                    "var(--pink)",
                    "var(--pink-mid)",
                    "var(--pink-dark)",
                    "var(--tag-peach)",
                    "var(--tag-rose)",
                  ].map((c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-white"
                      style={{ background: c }}
                    />
                  ))}
                  <div className="w-7 h-7 rounded-full bg-[var(--cream)] border-2 border-white flex items-center justify-center text-[9px] font-bold text-[var(--mid)]">
                    +
                  </div>
                </div>
                <p className="text-[11px] text-[var(--mid)] leading-snug">
                  {"Együtt szavazunk minden pénteken"}
                </p>
              </div>

              {/* Floating: weekly vote pill (top-right) */}
              <div className="absolute top-2 right-0 bg-white rounded-full pl-2 pr-3.5 py-2 flex items-center gap-2 shadow-xl">
                <div className="w-6 h-6 rounded-full bg-[var(--pink)] flex items-center justify-center text-xs">
                  {"\u{1F5F3}"}
                </div>
                <p className="text-[11px] font-bold text-[var(--dark)]">
                  {"Pénteki szavazás"}
                </p>
              </div>

              {/* Floating: streak badge (bottom-left) */}
              <div className="absolute bottom-4 left-0 bg-white rounded-full px-3.5 py-2 flex items-center gap-2 shadow-xl">
                <span className="text-base">{"\u{1F525}"}</span>
                <p className="text-[11px] font-bold text-[var(--dark)]">{"7 napos sorozat"}</p>
              </div>

              {/* Floating: heart reaction (top-left) */}
              <div className="absolute top-8 left-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xl ring-4 ring-[var(--pink)]/20">
                <span className="text-base">{"❤"}</span>
              </div>

              {/* Floating: check (bottom-right) */}
              <div className="absolute bottom-8 right-2 bg-[var(--pink-dark)] rounded-full pl-2 pr-3 py-1.5 flex items-center gap-1.5 shadow-xl">
                <span className="text-white text-xs">{"✅"}</span>
                <p className="text-[10px] font-bold text-white tracking-wider">{"KÉSZ"}</p>
              </div>
            </div>
          </div>
        </div>
      </FeatureCard>
    </div>
  );
}
