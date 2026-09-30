"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { hotel } from "@/data/hotel";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ButtonLink } from "@/components/ui/Button";
import { cx } from "@/lib/cn";

const links = [
  { href: "/rooms", key: "rooms" as const },
  { href: "/restaurant", key: "restaurant" as const },
  { href: "/massage", key: "massage" as const },
  { href: "/gallery", key: "gallery" as const },
  { href: "/location", key: "location" as const },
  { href: "/contact", key: "contact" as const },
];

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const overHero = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (active: boolean) =>
    cx(
      "whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors xl:text-[12px]",
      overHero
        ? active
          ? "text-white"
          : "text-white/85 hover:text-white"
        : active
          ? "text-aegean"
          : "text-charcoal/75 hover:text-charcoal",
    );

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        overHero
          ? "bg-transparent"
          : "bg-cream/95 shadow-[0_1px_0_rgba(37,37,37,0.06)] backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[80px] lg:px-8">
        <Link href="/" className="relative z-[60] shrink-0" onClick={() => setOpen(false)}>
          <span
            className={cx(
              "inline-flex items-center transition",
              overHero && "rounded-sm bg-cream/95 px-2.5 py-1.5",
            )}
          >
            <Image
              src={hotel.logo}
              alt={hotel.name}
              width={220}
              height={60}
              className="h-9 w-auto lg:h-11"
              priority
            />
          </span>
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 hidden w-[min(640px,54vw)] -translate-x-1/2 -translate-y-1/2 lg:block"
          aria-label="Main"
        >
          <ul className="flex items-center justify-center gap-x-5 xl:gap-x-7">
            {links.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass(active)}>
                    {t(link.key)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <LanguageSwitcher light={overHero} />
          <ButtonLink
            href="/rooms"
            variant={overHero ? "ghost" : "primary"}
            size="sm"
          >
            {t("explore")}
          </ButtonLink>
        </div>

        <button
          type="button"
          className={cx(
            "relative z-[60] p-2 lg:hidden",
            overHero && !open ? "text-white" : "text-charcoal",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Full-screen mobile nav */}
      <div
        id="mobile-nav"
        className={cx(
          "fixed inset-0 z-50 bg-cream transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-8" aria-label="Mobile">
          {links.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-aegean transition hover:text-terracotta sm:text-4xl"
              >
                {t(link.key)}
              </Link>
            );
          })}
          <div className="mt-10 flex items-center gap-6">
            <LanguageSwitcher />
            <ButtonLink href="/rooms" variant="primary" size="md" onClick={() => setOpen(false)}>
              {t("explore")}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
