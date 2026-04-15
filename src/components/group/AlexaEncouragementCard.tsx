"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface AlexaEncouragementCardProps {
  className?: string;
}

export function AlexaEncouragementCard({ className }: AlexaEncouragementCardProps) {
  return (
    <div className={cn("flex items-start gap-2.5", className)}>
      {/* Alexa avatar */}
      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[var(--pink-light)]">
        <Image
          src="/images/alexa.jpg"
          alt="Alexa"
          width={32}
          height={32}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <p className="text-[12px] font-bold text-[var(--dark)]">Lexfit</p>
          {/* Verified-style pink checkmark */}
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
            <circle cx="8" cy="8" r="8" fill="var(--pink-dark)" />
            <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="bg-[var(--pink-light)] rounded-2xl px-3 py-2 mt-1">
          <p className="text-[12px] text-[var(--dark)] font-medium">
            {"Fantasztikusak vagytok, így tovább! \u{1F4AA}"}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] text-[var(--mid)]">4h</span>
          <span className="text-[10px] text-[var(--pink-dark)] font-semibold">Love</span>
          <span className="text-[10px] text-[var(--mid)]">
            {"1 \u2764\uFE0F"}
          </span>
        </div>
      </div>
    </div>
  );
}
