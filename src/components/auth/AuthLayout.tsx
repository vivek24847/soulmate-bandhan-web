import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "@/lib/cn";

type AuthLayoutProps = PropsWithChildren<{
  className?: string;
  background: ReactNode;
}>;

export function AuthLayout({ children, className, background }: AuthLayoutProps) {
  return (
    <main className="min-h-screen w-full bg-surface p-4 text-on-surface">
      <div
        className={cn(
          "relative mx-auto flex min-h-[calc(100vh-2rem)] w-full items-center justify-center overflow-hidden bg-surface-lowest",
          className,
        )}
      >
        {background}
        <div className="relative z-10 w-full">{children}</div>
      </div>
    </main>
  );
}
