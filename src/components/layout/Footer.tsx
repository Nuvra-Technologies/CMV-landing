import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui";
import {
  FOOTER_CONTACT_LINKS,
  FOOTER_CONTENT,
  FOOTER_QUICK_LINKS,
  FOOTER_SOCIAL_LINKS,
} from "@/constants/footer";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Link
              href="/#inicio"
              aria-label="CMV - Ir al inicio"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              <span className="inline-flex size-14 items-center justify-center overflow-hidden rounded-2xl bg-white p-1">
                <Image
                  src="/images/logo-cmv.png"
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 object-contain"
                />
              </span>

              <span className="text-2xl font-bold tracking-tight">
                CMV
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              {FOOTER_CONTENT.description}
            </p>
          </div>

          <nav aria-labelledby="footer-navigation-title">
            <h2
              id="footer-navigation-title"
              className="text-sm font-bold tracking-[0.16em] text-white uppercase"
            >
              Links rápidos
            </h2>

            <ul className="mt-5 space-y-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-secondary focus-visible:text-secondary focus-visible:outline-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold tracking-[0.16em] text-white uppercase">
              Contacto
            </h2>

            <ul className="mt-5 space-y-4">
              {FOOTER_CONTACT_LINKS.map((contact) => (
                <li key={contact.label}>
                  <p className="text-xs font-semibold tracking-wide text-secondary uppercase">
                    {contact.label}
                  </p>

                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.external ? "_blank" : undefined}
                      rel={contact.external ? "noopener noreferrer" : undefined}
                      className="mt-1 inline-block text-sm text-white/70 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="mt-1 block text-sm text-white/50">
                      {contact.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-[0.16em] text-white uppercase">
              Redes sociales
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {FOOTER_SOCIAL_LINKS.map((social) =>
                social.href ? (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-white/15 bg-white/5 hover:border-secondary hover:text-secondary inline-flex min-h-10 items-center justify-center rounded-full border px-4 text-sm font-semibold text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    {social.label}
                  </a>
                ) : (
                  <span
                    key={social.label}
                    aria-disabled="true"
                    title="Enlace a confirmar"
                    className="inline-flex min-h-10 cursor-not-allowed items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white/40"
                  >
                    {social.label}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} CMV. Todos los derechos reservados.
          </p>

          <p>Centro Médico CMV</p>
        </div>
      </Container>
    </footer>
  );
}