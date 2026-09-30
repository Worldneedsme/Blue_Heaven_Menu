import { getEmailLink, getPhoneLink } from "@/data/hotel";
import { getTranslations } from "next-intl/server";

export async function MobileContactBar() {
  const t = await getTranslations("cta");

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-charcoal/10 bg-cream/95 p-2 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={getPhoneLink()}
          className="inline-flex items-center justify-center bg-aegean px-3 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white"
        >
          {t("callUs")}
        </a>
        <a
          href={getEmailLink()}
          className="inline-flex items-center justify-center border border-charcoal/15 px-3 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-charcoal"
        >
          {t("emailUs")}
        </a>
      </div>
    </div>
  );
}
