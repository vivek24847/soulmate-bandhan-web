import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-20 w-20",
};

export function Avatar({ size = "md", className, ...props }: AvatarProps) {
  return <img className={cn("rounded-full object-cover", sizeClasses[size], className)} {...props} />;
}
