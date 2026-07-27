import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type CTAAlign = "left" | "center";

type CTAAction = {
  ariaLabel?: string;
  href: string;
  label: ReactNode;
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
};

export type CTAProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "title"
> & {
  align?: CTAAlign;
  description: ReactNode;
  eyebrow?: ReactNode;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  title: ReactNode;
};

const alignClasses: Record<CTAAlign, string> = {
  left: "text-left lg:flex-row lg:items-center lg:justify-between",
  center: "text-center items-center",
};

const actionsAlignClasses: Record<CTAAlign, string> = {
  left: "sm:flex-row",
  center: "items-center sm:flex-row sm:justify-center",
};

export function CTA({
  align = "left",
  className,
  description,
  eyebrow,
  primaryAction,
  secondaryAction,
  title,
  ...props
}: CTAProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-border",
        "bg-gradient-to-br from-primary-soft via-background to-secondary",
        "p-6 shadow-sm sm:p-8 lg:p-12",
        className,
      )}
      {...props}
    >
      <div className={cn("flex flex-col gap-8", alignClasses[align])}>
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-primary mb-3 text-sm font-semibold tracking-[0.2em] uppercase">
              {eyebrow}
            </p>
          )}

          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>

          <p className="text-muted mt-4 text-base leading-7 sm:text-lg">
            {description}
          </p>
        </div>

        <div
          className={cn(
            "flex w-full flex-col gap-3 lg:w-auto lg:shrink-0",
            actionsAlignClasses[align],
          )}
        >
          <Button
            href={primaryAction.href}
            aria-label={primaryAction.ariaLabel}
            rel={primaryAction.rel}
            target={primaryAction.target}
            size="lg"
            fullWidth
            className="sm:w-auto"
          >
            {primaryAction.label}
          </Button>

          {secondaryAction && (
            <Button
              href={secondaryAction.href}
              aria-label={secondaryAction.ariaLabel}
              rel={secondaryAction.rel}
              target={secondaryAction.target}
              size="lg"
              variant="outline"
              fullWidth
              className="sm:w-auto"
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}