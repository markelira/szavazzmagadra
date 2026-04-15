"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { LINKS } from "@/lib/links";
import { ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   Az alapító — Alexa story section
   Editorial / longform layout, 6 chapters, animated spine.
   ───────────────────────────────────────────────────────── */

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};

function useStoryVariant(): Variants {
  const reduce = useReducedMotion();
  return reduce ? fadeOnly : fadeUp;
}

const viewportOnce = { once: true, margin: "-12% 0px -12% 0px" } as const;

/* ─────────────────────────────────────────────────────────
   PhotoFrame — framed tilted photo with caption underneath
   ───────────────────────────────────────────────────────── */
function PhotoFrame({
  src,
  alt,
  tilt = -1.2,
  width = 360,
  tone = "light",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  tilt?: number;
  width?: number;
  tone?: "light" | "dark";
  imgClassName?: string;
}) {
  const matBg = tone === "dark" ? "bg-[#1f1015]" : "bg-white";
  const ringColor =
    tone === "dark" ? "ring-white/10" : "ring-[var(--border)]";
  return (
    <div
      className={`relative inline-block ${matBg} ${ringColor} ring-1 p-3 shadow-[0_40px_90px_-45px_rgba(184,62,104,0.55)]`}
      style={{ transform: `rotate(${tilt}deg)`, maxWidth: width }}
    >
      <div
        className="relative aspect-[4/5] overflow-hidden"
        style={{ width: width - 24 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`(max-width: 720px) 90vw, ${width}px`}
          className={`object-cover ${imgClassName}`}
        />
      </div>
    </div>
  );
}

function ChapterEyebrow({
  num,
  label,
  tone = "light",
}: {
  num: string;
  label: string;
  tone?: "light" | "dark";
}) {
  const color =
    tone === "dark" ? "text-white/60" : "text-[var(--pink-dark)]";
  const dot = tone === "dark" ? "bg-white/40" : "bg-[var(--pink-dark)]";
  return (
    <div className={`inline-flex items-center gap-3 ${color}`}>
      <span className="text-[12px] font-bold tracking-[0.32em]">
        {num}
      </span>
      <span className={`h-px w-8 ${dot}`} />
      <span className="text-[12px] font-semibold tracking-[0.28em] uppercase">
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Section header (intro)
   ───────────────────────────────────────────────────────── */
function StoryIntro() {
  return (
    <div className="mx-auto w-full max-w-[780px] px-5 md:px-6 pt-20 md:pt-28 pb-12 md:pb-20 text-center">
      <motion.div
        variants={useStoryVariant()}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--pink-light)] pl-2 pr-3.5 py-1.5">
          <span className="flex w-5 h-5 rounded-full bg-[var(--pink-dark)] items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </span>
          <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--pink-deep)]">
            Az alapító
          </span>
        </div>

        <p className="mt-8 text-[11px] tracking-[0.28em] uppercase font-semibold text-[var(--mid)]">
          Alexa története
        </p>
        <h2 className="mt-4 text-[var(--dark)] tracking-tight leading-[1.15]">
          <span className="block font-light italic text-[clamp(44px,8vw,96px)]">
            Tíz év.
          </span>
          <span className="block font-extrabold text-[clamp(44px,8vw,96px)]">
            Egy döntés.
          </span>
          <span className="block font-light italic text-[clamp(44px,8vw,96px)] text-[var(--pink-deep)]">
            Egy csapat.
          </span>
        </h2>
        <p className="mt-8 text-[var(--mid)] text-base md:text-lg leading-[1.75] max-w-[600px] mx-auto">
          Ahhoz, hogy megértsd, miért hoztam létre a Szavazz Magadra
          közösséget, vissza kell mennem oda, ahol minden elkezdődött — és
          oda, ahol minden összeomlott.
        </p>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Animated timeline spine (desktop only)
   ───────────────────────────────────────────────────────── */
function TimelineSpine({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      aria-hidden
      className="hidden lg:block pointer-events-none absolute left-[calc(50%-420px)] top-0 bottom-0 w-px"
    >
      <div className="absolute inset-0 bg-[var(--border)]" />
      <motion.div
        style={{ height: reduceMotion ? "100%" : height }}
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[var(--pink)] via-[var(--pink-dark)] to-[var(--pink-deep)]"
      />
      {/* dots */}
      {[8, 26, 44, 60, 76, 92].map((top, i) => (
        <div
          key={i}
          style={{ top: `${top}%` }}
          className="absolute -left-[5px] w-[11px] h-[11px] rounded-full bg-white border-2 border-[var(--pink-dark)] shadow-[0_0_0_4px_rgba(244,167,185,0.18)]"
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Ch.1 — A háttér
   ───────────────────────────────────────────────────────── */
function ChapterBackground() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative z-[1] mx-auto w-full max-w-[720px] px-5 md:px-6 py-20 md:py-28">
        <motion.div
          variants={useStoryVariant()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="flex justify-center">
            <PhotoFrame
              src="/images/alexa.jpg"
              alt="Alexa — ritmikus gimnasztika"
              tilt={-1.6}
              width={360}
            />
          </div>

          <div className="mt-12 text-center">
            <ChapterEyebrow num="01" label="A háttér" />
          </div>

          <h3 className="mt-6 text-center text-[var(--dark)] font-light italic tracking-tight leading-[1.18] text-[clamp(34px,5.5vw,56px)]">
            Hobbinak indult.
            <br />
            <span className="font-extrabold not-italic">
              Az életem lett.
            </span>
          </h3>

          <div className="mt-10 space-y-6 text-center text-[var(--dark-mid)] text-[18px] md:text-[19px] leading-[1.8] max-w-[520px] mx-auto">
            <p>
              9 évesen kezdtem a ritmikus gimnasztikát. Aminek hobbinak
              kellett volna lennie, az hamar az életem lett.
            </p>
            <p>
              10 év versenyszerű sport. Magyar válogatott csapattag.
              Junior Európa-bajnokság döntő, 6. hely. Országos
              bajnokságok, nemzetközi kupák.
            </p>
          </div>

          <p className="mt-12 text-center text-[var(--dark)] font-bold text-2xl md:text-3xl leading-[1.4]">
            De nem az érmek tartottak benne.
            <br />
            <span className="text-[var(--pink-deep)] italic font-light">
              Hanem a csapat.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Ch.2 — A fordulat (dark band)
   ───────────────────────────────────────────────────────── */
function ChapterTurn() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const grayscale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.65]);
  const filter = useTransform(
    [grayscale, brightness] as const,
    ([g, b]: number[]) => `grayscale(${g}) brightness(${b}) contrast(0.92)`
  );

  return (
    <section
      ref={ref}
      className="relative bg-[#15080d] text-white overflow-hidden"
    >
      <div className="absolute inset-y-0 left-0 right-0 h-px top-0 bg-[var(--pink)]/25" />
      <div className="absolute inset-y-0 left-0 right-0 h-px bottom-0 top-auto bg-[var(--pink)]/25" />
      {/* subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(244,167,185,0.6), transparent 50%), radial-gradient(circle at 70% 80%, rgba(184,62,104,0.5), transparent 55%)",
        }}
      />
      <div className="relative z-[1] mx-auto w-full max-w-[720px] px-5 md:px-6 py-24 md:py-32">
        <motion.div
          variants={useStoryVariant()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div
            className="flex justify-center"
            style={reduce ? undefined : { filter }}
          >
            <PhotoFrame
              src="/images/IMG_1486_Original.JPG"
              alt="A fordulat"
              tilt={1.8}
              width={420}
              tone="dark"
              imgClassName={reduce ? "grayscale brightness-[0.65]" : ""}
            />
          </motion.div>

          <div className="mt-12 text-center">
            <ChapterEyebrow num="02" label="A fordulat" tone="dark" />
          </div>

          <h3 className="mt-6 text-center font-light italic tracking-tight leading-[1.18] text-[clamp(34px,5.5vw,58px)]">
            2023 januárjában
            <br />
            <span className="font-extrabold not-italic">
              abbahagytam.
            </span>
          </h3>
          <p className="mt-5 text-center text-white/60 text-base md:text-lg italic">
            Az eddigi legnehezebb döntésem volt.
          </p>

          <div className="mt-10 space-y-6 text-center text-white/80 text-[18px] md:text-[19px] leading-[1.8] max-w-[520px] mx-auto">
            <p>
              A legjobb barátnőm már előttem abbahagyta. A csapat
              megváltozott. A motiváció, amit 10 évig éreztem, eltűnt.
              Visszamentem a karácsony szünet után egy hétre — de már
              nem éreztem azt, amit azelőtt.
            </p>
          </div>

          <p className="mt-14 text-center text-white font-extrabold tracking-tight leading-[1.15] text-[clamp(40px,7vw,72px)]">
            Utána elvesztem.
            <br />
            <span className="text-[var(--pink)] italic font-light">
              Szó szerint.
            </span>
          </p>

          <div className="mt-12 space-y-6 text-center text-white/75 text-[18px] md:text-[19px] leading-[1.8] max-w-[520px] mx-auto">
            <p>
              Egy teljes év kellett, hogy összeszedjem magam. A napi
              rutinjaim megszűntek. Meghíztam. Másfél évig nem álltam
              mérlegre, mert nem mertem. Elkezdtem bulizni, nem jártam
              iskolába rendesen — az életem teljesen más irányba
              fordult.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Ch.3 — A felismerés (giant pull quote)
   ───────────────────────────────────────────────────────── */
function ChapterRealization() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative z-[1] mx-auto w-full max-w-[720px] px-5 md:px-6 py-28 md:py-40 text-center">
        <motion.div
          variants={useStoryVariant()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-block">
            <ChapterEyebrow num="03" label="A felismerés" />
          </div>

          <p className="mt-10 text-[var(--mid)] text-base md:text-lg italic max-w-[560px] mx-auto">
            Aztán rájöttem valamire, amit a csapatban mindig is tudtam — de
            egyedül elfelejtettem:
          </p>

          <div className="relative mt-10">
            <span
              aria-hidden
              className="absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 text-[var(--pink)] font-light leading-none text-[180px] md:text-[260px] select-none"
              style={{ fontFamily: "Georgia, serif" }}
            >
              „
            </span>
            <h3 className="relative font-extrabold tracking-tight leading-[1.1] text-[var(--dark)] text-[clamp(48px,9vw,120px)]">
              Egyedül
              <br />
              <span className="italic font-light">nem megy.</span>
            </h3>
          </div>

          <div className="mt-16 space-y-6 text-[var(--dark-mid)] text-[18px] md:text-[19px] leading-[1.8] max-w-[520px] mx-auto text-center">
            <p>
              A csapatban, ha volt bajom, volt kinek elmondanom. Nem ők
              oldották meg — de ott voltak. Motiváltak, segítettek,
              megtartottak. Nem azért, mert tökéletesek voltak — hanem
              mert egy csapat voltak.
            </p>
            <p>
              Amikor ez eltűnt az életemből, mindent elvesztettem vele. A
              rutint, a célt, a társakat.
            </p>
            <p className="text-[var(--dark)] font-semibold">
              Kellett egy év, mire ezt megértettem. De amint megértettem —
              tudtam, mit kell csinálnom.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Ch.4 — A miért
   ───────────────────────────────────────────────────────── */
function ChapterWhy() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative z-[1] mx-auto w-full max-w-[720px] px-5 md:px-6 py-24 md:py-32">
        <motion.div
          variants={useStoryVariant()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="relative flex justify-center pb-4">
            <PhotoFrame
              src="/images/649905470_122102927253230342_3932151817162192502_n.jpg"
              alt="A közösség"
              tilt={1.4}
              width={400}
            />
            {/* small overlapping snapshot — individual + community */}
            <div
              aria-hidden
              className="absolute -left-2 md:left-4 bottom-12 md:bottom-16 hidden sm:block"
            >
              <div
                className="relative bg-white ring-1 ring-[var(--border)] p-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]"
                style={{ transform: "rotate(-5deg)" }}
              >
                <div className="relative aspect-[4/5] w-[140px] overflow-hidden">
                  <Image
                    src="/images/alexa.jpg"
                    alt=""
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <ChapterEyebrow num="04" label="A miért" />
          </div>

          <h3 className="mt-6 text-center text-[var(--dark)] font-light italic tracking-tight leading-[1.18] text-[clamp(34px,5.5vw,56px)]">
            Nem azért kezdtem videókat készíteni,
            <br />
            <span className="font-extrabold not-italic text-[var(--pink-deep)]">
              hogy edző legyek.
            </span>
          </h3>

          <div className="mt-10 space-y-6 text-center text-[var(--dark-mid)] text-[18px] md:text-[19px] leading-[1.8] max-w-[520px] mx-auto">
            <p>
              Hanem mert az elmúlt hónapban rengetegen írták:{" "}
              <em className="text-[var(--dark)] not-italic font-semibold">
                „Van ilyen problémám, tudsz segíteni?"
              </em>{" "}
              — és rájöttem, hogy nem csak én küzdök ezzel.
            </p>
            <p>
              Sokan vannak, akik egyedül próbálnak edzeni, egyedül
              próbálnak kitartani — és egyedül adják fel.{" "}
              <span className="text-[var(--pink-deep)] font-bold">
                Pont úgy, ahogy én.
              </span>
            </p>
            <p>
              Ez a csoport azért létezik, mert tudom, milyen egyedül:
              semmi nem megy. És tudom, milyen közösségben: minden más.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Ch.5 — Az ígéret
   ───────────────────────────────────────────────────────── */
function ChapterPromise() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative z-[1] mx-auto w-full max-w-[720px] px-5 md:px-6 py-24 md:py-32">
        <motion.div
          variants={useStoryVariant()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="text-center">
            <ChapterEyebrow num="05" label="Az ígéret" />
          </div>

          <div className="mt-10 space-y-6 text-center text-[var(--dark)] font-extrabold tracking-tight leading-[1.2] text-[clamp(28px,4vw,44px)]">
            <p>
              Nem fogom megmondani,{" "}
              <span className="font-light italic">mit csinálj.</span>
            </p>
            <p>
              Nem fogom megítélni,{" "}
              <span className="font-light italic">ha kimaradsz.</span>
            </p>
            <p>
              Nem fogom eljátszani,{" "}
              <span className="font-light italic">
                hogy tökéletes vagyok.
              </span>
            </p>
          </div>

          <div className="mt-12 space-y-6 text-center text-[var(--dark-mid)] text-[18px] md:text-[19px] leading-[1.8] max-w-[520px] mx-auto">
            <p>
              Nekem is vannak napok, amikor nem akarok mozdulni. Nekem is
              van önbizalomhiányom — mások mondják, hogy jó vagyok, de
              néha nem tudom elhinni.
            </p>
            <p className="text-[var(--dark)] font-semibold">
              De azt tudom, hogy együtt más. A csapat tartott meg 10
              évig. Most itt a lehetőség, hogy NEKED is legyen egy
              csapatod.
            </p>
          </div>

          <p className="mt-16 text-center text-[var(--dark)] font-extrabold tracking-tight leading-[1.15] text-[clamp(38px,7vw,72px)]">
            Egyedül nehéz.
            <br />
            <span className="text-[var(--pink-deep)] italic font-light">
              Együtt muszáj.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Ch.6 — CTA
   ───────────────────────────────────────────────────────── */
function ChapterCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--pink)] via-[var(--pink-dark)] to-[var(--pink-deep)]">
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--pink-deep)]/40 via-transparent to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          backgroundImage:
            "conic-gradient(from 180deg at 50% 120%, rgba(253,232,238,0.6) 0deg, transparent 90deg, transparent 270deg, rgba(253,232,238,0.4) 360deg)",
        }}
      />

      <div className="relative z-[1] mx-auto w-full max-w-[720px] px-5 md:px-6 py-24 md:py-32 text-center">
        <motion.div
          variants={useStoryVariant()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <ChapterEyebrow num="06" label="A meghívás" tone="dark" />
          <h3 className="mt-6 text-white font-extrabold tracking-tight leading-[1.15] text-[clamp(40px,7vw,84px)]">
            Csatlakozz,
            <br />
            <span className="font-light italic">és csináljuk</span>
            <br />
            együtt.
          </h3>
          <p className="mt-8 text-white/85 text-base md:text-lg max-w-[520px] mx-auto leading-[1.7]">
            Zárt csoport. Ingyenes. 17 000-en már szavaztak magukra. Egy
            döntés választ el attól, hogy te is.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href={LINKS.facebookGroup}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Csatlakozz a Szavazz Magadra Facebook csoporthoz"
              className="group inline-flex items-center gap-3 rounded-full bg-white text-[var(--pink-deep)] h-14 px-9 text-[13px] font-bold tracking-[0.06em] uppercase shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--pink-deep)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.1 5.66 21.27 10.44 22v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.27 22 17.1 22 12.07z" />
              </svg>
              Csatlakozz a csapathoz
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
          </div>

          <p className="mt-6 text-white/60 text-xs">
            — Alexa
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Orchestrator
   ───────────────────────────────────────────────────────── */
export function Guide() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="relative">
      <StoryIntro />
      <ChapterBackground />
      <ChapterTurn />
      <ChapterRealization />
      <ChapterWhy />
      <ChapterPromise />
      <ChapterCTA />
    </div>
  );
}
