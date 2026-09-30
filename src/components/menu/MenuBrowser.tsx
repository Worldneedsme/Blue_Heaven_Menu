"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { localize } from "@/lib/i18n";
import type { Locale } from "@/i18n/routing";
import { formatMenuPrice, type MenuCategory } from "@/data/menu";
import { cx } from "@/lib/cn";

export function MenuBrowser({
  categories,
  locale,
  labels,
}: {
  categories: MenuCategory[];
  locale: Locale;
  labels: {
    categories: string;
    featured: string;
    askPrice: string;
    itemCount: string;
  };
}) {
  const [active, setActive] = useState(categories[0]?.id || "");
  const listRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const current = useMemo(
    () => categories.find((c) => c.id === active) || categories[0],
    [active, categories],
  );

  useEffect(() => {
    const chip = chipRefs.current[active];
    chip?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  if (!current) return null;

  const selectCategory = (id: string) => {
    setActive(id);
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[260px_1fr] lg:gap-12 lg:px-8">
      <aside className="sticky top-16 z-20 border-b border-charcoal/10 bg-cream/95 backdrop-blur-md lg:static lg:border-b-0 lg:bg-transparent lg:backdrop-blur-none">
        <div className="px-4 py-3 sm:px-6 lg:px-0 lg:py-0">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/55">
            {labels.categories}
          </p>
          <div
            className={cx(
              "flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              "snap-x snap-mandatory",
              "lg:flex-col lg:overflow-visible lg:pb-0 lg:snap-none",
            )}
            role="tablist"
            aria-label={labels.categories}
          >
            {categories.map((category) => {
              const selected = active === category.id;
              return (
                <button
                  key={category.id}
                  ref={(el) => {
                    chipRefs.current[category.id] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => selectCategory(category.id)}
                  className={cx(
                    "snap-start shrink-0 rounded-sm px-4 py-3 text-left text-sm font-semibold transition",
                    "min-h-11 lg:min-h-0 lg:w-full lg:px-3 lg:py-2.5 lg:text-[13px]",
                    selected
                      ? "bg-aegean text-white shadow-sm"
                      : "border border-charcoal/15 bg-white text-charcoal/75 hover:border-charcoal/35 hover:text-charcoal",
                  )}
                >
                  {localize(category.name, locale)}
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <div
        ref={listRef}
        className="scroll-mt-36 px-4 pb-8 pt-6 sm:px-6 lg:px-0 lg:pb-0 lg:pt-0"
      >
        <h2 className="font-display text-2xl font-medium text-aegean sm:text-3xl">
          {localize(current.name, locale)}
        </h2>
        <p className="mt-1 text-sm text-charcoal/50">
          {labels.itemCount.replace("{count}", String(current.items.length))}
        </p>

        <ul className="mt-6 divide-y divide-charcoal/10 border-y border-charcoal/10">
          {current.items.map((item) => {
            const price = formatMenuPrice(item.price, item.currency);
            const description = localize(item.description, locale);
            const displayPrice = price === "PRICE" ? labels.askPrice : price;

            return (
              <li key={item.id} className="py-4 sm:py-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg leading-snug text-aegean sm:text-xl">
                      {localize(item.name, locale)}
                    </h3>
                    {description ? (
                      <p className="mt-1.5 text-sm leading-relaxed text-charcoal/60">
                        {description}
                      </p>
                    ) : null}
                  </div>
                  <p className="shrink-0 pt-0.5 text-base font-semibold tabular-nums text-aegean sm:text-lg">
                    {displayPrice}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
