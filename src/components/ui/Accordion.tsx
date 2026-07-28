"use client";

import type { KeyboardEvent } from "react";
import { useRef, useState } from "react";

import { AccordionItem } from "@/components/ui/AccordionItem";
import type { FAQItem } from "@/constants/faq";
import { cn } from "@/lib/cn";

export type AccordionProps = {
  allowMultiple?: boolean;
  className?: string;
  items: FAQItem[];
};

export function Accordion({
  allowMultiple = true,
  className,
  items,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const headerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = allowMultiple ? new Set(prev) : new Set<string>();

      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const headers = headerRefs.current;
    if (headers.length === 0) return;

    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        (headers[index + 1] ?? headers[0])?.focus();
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        (headers[index - 1] ?? headers[headers.length - 1])?.focus();
        break;
      }
      case "Home": {
        event.preventDefault();
        headers[0]?.focus();
        break;
      }
      case "End": {
        event.preventDefault();
        headers[headers.length - 1]?.focus();
        break;
      }
    }
  }

  if (items.length === 0) return null;

  return (
    <div className={cn("divide-y-0", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openIds.has(item.id)}
          onToggle={() => toggle(item.id)}
          headerRef={(el) => {
            headerRefs.current[index] = el;
          }}
          onKeyDown={(event) => handleKeyDown(event, index)}
        />
      ))}
    </div>
  );
}