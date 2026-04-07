import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 cursor-pointer select-none",
  {
    variants: {
      variant: {
        // Dark pill on light backgrounds (MadFit's primary CTA style)
        primary:
          "bg-[var(--dark)] text-white hover:bg-[var(--dark-mid)] hover:-translate-y-0.5 active:translate-y-0",
        // Outline on light bg (secondary)
        secondary:
          "bg-transparent border-[1.5px] border-[var(--dark)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-white active:translate-y-0",
        // Pink-dark accent (calculator submit etc.)
        pink:
          "bg-[var(--pink-dark)] text-white shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-button-hover)] hover:-translate-y-0.5 active:translate-y-0",
        // White outline pill on dark/colored bg (MadFit hero CTA style)
        "primary-on-dark":
          "bg-transparent border-[1.5px] border-white text-white hover:bg-white hover:text-[var(--dark)] active:translate-y-0",
        // White filled on dark/colored bg
        "white-on-dark":
          "bg-white text-[var(--dark)] hover:bg-white/90 hover:-translate-y-0.5 active:translate-y-0",
        // Subtle ghost
        "secondary-on-dark":
          "bg-transparent border-[1.5px] border-white/30 text-white/80 hover:border-white/60 hover:text-white active:translate-y-0",
      },
      size: {
        default: "h-12 px-7 text-[12px] tracking-[0.05em] uppercase",
        sm: "h-10 px-5 text-[11px] tracking-[0.05em] uppercase",
        lg: "h-14 px-9 text-[13px] tracking-[0.05em] uppercase",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  arrow?: boolean;
  href?: string;
  external?: boolean;
}

export function Button({
  variant,
  size,
  arrow = false,
  href,
  external = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {arrow && <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {arrow && <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />}
    </button>
  );
}
