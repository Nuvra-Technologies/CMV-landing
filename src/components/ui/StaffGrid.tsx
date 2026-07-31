import type { StaffMember } from "@/constants/staff";
import { cn } from "@/lib/cn";

import { Reveal } from "@/components/ui/Reveal";
import { StaffCard } from "@/components/ui/StaffCard";

export type StaffGridProps = {
  className?: string;
  staff: StaffMember[];
};

export function StaffGrid({ className, staff }: StaffGridProps) {
  if (staff.length === 0) return null;

  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {staff.map((member, index) => (
        <Reveal
          key={member.id}
          direction="up"
          delay={Math.min(index, 6) * 60}
        >
          <StaffCard member={member} />
        </Reveal>
      ))}
    </div>
  );
}