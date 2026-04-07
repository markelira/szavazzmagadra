import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrandPill } from "@/components/ui/BrandPill";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function Guide() {
  return (
    <div>
      <SectionHeader
        align="left"
        badge={
          <BrandPill icon={<StarIcon className="w-3.5 h-3.5 text-[var(--pink-dark)]" />}>
            Az alapító
          </BrandPill>
        }
        eyebrow="A guide"
        headlineLight="Ismerd meg"
        headlineBold="Alexát."
      />

      <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-12 md:gap-16 items-center">
        {/* Trainer card with floating elements */}
        <div className="relative max-w-[340px] mx-auto md:mx-0">
          <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-[var(--pink)] to-[var(--pink-deep)] aspect-[3/4] shadow-2xl">
            <Image
              src="/images/alexa.jpg"
              alt="Alexa"
              fill
              sizes="(max-width: 768px) 340px, 340px"
              className="object-cover"
            />
            {/* Bottom gradient + name */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-6">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/70 mb-1">
                {"Alapító • Edző"}
              </p>
              <p className="text-white text-2xl font-bold">Alexa</p>
            </div>
            {/* Top eyebrow */}
            <div className="absolute top-5 left-5">
              <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-white/80">
                {"Lead Trainer"}
              </p>
            </div>
          </div>

          {/* Floating: Hungarian flag credentials (top-right) */}
          <div className="absolute -top-4 -right-4 md:-top-5 md:-right-6 bg-white rounded-full pl-2 pr-3.5 py-2 flex items-center gap-2 shadow-xl border border-[var(--border)]">
            <span className="text-base">{"\u{1F1ED}\u{1F1FA}"}</span>
            <p className="text-[10px] font-bold text-[var(--dark)] tracking-wider">
              {"Válogatott"}
            </p>
          </div>

          {/* Floating: 10 év badge (bottom-left) */}
          <div className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-6 bg-white rounded-full px-3.5 py-2 flex items-center gap-2 shadow-xl border border-[var(--border)]">
            <div className="w-6 h-6 rounded-full bg-[var(--pink-dark)] flex items-center justify-center">
              <StarIcon className="w-3 h-3 text-white" />
            </div>
            <p className="text-[10px] font-bold text-[var(--dark)] tracking-wider">
              {"10 év tapasztalat"}
            </p>
          </div>

          {/* Floating: heart (mid-right) */}
          <div className="hidden md:flex absolute top-[40%] -right-6 w-10 h-10 rounded-full bg-white items-center justify-center shadow-xl ring-4 ring-[var(--pink)]/20">
            <span className="text-base">{"❤"}</span>
          </div>
        </div>

        {/* Bio text */}
        <div>
          <p className="text-[var(--dark)] text-2xl md:text-[28px] font-light leading-[1.3] tracking-tight">
            {"„10 évig versenyszerűen ritmikus gimnasztikáztam, magyar válogatott csapattag voltam.\u201D"}
          </p>
          <div className="mt-7 space-y-4 text-[var(--mid)] text-[15px] md:text-base leading-[1.75]">
            <p>
              {"De az igazság? Amióta egyedül csinálom - én sem tartom magam."}
            </p>
            <p>
              {"Ezért hoztam létre a Szavazz Magadra közösséget. Nem azért, hogy megmondjam, mit csinálj. Hanem hogy NE EGYEDÜL csináld."}
            </p>
            <p className="font-semibold text-[var(--dark)]">
              {"Nekem is kell ez a közösség. Ugyanúgy, mint neked."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
