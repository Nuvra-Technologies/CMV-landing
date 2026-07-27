import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionBackground =
  | "default"
  | "surface"
  | "primary-soft"
  | "secondary";

type SectionSpacing = "sm" | "md" | "lg";

export type SectionProps = Omit<
  HTMLAttributes<HTMLElement>,
  "children"
> & {
  background?: SectionBackground;
  children: ReactNode;
  spacing?: SectionSpacing;
};

const backgroundClasses: Record<SectionBackground, string> = {
  default: "bg-background",
  surface: "bg-surface",
  "primary-soft": "bg-primary-soft",
  secondary: "bg-secondary",
};

const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-10 sm:py-12",
  md: "py-14 sm:py-16 lg:py-20",
  lg: "py-16 sm:py-20 lg:py-24",
};

export function Section({
  background = "default",
  children,
  className,
  spacing = "md",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        backgroundClasses[background],
        spacingClasses[spacing],
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}