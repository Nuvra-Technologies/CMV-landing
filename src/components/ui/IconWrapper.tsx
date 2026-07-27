import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type IconWrapperSize = "sm" | "md" | "lg";
type IconWrapperVariant = "primary" | "secondary" | "accent" | "neutral";

export type IconWrapperProps = Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children"
> & {
  children: ReactNode;
  label?: string;
  size?: IconWrapperSize;
  variant?: IconWrapperVariant;
};

const sizeClasses: Record<IconWrapperSize, string> = {
  sm: "size-9 [&>svg]:size-4",
  md: "size-12 [&>svg]:size-5",
  lg: "size-16 [&>svg]:size-7",
};

const variantClasses: Record<IconWrapperVariant, string> = {
  primary: "bg-primary-soft text-primary",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent-soft text-primary",
  neutral: "bg-surface text-muted",
};

export function IconWrapper({
  children,
  className,
  label,
  size = "md",
  variant = "primary",
  ...props
}: IconWrapperProps) {
  return (
    <span
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}