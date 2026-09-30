import type { Locale } from "@/i18n/routing";

export type LocalizedString = Record<Locale, string>;

export function localize(
  value: LocalizedString | string,
  locale: Locale,
): string {
  if (typeof value === "string") return value;
  return value[locale] || value.en || "";
}

export function L(
  en: string,
  fi: string,
  tr: string,
): LocalizedString {
  return { en, fi, tr };
}
