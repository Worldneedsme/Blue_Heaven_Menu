import { L } from "@/lib/i18n";

/**
 * EDIT THIS FILE to update the "Why Blue Heaven" feature cards on the homepage.
 */
export const features = [
  {
    id: "rooms",
    icon: "room",
    title: L(
      "Comfortable Rooms",
      "Mukavat huoneet",
      "Konforlu Odalar",
    ),
    description: L(
      "Hotel rooms with a living room, bedroom, kitchen and balcony.",
      "Hotellihuoneet olohuoneella, makuuhuoneella, keittiöllä ja parvekkeella.",
      "Oturma odası, yatak odası, mutfak ve balkonlu otel odaları.",
    ),
  },
  {
    id: "location",
    icon: "location",
    title: L(
      "Central Alanya",
      "Keskeinen Alanya",
      "Merkezi Alanya",
    ),
    description: L(
      "A welcoming base in Alanya — the public beach is about a 9-minute walk away.",
      "Lämmin tukikohta Alanyassa — yleinen ranta on noin 9 minuutin kävelymatkan päässä.",
      "Alanya'da sıcak bir üs — halk plajına yaklaşık 9 dakikalık yürüyüş.",
    ),
  },
  {
    id: "restaurant",
    icon: "restaurant",
    title: L(
      "Restaurant On Site",
      "Ravintola paikan päällä",
      "Otel İçi Restoran",
    ),
    description: L(
      "Enjoy delicious food and drinks in a relaxed atmosphere.",
      "Nauti herkullisesta ruoasta ja juomista rennossa tunnelmassa.",
      "Rahat bir atmosferde lezzetli yemek ve içeceklerin tadını çıkarın.",
    ),
  },
  {
    id: "massage",
    icon: "massage",
    title: L(
      "Massage & Relaxation",
      "Hieronta & rentoutuminen",
      "Masaj & Rahatlama",
    ),
    description: L(
      "Take a break and enjoy a relaxing wellness experience.",
      "Pidä tauko ja nauti rentouttavasta hyvinvointielämyksestä.",
      "Mola verin ve rahatlatıcı bir wellness deneyiminin tadını çıkarın.",
    ),
  },
  {
    id: "family",
    icon: "hospitality",
    title: L(
      "Family Run",
      "Perheyritys",
      "Aile İşletmesi",
    ),
    description: L(
      "Warm, personal hospitality from the Blue Heaven team.",
      "Lämmintä, henkilökohtaista palvelua Blue Heaven -tiimiltä.",
      "Blue Heaven ekibinden sıcak ve kişisel misafirperverlik.",
    ),
  },
] as const;
