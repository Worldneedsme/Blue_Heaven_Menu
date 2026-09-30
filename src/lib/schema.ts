import { hotel } from "@/data/hotel";
import type { Locale } from "@/i18n/routing";

export function hotelJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.name,
    description:
      typeof hotel.description === "object"
        ? hotel.description[locale]
        : hotel.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotel.address.includes("[") ? undefined : hotel.address,
      addressLocality: hotel.city,
      addressRegion: hotel.region,
      addressCountry: "TR",
    },
    telephone: hotel.phone.includes("[") ? undefined : hotel.phone,
    email: hotel.email.includes("[") ? undefined : hotel.email,
    url: hotel.siteUrl,
    image: `${hotel.siteUrl}${hotel.logo}`,
    priceRange: "$$",
    sameAs: [hotel.instagram, hotel.facebook].filter(Boolean),
  };
}
