import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={inputId}
        className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 font-sans text-[16px] text-on-surface outline-none transition-all placeholder:text-[#a9a2a2] focus:border-primary focus:ring-1 focus:ring-primary",
          className,
        )}
        {...props}
      />
    </div>
  );
}
