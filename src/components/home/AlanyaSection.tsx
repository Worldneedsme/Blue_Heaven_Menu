import { getTranslations } from "next-intl/server";
import { localize } from "@/lib/i18n";
import type { Locale } from "@/i18n/routing";
import { hotel } from "@/data/hotel";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export async function AlanyaSection({ locale }: { locale: Locale }) {
  const t = await getTranslations("cta");

  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[55vh] lg:min-h-[80vh]">
          <PlaceholderImage
            src="/images/location/alanya-coast.jpg"
            alt="View of Alanya harbour and Red Tower from the castle"
            className="absolute inset-0 h-full min-h-[55vh] w-full lg:min-h-[80vh]"
            aspect="aspect-auto"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-center bg-aegean px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-medium text-cream sm:text-4xl lg:text-5xl">
              {localize(hotel.alanyaHeading, locale)}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/80 sm:text-lg">
              {localize(hotel.alanyaText, locale)}
            </p>
            <Link
              href="/location"
              className="mt-10 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-cream/90 transition hover:text-white"
            >
              {t("exploreAlanya")} →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
