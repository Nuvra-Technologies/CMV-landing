import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardElement = "article" | "div";
type CardPadding = "sm" | "md" | "lg";
type CardVariant = "default" | "soft" | "outlined";

export type CardProps = Omit<
  HTMLAttributes<HTMLElement>,
  "children"
> & {
  as?: CardElement;
  children: ReactNode;
  interactive?: boolean;
  padding?: CardPadding;
  variant?: CardVariant;
};

const paddingClasses: Record<CardPadding, string> = {
  sm: "p-4",
  md: "p-5 sm:p-6",
  lg: "p-6 sm:p-8",
};

const variantClasses: Record<CardVariant, string> = {
  default: "border border-border bg-background shadow-sm",
  soft: "border border-transparent bg-surface",
  outlined: "border border-border bg-transparent",
};

export function Card({
  as: Tag = "article",
  children,
  className,
  interactive = false,
  padding = "md",
  variant = "default",
  ...props
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-[var(--radius-lg)]",
        "transition-[transform,box-shadow,border-color] duration-300 ease-out motion-reduce:transition-none",
        paddingClasses[padding],
        variantClasses[variant],
        interactive &&
         "-translate-y-0 hover:-translate-y-1 hover:shadow-md motion-reduce:hover:translate-y-0",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}