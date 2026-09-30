import type { MetadataRoute } from "next";
import { hotel } from "@/data/hotel";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = hotel.siteUrl.replace(/\/$/, "");
  return [
    {
      url: `${base}/bar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
