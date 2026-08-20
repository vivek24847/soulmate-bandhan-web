"use client";

import { ArrowRight } from "lucide-react";
import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { login } from "@/app/actions/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const initialState: any = {
  success: false,
  message: "",
  error: {},
};

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    login,
    initialState
  );

  const router = useRouter()

  useEffect(() => {
    if (!state.message) return;

    console.log("whatlogin" , state)

    if (state.success) {
      toast.success(state.message);

      if (state.data?.accessToken) {
        localStorage.setItem("authToken", state.data.accessToken);
      }

      setTimeout(() => {
        if(state.data.user.profileCompleted){
          router.push("/matches")
        } else {
                  router.push("/setup");

        }
      }, 1000);
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="identifier"
          className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
        >
          Email 
        </label>

        <input
          id="identifier"
          name="email"
          type="email"
          placeholder="Enter email"
          className="h-12 w-full rounded-lg border border-surface-variant bg-surface px-4 font-sans text-[16px] text-on-surface outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

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

      <div className="mt-1 flex items-center justify-between">
        <Checkbox label="Remember me" />

        <a
          href="#"
          className="text-[12px] font-semibold uppercase tracking-[0.05em] text-primary transition-colors hover:text-primary-container hover:underline"
        >
          Forgot Password?
        </a>
      </div>

      <div className="mt-1 flex flex-col gap-4">
        <Button type="submit" disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}

          {!isPending && <ArrowRight className="h-5 w-5" />}
        </Button>

        <Button type="button" >
          Login with OTP
        </Button>
      </div>
    </form>
  );
}