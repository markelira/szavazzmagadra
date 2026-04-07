import { cn } from "@/lib/utils";
import type { Step } from "@/hooks/useCalculatorStore";

const steps = [
  { label: "Adatok" },
  { label: "Tempó" },
  { label: "Email" },
  { label: "Eredmény" },
];

interface ProgressIndicatorProps {
  currentStep: Step;
}

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  return (
    <div className="mb-8">
      {/* Dots */}
      <div className="flex justify-center gap-3">
        {steps.map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-colors duration-300",
              i + 1 <= currentStep
                ? "bg-[var(--pink-dark)]"
                : "bg-[var(--border)]"
            )}
          />
        ))}
      </div>
      {/* Labels */}
      <div className="flex justify-center gap-6 sm:gap-8 mt-2">
        {steps.map((step, i) => (
          <span
            key={i}
            className={cn(
              "text-[9px] sm:text-[10px] font-semibold uppercase tracking-[2px] transition-colors duration-300",
              i + 1 === currentStep
                ? "text-[var(--pink-dark)]"
                : "text-[var(--light)]"
            )}
          >
            {step.label}
          </span>
        ))}
      </div>
    </div>
  );
}
