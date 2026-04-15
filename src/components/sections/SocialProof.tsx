"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrandPill } from "@/components/ui/BrandPill";
import { GroupPostCard } from "@/components/group/GroupPostCard";
import { CheckInFeed } from "@/components/group/CheckInFeed";
import { EncouragementBubble } from "@/components/group/EncouragementBubble";
import { AlexaEncouragementCard } from "@/components/group/AlexaEncouragementCard";
import { LINKS } from "@/lib/links";

function MessageIcon({ className }: { className?: string }) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function SocialProof() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SectionHeader
        badge={
          <BrandPill icon={<MessageIcon className="w-3.5 h-3.5 text-[var(--pink-dark)]" />}>
            A csoportból
          </BrandPill>
        }
        eyebrow="A csoportból"
        headlineLight="Nem mi mondjuk."
        headlineBold="Ők csinálják."
      />

      {/* Horizontal scrolling cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:-mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide"
      >
        {/* Card 1: Enthusiastic reaction */}
        <GroupPostCard
          name="Tamás László"
          timestamp="2 napja"
          reactions={{ hearts: 1 }}
          className="min-w-[85vw] snap-center md:min-w-0"
        >
          <p className="text-[14px] text-[var(--dark)] leading-relaxed">
            {"Szuper Torna \u{1F495}\u{1F495}\u{1F609}\u{1F929}\u{1F4AA}\u{1F389}\u{1F4AA}\u{1F4AA}\u{1F4AF}\u{1F4AF}\u{1F4AF}\u{1F4AF}\u{1F4AF}\u{1F4AF}\u{1F4AF}\u{1F4AF}"}
          </p>
        </GroupPostCard>

        {/* Card 2: Encouragement thread */}
        <GroupPostCard
          name="Közösség"
          timestamp="6 napja"
          reactions={{ hearts: 2, likes: 2 }}
          className="min-w-[85vw] snap-center md:min-w-0"
        >
          <EncouragementBubble />
        </GroupPostCard>

        {/* Card 3: Alexa + check-in summary */}
        <GroupPostCard
          name="Lexfit"
          avatar="/images/alexa.jpg"
          timestamp="4 órája"
          reactions={{ hearts: 8 }}
          className="min-w-[85vw] snap-center md:min-w-0"
        >
          <AlexaEncouragementCard className="mb-4" />
          <div className="border-t border-[var(--border)] pt-3 mt-3">
            <CheckInFeed maxItems={3} showSummary={false} />
          </div>
        </GroupPostCard>
      </div>

      {/* Bottom line */}
      <p className="text-center text-[var(--mid)] text-sm md:text-base mt-8">
        {"Ez történik bent. Minden héten. "}
        <span className="font-semibold text-[var(--dark)]">Ingyen.</span>
        <a
          href={LINKS.facebookGroup}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[var(--pink-dark)] font-semibold ml-2 hover:underline"
        >
          {"Nézd meg a csoportot \u{2192}"}
        </a>
      </p>
    </div>
  );
}
