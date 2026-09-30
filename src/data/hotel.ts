import { L } from "@/lib/i18n";

/**
 * EDIT THIS FILE to update hotel contact details and brand copy.
 */
export const hotel = {
  name: "Blue Heaven Apart Hotel",
  shortName: "Blue Heaven",
  logo: "/images/brand/logo.png",
  heroImage: "/images/hotel/hotel-exterior.jpg",
  city: "Alanya",
  region: "Antalya",
  country: "Türkiye",

  tagline: L(
    "Your Mediterranean Escape",
    "Välimerellinen pakopaikkasi",
    "Akdeniz Kaçamağınız",
  ),

  heroSupport: L(
    "Blue Heaven Apart Hotel · Alanya, Türkiye",
    "Blue Heaven Apart Hotel · Alanya, Türkiye",
    "Blue Heaven Apart Hotel · Alanya, Türkiye",
  ),

  description: L(
    "Comfortable rooms, Mediterranean dining and calm wellness moments in the heart of Alanya.",
    "Mukavia huoneita, välimerellistä ruokaa ja rauhallisia hyvinvointihetkiä Alanyan sydämessä.",
    "Alanya'nın kalbinde konforlu odalar, Akdeniz mutfağı ve sakin wellness anları.",
  ),

  introHeading: L(
    "Feel at Home in Alanya",
    "Tunne olosi kotoisaksi Alanyassa",
    "Alanya'da Kendinizi Evinizde Hissedin",
  ),

  introText: L(
    "Blue Heaven Apart Hotel is a family-run stay in Alanya. Comfortable rooms with a living room, bedroom, kitchen and balcony, relaxed hospitality and good food — with the public beach about a 9-minute walk away.",
    "Blue Heaven Apart Hotel on perheyritys Alanyassa. Mukavat huoneet — olohuone, makuuhuone, keittiö ja parveke — lämmin palvelu ja hyvä ruoka. Yleinen ranta on noin 9 minuutin kävelymatkan päässä.",
    "Blue Heaven Apart Hotel, Alanya'da aile işletmesi bir konaklamadır. Oturma odası, yatak odası, mutfak ve balkonlu konforlu odalar; samimi misafirperverlik ve iyi yemek — halk plajına yaklaşık 9 dakikalık yürüyüş mesafesinde.",
  ),

  experienceHeading: L(
    "A relaxed Alanya stay",
    "Rauhallinen Alanya-majoitus",
    "Rahat bir Alanya konaklaması",
  ),

  experienceText: L(
    "From pool-side mornings to evenings at our restaurant, Blue Heaven is designed for guests who want space, comfort and a true Mediterranean pace.",
    "Allasaamuista ravintolan iltoihin — Blue Heaven on suunniteltu vieraille, jotka kaipaavat tilaa, mukavuutta ja aitoa välimerellistä rytmiä.",
    "Havuz kenarı sabahlardan restoran akşamlarına — Blue Heaven; alan, konfor ve gerçek bir Akdeniz temposu isteyen misafirler için tasarlandı.",
  ),

  roomsHeading: L("Stay Your Way", "Majoitu omalla tavallasi", "Kendi Tarzınızda Konaklayın"),
  restaurantHeading: L(
    "Gather Around the Table",
    "Kokoontukaa pöydän ääreen",
    "Masada Buluşun",
  ),
  wellnessHeading: L("Slow Down", "Hidasta tahtia", "Yavaşlayın"),
  alanyaHeading: L("Discover Alanya", "Tutustu Alanyaan", "Alanya'yı Keşfedin"),
  alanyaText: L(
    "Beaches, the castle, old town streets and Mediterranean sunsets — Alanya surrounds Blue Heaven with everything that makes a coastal holiday memorable.",
    "Rannat, linna, vanhankaupungin kadut ja välimerelliset auringonlaskut — Alanya ympäröi Blue Heavenin kaikella, mikä tekee rannikkolomasta ikimuistoisen.",
    "Plajlar, kale, tarihi sokaklar ve Akdeniz gün batımları — Alanya, Blue Heaven'ı unutulmaz bir sahil tatili için gerekenlerle çevreler.",
  ),
  locationHeading: L("Your Alanya Base", "Alanya-tukikohtasi", "Alanya Üssünüz"),
  contactHeading: L("Come Stay With Us", "Tule majoittumaan luoksemme", "Bizimle Kalın"),

  phone: "+90 242 513 89 64",
  phoneDisplay: "(0242) 513 89 64",
  email: "info@blueheavenhotel.com",
  address: "Güller Pınarı Mahallesi, Kaptaner Sokak",
  addressLine2: "07400 Alanya, Antalya, Türkiye",

  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=G%C3%BCller+P%C4%B1nar%C4%B1+Mahallesi+Kaptaner+Sokak+07400+Alanya",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=G%C3%BCller+P%C4%B1nar%C4%B1+Mahallesi+Kaptaner+Sokak+07400+Alanya&z=15&output=embed",

  instagram: "https://www.instagram.com/blueheavenapart",
  facebook: "https://www.facebook.com/groups/28660318627",

  siteUrl: "https://blueheavenaparthotel.com",
} as const;

export function getPhoneLink() {
  if (hotel.phone.includes("[")) return "#contact";
  return `tel:${hotel.phone.replace(/\s/g, "")}`;
}

export function getEmailLink() {
  if (hotel.email.includes("[")) return "#contact";
  return `mailto:${hotel.email}`;
}

export function getMapsLink() {
  if (hotel.googleMapsUrl.includes("[")) return "#location";
  return hotel.googleMapsUrl;
}

export function hasSocial(url: string) {
  return Boolean(url && !url.includes("["));
}
