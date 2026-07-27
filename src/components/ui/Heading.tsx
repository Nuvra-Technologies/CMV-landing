import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type HeadingLevel = "h1" | "h2" | "h3";
type HeadingAlign = "left" | "center" | "right";
type HeadingSize = "sm" | "md" | "lg" | "xl";

export type HeadingProps = Omit<
  HTMLAttributes<HTMLHeadingElement>,
  "children"
> & {
  align?: HeadingAlign;
  as?: HeadingLevel;
  children: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  size?: HeadingSize;
  wrapperClassName?: string;
};

const alignClasses: Record<HeadingAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const descriptionAlignClasses: Record<HeadingAlign, string> = {
  left: "mr-auto",
  center: "mx-auto",
  right: "ml-auto",
};

const sizeClasses: Record<HeadingSize, string> = {
  sm: "text-2xl sm:text-3xl",
  md: "text-3xl sm:text-4xl",
  lg: "text-4xl sm:text-5xl",
  xl: "text-4xl sm:text-5xl lg:text-6xl",
};

export function Heading({
  align = "left",
  as: Tag = "h2",
  children,
  className,
  description,
  eyebrow,
  size = "md",
  wrapperClassName,
  ...props
}: HeadingProps) {
  return (
    <div className={cn(alignClasses[align], wrapperClassName)}>
      {eyebrow && (
        <p className="text-primary mb-3 text-sm font-semibold tracking-[0.2em] uppercase">
          {eyebrow}
        </p>
      )}

      <Tag
        className={cn(
          "text-foreground font-bold tracking-tight text-balance",
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </Tag>

      {description && (
        <p
          className={cn(
            "text-muted mt-4 max-w-2xl text-base leading-7 sm:text-lg",
            descriptionAlignClasses[align],
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}