import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import { IconWrapper } from "@/components/ui/IconWrapper";

export type InfoCardProps = {
  children: ReactNode;
  className?: string;
  icon: ReactNode;
  title: string;
};

export function InfoCard({ children, className, icon, title }: InfoCardProps) {
  return (
    <div
      className={cn(
        "border-border bg-background flex flex-col gap-4 rounded-2xl border p-6 shadow-sm sm:p-8",
        className,
      )}
    >
      <IconWrapper size="lg" variant="primary">
        {icon}
      </IconWrapper>

      <div>
        <h3 className="text-foreground text-lg font-bold">{title}</h3>
        <div className="text-muted mt-2 text-sm leading-6">{children}</div>
      </div>
    </div>
  );
}