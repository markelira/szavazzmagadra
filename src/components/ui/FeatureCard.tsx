import { cn } from "@/lib/utils";

type FeatureCardBg = "pink" | "pink-light" | "dark" | "cream" | "white" | "gradient";

interface FeatureCardProps {
  bg?: FeatureCardBg;
  className?: string;
  children: React.ReactNode;
  dotPattern?: boolean;
  noisePattern?: boolean;
}

const bgClasses: Record<FeatureCardBg, string> = {
  pink: "bg-[var(--pink)]",
  "pink-light": "bg-[var(--pink-light)]",
  dark: "bg-[var(--dark)] text-white",
  cream: "bg-[var(--cream)]",
  white: "bg-white",
  gradient: "bg-gradient-to-br from-[var(--pink)] via-[var(--pink-mid)] to-[var(--pink-deep)]",
};

export function FeatureCard({
  bg = "pink",
  className,
  children,
  dotPattern = false,
  noisePattern = false,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[28px] md:rounded-[40px] overflow-hidden",
        bgClasses[bg],
        noisePattern && "noise-overlay",
        className
      )}
    >
      {dotPattern && (
        <div
          className={cn(
            "absolute inset-0 pointer-events-none",
            bg === "dark" || bg === "pink" || bg === "gradient"
              ? "dot-pattern"
              : "dot-pattern-dark"
          )}
        />
      )}
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
