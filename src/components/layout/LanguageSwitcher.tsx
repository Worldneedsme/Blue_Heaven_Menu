"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";
import { cx } from "@/lib/cn";

const shortLabels: Record<Locale, string> = {
  en: "EN",
  fi: "FI",
  tr: "TR",
};

const fullLabels: Record<Locale, string> = {
  en: "English",
  fi: "Suomi",
  tr: "Türkçe",
};

const flags: Record<Locale, string> = {
  en: "🇬🇧",
  fi: "🇫🇮",
  tr: "🇹🇷",
};

export function LanguageSwitcher({
  className,
  light,
  names,
}: {
  className?: string;
  light?: boolean;
  names?: boolean;
}) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  if (names) {
    return (
      <div
        className={cx("flex items-center gap-5", className)}
        role="group"
        aria-label="Language"
      >
        {locales.map((code) => {
          const selected = locale === code;
          return (
            <button
              key={code}
              type="button"
              onClick={() => router.replace(pathname, { locale: code })}
              className={cx(
                "inline-flex items-center gap-1.5 text-[15px] tracking-[0.04em] transition",
                selected
                  ? "font-semibold text-aegean"
                  : "font-medium text-charcoal/45",
              )}
              aria-current={selected ? "true" : undefined}
            >
              <span className="text-[18px] leading-none" aria-hidden>
                {flags[code]}
              </span>
              {fullLabels[code]}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={cx(
        "inline-flex items-center gap-0 text-[11px] font-medium tracking-[0.12em]",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {locales.map((code, i) => (
        <span key={code} className="inline-flex items-center">
          {i > 0 ? (
            <span
              className={cx(
                "mx-1.5 opacity-40",
                light ? "text-white" : "text-charcoal/40",
              )}
              aria-hidden
            >
              |
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: code })}
            className={cx(
              "transition-colors",
              locale === code
                ? light
                  ? "text-white"
                  : "text-charcoal"
                : light
                  ? "text-white/55 hover:text-white"
                  : "text-charcoal/50 hover:text-charcoal",
            )}
            aria-current={locale === code ? "true" : undefined}
          >
            {shortLabels[code]}
          </button>
        </span>
      ))}
    </div>
  );
}
