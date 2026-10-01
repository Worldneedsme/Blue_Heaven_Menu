import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getBarLocale } from "@/lib/bar-locale";
import { hotel } from "@/data/hotel";
import { getVisibleMenuCategories } from "@/data/menu";
import { type Locale } from "@/i18n/routing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MenuBrowser } from "@/components/menu/MenuBrowser";

const logoBlue = "#2e6b8b";

const shareHeading: Record<Locale, string> = {
  en: "Share your Blue Heaven moment",
  fi: "Jaa Blue Heaven -hetkesi",
  tr: "Blue Heaven anını paylaş",
};

const invite: Record<Locale, string> = {
  en: "Good food, good drinks, and good moments. Share yours!",
  fi: "Hyvää ruokaa, hyviä juomia ja hyviä hetkiä. Jaa omasi!",
  tr: "İyi yemekler, iyi içecekler ve iyi anlar. Seninkini paylaş!",
};

const shareButton: Record<Locale, string> = {
  en: "Share your moment",
  fi: "Jaa hetkesi",
  tr: "Anını paylaş",
};

export const metadata: Metadata = {
  title: "Menu | Blue Heaven Bar",
  robots: { index: false, follow: false },
};

export default async function BarMenuPage() {
  const locale = await getBarLocale();
  setRequestLocale(locale);
  const t = await getTranslations("menuPage");
  const categories = getVisibleMenuCategories();

  return (
    <div className="bg-white pb-16 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="mb-6 rounded-2xl px-4 py-4 text-center"
          style={{ backgroundColor: "rgba(46, 107, 139, 0.08)" }}
        >
          <p
            className="text-[13px] font-semibold uppercase tracking-[0.14em]"
            style={{ color: logoBlue }}
          >
            {shareHeading[locale]}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-[15px] leading-snug text-charcoal">
            {invite[locale]}
          </p>
          <a
            href={hotel.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-semibold leading-snug text-white shadow-[0_6px_16px_rgba(46,107,139,0.28)]"
            style={{ backgroundColor: logoBlue }}
          >
            <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 shrink-0 fill-current">
              <path d="M14 8.5V6.75c0-.69.56-1.25 1.25-1.25H17V3h-1.75A3.75 3.75 0 0 0 11.5 6.75V8.5H9.5V11h2v10h3V11H17l.5-2.5H14.5Z" />
            </svg>
            {shareButton[locale]}
          </a>
        </div>
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-6"
        />
      </div>
      <MenuBrowser
        categories={categories}
        locale={locale}
        labels={{
          categories: t("categories"),
          featured: t("featured"),
          askPrice: t("askPrice"),
          foodSection: t("foodSection"),
          drinksSection: t("drinksSection"),
          dessertsSection: t("dessertsSection"),
          search: t("search"),
          noResults: t("noResults"),
          kitchenHoursLabel: t("kitchenHoursLabel"),
          kitchenHours: t("kitchenHours"),
          barHoursLabel: t("barHoursLabel"),
          barHours: t("barHours"),
        }}
      />
    </div>
  );
}
