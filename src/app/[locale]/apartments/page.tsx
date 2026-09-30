import { permanentRedirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

/** Legacy /apartments URL → /rooms */
export default async function ApartmentsRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  setRequestLocale(locale);
  permanentRedirect(`/${locale}/rooms`);
}
