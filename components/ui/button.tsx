import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md";

type ButtonSharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> &
  ButtonSharedProps & {
    href: string;
  };

type ButtonElementProps = ComponentPropsWithoutRef<"button"> &
  ButtonSharedProps & {
    href?: undefined;
  };

type ButtonProps = ButtonLinkProps | ButtonElementProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-dark-sage bg-dark-sage text-surface shadow-[0_10px_28px_rgba(113,131,110,0.22)] hover:border-text hover:bg-text",
  secondary:
    "border-sage bg-surface text-text hover:border-dark-sage hover:bg-sage/25",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-11 px-5 text-sm",
  md: "min-h-12 px-6 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full border text-center font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    return <Link className={classes} {...props} />;
  }

  const buttonProps = props as ButtonElementProps;

  return (
    <button
      className={classes}
      {...buttonProps}
      type={buttonProps.type ?? "button"}
    />
  );
}
