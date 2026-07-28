import type { Specialty } from "@/constants/specialties";
import { cn } from "@/lib/cn";

import { IconWrapper } from "@/components/ui/IconWrapper";
import { SpecialtyIcon } from "@/components/ui/icons/medical-icons";

export type SpecialtyCardProps = {
  className?: string;
  specialty: Specialty;
};

export function SpecialtyCard({ className, specialty }: SpecialtyCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col gap-3 rounded-2xl border border-border",
        "bg-background p-5 shadow-sm transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-md",
        className,
      )}
    >
      <IconWrapper size="sm" variant="primary">
        <SpecialtyIcon name={specialty.icon} />
      </IconWrapper>

      <div>
        <h3 className="text-foreground text-base font-bold">
          {specialty.name}
        </h3>

        <p className="text-muted mt-1 text-sm leading-6">
          {specialty.description}
        </p>
      </div>
    </article>
  );
}