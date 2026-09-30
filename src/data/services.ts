import { L, type LocalizedString } from "@/lib/i18n";

export type HotelService = {
  id: string;
  name: LocalizedString;
  detail: LocalizedString;
};

/**
 * EDIT THIS FILE for extra guest services (from the welcome sheet).
 */
export const hotelServices: HotelService[] = [
  {
    id: "ac",
    name: L("Air conditioning", "Ilmastointi", "Klima"),
    detail: L("€9 / day", "9 € / päivä", "9 € / gün"),
  },
  {
    id: "safe",
    name: L("Safe box", "Tallelokero", "Kasa"),
    detail: L("€2 / day", "2 € / päivä", "2 € / gün"),
  },
  {
    id: "pool-towels",
    name: L("Pool towels", "Allaspyyhkeet", "Havuz havluları"),
    detail: L("€7 / week", "7 € / viikko", "7 € / hafta"),
  },
  {
    id: "breakfast",
    name: L("Breakfast", "Aamiainen", "Kahvaltı"),
    detail: L("€10", "10 €", "10 €"),
  },
  {
    id: "water",
    name: L("Bottled water (19 L)", "Pullovesi (19 L)", "Damacana su (19 L)"),
    detail: L("€8", "8 €", "8 €"),
  },
  {
    id: "room-service",
    name: L("Room service", "Huonepalvelu", "Oda servisi"),
    detail: L("Available", "Saatavilla", "Mevcuttur"),
  },
  {
    id: "laundry",
    name: L("Laundry service", "Pesulapalvelu", "Çamaşır hizmeti"),
    detail: L("Available", "Saatavilla", "Mevcuttur"),
  },
  {
    id: "mini-market",
    name: L("Mini market", "Minimarket", "Mini market"),
    detail: L("On site", "Paikan päällä", "Otel içinde"),
  },
];

export const hotelGuestInfo = {
  checkIn: "14:00",
  checkOut: "12:00",
  poolHours: L("08:00 – 22:00", "08:00 – 22:00", "08:00 – 22:00"),
  poolHoursLabel: L("Pool", "Allas", "Havuz"),
  lostKeyFee: L(
    "Lost room card: €3",
    "Kadonneesta huonekortista: 3 €",
    "Kayıp oda kartı: 3 €",
  ),
};
