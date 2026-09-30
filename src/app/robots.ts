import type { MetadataRoute } from "next";
import { hotel } from "@/data/hotel";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/bar",
      disallow: "/",
    },
    sitemap: `${hotel.siteUrl.replace(/\/$/, "")}/sitemap.xml`,
  };
}
