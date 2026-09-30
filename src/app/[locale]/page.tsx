import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { HotelExperience } from "@/components/home/HotelExperience";
import { RoomsSection } from "@/components/home/RoomsSection";
import { RestaurantSection } from "@/components/home/RestaurantSection";
import { WellnessSection } from "@/components/home/WellnessSection";
import { AlanyaSection } from "@/components/home/AlanyaSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { LocationSection } from "@/components/home/LocationSection";
import { ContactSection } from "@/components/home/ContactSection";
import { hotel } from "@/data/hotel";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      locale,
      type: "website",
      images: [{ url: hotel.logo }],
    },
    alternates: {
      languages: {
        en: "/en",
        fi: "/fi",
        tr: "/tr",
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("cta");

  return (
    <>
      <Hero locale={locale} />
      <IntroSection locale={locale} />
      <HotelExperience locale={locale} />
      <RoomsSection locale={locale} />
      <RestaurantSection locale={locale} />
      <WellnessSection locale={locale} />
      <AlanyaSection locale={locale} />
      <GalleryPreview />
      <ReviewsSection />
      <LocationSection locale={locale} getDirectionsLabel={t("getDirections")} />
      <ContactSection locale={locale} />
    </>
  );
}
