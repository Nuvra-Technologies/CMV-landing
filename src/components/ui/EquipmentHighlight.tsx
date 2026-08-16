import { IconWrapper } from "@/components/ui/IconWrapper";
import { HIGH_COMPLEXITY_EQUIPMENT } from "@/constants/equipment";
import { cn } from "@/lib/cn";

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function DeviceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
      <path d="M7 9h3l1.5 3L13 8l1.5 3H17" />
    </svg>
  );
}

export type EquipmentHighlightProps = {
  className?: string;
};

export function EquipmentHighlight({ className }: EquipmentHighlightProps) {
  const equipment = HIGH_COMPLEXITY_EQUIPMENT;

  return (
    <div
      className={cn(
        "border-border overflow-hidden rounded-3xl border",
        "from-primary-soft via-background to-secondary bg-linear-to-br",
        "p-6 shadow-sm sm:p-8 lg:p-10",
        className,
      )}
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex-1">
          <span className="bg-primary text-primary-foreground inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
            {equipment.badge}
          </span>

          <div className="mt-4 flex items-center gap-3">
            <IconWrapper size="lg" variant="primary">
              <DeviceIcon />
            </IconWrapper>

            <h2 className="text-foreground text-xl font-bold sm:text-2xl">{equipment.title}</h2>
          </div>

          <p className="text-muted mt-4 max-w-2xl text-sm leading-6 sm:text-base">
            {equipment.description}
          </p>
        </div>

        <div className="border-border bg-background flex-1 rounded-2xl border p-5 shadow-sm sm:p-6 lg:max-w-sm">
          <p className="text-foreground text-sm font-bold">{equipment.device.name}</p>
          <p className="text-muted text-xs">{equipment.device.manufacturer}</p>

          <ul className="mt-4 flex flex-col gap-2">
            {equipment.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <IconWrapper size="sm" variant="primary" className="mt-0.5 size-4 [&>svg]:size-3">
                  <CheckIcon />
                </IconWrapper>

                <span className="text-muted text-xs leading-5 sm:text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <p className="text-muted border-border mt-4 border-t pt-3 text-[0.7rem] leading-4">
            Análisis y mediciones realizados con software{" "}
            <span className="text-foreground font-semibold">{equipment.software.name}</span> (
            {equipment.software.manufacturer}).
          </p>
        </div>
      </div>
    </div>
  );
}
