"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const floatUp = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function FacebookFIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.1 5.66 21.27 10.44 22v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.27 22 17.1 22 12.07z" />
    </svg>
  );
}

function VideoTeaser() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    // Try immediately, and also when data is loaded
    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    return () => video.removeEventListener("loadeddata", tryPlay);
  }, []);

  return (
    <div className="relative w-[100px] md:w-[120px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 flex-shrink-0">
      <video
        ref={videoRef}
        src="/videos/hetfoi-nyujtas.mp4"
        poster="/videos/hetfoi-nyujtas-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2.5">
        <p className="text-white text-[9px] font-bold uppercase tracking-wider">
          {"Hétfő · 1. nap"}
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center pt-20 md:pt-28 pb-12 md:pb-20">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[5%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute bottom-0 left-[10%] w-56 h-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-[40%] right-[25%] w-[300px] h-[300px] rounded-full bg-[var(--pink-deep)]/15 blur-[100px]" />
      </div>

      <div className="relative w-full grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT: Headline + CTA */}
        <motion.div
          className="text-center lg:text-left order-1 max-w-xl lg:max-w-none mx-auto lg:mx-0"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Live indicator */}
          <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-start mb-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <p className="text-white/80 text-[10px] font-semibold tracking-[0.18em] uppercase">
                {"Kihívás folyamatban · 12 aktív ma"}
              </p>
            </div>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-white leading-[0.95] tracking-[-0.03em]">
            <span className="block text-[clamp(44px,7vw,84px)] font-extralight">
              {"Egyedül nehéz."}
            </span>
            <span className="block text-[clamp(44px,7vw,84px)] font-extrabold mt-2 md:mt-3 bg-gradient-to-r from-white via-white to-[var(--pink-light)] bg-clip-text text-transparent">
              {"Együtt muszáj."}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/75 text-base md:text-lg leading-relaxed mt-7 max-w-md mx-auto lg:mx-0"
          >
            {"Személyre szabott mozgásterv 30 másodperc alatt. Egy közösség, ami végre megtart. Minden héten új kihívás — ti szavaztok, együtt csináljátok."}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 mt-9 justify-center lg:justify-start"
          >
            <Button variant="white-on-dark" size="lg" href="#kalkulator" arrow>
              {"Számold ki a terved"}
            </Button>
            <Button variant="primary-on-dark" size="lg" href={LINKS.facebookGroup} external arrow>
              <FacebookFIcon className="w-4 h-4" />
              {"Csatlakozz ingyen"}
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className="text-white/45 text-[11px] mt-5 tracking-wide">
            {"Zárt csoport • 0 Ft, mindig • 17 000+ ember"}
          </motion.p>
        </motion.div>

        {/* RIGHT: Visual composition */}
        <motion.div
          className="flex justify-center lg:justify-end order-2"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <div className="relative">
            <div className="flex items-end gap-3 md:gap-4">
              {/* Calculator mini preview */}
              <motion.div
                variants={floatUp}
                className="w-[180px] md:w-[220px] bg-white rounded-[22px] shadow-2xl overflow-hidden flex-shrink-0"
              >
                <div className="bg-gradient-to-br from-[var(--pink)] to-[var(--pink-deep)] p-5 text-white">
                  <p className="text-[8px] font-bold tracking-[0.15em] uppercase opacity-80">
                    {"Napi kalóriacélod"}
                  </p>
                  <p className="text-[40px] md:text-[48px] font-extrabold leading-none mt-1.5">
                    1727
                    <span className="text-[11px] font-normal opacity-75 ml-0.5">kcal</span>
                  </p>
                  <div className="mt-2 bg-white/15 border border-white/20 backdrop-blur-sm rounded-xl px-2.5 py-1.5 inline-flex items-center gap-1.5">
                    <p className="text-[8px] font-bold tracking-wider uppercase opacity-80">BMI</p>
                    <p className="text-sm font-extrabold leading-none">21.4</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1.5 p-3">
                  {[
                    { label: "Feh.", val: "140g", color: "#5BB5A6" },
                    { label: "Szén.", val: "172g", color: "#E8B44C" },
                    { label: "Zsír", val: "48g", color: "#E89AAE" },
                  ].map((m, i) => (
                    <div key={i} className="text-center py-1.5 rounded-lg border border-[var(--border)]">
                      <div className="w-1 h-1 rounded-full mx-auto mb-0.5" style={{ background: m.color }} />
                      <p className="text-[7px] font-bold uppercase tracking-wider text-[var(--mid)]">{m.label}</p>
                      <p className="text-[13px] font-extrabold text-[var(--dark)]">{m.val}</p>
                    </div>
                  ))}
                </div>
                <div className="px-3 pb-3">
                  <div className="bg-[var(--pink-light)] rounded-xl px-3 py-2 flex items-center justify-between">
                    <div>
                      <p className="text-[7px] font-bold uppercase tracking-wider text-[var(--pink-dark)]">Edzés</p>
                      <p className="text-[12px] font-extrabold text-[var(--dark)]">{"5×/hét"}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[7px] font-bold uppercase tracking-wider text-[var(--pink-dark)]">Lépés</p>
                      <p className="text-[12px] font-extrabold text-[var(--dark)]">8 000</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Video teaser */}
              <motion.div variants={floatUp}>
                <VideoTeaser />
              </motion.div>
            </div>

            {/* Floating: Alexa portrait */}
            <motion.div
              className="absolute -top-6 -left-6 md:-top-8 md:-left-10 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-[3px] border-white shadow-2xl z-20"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
            >
              <Image
                src="/images/alexa.jpg"
                alt="Alexa"
                fill
                priority
                sizes="96px"
                className="object-cover"
              />
            </motion.div>

            {/* Floating: member count pill */}
            <motion.div
              className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-6 bg-white rounded-full px-3.5 py-2 shadow-xl flex items-center gap-2 z-10"
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
            >
              <div className="flex -space-x-1.5">
                {["#D65C84", "#5BB5A6", "#E8B44C", "#8B7EC8"].map((c, i) => (
                  <div key={i} className="w-4.5 h-4.5 w-[18px] h-[18px] rounded-full border-[1.5px] border-white" style={{ background: c }} />
                ))}
              </div>
              <p className="text-[10px] font-bold text-[var(--dark)]">17 000+</p>
            </motion.div>

            {/* Floating: group activity pill */}
            <motion.div
              className="absolute -bottom-4 -right-3 md:-bottom-6 md:-right-5 bg-white rounded-full pl-2 pr-3.5 py-2 shadow-xl flex items-center gap-2 z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
            >
              <div className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center">
                <FacebookFIcon className="w-3 h-3 text-white" />
              </div>
              <p className="text-[10px] font-bold text-[var(--dark)]">{"12× ✅ ma"}</p>
            </motion.div>

            {/* Floating: encouragement bubble */}
            <motion.div
              className="hidden md:flex absolute top-[40%] -right-8 lg:-right-16 bg-white/95 backdrop-blur-sm rounded-2xl px-3.5 py-2.5 shadow-xl border border-white/50 max-w-[170px] z-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.0, duration: 0.7, ease: "easeOut" }}
            >
              <div>
                <p className="text-[9px] text-[var(--mid)] italic">{"bárcsak \u{1F61E}"}</p>
                <p className="text-[9px] font-semibold text-[var(--dark)] mt-0.5">
                  {"sikerülni fog! \u{1F4AA}"}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
