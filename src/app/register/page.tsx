import Image from "next/image";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { RegistrationForm } from "@/components/auth/RegistrationForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      background={
        <>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAK-F8V54MZqq-FzqkqfqWWNS-_-5QpvbhZh2bE0F22DjxS9AtuSufwgA4pkfzjzVcLYuhz_ZK2VFS5ER_4MKpXBOUcG5nD4_iEI8GV99dB6RBIVjvKRAA5bjerxY5ANSLu4dSGENS4YVhAO9d0z63oInawMACUwRdy3wR0vWsdP78OoichtTem4Kcz6Kfj3xaXs5urGyIf67PR-vDjQM6ovFv8bf7keS9YBIFL9U0OOmijtIyUati56A')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div className="absolute inset-0 bg-surface/20" />
        </>
      }
    >
      <div className="relative mx-auto flex min-h-[calc(100vh-2rem)] w-full items-center justify-center px-4 py-4 md:px-6 md:py-6">
        <div className="relative w-full max-w-[640px] overflow-hidden rounded-[20px] bg-surface-lowest p-4 shadow-2xl md:p-6">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-bl-full bg-primary/5 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-tr-full bg-secondary/5 blur-2xl" />
          <div className="relative z-10">
            <AuthHeader
              logo
              title="Begin Your Journey"
              subtitle="Find Your Perfect Life Partner"
            />
            <RegistrationForm />
            <div className="mt-10 text-center">
              <p className="text-[16px] leading-6 text-on-surface-variant">
                Already have an account?{" "}
                <a className="font-semibold text-primary hover:underline" href="/login">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
