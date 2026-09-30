import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { hasSocial, hotel } from "@/data/hotel";
import { ButtonLink } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";

export async function Hero({ locale: _locale }: { locale: Locale }) {
  const t = await getTranslations("cta");
  const showInstagram = hasSocial(hotel.instagram);
  const showFacebook = hasSocial(hotel.facebook);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hotel.heroImage}
          alt={`${hotel.name} — pool and exterior`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-10 lg:pb-28">
        <div className="fade-up max-w-3xl text-white">
          <h1 className="font-display text-[2.75rem] font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            {hotel.name}
          </h1>
          <p className="mt-5 text-sm tracking-wide text-white/85 sm:text-base">
            {hotel.city}, {hotel.country}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5 sm:gap-7">
            <ButtonLink href="/rooms" variant="ghost" size="lg">
              {t("exploreBlueHeaven")}
            </ButtonLink>
            <Link href="/location" className="text-link text-link-light">
              {t("discoverAlanya")}
            </Link>
          </div>
          {(showInstagram || showFacebook) && (
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
              {showInstagram ? (
                <a
                  href={hotel.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Instagram
                </a>
              ) : null}
              {showFacebook ? (
                <a
                  href={hotel.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Facebook
                </a>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
