import type { PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = PropsWithChildren<{
  className?: string;
}>;

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest",
        className,
      )}
    >
      {children}
    </span>
  );
}
