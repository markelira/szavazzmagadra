import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionEyebrow({ children, className, light = false }: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        "text-[10px] font-semibold uppercase tracking-[0.2em] mb-4",
        light ? "text-white/60" : "text-[var(--mid)]",
        className
      )}
    >
      {children}
    </p>
  );
}
