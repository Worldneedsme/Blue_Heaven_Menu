import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getRoomViewBySlug, roomViews } from "@/data/rooms";
import { localize } from "@/lib/i18n";

export function generateStaticParams() {
  return roomViews.flatMap((view) => {
    const slugs = [view.slug, ...(view.aliases ?? [])];
    return slugs.flatMap((slug) =>
      ["en", "fi", "tr"].map((locale) => ({ locale, slug })),
    );
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const view = getRoomViewBySlug(slug);
  if (!view) return {};
  return {
    title: `${localize(view.name, locale as Locale)} | Blue Heaven Apart Hotel`,
    description: localize(view.shortDescription, locale as Locale),
  };
}

/** Legacy view slugs redirect to the unified rooms page. */
export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: loc, slug } = await params;
  const locale = loc as Locale;
  setRequestLocale(locale);

  permanentRedirect(`/${locale}/rooms`);
}
