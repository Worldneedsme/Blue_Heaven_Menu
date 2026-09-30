import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { RoomsShowcase } from "@/components/rooms/RoomsShowcase";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "rooms" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function RoomsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  setRequestLocale(locale);

  return <RoomsShowcase locale={locale} variant="page" />;
}
