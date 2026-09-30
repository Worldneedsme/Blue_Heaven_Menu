import { getTranslations } from "next-intl/server";
import { localize } from "@/lib/i18n";
import type { Locale } from "@/i18n/routing";
import { hotel } from "@/data/hotel";
import { restaurant } from "@/data/restaurant";
import { menuCategories } from "@/data/menu";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export async function RestaurantSection({ locale }: { locale: Locale }) {
  const t = await getTranslations("cta");
  const categories = [...menuCategories].sort((a, b) => a.order - b.order);
  const foodImages = [
    "/images/gallery/breakfast-pool.jpg",
    "/images/restaurant/poolside-bar.jpg",
    "/images/restaurant/restaurant-interior.jpg",
  ];

  return (
    <section>
      {/* Full-bleed cinematic band */}
      <div className="relative isolate min-h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={restaurant.heroImage}
            alt={localize(hotel.restaurantHeading, locale)}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-charcoal/15" />
        </div>
        <div className="relative mx-auto flex min-h-[75vh] max-w-[1440px] flex-col justify-end px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
              {localize(hotel.restaurantHeading, locale)}
            </h2>
            <p className="mt-4 max-w-lg text-base text-white/85 sm:text-lg">
              {localize(restaurant.tagline, locale)}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Editorial food + menu preview */}
      <div className="chapter-pad bg-cream">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-5 sm:gap-5">
                <div className="group overflow-hidden sm:col-span-3">
                  <PlaceholderImage
                    src={foodImages[0]}
                    alt="Food"
                    aspect="aspect-[4/5]"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <div className="flex flex-col gap-4 sm:col-span-2 sm:gap-5">
                  <div className="group overflow-hidden">
                    <PlaceholderImage
                      src={foodImages[1]}
                      alt="Food"
                      aspect="aspect-square"
                      sizes="(max-width: 640px) 50vw, 20vw"
                    />
                  </div>
                  <div className="group overflow-hidden">
                    <PlaceholderImage
                      src={foodImages[2]}
                      alt="Food"
                      aspect="aspect-[4/3]"
                      sizes="(max-width: 640px) 50vw, 20vw"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="flex flex-col justify-center lg:col-span-5" delayMs={100}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                Menu
              </p>
              <ul className="mt-8 space-y-0">
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    className="border-b border-charcoal/10 py-4 font-display text-2xl text-aegean sm:text-3xl"
                  >
                    {localize(cat.name, locale)}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ButtonLink href="/menu" variant="primary" size="lg">
                  {t("viewMenu")}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
