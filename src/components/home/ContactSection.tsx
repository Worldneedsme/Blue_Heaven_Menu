import { getTranslations } from "next-intl/server";
import { localize } from "@/lib/i18n";
import type { Locale } from "@/i18n/routing";
import {
  getEmailLink,
  getPhoneLink,
  hotel,
} from "@/data/hotel";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export async function ContactSection({ locale }: { locale: Locale }) {
  const t = await getTranslations("cta");

  return (
    <section className="chapter-pad bg-sand/40">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-aegean sm:text-4xl lg:text-5xl">
            {localize(hotel.contactHeading, locale)}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-charcoal/70">
            {localize(hotel.description, locale)}
          </p>

          <div className="mt-10 space-y-2 text-sm text-charcoal/75">
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
            <p className="pt-2 text-charcoal/55">
              {hotel.address}, {hotel.addressLine2}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact" variant="primary" size="lg">
              {t("getInTouch")}
            </ButtonLink>
            <ButtonLink
              href={getPhoneLink()}
              variant="secondary"
              size="lg"
              external
              className="md:hidden"
            >
              {t("callUs")}
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant="secondary"
              size="lg"
              className="hidden md:inline-flex"
            >
              {t("callUs")}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
