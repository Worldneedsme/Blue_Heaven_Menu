import type { MetadataRoute } from "next";
import { hotel } from "@/data/hotel";
import { locales } from "@/i18n/routing";

const paths = [
  "",
  "/rooms",
  "/restaurant",
  "/menu",
  "/massage",
  "/gallery",
  "/location",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = hotel.siteUrl.replace(/\/$/, "");
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of paths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.7,
      });
    }
  }

  return entries;
}
