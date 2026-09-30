import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import {
  getEmailLink,
  getMapsLink,
  getPhoneLink,
  hotel,
} from "@/data/hotel";
import { ButtonLink } from "@/components/ui/Button";
import { localize } from "@/lib/i18n";
import { locationContent } from "@/data/location";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "locationPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("locationPage");
  const tc = await getTranslations("cta");

  return (
    <div className="bg-cream pb-20 pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-medium tracking-tight text-aegean sm:text-5xl">
          {localize(locationContent.heading, locale)}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-charcoal/70 sm:text-lg">
          {localize(locationContent.intro, locale)}
        </p>

        <div className="mt-8 max-w-2xl border-l-2 border-sea/50 pl-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sea">
            {localize(locationContent.highlightTitle, locale)}
          </p>
          <p className="mt-2 leading-relaxed text-charcoal/65">
            {localize(locationContent.highlightText, locale)}
          </p>
        </div>

        <dl className="mt-12 grid gap-0 border-t border-charcoal/10 sm:grid-cols-3">
          <div className="border-b border-charcoal/10 py-5 sm:pr-6">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              {t("address")}
            </dt>
            <dd className="mt-2 text-sm text-charcoal">
              {hotel.address}
              <br />
              {hotel.addressLine2}
            </dd>
          </div>
          <div className="border-b border-charcoal/10 py-5 sm:pr-6">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              {t("phone")}
            </dt>
            <dd className="mt-2 text-sm">
              <a href={getPhoneLink()} className="text-charcoal hover:text-aegean">
                {hotel.phoneDisplay}
              </a>
            </dd>
          </div>
          <div className="border-b border-charcoal/10 py-5">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              {t("email")}
            </dt>
            <dd className="mt-2 text-sm">
              <a href={getEmailLink()} className="text-charcoal hover:text-aegean">
                {hotel.email}
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="font-display text-xl font-medium text-aegean sm:text-2xl">
              {localize(locationContent.distancesHeading, locale)}
            </h2>
            <ul className="mt-6 grid gap-x-10 gap-y-0 sm:grid-cols-2">
              {locationContent.attractions.map((item) => (
                <li
                  key={item.id}
                  className="flex items-baseline justify-between gap-4 border-b border-charcoal/10 py-3 text-sm"
                >
                  <span className="text-charcoal">
                    {localize(item.name, locale)}
                  </span>
                  <span className="shrink-0 text-charcoal/55">
                    {item.distance}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink
                href={getMapsLink()}
                variant="secondary"
                size="lg"
                external
              >
                {tc("getDirections")}
              </ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden bg-sky">
            {hotel.googleMapsEmbedUrl ? (
              <iframe
                title={`${hotel.name} map`}
                src={hotel.googleMapsEmbedUrl}
                className="h-[320px] w-full border-0 sm:h-[420px] lg:h-full lg:min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
