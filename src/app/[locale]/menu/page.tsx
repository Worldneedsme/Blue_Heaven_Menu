import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getVisibleMenuCategories } from "@/data/menu";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MenuBrowser } from "@/components/menu/MenuBrowser";
import { ContactCTA } from "@/components/ui/ContactCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "menuPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("menuPage");
  const tc = await getTranslations("cta");
  const categories = getVisibleMenuCategories();

  return (
    <div className="bg-cream pb-20 pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-12"
        />
      </div>
      <MenuBrowser
        categories={categories}
        locale={locale}
        labels={{
          categories: t("categories"),
          featured: t("featured"),
          askPrice: t("askPrice"),
        }}
      />
      <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <ContactCTA
          labels={{
            callUs: tc("callUs"),
            emailUs: tc("emailUs"),
          }}
        />
      </div>
    </div>
  );
}
