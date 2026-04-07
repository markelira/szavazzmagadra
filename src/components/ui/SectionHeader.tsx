import { cn } from "@/lib/utils";
import { SectionEyebrow } from "./SectionEyebrow";
import { BrandPill } from "./BrandPill";

interface SectionHeaderProps {
  /** Tiny uppercase eyebrow shown above the headline */
  eyebrow?: string;
  /** Light part of the headline (rendered with font-light) */
  headlineLight: string;
  /** Bold part of the headline (rendered with font-bold) */
  headlineBold: string;
  /** Whether bold part appears on a new line */
  stack?: boolean;
  /** Subtitle paragraph */
  subtitle?: string;
  /** Optional badge pill (use BrandPill) */
  badge?: React.ReactNode;
  /** Alignment */
  align?: "center" | "left";
  /** Use light theme (for dark backgrounds) */
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  headlineLight,
  headlineBold,
  stack = false,
  subtitle,
  badge,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {badge && <div className="mb-5">{badge}</div>}
      {eyebrow && <SectionEyebrow light={light}>{eyebrow}</SectionEyebrow>}
      <h2
        className={cn(
          "text-[clamp(28px,4vw,46px)] font-light tracking-tight leading-[1.05]",
          light ? "text-white" : "text-[var(--dark)]"
        )}
      >
        {headlineLight}
        {stack ? <br /> : " "}
        <span className="font-bold">{headlineBold}</span>
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg mt-5 max-w-xl leading-relaxed",
            align === "center" ? "mx-auto" : "",
            light ? "text-white/70" : "text-[var(--mid)]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
