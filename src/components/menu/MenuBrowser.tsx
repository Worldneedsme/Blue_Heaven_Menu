"use client";

import { useMemo, useState } from "react";
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
  };
}) {
  const [active, setActive] = useState(categories[0]?.id || "");

  const current = useMemo(
    () => categories.find((c) => c.id === active) || categories[0],
    [active, categories],
  );

  if (!current) return null;

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-8">
      <aside>
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/55">
          {labels.categories}
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActive(category.id)}
              className={cx(
                "shrink-0 px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-[0.1em] transition",
                active === category.id
                  ? "bg-aegean text-white"
                  : "border border-charcoal/10 text-charcoal/60 hover:border-charcoal/30 hover:text-charcoal",
              )}
            >
              {localize(category.name, locale)}
            </button>
          ))}
        </div>
      </aside>

      <div>
        <h2 className="font-display text-3xl font-medium text-aegean">
          {localize(current.name, locale)}
        </h2>
        <ul className="mt-8">
          {current.items.map((item) => {
            const price = formatMenuPrice(item.price, item.currency);
            const description = localize(item.description, locale);
            return (
              <li
                key={item.id}
                className="border-b border-charcoal/10 py-5 first:border-t"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <div className="min-w-0">
                    <h3 className="font-display text-xl text-aegean sm:text-2xl">
                      {localize(item.name, locale)}
                    </h3>
                    {description ? (
                      <p className="mt-1 text-sm text-charcoal/55">{description}</p>
                    ) : null}
                  </div>
                  <p className="shrink-0 font-medium tabular-nums text-charcoal">
                    {price === "PRICE" ? labels.askPrice : price}
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
