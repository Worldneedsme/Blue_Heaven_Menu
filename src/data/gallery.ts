export type GalleryCategory =
  | "hotel"
  | "rooms"
  | "restaurant"
  | "food"
  | "massage";

export type GalleryImage = {
  id: string;
  src: string;
  category: GalleryCategory;
  alt: {
    en: string;
    fi: string;
    tr: string;
  };
};

/**
 * EDIT THIS FILE to add/remove gallery images.
 * Drop image files into public/images/... then add an entry here.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: "hotel-1",
    src: "/images/hotel/hotel-exterior.jpg",
    category: "hotel",
    alt: {
      en: "Blue Heaven Apart Hotel pool and exterior",
      fi: "Blue Heaven Apart Hotelin allas ja julkisivu",
      tr: "Blue Heaven Apart Hotel havuz ve dış görünüm",
    },
  },
  {
    id: "hotel-2",
    src: "/images/hotel/hotel-pool.jpg",
    category: "hotel",
    alt: {
      en: "Swimming pool and sun loungers",
      fi: "Uima-allas ja aurinkotuolit",
      tr: "Yüzme havuzu ve şezlonglar",
    },
  },
  {
    id: "hotel-3",
    src: "/images/hotel/lobby.jpg",
    category: "hotel",
    alt: {
      en: "Hotel lobby seating area",
      fi: "Hotellin aulan istumapaikka",
      tr: "Otel lobi oturma alanı",
    },
  },
  {
    id: "hotel-4",
    src: "/images/hotel/reception.jpg",
    category: "hotel",
    alt: {
      en: "Hotel reception desk",
      fi: "Hotellin vastaanotto",
      tr: "Otel resepsiyonu",
    },
  },
  {
    id: "room-1",
    src: "/images/rooms/bedroom.jpg",
    category: "rooms",
    alt: {
      en: "Twin bedroom with two single beds",
      fi: "Kahden vuoteen makuuhuone",
      tr: "İki tek kişilik yataklı yatak odası",
    },
  },
  {
    id: "rest-1",
    src: "/images/restaurant/poolside-bar.jpg",
    category: "restaurant",
    alt: {
      en: "Evening poolside bar and dining",
      fi: "Illallinen allasbaari ja ruokailu",
      tr: "Akşam havuz kenarı bar ve yemek alanı",
    },
  },
  {
    id: "rest-2",
    src: "/images/restaurant/restaurant-interior.jpg",
    category: "restaurant",
    alt: {
      en: "Restaurant dining room",
      fi: "Ravintolan ruokasali",
      tr: "Restoran yemek salonu",
    },
  },
  {
    id: "food-1",
    src: "/images/gallery/breakfast-pool.jpg",
    category: "food",
    alt: {
      en: "Breakfast by the pool at Blue Heaven Apart Hotel",
      fi: "Aamiainen allaan äärellä Blue Heaven Apart Hotelissa",
      tr: "Blue Heaven Apart Hotel'de havuz kenarı kahvaltı",
    },
  },
  {
    id: "massage-1",
    src: "/images/massage/massage-room.jpg",
    category: "massage",
    alt: {
      en: "Massage room at Blue Heaven Apart Hotel",
      fi: "Blue Heaven Apart Hotelin hierontahuone",
      tr: "Blue Heaven Apart Hotel masaj odası",
    },
  },
];

export const galleryCategories: GalleryCategory[] = [
  "hotel",
  "rooms",
  "restaurant",
  "food",
  "massage",
];
