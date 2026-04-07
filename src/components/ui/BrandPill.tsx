import { cn } from "@/lib/utils";

interface BrandPillProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export function BrandPill({
  icon,
  children,
  className,
  variant = "light",
}: BrandPillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
        variant === "light"
          ? "bg-white border border-[var(--border)]"
          : "bg-white/10 border border-white/20 backdrop-blur-sm",
        className
      )}
    >
      {icon}
      <p
        className={cn(
          "text-[10px] font-bold tracking-[0.15em] uppercase",
          variant === "light" ? "text-[var(--mid)]" : "text-white/80"
        )}
      >
        {children}
      </p>
    </div>
  );
}
