import { cookies } from "next/headers";
import { hasLocale } from "next-intl";
import { defaultLocale, routing, type Locale } from "@/i18n/routing";

/** Language for the bar menu. One cookie drives every string on the page. */
export async function getBarLocale(): Promise<Locale> {
  const jar = await cookies();
  const requested = jar.get("NEXT_LOCALE")?.value;
  return hasLocale(routing.locales, requested) ? requested : defaultLocale;
}
