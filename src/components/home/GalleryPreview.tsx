"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { galleryImages } from "@/data/gallery";
import { Link } from "@/i18n/navigation";
import { cx } from "@/lib/cn";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { Locale } from "@/i18n/routing";

const masonryClass = [
  "col-span-2 row-span-2 min-h-[280px] sm:min-h-[420px]",
  "col-span-2 min-h-[180px] sm:min-h-[220px]",
  "col-span-1 min-h-[160px] sm:min-h-[200px]",
  "col-span-1 min-h-[200px] sm:min-h-[240px]",
  "col-span-2 min-h-[140px] sm:min-h-[180px]",
  "col-span-1 min-h-[160px]",
  "col-span-1 min-h-[200px]",
  "col-span-2 min-h-[180px] sm:min-h-[240px]",
];

export function GalleryPreview() {
  const t = useTranslations("galleryPage");
  const tc = useTranslations("cta");
  const locale = useLocale() as Locale;
  const [active, setActive] = useState<number | null>(null);
  const images = galleryImages.slice(0, 8);

  const open = active !== null ? images[active] : null;

  return (
    <section className="chapter-pad bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-medium tracking-tight text-aegean sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <Link href="/gallery" className="text-link">
            {tc("viewGallery")} →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-5">
          {images.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setActive(i)}
              className={cx(
                "group relative overflow-hidden text-left",
                masonryClass[i % masonryClass.length],
              )}
            >
              <PlaceholderImage
                src={img.src}
                alt={img.alt[locale]}
                className="absolute inset-0 h-full w-full"
                aspect="aspect-auto"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </button>
          ))}
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={open.alt[locale]}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 text-sm uppercase tracking-widest text-white/80 hover:text-white"
            onClick={() => setActive(null)}
          >
            {t("close")}
          </button>
          <div
            className="relative h-[70vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={open.src}
              alt={open.alt[locale]}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
