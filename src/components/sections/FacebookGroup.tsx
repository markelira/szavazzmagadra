import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckList } from "@/components/ui/CheckList";
import { BrandPill } from "@/components/ui/BrandPill";
import { LINKS } from "@/lib/links";

/* ── Inline brand SVG icons ── */
function FacebookFIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.1 5.66 21.27 10.44 22v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.27 22 17.1 22 12.07z" />
    </svg>
  );
}

function ThumbsUpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2 21h4V9H2v12zm20-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L13.17 1 6.59 7.59C6.22 7.95 6 8.45 6 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function FacebookGroup() {
  return (
    <div>
      <SectionHeader
        eyebrow="A közösség"
        headlineLight="Egy Facebook csoport,"
        headlineBold="ami megtart."
        stack
        subtitle="Nem app. Nem előfizetés. Csak egy zárt Facebook csoport, ahol minden héten együtt szavazunk és együtt csináljuk."
      />

      <FeatureCard bg="pink-light" className="p-8 md:p-14 lg:p-20 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT: Floating cards composition */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-[300px] md:w-[380px] aspect-[2/1.05]">
              {/* Main group cover card */}
              <div className="absolute inset-0 rounded-[18px] overflow-hidden shadow-2xl bg-white border border-[var(--border)]">
                <div className="relative w-full aspect-[2/1.05]">
                  <Image
                    src="/images/group-cover.png"
                    alt="Szavazz Magadra Facebook csoport"
                    fill
                    sizes="(max-width: 768px) 300px, 380px"
                    className="object-cover"
                  />
                </div>
                <div className="bg-white px-4 py-3 flex items-center gap-2">
                  <div className="flex-1">
                    <p className="text-[12px] font-bold text-[var(--dark)] leading-tight">
                      Szavazz Magadra
                    </p>
                    <p className="text-[10px] text-[var(--mid)] mt-0.5">{"Zárt csoport"}</p>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1877F2] text-white text-[10px] font-bold">
                    <ThumbsUpIcon className="w-3 h-3" />
                    {"Tetszik"}
                  </div>
                </div>
              </div>

              {/* Floating: Facebook brand circle */}
              <div className="absolute -bottom-5 -left-6 md:-bottom-6 md:-left-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1877F2] flex items-center justify-center shadow-xl ring-4 ring-white">
                <FacebookFIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>

              {/* Floating: Joined notification */}
              <div className="absolute -top-7 left-0 md:-top-8 md:-left-2 bg-white rounded-full pl-2 pr-4 py-2 flex items-center gap-2 shadow-xl border border-[var(--border)]">
                <div className="w-6 h-6 rounded-full bg-[var(--pink-dark)] flex items-center justify-center">
                  <CheckIcon className="w-3.5 h-3.5 text-white" />
                </div>
                <p className="text-[11px] font-bold text-[var(--dark)]">
                  {"Csatlakoztál a csoporthoz"}
                </p>
              </div>

              {/* Floating: Heart reaction */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-xl ring-4 ring-[#E91E63]/10">
                <HeartIcon className="w-5 h-5 md:w-6 md:h-6 text-[#E91E63]" />
              </div>

              {/* Floating: Heti kihívás */}
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-6 bg-white rounded-full px-3.5 py-2 flex items-center gap-2 shadow-xl border border-[var(--border)]">
                <span className="text-base">{"✅"}</span>
                <p className="text-[11px] font-bold text-[var(--dark)]">
                  {"Heti kihívás"}
                </p>
              </div>

              {/* Floating: Thumbs up */}
              <div className="hidden md:flex absolute top-[40%] -right-9 w-9 h-9 rounded-full bg-white items-center justify-center shadow-lg">
                <ThumbsUpIcon className="w-4 h-4 text-[#1877F2]" />
              </div>
            </div>
          </div>

          {/* RIGHT: Copy + CTA */}
          <div className="order-1 lg:order-2">
            <BrandPill
              icon={<FacebookFIcon className="w-3.5 h-3.5 text-[#1877F2]" />}
              className="mb-5"
            >
              {"Facebook csoport"}
            </BrandPill>

            <h3 className="text-[clamp(24px,3vw,34px)] font-light text-[var(--dark)] leading-[1.15] tracking-tight">
              {"Ott vagyunk, ahol "}
              <span className="font-bold">{"úgyis vagy."}</span>
            </h3>

            <CheckList
              className="mt-7"
              items={[
                "Heti kihívások - minden pénteken új szavazás",
                "Együtt döntünk, együtt csináljuk végig",
                "Zárt, biztonságos, ítélkezésmentes",
                "Ingyenes - mindig az marad",
              ]}
            />

            <div className="mt-9">
              <Button variant="primary" size="lg" href={LINKS.facebookGroup} external arrow>
                <FacebookFIcon className="w-4 h-4" />
                {"Csatlakozz a csoporthoz"}
              </Button>
            </div>
          </div>
        </div>
      </FeatureCard>
    </div>
  );
}
