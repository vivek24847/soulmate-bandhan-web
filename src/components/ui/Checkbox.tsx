import type { InputHTMLAttributes, ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
};

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-5 text-on-surface-variant">
      <span className="relative mt-[2px] flex h-5 w-5 items-center justify-center">
        <input
          type="checkbox"
          className={cn(
            "peer h-5 w-5 appearance-none rounded-[4px] border-[1.5px] border-surface-variant bg-surface transition-colors checked:border-primary checked:bg-primary",
            className,
          )}
          {...props}
        />
        <Check className="pointer-events-none absolute h-3.5 w-3.5 text-on-primary opacity-0 transition-opacity peer-checked:opacity-100" />
      </span>
      <span>{label}</span>
    </label>
  );
}
