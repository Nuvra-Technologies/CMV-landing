import type { Specialty } from "@/constants/specialties";
import { cn } from "@/lib/cn";

import { Reveal } from "@/components/ui/Reveal";
import { SpecialtyCard } from "@/components/ui/SpecialtyCard";

export type SpecialtiesGridProps = {
  className?: string;
  specialties: Specialty[];
};

export function SpecialtiesGrid({
  className,
  specialties,
}: SpecialtiesGridProps) {
  if (specialties.length === 0) return null;

  return (
    <div
    className={cn(
        "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {specialties.map((specialty, index) => (
        <Reveal
          key={specialty.id}
          direction="up"
          delay={Math.min(index, 6) * 60}
        >
          <SpecialtyCard specialty={specialty} className="h-full" />
        </Reveal>
      ))}
    </div>
  );
}