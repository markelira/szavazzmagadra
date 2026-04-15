"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface GroupPostCardProps {
  name: string;
  /** Path to avatar image, or undefined to use initials */
  avatar?: string;
  timestamp?: string;
  reactions?: { hearts?: number; likes?: number };
  className?: string;
  children: React.ReactNode;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
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

export function GroupPostCard({
  name,
  avatar,
  timestamp = "2 napja",
  reactions,
  className,
  children,
}: GroupPostCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-[20px] p-5 shadow-[var(--shadow-card)] border border-[var(--border)]",
        className
      )}
    >
      {/* Header: avatar + name + timestamp */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-[var(--pink-dark)] flex items-center justify-center">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white text-[11px] font-bold">
              {getInitials(name)}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-bold text-[var(--dark)] leading-tight truncate">
            {name}
          </p>
          <p className="text-[10px] text-[var(--mid)]">{timestamp}</p>
        </div>
      </div>

      {/* Content slot */}
      <div>{children}</div>

      {/* Reactions */}
      {reactions && (reactions.hearts || reactions.likes) ? (
        <div className="flex items-center gap-3 mt-4 pt-3 border-t border-[var(--border)]">
          {reactions.hearts ? (
            <span className="flex items-center gap-1 text-[var(--pink-dark)]">
              <HeartIcon className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold">{reactions.hearts}</span>
            </span>
          ) : null}
          {reactions.likes ? (
            <span className="flex items-center gap-1 text-[#1877F2]">
              <ThumbsUpIcon className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold">{reactions.likes}</span>
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
