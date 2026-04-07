import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva("p-6", {
  variants: {
    variant: {
      base: "bg-white rounded-[var(--radius-xl)] shadow-[var(--shadow-card)] border border-[var(--border)]",
      hover:
        "bg-white rounded-[var(--radius-xl)] shadow-[var(--shadow-card)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]",
      glass:
        "backdrop-blur-lg bg-white/12 border border-white/15 rounded-[var(--radius-xl)]",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ variant, className, children, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}
