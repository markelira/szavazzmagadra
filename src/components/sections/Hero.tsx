import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center pt-20 md:pt-28 pb-12 md:pb-20">
      {/* Decorative blur orbs */}
      <div className="absolute top-20 right-[5%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-white/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-56 h-56 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT: Headline + CTA */}
        <div className="text-center lg:text-left order-1 max-w-xl lg:max-w-none mx-auto lg:mx-0">
          <p className="text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase mb-5">
            Szavazz Magadra
          </p>
          <h1 className="text-white leading-[1.05] tracking-tight">
            <span className="block text-[clamp(44px,7vw,84px)] font-light">
              {"Egyedül nehéz."}
            </span>
            <span className="block text-[clamp(44px,7vw,84px)] font-bold mt-2 md:mt-3">
              {"Együtt muszáj."}
            </span>
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mt-7 max-w-md mx-auto lg:mx-0">
            {"Személyre szabott mozgásterv és egy közösség, ami végre megtart."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-9 justify-center lg:justify-start">
            <Button variant="white-on-dark" size="lg" href="#kalkulator" arrow>
              {"Számold ki a terved"}
            </Button>
            <Button variant="primary-on-dark" size="lg" href="#csoport" arrow>
              {"Facebook csoport"}
            </Button>
          </div>
          {/* Trust micro-line */}
          <p className="text-white/55 text-[11px] mt-5 tracking-wide">
            {"Zárt csoport • Ingyenes • 800+ tag"}
          </p>
        </div>

        {/* RIGHT: Calculator preview mockup */}
        <div className="flex justify-center lg:justify-end order-2">
          <div className="relative">
            {/* Floating Alexa portrait */}
            <div className="absolute -top-6 -left-6 md:-top-8 md:-left-10 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-[3px] border-white shadow-2xl z-20">
              <Image
                src="/images/alexa.jpg"
                alt="Alexa"
                fill
                priority
                sizes="128px"
                className="object-cover"
              />
            </div>

            {/* Mock results card */}
            <div className="relative w-[280px] md:w-[340px] bg-white rounded-[28px] shadow-2xl overflow-hidden">
              {/* Hero kcal block */}
              <div className="relative bg-gradient-to-br from-[var(--pink)] to-[var(--pink-deep)] p-7 text-white">
                <p className="text-[9px] font-bold tracking-[0.18em] uppercase opacity-85">
                  {"Napi kalóriacélod"}
                </p>
                <p className="text-[60px] md:text-[68px] font-extrabold leading-none mt-2">
                  1727
                  <span className="text-base font-normal opacity-80 ml-1">kcal</span>
                </p>
                <div className="absolute top-5 right-5 bg-white/20 border border-white/30 backdrop-blur-sm rounded-2xl px-3 py-2 text-center">
                  <p className="text-[8px] font-bold tracking-[0.12em] uppercase opacity-85">BMI</p>
                  <p className="text-lg font-extrabold leading-none mt-0.5">21.4</p>
                </div>
              </div>

              {/* Macros row */}
              <div className="grid grid-cols-3 gap-2 p-4 bg-white">
                {[
                  { label: "Feh.", val: "140g", color: "#5BB5A6" },
                  { label: "Szén.", val: "172g", color: "#E8B44C" },
                  { label: "Zsír", val: "48g", color: "#E89AAE" },
                ].map((m, i) => (
                  <div key={i} className="text-center py-2 rounded-xl border border-[var(--border)]">
                    <div className="w-1.5 h-1.5 rounded-full mx-auto mb-1" style={{ background: m.color }} />
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[var(--mid)]">
                      {m.label}
                    </p>
                    <p className="text-base font-extrabold text-[var(--dark)] mt-0.5">{m.val}</p>
                  </div>
                ))}
              </div>

              {/* Exercise pill */}
              <div className="px-4 pb-4">
                <div className="bg-[var(--pink-light)] rounded-2xl px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-[var(--pink-dark)]">
                      Edzés
                    </p>
                    <p className="text-sm font-extrabold text-[var(--dark)]">{"5 × / hét"}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] font-bold uppercase tracking-wider text-[var(--pink-dark)]">
                      Lépés
                    </p>
                    <p className="text-sm font-extrabold text-[var(--dark)]">8 000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white/90 text-[10px] font-bold tracking-wider uppercase text-center leading-tight">
              {"Heti kihívás"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
