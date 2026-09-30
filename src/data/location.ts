import { L, type LocalizedString } from "@/lib/i18n";

export type Attraction = {
  id: string;
  name: LocalizedString;
  distance: string;
};

/**
 * EDIT THIS FILE for location page details and homepage location block.
 */
export const locationContent = {
  heading: L("Location", "Sijainti", "Konum"),

  addressLine: "Güller Pınarı Mahallesi, Kaptaner Sokak, 07400 Alanya, Türkiye",

  highlightTitle: L(
    "Featured: About 9 minutes to Alanya Public Beach",
    "Kohokohta: Noin 9 minuuttia Alanyan yleiselle rannalle",
    "Öne Çıkan: Alanya Halk Plajı'na yaklaşık 9 dakika",
  ),

  highlightText: L(
    "You can reach Alanya Public Beach (Halk Plajı) for swimming and sunbathing with a short 9-minute walk.",
    "Pääset Alanyan yleiselle rannalle (Halk Plajı) uimaan ja ottamaan aurinkoa lyhyellä 9 minuutin kävelyllä.",
    "Yüzmek ve güneşlenmek için Alanya Halk Plajı'na yaklaşık 9 dakikalık bir yürüyüşle ulaşabilirsiniz.",
  ),

  distancesHeading: L(
    "Distances from Blue Heaven Apart Hotel",
    "Etäisyydet Blue Heaven Apart Hotelista",
    "Blue Heaven Apart Hotel ile olan mesafe",
  ),

  intro: L(
    "Blue Heaven Apart Hotel is located in Güller Pınarı, Alanya — a short walk from the public beach and close to key local sights.",
    "Blue Heaven Apart Hotel sijaitsee Güller Pınarıssa, Alanyassa — lyhyen kävelymatkan päässä yleisestä rannasta ja lähellä tärkeitä nähtävyyksiä.",
    "Blue Heaven Apart Hotel, Güller Pınarı Mahallesi'nde, Alanya'da — halk plajına kısa yürüyüş mesafesinde ve önemli yerlere yakın.",
  ),

  attractionsHeading: L(
    "Nearby Attractions",
    "Lähialueen nähtävyydet",
    "Yakındaki Yerler",
  ),

  attractions: [
    {
      id: "sali-pazari",
      name: L("Salı Pazarı (Tuesday Market)", "Salı Pazarı (tiistaimarkkinat)", "Salı Pazarı"),
      distance: "1.7 km",
    },
    {
      id: "cuma-pazari",
      name: L("Cuma Pazarı (Friday Market)", "Cuma Pazarı (perjantaimarkkinat)", "Cuma Pazarı"),
      distance: "1.3 km",
    },
    {
      id: "ataturk-house",
      name: L("Atatürk House Museum", "Atatürk-talon museo", "Atatürk Evi Müzesi"),
      distance: "0.9 km",
    },
    {
      id: "alanya-centre",
      name: L("Alanya", "Alanya", "Alanya"),
      distance: "1.4 km",
    },
    {
      id: "red-tower",
      name: L("Red Tower (Kızıl Kule)", "Punainen torni (Kızıl Kule)", "Kızıl Kule"),
      distance: "1.7 km",
    },
    {
      id: "archaeology-museum",
      name: L(
        "Alanya Archaeology Museum",
        "Alanyan arkeologinen museo",
        "Alanya Arkeoloji Müzesi",
      ),
      distance: "1.9 km",
    },
    {
      id: "hagios",
      name: L(
        "Hagios Constantinos Church",
        "Hagios Constantinos -kirkko",
        "Hagios Contatinos Kilisesi",
      ),
      distance: "2 km",
    },
    {
      id: "arap-evliyasi",
      name: L("Arap Evliyası", "Arap Evliyası", "Arap Evliyası"),
      distance: "2.2 km",
    },
    {
      id: "castle",
      name: L("Alanya Castle", "Alanyan linna", "Alanya Kalesi (Kale)"),
      distance: "2.4 km",
    },
    {
      id: "stadium",
      name: L(
        "Bahçeşehir Schools Stadium",
        "Bahçeşehir Okulları -stadion",
        "Bahçeşehir Okulları Stadyumu",
      ),
      distance: "6.4 km",
    },
    {
      id: "dim-cave",
      name: L("Dim Cave", "Dim-luola", "Dim Mağarası"),
      distance: "9 km",
    },
    {
      id: "sarapsa",
      name: L("Şarapsa Han", "Şarapsa Han", "Şarapsa Han"),
      distance: "13.2 km",
    },
    {
      id: "airport",
      name: L(
        "Gazipaşa-Alanya Airport",
        "Gazipaşa-Alanya lentoasema",
        "Gazipaşa-Alanya Havalimanı",
      ),
      distance: "37.9 km",
    },
  ] as Attraction[],
};
