import { defineRouting } from "next-intl/routing";

export const locales = ["en", "fi", "tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fi";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
