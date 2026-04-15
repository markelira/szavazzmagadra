"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const checkIns = [
  { name: "Mezei Sándor", comment: "De itt-ott, mint ha tört volna ez-az \u{1F60A}", color: "bg-[#5BB5A6]" },
  { name: "Tamás László", comment: "Szuper Torna \u{1F495}\u{1F495}\u{1F4AF}", color: "bg-[#E8B44C]" },
  { name: "Horváth András", color: "bg-[#6B8ACB]" },
  { name: "Bianka Lelkes", color: "bg-[#E89AAE]" },
  { name: "Kecskeméti Ádám", color: "bg-[#8B7EC8]" },
  { name: "Alexa Mészáros", color: "bg-[var(--pink-dark)]" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

interface CheckInFeedProps {
  /** Max number of items to show */
  maxItems?: number;
  /** Show the summary count line */
  showSummary?: boolean;
  className?: string;
}

export function CheckInFeed({
  maxItems = 6,
  showSummary = true,
  className,
}: CheckInFeedProps) {
  const items = checkIns.slice(0, maxItems);

  return (
    <div className={className}>
      <div className="space-y-2">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2.5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
          >
            {/* Avatar */}
            <div
              className={cn(
                "w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center",
                item.color
              )}
            >
              <span className="text-white text-[9px] font-bold">
                {getInitials(item.name)}
              </span>
            </div>

            {/* Name + check */}
            <div className="flex-1 min-w-0">
              <span className="text-[12px] font-semibold text-[var(--dark)] truncate">
                {item.name}
              </span>
            </div>

            {/* Checkmark */}
            <motion.span
              className="text-base flex-shrink-0"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 12,
                delay: 0.15 * i + 0.2,
              }}
            >
              {"\u2705"}
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* Optional comment preview */}
      {items[0]?.comment && (
        <div className="mt-2.5 pl-9">
          <p className="text-[11px] text-[var(--mid)] italic leading-snug">
            {`"${items[0].comment}"`}
          </p>
        </div>
      )}

      {showSummary && (
        <p className="text-[12px] font-bold text-[var(--pink-dark)] mt-3 text-center">
          {"Ma 12-en jeleztek \u2705"}
        </p>
      )}
    </div>
  );
}
