"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EncouragementBubbleProps {
  className?: string;
  /** Compact mode for embedding in floating badges */
  compact?: boolean;
}

export function EncouragementBubble({ className, compact = false }: EncouragementBubbleProps) {
  return (
    <motion.div
      className={cn("space-y-2", className)}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Original message */}
      <div className="flex items-start gap-2">
        <div className="w-6 h-6 rounded-full bg-[#6B8ACB] flex-shrink-0 flex items-center justify-center">
          <span className="text-white text-[8px] font-bold">MG</span>
        </div>
        <div>
          <p className={cn(
            "font-semibold text-[var(--dark)]",
            compact ? "text-[10px]" : "text-[11px]"
          )}>
            Márk Görgei
          </p>
          <div className={cn(
            "bg-[var(--pink-light)] rounded-2xl mt-1",
            compact ? "px-2.5 py-1.5" : "px-3 py-2"
          )}>
            <p className={cn(
              "text-[var(--dark-mid)]",
              compact ? "text-[10px]" : "text-[12px]"
            )}>
              {"bárcsak \u{1F61E}"}
            </p>
          </div>
        </div>
      </div>

      {/* Reply */}
      <div className="flex items-start gap-2 pl-4">
        <div className="w-6 h-6 rounded-full bg-[#8B7EC8] flex-shrink-0 flex items-center justify-center">
          <span className="text-white text-[8px] font-bold">KA</span>
        </div>
        <div>
          <p className={cn(
            "font-semibold text-[var(--dark)]",
            compact ? "text-[10px]" : "text-[11px]"
          )}>
            Kecskeméti Ádám
          </p>
          <div className={cn(
            "bg-white border border-[var(--border)] rounded-2xl mt-1",
            compact ? "px-2.5 py-1.5" : "px-3 py-2"
          )}>
            <p className={cn(
              "text-[var(--dark)] font-medium",
              compact ? "text-[10px]" : "text-[12px]"
            )}>
              {"sikerülni fog, kitartáson múlik!! \u{1F4AA}"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
