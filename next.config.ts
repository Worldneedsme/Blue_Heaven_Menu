import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Allow preview tunnels (Cloudflare / localtunnel) to load Next.js assets.
  allowedDevOrigins: [
    "*.trycloudflare.com",
    "*.loca.lt",
    "192.168.1.112",
    "localhost",
    "127.0.0.1",
  ],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default withNextIntl(nextConfig);
