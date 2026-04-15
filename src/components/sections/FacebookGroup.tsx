"use client";

import { useRef, useState, useEffect } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrandPill } from "@/components/ui/BrandPill";
import { Button } from "@/components/ui/Button";
import { GroupPostCard } from "@/components/group/GroupPostCard";
import { VotingPoll } from "@/components/group/VotingPoll";
import { CheckInFeed } from "@/components/group/CheckInFeed";
import { EncouragementBubble } from "@/components/group/EncouragementBubble";
import { AlexaEncouragementCard } from "@/components/group/AlexaEncouragementCard";
import { ChallengeVideoCard } from "@/components/group/ChallengeVideoCard";
import { LINKS } from "@/lib/links";

const challengeVideos = [
  {
    day: "Hétfő",
    dayNumber: "1. nap",
    title: "Nyújtsd ki magad!",
    emoji: "\u{1F9D8}",
    videoSrc: "/videos/hetfoi-nyujtas.mp4",
    posterSrc: "/videos/hetfoi-nyujtas-poster.jpg",
    duration: "1:11",
    likes: 27,
    comments: 13,
  },
  {
    day: "Kedd",
    dayNumber: "2. nap",
    title: "Nyújtsd ki magad!",
    emoji: "\u{1F9D8}",
    videoSrc: "/videos/keddi-nyujtas.mp4",
    posterSrc: "/videos/keddi-nyujtas-poster.jpg",
    duration: "1:01",
    likes: 13,
    comments: 8,
  },
  {
    day: "Szerda",
    dayNumber: "3. nap",
    title: "Nyújtsd ki magad!",
    emoji: "\u{1F9D8}",
    videoSrc: "/videos/szerdai-nyujtas.mp4",
    posterSrc: "/videos/szerdai-nyujtas-poster.jpg",
    duration: "1:17",
    likes: 18,
    comments: 7,
  },
];

function FacebookFIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.1 5.66 21.27 10.44 22v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.27 22 17.1 22 12.07z" />
    </svg>
  );
}

export function FacebookGroup() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.firstElementChild?.clientWidth ?? 1;
      setActiveCard(Math.round(scrollLeft / (cardWidth + 20)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <SectionHeader
        badge={
          <BrandPill
            icon={<FacebookFIcon className="w-3.5 h-3.5 text-[#1877F2]" />}
          >
            Facebook csoport
          </BrandPill>
        }
        eyebrow="Nézz bele"
        headlineLight="Nem ígérünk."
        headlineBold="Mutatjuk."
        stack
        subtitle="Ez nem egy újabb csoport, ahol senki nem ír. Nézd meg, mi történik bent minden héten."
      />

      {/* Three-card grid: horizontal scroll on mobile, 3-col grid on desktop */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:-mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide"
      >
        {/* Card 1: Voting Poll */}
        <GroupPostCard
          name="Lexfit"
          avatar="/images/alexa.jpg"
          timestamp="Péntek 18:00"
          reactions={{ hearts: 24, likes: 8 }}
          className="min-w-[85vw] snap-center md:min-w-0"
        >
          <VotingPoll />
        </GroupPostCard>

        {/* Card 2: Check-in Feed */}
        <GroupPostCard
          name="Hétfő kihívás"
          timestamp="Ma"
          reactions={{ hearts: 15 }}
          className="min-w-[85vw] snap-center md:min-w-0"
        >
          <p className="text-[13px] font-semibold text-[var(--dark)] mb-3">
            {"\u{1F9D8} Nyújtsd ki magad! — 1. nap"}
          </p>
          <CheckInFeed maxItems={5} showSummary />
        </GroupPostCard>

        {/* Card 3: Encouragement */}
        <GroupPostCard
          name="Közösség"
          timestamp="2 napja"
          reactions={{ hearts: 4 }}
          className="min-w-[85vw] snap-center md:min-w-0"
        >
          <EncouragementBubble className="mb-4" />
          <div className="border-t border-[var(--border)] pt-3">
            <AlexaEncouragementCard />
          </div>
        </GroupPostCard>
      </div>

      {/* Mobile dot indicators */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              activeCard === i ? "bg-[var(--pink-dark)]" : "bg-[var(--border)]"
            }`}
          />
        ))}
      </div>

      {/* Challenge video previews */}
      <div className="mt-10 md:mt-14">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-[var(--pink-dark)] flex items-center justify-center">
            <span className="text-white text-sm">{"\u{1F3AC}"}</span>
          </div>
          <div>
            <p className="text-[13px] font-bold text-[var(--dark)]">
              {"Ez a heti kihívás"}
            </p>
            <p className="text-[10px] text-[var(--mid)]">
              {"🧘 Nyújtsd ki magad! — a tagok szavazták"}
            </p>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:-mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide">
          {challengeVideos.map((video, i) => (
            <ChallengeVideoCard
              key={i}
              {...video}
              className="min-w-[72vw] snap-center md:min-w-0"
            />
          ))}
        </div>
      </div>

      {/* Pain-point ↔ Benefit layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16 max-w-4xl mx-auto">
        {/* Left: Pain points */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--mid)] mb-5">
            {"Ismerős?"}
          </p>
          <div className="space-y-4">
            {[
              "\u201EHétfőn elkezdem, szerdára hagyom.\u201D",
              "\u201EEgyedül nem tudom magam rávenni.\u201D",
              "\u201ENem tudom, mit csináljak.\u201D",
            ].map((quote, i) => (
              <p
                key={i}
                className="text-[var(--mid)] text-[15px] italic leading-relaxed pl-4 border-l-2 border-[var(--border)]"
              >
                {quote}
              </p>
            ))}
          </div>
        </div>

        {/* Right: Benefits */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--pink-dark)] mb-5">
            {"Nálunk:"}
          </p>
          <div className="space-y-4">
            {[
              "Pénteken szavazol, hétfőn együtt kezdtek.",
              "12-en jeleznek ✅ minden nap. Te sem vagy egyedül.",
              "Alexa mutatja a gyakorlatokat. Napi 15 perc.",
            ].map((benefit, i) => (
              <p
                key={i}
                className="text-[var(--dark)] text-[15px] font-medium leading-relaxed pl-4 border-l-2 border-[var(--pink-dark)]"
              >
                {benefit}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Button variant="primary" size="lg" href={LINKS.facebookGroup} external arrow>
          <FacebookFIcon className="w-4 h-4" />
          {"Csatlakozz a csoporthoz"}
        </Button>
        <p className="text-[12px] text-[var(--mid)] mt-3">
          {"Ingyenes. Mindig az marad."}
        </p>
      </div>
    </div>
  );
}
