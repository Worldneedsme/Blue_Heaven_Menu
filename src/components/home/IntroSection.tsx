import { localize } from "@/lib/i18n";
import type { Locale } from "@/i18n/routing";
import { hotel } from "@/data/hotel";
import { Reveal } from "@/components/ui/Reveal";

export function IntroSection({ locale }: { locale: Locale }) {
  return (
    <section className="chapter-pad bg-cream">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-5">
          <h2 className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-aegean sm:text-4xl lg:text-[2.75rem]">
            {localize(hotel.introHeading, locale)}
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-7" delayMs={120}>
          <p className="max-w-xl text-base leading-[1.75] text-charcoal/75 sm:text-lg">
            {localize(hotel.introText, locale)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
