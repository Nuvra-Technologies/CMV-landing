import Image from "next/image";

import type { BookingStep } from "@/constants/booking";

export type BookingStepItemProps = {
  isLast?: boolean;
  step: BookingStep;
};

export function BookingStepItem({ isLast = false, step }: BookingStepItemProps) {
  return (
    <li className="relative flex gap-5 pb-10 last:pb-0">
      {!isLast && (
        <span
          aria-hidden="true"
          className="bg-border absolute top-10 left-5 -ml-px h-full w-0.5"
        />
      )}

      <span className="bg-primary text-primary-foreground relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-sm">
        {step.number}
      </span>

      <div className="flex-1 pt-1.5">
        <h3 className="text-foreground text-base font-bold sm:text-lg">
          {step.title}
        </h3>

        <p className="text-muted mt-1.5 text-sm leading-6 sm:text-base">
          {step.description}
        </p>

        {step.image ? (
          <div className="border-border relative mt-4 aspect-video w-full max-w-md overflow-hidden rounded-xl border shadow-sm">
            <Image
              src={step.image.src}
              alt={step.image.alt}
              fill
              sizes="(max-width: 639px) 100vw, 448px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="border-border bg-surface text-muted mt-4 flex aspect-video w-full max-w-md items-center justify-center rounded-xl border border-dashed text-xs">
            Captura del paso {step.number} (pendiente)
          </div>
        )}
      </div>
    </li>
  );
}