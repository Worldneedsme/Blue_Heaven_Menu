"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { hotel } from "@/data/hotel";
import { type Locale } from "@/i18n/routing";
import { cx } from "@/lib/cn";

const labels: Record<Locale, string> = {
  en: "English",
  fi: "Suomi",
  tr: "Türkçe",
};

const flags: Record<Locale, string> = {
  en: "🇬🇧",
  fi: "🇫🇮",
  tr: "🇹🇷",
};

const flagOrder: Locale[] = ["tr", "fi", "en"];

export function BarHeader() {
  const locale = useLocale() as Locale;
  const router = useRouter();

  const choose = (code: Locale) => {
    document.cookie = `NEXT_LOCALE=${code};path=/;max-age=31536000;samesite=lax`;
    router.refresh();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_1px_0_rgba(37,37,37,0.06)]">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:px-6">
        <span className="inline-flex items-center">
          <Image
            src="/images/brand/bar-logo.jpg"
            alt={hotel.name}
            width={1024}
            height={380}
            className="h-14 w-auto shrink-0"
            priority
          />
        </span>

        <div className="flex items-center gap-5">
          {flagOrder.map((code) => {
            const selected = locale === code;
            return (
              <button
                key={code}
                type="button"
                onClick={() => choose(code)}
                aria-label={labels[code]}
                aria-current={selected ? "true" : undefined}
                className={cx(
                  "px-3 py-3 text-[26px] leading-none transition",
                  selected ? "opacity-100" : "opacity-35",
                )}
              >
                <span aria-hidden>{flags[code]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
