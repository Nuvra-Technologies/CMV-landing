"use client";

import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

export type RevealProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  children: ReactNode;
  delay?: number;
  direction?: RevealDirection;
  once?: boolean;
  threshold?: number;
};

const hiddenDirectionClasses: Record<RevealDirection, string> = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "-translate-x-8",
  right: "translate-x-8",
  none: "",
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  style,
  threshold = 0.15,
  ...props
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const IntersectionObserverConstructor =
    window.IntersectionObserver;

    if (typeof IntersectionObserverConstructor === "undefined") {
    const animationFrame = window.requestAnimationFrame(() => {
        setIsVisible(true);
    });

    return () => {
        window.cancelAnimationFrame(animationFrame);
    };
    }

    const observer = new IntersectionObserverConstructor(
      (entries) => {
        const entry = entries[0];

        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold]);

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        "motion-reduce:translate-x-0 motion-reduce:translate-y-0",
        "motion-reduce:opacity-100 motion-reduce:transition-none",
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : cn("opacity-0", hiddenDirectionClasses[direction]),
        className,
      )}
      style={{
        ...style,
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
      {...props}
    >
      {children}
    </div>
  );
}