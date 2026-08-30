import Image from "next/image";

import type { BookingStep } from "@/constants/booking";

export type BookingStepItemProps = {
  isLast?: boolean;
  step: BookingStep;
};

export function BookingStepItem({
  isLast = false,
  step,
}: BookingStepItemProps) {
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

        <div className="text-muted mt-1.5 space-y-3 text-sm leading-6 sm:text-base">
          {step.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {step.image && (
          <div className="border-border relative mt-4 w-full max-w-md overflow-hidden rounded-xl border shadow-sm">
            <Image
              src={step.image.src}
              alt={step.image.alt}
              width={448}
              height={252}
              sizes="(max-width: 639px) 100vw, 448px"
              className="h-auto w-full"
            />
          </div>
        )}
      </div>
    </li>
  );
}