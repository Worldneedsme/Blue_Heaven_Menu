import { L, type LocalizedString } from "@/lib/i18n";

export type MassageService = {
  id: string;
  name: LocalizedString;
  duration: LocalizedString | "";
  price: string;
  currency: string;
  featured: boolean;
  available: boolean;
};

/**
 * EDIT THIS FILE to update massage / wellness treatments.
 * Prices and names from the Blue Heaven massage price list.
 */
export const massageServices: MassageService[] = [
  {
    id: "standard",
    name: L("Standard Massage", "Standard Hieronta", "Standart Masaj"),
    duration: L("40 minutes", "40 minuuttia", "40 dakika"),
    price: "40",
    currency: "EUR",
    featured: true,
    available: true,
  },
  {
    id: "bronze",
    name: L("Bronze Massage", "Pronssi Hieronta", "Bronz Masaj"),
    duration: L("45 minutes", "45 minuuttia", "45 dakika"),
    price: "40",
    currency: "EUR",
    featured: false,
    available: true,
  },
  {
    id: "medical",
    name: L("Medical Massage", "Lääketieteellinen Hieronta", "Medikal Masaj"),
    duration: L("60 minutes", "60 minuuttia", "60 dakika"),
    price: "50",
    currency: "EUR",
    featured: true,
    available: true,
  },
  {
    id: "aroma",
    name: L("Aroma Massage", "Aromi Hieronta", "Aroma Masaj"),
    duration: L("45 minutes", "45 minuuttia", "45 dakika"),
    price: "40",
    currency: "EUR",
    featured: false,
    available: true,
  },
  {
    id: "face-mask-peeling",
    name: L(
      "Face Mask & Peeling",
      "Kasvonaamio ja Kuorinta",
      "Yüz Maskesi & Peeling",
    ),
    duration: "",
    price: "20",
    currency: "EUR",
    featured: false,
    available: true,
  },
  {
    id: "hot-stone-back",
    name: L("Hot Stone Back", "Hot Stone -selkähieronta", "Sıcak Taş Sırt Masajı"),
    duration: "",
    price: "40",
    currency: "EUR",
    featured: false,
    available: true,
  },
  {
    id: "sport",
    name: L("Sport Massage", "Urheiluhieronta", "Spor Masajı"),
    duration: "",
    price: "60",
    currency: "EUR",
    featured: false,
    available: true,
  },
  {
    id: "medical-back",
    name: L(
      "Medical Back Massage",
      "Lääketieteellinen selkähieronta",
      "Medikal Sırt Masajı",
    ),
    duration: "",
    price: "40",
    currency: "EUR",
    featured: false,
    available: true,
  },
  {
    id: "foot",
    name: L("Foot Massage", "Jalkahieronta", "Ayak Masajı"),
    duration: "",
    price: "30",
    currency: "EUR",
    featured: false,
    available: true,
  },
];

/** Package deal from the Blue Heaven massage price list. */
export const massagePackage = {
  id: "standard-x3",
  name: L(
    "Standard Massage × 3",
    "Standard Hieronta × 3",
    "Standart Masaj × 3",
  ),
  note: L(
    "Book three standard massages and save.",
    "Varaa kolme standard-hierontaa ja säästä.",
    "Üç standart masaj alın, tasarruf edin.",
  ),
  price: "100",
  currency: "EUR",
} as const;

export function getAvailableMassageServices() {
  return massageServices.filter((service) => service.available);
}
