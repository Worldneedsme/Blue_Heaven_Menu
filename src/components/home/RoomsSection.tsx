import { RoomsShowcase } from "@/components/rooms/RoomsShowcase";
import type { Locale } from "@/i18n/routing";

export async function RoomsSection({ locale }: { locale: Locale }) {
  return <RoomsShowcase locale={locale} variant="home" />;
}
