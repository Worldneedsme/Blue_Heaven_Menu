"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";
import { cx } from "@/lib/cn";

const labels: Record<Locale, string> = {
  en: "EN",
  fi: "FI",
  tr: "TR",
};

export function LanguageSwitcher({
  className,
  light,
}: {
  className?: string;
  light?: boolean;
}) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={cx("inline-flex items-center gap-0 text-[11px] font-medium tracking-[0.12em]", className)}
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
            {labels[code]}
          </button>
        </span>
      ))}
    </div>
  );
}
