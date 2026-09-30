import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { restaurant } from "@/data/restaurant";
import { localize } from "@/lib/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ButtonLink } from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "restaurantPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("cta");
  const tr = await getTranslations("restaurantPage");

  const blocks = [
    [restaurant.aboutHeading, restaurant.aboutText],
    [restaurant.foodHeading, restaurant.foodText],
    [restaurant.drinksHeading, restaurant.drinksText],
    [restaurant.atmosphereHeading, restaurant.atmosphereText],
  ] as const;

  return (
    <div className="bg-white">
      <section className="relative isolate min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-primary-deep">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={restaurant.heroImage}
            alt=""
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl items-end px-4 pb-14 pt-32 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="font-display text-4xl font-medium sm:text-5xl lg:text-6xl">
              {localize(restaurant.heading, locale)}
            </h1>
            <p className="mt-4 text-lg text-white/85">
              {localize(restaurant.tagline, locale)}
            </p>
            <div className="mt-8">
              <ButtonLink href="/menu" variant="ghost" size="lg">
                {t("viewMenu")}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-pad">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {blocks.map(([heading, text]) => (
            <article key={localize(heading, "en")}>
              <h2 className="font-display text-2xl font-medium text-aegean sm:text-3xl">
                {localize(heading, locale)}
              </h2>
              <p className="mt-3 leading-relaxed text-charcoal/70">
                {localize(text, locale)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="chapter-pad bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={localize(restaurant.hoursHeading, locale)}
            className="mb-8"
          />
          <dl className="mb-14 grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border-t border-charcoal/10 pt-4">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/55">
                {localize(restaurant.breakfastHoursLabel, locale)}
              </dt>
              <dd className="mt-2 font-display text-2xl text-aegean">
                {localize(restaurant.breakfastHours, locale)}
              </dd>
            </div>
            <div className="border-t border-charcoal/10 pt-4">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/55">
                {localize(restaurant.restaurantHoursLabel, locale)}
              </dt>
              <dd className="mt-2 font-display text-2xl text-aegean">
                {localize(restaurant.restaurantHours, locale)}
              </dd>
            </div>
            <div className="border-t border-charcoal/10 pt-4">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/55">
                {localize(restaurant.barHoursLabel, locale)}
              </dt>
              <dd className="mt-2 font-display text-2xl text-aegean">
                {localize(restaurant.barHours, locale)}
              </dd>
            </div>
          </dl>
          <SectionHeader title={tr("gallery")} className="mb-6" />
          <div className="grid gap-3 sm:grid-cols-3">
            {restaurant.galleryImages.map((src) => (
              <PlaceholderImage
                key={src}
                src={src}
                alt={localize(restaurant.heading, locale)}
                aspect="aspect-[4/3]"
              />
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/menu" variant="secondary" size="lg">
              {t("viewMenu")}
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
