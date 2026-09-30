import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  getEmailLink,
  getPhoneLink,
  hasSocial,
  hotel,
} from "@/data/hotel";
import { SocialLinks } from "@/components/ui/SocialLinks";

const navLinks = [
  { href: "/rooms", key: "rooms" as const },
  { href: "/restaurant", key: "restaurant" as const },
  { href: "/massage", key: "massage" as const },
  { href: "/gallery", key: "gallery" as const },
  { href: "/location", key: "location" as const },
  { href: "/contact", key: "contact" as const },
];

export async function Footer() {
  const t = await getTranslations("nav");
  const tf = await getTranslations("footer");

  return (
    <footer className="bg-aegean text-cream">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12 lg:px-8 lg:py-20">
        <div>
          <div className="inline-flex rounded-sm bg-cream/95 px-2.5 py-1.5">
            <Image
              src={hotel.logo}
              alt={hotel.name}
              width={220}
              height={60}
              className="h-9 w-auto"
            />
          </div>
          <p className="mt-6 font-display text-2xl text-cream">{hotel.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/65">
            {tf("tagline")}
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/50">
            {t("explore")}
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-cream/85">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/50">
            {t("contact")}
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-cream/85">
            <li>
              <a href={getPhoneLink()} className="transition hover:text-white">
                {hotel.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={getEmailLink()} className="transition hover:text-white">
                {hotel.email}
              </a>
            </li>
            <li className="pt-1 text-cream/60">
              {hotel.address}
              <br />
              {hotel.addressLine2}
            </li>
          </ul>
          {(hasSocial(hotel.instagram) || hasSocial(hotel.facebook)) && (
            <div className="mt-6">
              <SocialLinks
                variant="footer"
                instagram={
                  hasSocial(hotel.instagram) ? hotel.instagram : undefined
                }
                facebook={
                  hasSocial(hotel.facebook) ? hotel.facebook : undefined
                }
              />
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/45">
        {tf("rights")}
      </div>
    </footer>
  );
}
