"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/Input";

type PasswordInputProps = {
  label: string;
  id?: string;
  placeholder?: string;
};

export function PasswordInput({ label, id, placeholder }: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <Input
        label={label}
        id={id}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        className="pr-12"
      />
      <button
        type="button"
        aria-label="Toggle password visibility"
        onClick={() => setVisible((value) => !value)}
        className="absolute right-4 top-[38px] -translate-y-1/2 text-on-surface-variant transition-colors hover:text-primary"
      >
        {visible ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
      </button>
    </div>
  );
}
