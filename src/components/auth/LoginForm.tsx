"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { SocialLogin } from "@/components/auth/SocialLogin";

export function LoginForm() {
  return (
    <form className="flex flex-col gap-4" onSubmit={(event) => event.preventDefault()}>
      <Input
        label="Email or Mobile Number"
        placeholder="Enter email or mobile"
        id="identifier"
      />
      <PasswordInput label="Password" id="password" placeholder="••••••••" />

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
        <Button type="submit">
          Login
          <ArrowRight className="h-5 w-5" />
        </Button>
        <SocialLogin label="Login with Google" />
      </div>
    </form>
  );
}
