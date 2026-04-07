import { cn } from "@/lib/utils";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

interface CheckListProps {
  items: string[];
  className?: string;
  variant?: "light" | "dark";
}

export function CheckList({ items, className, variant = "light" }: CheckListProps) {
  return (
    <ul className={cn("space-y-3.5", className)}>
      {items.map((item, i) => (
        <li
          key={i}
          className={cn(
            "flex items-start gap-3 text-[15px]",
            variant === "light" ? "text-[var(--dark)]" : "text-white"
          )}
        >
          <div
            className={cn(
              "shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center",
              variant === "light" ? "bg-[var(--pink-dark)]" : "bg-white"
            )}
          >
            <CheckIcon
              className={cn(
                "w-3 h-3",
                variant === "light" ? "text-white" : "text-[var(--dark)]"
              )}
            />
          </div>
          <span className="leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  );
}
