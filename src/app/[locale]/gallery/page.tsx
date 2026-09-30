import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { galleryImages } from "@/data/gallery";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "galleryPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("galleryPage");

  return (
    <div className="bg-white pb-20 pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-12"
        />
        <GalleryGrid
          images={galleryImages}
          locale={locale}
          labels={{
            all: t("all"),
            hotel: t("hotel"),
            rooms: t("rooms"),
            restaurant: t("restaurant"),
            food: t("food"),
            massage: t("massage"),
            location: t("location"),
            close: t("close"),
            previous: t("previous"),
            next: t("next"),
          }}
        />
      </div>
    </div>
  );
}
