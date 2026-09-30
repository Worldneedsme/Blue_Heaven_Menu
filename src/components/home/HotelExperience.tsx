import { localize } from "@/lib/i18n";
import type { Locale } from "@/i18n/routing";
import { hotel } from "@/data/hotel";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";

export function HotelExperience({ locale }: { locale: Locale }) {
  return (
    <section className="chapter-pad bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="group overflow-hidden">
              <PlaceholderImage
                src="/images/hotel/lobby.jpg"
                alt={`${hotel.name} lobby`}
                aspect="aspect-[16/11]"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:pb-6" delayMs={100}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sea">
              {hotel.shortName}
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-aegean sm:text-4xl">
              {localize(hotel.experienceHeading, locale)}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal/70 sm:text-lg">
              {localize(hotel.experienceText, locale)}
            </p>
            <div className="mt-10 max-w-xs overflow-hidden">
              <PlaceholderImage
                src="/images/hotel/hotel-pool.jpg"
                alt={`${hotel.name} pool`}
                aspect="aspect-[4/5]"
                sizes="(max-width: 1024px) 60vw, 22vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
