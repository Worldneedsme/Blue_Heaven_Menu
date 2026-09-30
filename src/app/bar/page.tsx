import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getBarLocale } from "@/lib/bar-locale";
import { getVisibleMenuCategories } from "@/data/menu";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MenuBrowser } from "@/components/menu/MenuBrowser";

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
