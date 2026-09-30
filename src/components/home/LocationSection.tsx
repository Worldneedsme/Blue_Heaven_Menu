import { localize } from "@/lib/i18n";
import type { Locale } from "@/i18n/routing";
import { hotel } from "@/data/hotel";
import { locationContent } from "@/data/location";
import {
  getEmailLink,
  getMapsLink,
  getPhoneLink,
} from "@/data/hotel";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function LocationSection({
  locale,
  getDirectionsLabel,
}: {
  locale: Locale;
  getDirectionsLabel: string;
}) {
  return (
    <section className="chapter-pad bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-3xl font-medium tracking-tight text-aegean sm:text-4xl lg:text-5xl">
              {localize(hotel.locationHeading, locale)}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal/70">
              {localize(locationContent.intro, locale)}
            </p>

            <div className="mt-8 space-y-3 text-sm text-charcoal/75">
              <p>
                {hotel.address}
                <br />
                {hotel.addressLine2}
              </p>
              <p>
                <a href={getPhoneLink()} className="hover:text-aegean">
                  {hotel.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={getEmailLink()} className="hover:text-aegean">
                  {hotel.email}
                </a>
              </p>
            </div>

            <div className="mt-8 border-l-2 border-sea/50 pl-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sea">
                {localize(locationContent.highlightTitle, locale)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                {localize(locationContent.highlightText, locale)}
              </p>
            </div>

            <div className="mt-10">
              <ButtonLink
                href={getMapsLink()}
                variant="secondary"
                size="lg"
                external
              >
                {getDirectionsLabel}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delayMs={100}>
            <div className="overflow-hidden bg-sky">
              {hotel.googleMapsEmbedUrl ? (
                <iframe
                  title={`${hotel.name} map`}
                  src={hotel.googleMapsEmbedUrl}
                  className="h-[360px] w-full border-0 sm:h-[480px] lg:h-full lg:min-h-[520px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
