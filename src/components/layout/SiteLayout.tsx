import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type SiteLayoutProps = {
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
  header?: ReactNode;
};

export function SiteLayout({
  children,
  className,
  footer,
  header,
}: SiteLayoutProps) {
  return (
    <div
      className={cn(
        "bg-background text-foreground flex min-h-dvh w-full flex-col",
        className,
      )}
    >
      <a
        href="#main-content"
        className="bg-primary text-primary-foreground fixed top-4 left-4 z-50 -translate-y-24 rounded-full px-4 py-2 font-semibold transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>

      {header}

      <main
        id="main-content"
        className="flex w-full flex-1 flex-col"
        tabIndex={-1}
      >
        {children}
      </main>

      {footer}
    </div>
  );
}