import { getTranslations } from "next-intl/server";
import { localize } from "@/lib/i18n";
import type { Locale } from "@/i18n/routing";
import { hotel } from "@/data/hotel";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export async function WellnessSection({ locale }: { locale: Locale }) {
  const t = await getTranslations("cta");
  const tm = await getTranslations("massagePage");

  return (
    <section className="chapter-pad bg-sand/50">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <div className="group overflow-hidden">
            <PlaceholderImage
              src="/images/massage/massage-room.jpg"
              alt={localize(hotel.wellnessHeading, locale)}
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="font-display text-3xl font-medium tracking-tight text-aegean sm:text-4xl lg:text-5xl">
            {localize(hotel.wellnessHeading, locale)}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg">
            {tm("subtitle")}
          </p>
          <p className="mt-4 max-w-md text-sm text-charcoal/55">
            {tm("frontDeskNote")}
          </p>
          <div className="mt-10">
            <ButtonLink href="/massage" variant="secondary" size="lg">
              {t("discoverMassage")}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
