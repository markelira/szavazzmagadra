"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("divide-y divide-[var(--border)]", className)}>
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
            aria-expanded={openIndex === index}
          >
            <span className="text-base font-semibold text-[var(--dark)] pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-[var(--light)] shrink-0 transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-sm text-[var(--mid)] leading-relaxed pb-5">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
