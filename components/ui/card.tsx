import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type CardProps = ComponentPropsWithoutRef<"div">;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 shadow-[0_18px_60px_rgba(67,67,67,0.07)] transition duration-300 sm:p-8",
        className,
      )}
      {...props}
    />
  );
}
