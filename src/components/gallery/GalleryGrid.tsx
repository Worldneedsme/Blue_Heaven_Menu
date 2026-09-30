"use client";

import { useEffect, useMemo, useState } from "react";
import {
  galleryCategories,
  type GalleryCategory,
  type GalleryImage,
} from "@/data/gallery";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { cx } from "@/lib/cn";
import type { Locale } from "@/i18n/routing";

type Labels = {
  all: string;
  hotel: string;
  rooms: string;
  restaurant: string;
  food: string;
  massage: string;
  close: string;
  previous: string;
  next: string;
};

export function GalleryGrid({
  images,
  locale,
  labels,
}: {
  images: GalleryImage[];
  locale: Locale;
  labels: Labels;
}) {
  const [filter, setFilter] = useState<"all" | GalleryCategory>("all");
  const [index, setIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? images
        : images.filter((img) => img.category === filter),
    [filter, images],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight")
        setIndex((i) => (i === null ? i : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setIndex((i) =>
          i === null ? i : (i - 1 + filtered.length) % filtered.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, filtered.length]);

  const categoryLabel = (key: "all" | GalleryCategory) => labels[key];

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {(["all", ...galleryCategories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setFilter(cat);
              setIndex(null);
            }}
            className={cx(
              "px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] transition",
              filter === cat
                ? "bg-primary-deep text-white"
                : "border border-ink/10 text-ink-muted hover:border-ink/30 hover:text-ink",
            )}
          >
            {categoryLabel(cat)}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
        {filtered.map((image, i) => (
          <button
            key={image.id}
            type="button"
            className="group mb-3 block w-full overflow-hidden focus-visible:outline-none"
            onClick={() => setIndex(i)}
          >
            <PlaceholderImage
              src={image.src}
              alt={image.alt[locale]}
              aspect="aspect-[4/3]"
              className="w-full"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </button>
        ))}
      </div>

      {index !== null && filtered[index] ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={filtered[index].alt[locale]}
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-md bg-white/10 px-3 py-2 text-sm text-white"
            onClick={() => setIndex(null)}
          >
            {labels.close}
          </button>
          <button
            type="button"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md bg-white/10 px-3 py-3 text-white"
            aria-label={labels.previous}
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) =>
                i === null ? i : (i - 1 + filtered.length) % filtered.length,
              );
            }}
          >
            ‹
          </button>
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <PlaceholderImage
              src={filtered[index].src}
              alt={filtered[index].alt[locale]}
              aspect="aspect-[16/10]"
              sizes="100vw"
            />
            <p className="mt-3 text-center text-sm text-white/80">
              {filtered[index].alt[locale]}
            </p>
          </div>
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-white/10 px-3 py-3 text-white"
            aria-label={labels.next}
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? i : (i + 1) % filtered.length));
            }}
          >
            ›
          </button>
        </div>
      ) : null}
    </div>
  );
}
