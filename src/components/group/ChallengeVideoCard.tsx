"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ChallengeVideoCardProps {
  /** Day label e.g. "Hétfő" */
  day: string;
  /** Day number in the challenge e.g. "1. nap" */
  dayNumber: string;
  /** Challenge title e.g. "Nyújtsd ki magad!" */
  title: string;
  /** Emoji for the challenge type */
  emoji: string;
  /** Path to the compressed video */
  videoSrc: string;
  /** Path to poster/thumbnail image */
  posterSrc?: string;
  /** Duration label e.g. "1:11" */
  duration: string;
  /** Like count from the FB post */
  likes: number;
  /** Comment count from the FB post */
  comments: number;
  className?: string;
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function ChallengeVideoCard({
  day,
  dayNumber,
  title,
  emoji,
  videoSrc,
  posterSrc,
  duration,
  likes,
  comments,
  className,
}: ChallengeVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Intersection observer for autoplay on scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && !hasInteracted) {
      video.play().catch(() => {});
    } else if (!isVisible) {
      video.pause();
    }
  }, [isVisible, hasInteracted]);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false;
      video.play().catch(() => {});
      setHasInteracted(true);
    } else {
      video.pause();
      setHasInteracted(false);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "bg-white rounded-[20px] shadow-[var(--shadow-card)] border border-[var(--border)] overflow-hidden",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Post header */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-3">
        <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[var(--pink-light)]">
          <Image
            src="/images/alexa.jpg"
            alt="Alexa"
            width={36}
            height={36}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="text-[13px] font-bold text-[var(--dark)] leading-tight">
              Lexfit
            </p>
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
              <circle cx="8" cy="8" r="8" fill="var(--pink-dark)" />
              <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-[10px] text-[var(--mid)]">{day} · Szavazz Magadra</p>
        </div>
        {/* Day badge */}
        <div className="bg-[var(--pink-light)] rounded-full px-2.5 py-1 flex-shrink-0">
          <p className="text-[10px] font-bold text-[var(--pink-dark)]">{dayNumber}</p>
        </div>
      </div>

      {/* Post caption */}
      <div className="px-4 pb-3">
        <p className="text-[13px] text-[var(--dark)] leading-snug">
          <span className="text-base mr-1">{emoji}</span>
          <span className="font-semibold">{title}</span>
          <span className="text-[var(--mid)]">{` · ${duration}`}</span>
        </p>
      </div>

      {/* Video container - portrait aspect ratio */}
      <div
        className="relative aspect-[9/16] max-h-[420px] bg-[var(--dark)] cursor-pointer group overflow-hidden"
        onClick={handleVideoClick}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />

        {/* Play overlay - shown when paused or not yet visible */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300",
            isVisible && !hasInteracted ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          )}
        >
          <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <PlayIcon className="w-6 h-6 text-[var(--dark)] ml-0.5" />
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1">
          <p className="text-[10px] font-semibold text-white">{duration}</p>
        </div>

        {/* Muted indicator */}
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        </div>
      </div>

      {/* Reactions footer */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[var(--pink-dark)]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-[11px] font-semibold">{likes}</span>
          </span>
          <span className="flex items-center gap-1.5 text-[var(--mid)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="text-[11px] font-semibold">{comments}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
