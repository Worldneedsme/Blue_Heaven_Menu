import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import {
  getAvailableMassageServices,
  massagePackage,
} from "@/data/massage";
import { localize } from "@/lib/i18n";
import { formatMenuPrice } from "@/data/menu";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { Reveal } from "@/components/ui/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "massagePage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function MassagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("massagePage");
  const tc = await getTranslations("cta");
  const services = getAvailableMassageServices();
  const packagePrice = formatMenuPrice(
    massagePackage.price,
    massagePackage.currency,
  );

  return (
    <div className="bg-cream">
      <section className="relative isolate min-h-[55vh] overflow-hidden">
        <div className="absolute inset-0">
          <PlaceholderImage
            src="/images/massage/massage-room.jpg"
            alt={t("title")}
            className="absolute inset-0 h-full min-h-[55vh] w-full"
            aspect="aspect-auto"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-charcoal/25 to-charcoal/10" />
        </div>
        <div className="relative mx-auto flex min-h-[55vh] max-w-7xl items-end px-4 pb-14 pt-32 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="font-display text-4xl font-medium sm:text-5xl lg:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-white/85">{t("subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="chapter-pad">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sea">
              {t("treatments")}
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium text-aegean sm:text-4xl">
              {t("priceList")}
            </h2>
          </Reveal>

          <ul className="mt-12">
            {services.map((service, index) => {
              const price = formatMenuPrice(service.price, service.currency);
              const duration = service.duration
                ? localize(service.duration, locale)
                : null;

              return (
                <li
                  key={service.id}
                  className="border-b border-charcoal/10 py-6 first:border-t"
                >
                  <Reveal delayMs={Math.min(index * 40, 200)}>
                    <div className="flex items-baseline justify-between gap-6">
                      <div className="min-w-0">
                        <h3 className="font-display text-xl text-aegean sm:text-2xl">
                          {localize(service.name, locale)}
                        </h3>
                        {duration ? (
                          <p className="mt-1 text-sm text-charcoal/55">
                            {duration}
                          </p>
                        ) : null}
                      </div>
                      <p className="shrink-0 font-medium tabular-nums text-charcoal">
                        {price}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <Reveal>
            <aside className="mt-12 border border-sand bg-white px-6 py-8 sm:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                {t("package")}
              </p>
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-aegean">
                    {localize(massagePackage.name, locale)}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/65">
                    {localize(massagePackage.note, locale)}
                  </p>
                </div>
                <p className="font-medium tabular-nums text-aegean sm:text-lg">
                  {packagePrice}
                </p>
              </div>
            </aside>
          </Reveal>

          <div className="mt-16 border-t border-charcoal/10 pt-12">
            <h2 className="font-display text-3xl font-medium text-aegean">
              {tc("reserveMassage")}
            </h2>
            <p className="mt-3 max-w-2xl text-charcoal/70">{t("frontDeskNote")}</p>
            <ContactCTA
              className="mt-6"
              labels={{
                callUs: tc("callUs"),
                emailUs: tc("emailUs"),
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
