import type { KeyboardEvent } from "react";
import { useId } from "react";

import { cn } from "@/lib/cn";

export type AccordionItemProps = {
  answer: string;
  headerRef?: (el: HTMLButtonElement | null) => void;
  isOpen: boolean;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  onToggle: () => void;
  question: string;
};

export function AccordionItem({
  answer,
  headerRef,
  isOpen,
  onKeyDown,
  onToggle,
  question,
}: AccordionItemProps) {
  const buttonId = useId();
  const panelId = useId();

  return (
    <div
      className={cn(
        "border-border border-b transition-colors duration-200",
        isOpen && "bg-primary-soft/40",
      )}
    >
      <h3>
        <button
          ref={headerRef}
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          onKeyDown={onKeyDown}
          className={cn(
            "flex w-full items-center justify-between gap-4 rounded-sm py-5 text-left",
            "focus-visible:ring-primary focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-offset-2",
          )}
        >
          <span
            className={cn(
              "text-foreground text-base font-semibold sm:text-lg",
              isOpen && "text-primary",
            )}
          >
            {question}
          </span>

          <span
            aria-hidden="true"
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full",
              "border-border text-muted border transition-all duration-300",
              isOpen && "border-primary bg-primary text-primary-foreground rotate-45",
            )}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-4"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-muted pr-10 pb-5 text-sm leading-6 sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}