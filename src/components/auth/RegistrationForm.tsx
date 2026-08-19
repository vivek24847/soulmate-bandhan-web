"use client";

import { ArrowRight } from "lucide-react";
import { useActionState, useEffect } from "react";
import { register } from "../../app/actions/auth"
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const initialState: any = {
  success: false,
  message: "",
  error: {},
};


export function RegistrationForm() {
  const [state, formAction, isPending] = useActionState(
    register,
    initialState
  );

  const router = useRouter()

   useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
       router.push("/login")
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          className="h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 font-sans text-[16px] text-on-surface outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          className="h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 font-sans text-[16px] text-on-surface outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="phone"
          className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
        >
          Phone
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="98765 43210"
          className="h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 font-sans text-[16px] text-on-surface outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          className="h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 font-sans text-[16px] text-on-surface outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Submit */}
      <div className="mt-2 flex flex-col gap-4">
        <button
          type="submit"
          disabled={isPending}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 font-sans text-[16px] font-semibold text-on-primary transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Creating Account..." : "Create Account"}

          {!isPending && <ArrowRight className="h-5 w-5" />}
        </button>

        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-surface-variant bg-surface px-4 font-sans text-[16px] font-semibold text-on-surface transition-all hover:bg-surface-variant/20 focus:outline-none focus:ring-1 focus:ring-primary"
        >
          Sign up with Google
        </button>
      </div>
    </form>
  );
}