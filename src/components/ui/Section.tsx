"use client";

import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { useInView } from "react-intersection-observer";

type SectionBg =
  | "white"
  | "cream"
  | "cream-alt"
  | "pink-light"
  | "dark"
  | "pink-gradient";

interface SectionProps {
  id?: string;
  bg?: SectionBg;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
  noContainer?: boolean;
  animate?: boolean;
}

const bgClasses: Record<SectionBg, string> = {
  white: "bg-white",
  cream: "bg-[var(--cream)]",
  "cream-alt": "bg-[var(--cream-alt)]",
  "pink-light": "bg-[var(--pink-light)]",
  dark: "bg-[var(--dark)]",
  "pink-gradient":
    "bg-gradient-to-br from-[var(--pink)] via-[var(--pink-mid)] to-[var(--pink-deep)] noise-overlay",
};

export function Section({
  id,
  bg = "cream",
  className,
  children,
  noPadding = false,
  noContainer = false,
  animate = true,
}: SectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  const content = noContainer ? children : <Container>{children}</Container>;

  return (
    <section
      id={id}
      className={cn(
        bgClasses[bg],
        !noPadding && "py-16 md:py-24 lg:py-28",
        className
      )}
    >
      <div
        ref={animate ? ref : undefined}
        className={cn(
          "relative z-[2]",
          animate && "transition-all duration-700 ease-out",
          animate && !inView && "opacity-0 translate-y-5",
          animate && inView && "opacity-100 translate-y-0",
          !animate && "opacity-100"
        )}
      >
        {content}
      </div>
    </section>
  );
}
