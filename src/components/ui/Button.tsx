import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "social";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
  }
>;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary shadow-sm hover:bg-primary-container hover:shadow-md",
  secondary:
    "bg-surface-lowest text-on-surface shadow-[0_0_0_1px_theme(colors.outline)] hover:bg-surface-low",
  social:
    "bg-surface-lowest text-on-surface shadow-[0_0_0_1px_theme(colors.outline-variant)] hover:bg-surface-low",
};

export function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-14 w-full items-center justify-center gap-3 rounded-lg px-5 font-semibold uppercase tracking-wider transition-all duration-200 active:scale-[0.98]",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
