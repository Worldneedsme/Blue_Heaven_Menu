import { L, type LocalizedString } from "@/lib/i18n";

export type RoomView = {
  id: string;
  slug: string;
  /** Legacy slugs that still redirect here */
  aliases?: string[];
  name: LocalizedString;
  shortDescription: LocalizedString;
  images: string[];
};

/**
 * Shared room experience — all rooms share the same layout.
 * EDIT THIS FILE to update room details and photos.
 */
export const roomExperience = {
  name: L("Your Room at Blue Heaven", "Huoneesi Blue Heavenissa", "Blue Heaven Odanız"),
  shortDescription: L(
    "A comfortable hotel room with a living room, bedroom, kitchen and balcony.",
    "Mukava hotellihuone olohuoneella, makuuhuoneella, keittiöllä ja parvekkeella.",
    "Oturma odası, yatak odası, mutfak ve balkonlu konforlu otel odası.",
  ),
  description: L(
    "Every room at Blue Heaven is designed the same way: space to relax, a kitchen for easy days, and a balcony of your own.",
    "Jokainen Blue Heavenin huone on suunniteltu samoin: tilaa rentoutua, keittiö arkeen ja oma parveke.",
    "Blue Heaven'daki her oda aynı şekilde tasarlandı: dinlenmek için alan, kolay günler için mutfak ve size ait bir balkon.",
  ),
  images: ["/images/rooms/bedroom.jpg"],
  capacity: "4",
  beds: L(
    "2 Single Beds & 2 Sofas",
    "2 vuodetta & 2 sohvaa",
    "2 Tek Kişilik Yatak & 2 Kanepe",
  ),
  size: "[SIZE]",
  bathroom: L("1", "1", "1"),
  kitchen: L(
    "Kitchen appliances will be in the room.",
    "Keittiölaitteet ovat huoneessa.",
    "Mutfak eşyaları odada olacaktır.",
  ),
  airConditioning: L(
    "€9 / day — please speak with reception.",
    "9 € / päivä — kysy vastaanotosta.",
    "9 € / gün — lütfen resepsiyon ile görüşün.",
  ),
  wifi: true,
  tv: true,
  facilities: [
    L("Living room", "Olohuone", "Oturma odası"),
    L("Bedroom", "Makuuhuone", "Yatak odası"),
    L("Kitchen with appliances", "Keittiö laitteineen", "Eşyalı mutfak"),
    L("Balcony", "Parveke", "Balkon"),
    L("Air conditioning (€9 / day)", "Ilmastointi (9 € / päivä)", "Klima (9 € / gün)"),
    L("Wi-Fi", "Wi-Fi", "Wi-Fi"),
    L("TV", "TV", "TV"),
  ],
  price: "",
  currency: "EUR",
} as const;

export const roomViews: RoomView[] = [
  {
    id: "poolside",
    slug: "poolside-room",
    aliases: ["pool-view-room"],
    name: L("Poolside", "Allaspuoli", "Havuz Tarafı"),
    shortDescription: L(
      "Balcony on the pool side of the hotel.",
      "Parveke hotellin allaspuolella.",
      "Otelin havuz tarafında balkon.",
    ),
    images: ["/images/rooms/bedroom.jpg"],
  },
  {
    id: "backside",
    slug: "backside-room",
    aliases: ["city-view-room"],
    name: L("Backside", "Takapuoli", "Arka Taraf"),
    shortDescription: L(
      "Balcony on the back side of the hotel.",
      "Parveke hotellin takapuolella.",
      "Otelin arka tarafında balkon.",
    ),
    images: ["/images/rooms/bedroom.jpg"],
  },
];

/** @deprecated Prefer roomViews — kept for legacy slug routes. */
export const rooms = roomViews;

export function getRoomViewBySlug(slug: string) {
  return roomViews.find(
    (view) => view.slug === slug || view.aliases?.includes(slug),
  );
}

export function getRoomBySlug(slug: string) {
  return getRoomViewBySlug(slug);
}
