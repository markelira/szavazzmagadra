import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1264px] px-5 md:px-6 lg:px-10", className)}>
      {children}
    </div>
  );
}
