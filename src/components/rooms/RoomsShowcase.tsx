import { getTranslations } from "next-intl/server";
import { localize } from "@/lib/i18n";
import type { Locale } from "@/i18n/routing";
import { hotel } from "@/data/hotel";
import { roomExperience } from "@/data/rooms";
import { hotelGuestInfo, hotelServices } from "@/data/services";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ButtonLink } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/ui/ContactCTA";

type Props = {
  locale: Locale;
  /** Full detail page vs compact homepage chapter */
  variant?: "home" | "page";
};

export async function RoomsShowcase({ locale, variant = "home" }: Props) {
  const t = await getTranslations("rooms");
  const tc = await getTranslations("cta");
  const isPage = variant === "page";

  return (
    <section
      className={isPage ? "bg-cream pb-20 pt-28" : "chapter-pad bg-sand/40"}
      id={isPage ? undefined : "rooms"}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            className={`font-display font-medium tracking-tight text-aegean ${
              isPage
                ? "text-4xl sm:text-5xl"
                : "text-3xl sm:text-4xl lg:text-5xl"
            }`}
          >
            {isPage
              ? localize(roomExperience.name, locale)
              : localize(hotel.roomsHeading, locale)}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-charcoal/70 sm:text-lg">
            {localize(
              isPage ? roomExperience.description : roomExperience.shortDescription,
              locale,
            )}
          </p>
        </Reveal>

        {/* Shared room photography */}
        <Reveal className="mt-12 lg:mt-16">
          <div className="grid gap-3 sm:grid-cols-5 sm:gap-4">
            <div className="group overflow-hidden sm:col-span-3">
              <PlaceholderImage
                src={roomExperience.images[0]}
                alt={localize(roomExperience.name, locale)}
                aspect="aspect-[16/11]"
                sizes="(max-width: 640px) 100vw, 60vw"
                priority={isPage}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:col-span-2 sm:grid-cols-1 sm:gap-4">
              {roomExperience.images.slice(1, 3).map((src) => (
                <div key={src} className="group overflow-hidden">
                  <PlaceholderImage
                    src={src}
                    alt={localize(roomExperience.name, locale)}
                    aspect="aspect-[4/3] sm:aspect-[16/10]"
                    sizes="(max-width: 640px) 50vw, 30vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Shared amenities */}
        <Reveal className="mt-12 lg:mt-14" delayMs={80}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sea">
            {t("inEveryRoom")}
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-3 text-sm text-charcoal/75 sm:text-base">
            {roomExperience.facilities.map((facility, i) => (
              <li key={i} className="flex items-center gap-2">
                {i > 0 ? (
                  <span className="text-charcoal/25" aria-hidden>
                    ·
                  </span>
                ) : null}
                <span>{localize(facility, locale)}</span>
              </li>
            ))}
          </ul>

          {isPage ? (
            <dl className="mt-10 grid gap-0 border-t border-charcoal/10 text-sm sm:grid-cols-2">
              {[
                [t("capacity"), roomExperience.capacity],
                [t("beds"), localize(roomExperience.beds, locale)],
                [t("bathroom"), localize(roomExperience.bathroom, locale)],
                [t("kitchen"), localize(roomExperience.kitchen, locale)],
                [t("wifi"), roomExperience.wifi ? "✓" : "—"],
                [t("tv"), roomExperience.tv ? "✓" : "—"],
              ].map(([label, value]) => (
                <div key={String(label)} className="border-b border-charcoal/10 py-3 pr-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                    {label}
                  </dt>
                  <dd className="mt-1 text-charcoal">{value}</dd>
                </div>
              ))}
              <div className="border-b border-charcoal/10 py-3 sm:col-span-2">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                  {t("airConditioning")}
                </dt>
                <dd className="mt-1 text-charcoal">
                  {localize(roomExperience.airConditioning, locale)}
                </dd>
              </div>
            </dl>
          ) : (
            <p className="mt-5 text-sm text-charcoal/55">
              {roomExperience.capacity} · {localize(roomExperience.beds, locale)}
            </p>
          )}
        </Reveal>

        {isPage ? (
          <div id="extra-services" className="mt-16 scroll-mt-28 lg:mt-20">
            <Reveal>
              <h3 className="font-display text-2xl font-medium text-aegean sm:text-3xl">
                {t("extraServices")}
              </h3>
              <p className="mt-3 max-w-xl text-charcoal/65">{t("extraServicesSubtitle")}</p>
            </Reveal>
            <ul className="mt-8 grid gap-0 border-t border-charcoal/10 sm:grid-cols-2">
              {hotelServices.map((service) => (
                <li
                  key={service.id}
                  className="flex items-baseline justify-between gap-4 border-b border-charcoal/10 py-4 pr-4 text-sm"
                >
                  <span className="text-charcoal">
                    {localize(service.name, locale)}
                  </span>
                  <span className="shrink-0 text-charcoal/55">
                    {localize(service.detail, locale)}
                  </span>
                </li>
              ))}
            </ul>
            <dl className="mt-10 grid gap-6 border-t border-charcoal/10 pt-8 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                  {t("checkIn")}
                </dt>
                <dd className="mt-1 font-display text-xl text-aegean">
                  {hotelGuestInfo.checkIn}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                  {t("checkOut")}
                </dt>
                <dd className="mt-1 font-display text-xl text-aegean">
                  {hotelGuestInfo.checkOut}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                  {localize(hotelGuestInfo.poolHoursLabel, locale)}
                </dt>
                <dd className="mt-1 font-display text-xl text-aegean">
                  {localize(hotelGuestInfo.poolHours, locale)}
                </dd>
              </div>
            </dl>
          </div>
        ) : null}

        <Reveal className="mt-14 border-t border-charcoal/10 pt-10 lg:mt-16">
          {isPage ? (
            <>
              <h3 className="font-display text-2xl font-medium text-aegean sm:text-3xl">
                {tc("askAvailability")}
              </h3>
              <p className="mt-3 max-w-lg text-sm text-charcoal/65">
                {t("availabilityNote")}
              </p>
              <ContactCTA
                className="mt-6"
                labels={{
                  callUs: tc("callUs"),
                  emailUs: tc("emailUs"),
                }}
              />
            </>
          ) : (
            <div className="flex flex-wrap items-center gap-6">
              <ButtonLink href="/rooms" variant="primary" size="lg">
                {tc("exploreRooms")}
              </ButtonLink>
              <Link href="/contact" className="text-link">
                {tc("askAvailability")} →
              </Link>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
