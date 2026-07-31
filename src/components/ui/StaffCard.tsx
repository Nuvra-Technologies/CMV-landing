import type { StaffMember } from "@/constants/staff";
import { cn } from "@/lib/cn";

import { StaffAvatar } from "@/components/ui/StaffAvatar";

const GENDER_LABEL: Record<NonNullable<StaffMember["gender"]>, string> = {
  femenino: "Médica",
  masculino: "Médico",
};

export type StaffCardProps = {
  className?: string;
  member: StaffMember;
};

export function StaffCard({ className, member }: StaffCardProps) {
  return (
    <article
      className={cn(
        "border-border group flex items-center gap-4 rounded-2xl border",
        "bg-background p-4 shadow-sm transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-md",
        className,
      )}
    >
      <StaffAvatar name={member.name} image={member.image} />

      <div className="flex min-w-0 flex-col gap-0.5">
        {member.gender && (
          <span className="text-primary text-[0.65rem] font-semibold tracking-wide uppercase">
            {GENDER_LABEL[member.gender]}
          </span>
        )}

        <h3 className="text-foreground truncate text-sm font-bold">
          {member.name}
        </h3>

        <p className="text-muted truncate text-sm">{member.specialty}</p>
      </div>
    </article>
  );
}