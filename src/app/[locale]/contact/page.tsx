import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { hotel } from "@/data/hotel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { ContactForm } from "@/components/contact/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");
  const tc = await getTranslations("cta");

  return (
    <div className="bg-cream pb-20 pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-12"
        />

        <div className="mb-10 grid gap-0 border-t border-charcoal/10 sm:grid-cols-3">
          {[
            ["Phone", hotel.phoneDisplay],
            ["Email", hotel.email],
            ["Address", `${hotel.address}, ${hotel.addressLine2}`],
          ].map(([label, value]) => (
            <div key={label} className="border-b border-charcoal/10 py-5 sm:pr-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal/55">
                {label}
              </p>
              <p className="mt-2 text-sm text-charcoal">{value}</p>
            </div>
          ))}
        </div>

        <ContactCTA
          className="mb-14"
          alwaysDial
          labels={{
            callUs: tc("callUs"),
            emailUs: tc("emailUs"),
          }}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <ContactForm
            labels={{
              name: t("name"),
              email: t("email"),
              phone: t("phone"),
              message: t("message"),
              sendMessage: tc("sendMessage"),
              success: t("success"),
              error: t("error"),
            }}
          />
          <div className="bg-sand p-8 sm:p-10">
            <h2 className="font-display text-3xl font-medium text-ink">
              {tc("contactUs")}
            </h2>
            <p className="mt-4 text-ink-muted">{t("subtitle")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
