"use client";

import { motion } from "framer-motion";

const pollOptions = [
  { emoji: "\u{1F331}", label: "Gyengéd ébresztő", percentage: 3, isWinner: false },
  { emoji: "\u{1F525}", label: "Feszítsd meg!", percentage: 40, isWinner: false },
  { emoji: "\u26A1", label: "Izzítsd fel a heted!", percentage: 4, isWinner: false },
  { emoji: "\u{1F9D8}", label: "Nyújtsd ki magad!", percentage: 53, isWinner: true },
];

interface VotingPollProps {
  /** Show only first N options (for compact/mini variants) */
  maxOptions?: number;
  /** Hide the footer CTA line */
  compact?: boolean;
  className?: string;
}

export function VotingPoll({ maxOptions, compact = false, className }: VotingPollProps) {
  const options = maxOptions ? pollOptions.slice(0, maxOptions) : pollOptions;

  return (
    <div className={className}>
      <p className="text-[13px] font-semibold text-[var(--dark)] mb-3">
        {"\u{1F5F3} Szavazzatok! Mi legyen jövő hét kihívása?"}
      </p>
      <div className="space-y-2.5">
        {options.map((opt, i) => (
          <div key={i} className="relative">
            <div className="relative flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-[var(--border)] overflow-hidden">
              {/* Progress bar background */}
              <motion.div
                className={`absolute inset-y-0 left-0 rounded-xl ${
                  opt.isWinner
                    ? "bg-[var(--pink-light)]"
                    : "bg-[var(--cream)]"
                }`}
                initial={{ width: 0 }}
                whileInView={{ width: `${opt.percentage}%` }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 * i,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
              {/* Content */}
              <div className="relative flex items-center gap-2 flex-1 min-w-0">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                    opt.isWinner
                      ? "border-[var(--pink-dark)] bg-[var(--pink-dark)]"
                      : "border-[var(--border)]"
                  }`}
                >
                  {opt.isWinner && (
                    <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
                      <path
                        d="M4 8l3 3 5-5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-base">{opt.emoji}</span>
                <span
                  className={`text-[12px] truncate ${
                    opt.isWinner
                      ? "font-bold text-[var(--dark)]"
                      : "font-medium text-[var(--dark-mid)]"
                  }`}
                >
                  {opt.label}
                </span>
              </div>
              <span
                className={`relative text-[12px] flex-shrink-0 ${
                  opt.isWinner
                    ? "font-bold text-[var(--pink-dark)]"
                    : "font-medium text-[var(--mid)]"
                }`}
              >
                {opt.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
      {!compact && (
        <p className="text-[11px] text-[var(--pink-dark)] font-semibold mt-3 text-center">
          {"Pénteken te is szavazhatsz \u{2192}"}
        </p>
      )}
    </div>
  );
}
