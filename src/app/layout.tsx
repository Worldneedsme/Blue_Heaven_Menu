import type { Metadata } from "next";
import { hotel } from "@/data/hotel";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL(hotel.siteUrl),
  title: {
    default: "Blue Heaven Apart Hotel Alanya",
    template: "%s",
  },
};

/** Root layout passes through; locale layout owns <html lang>. */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
