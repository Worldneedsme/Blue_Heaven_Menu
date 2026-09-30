"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { localize } from "@/lib/i18n";
import type { Locale } from "@/i18n/routing";
import {
  formatMenuPrice,
  isDessertCategory,
  isDrinkCategory,
  type MenuCategory,
} from "@/data/menu";
import { cx } from "@/lib/cn";

type Segment = "food" | "drinks" | "desserts";

const logoBlue = "#2e6b8b";

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
    foodSection: string;
    drinksSection: string;
    dessertsSection: string;
    search: string;
    noResults: string;
    kitchenHoursLabel: string;
    kitchenHours: string;
    barHoursLabel: string;
    barHours: string;
  };
}) {
  const foodCategories = useMemo(
    () =>
      categories.filter(
        (c) => !isDrinkCategory(c.id) && !isDessertCategory(c.id),
      ),
    [categories],
  );
  const drinkCategories = useMemo(
    () => categories.filter((c) => isDrinkCategory(c.id)),
    [categories],
  );
  const dessertCategories = useMemo(
    () => categories.filter((c) => isDessertCategory(c.id)),
    [categories],
  );

  const [segment, setSegment] = useState<Segment>("food");
  const [active, setActive] = useState(foodCategories[0]?.id || "");
  const [query, setQuery] = useState("");
  const chipRowRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const ignoreSpy = useRef(false);

  const segmentCategories =
    segment === "food"
      ? foodCategories
      : segment === "drinks"
        ? drinkCategories
        : dessertCategories;

  const normalizedQuery = query.trim().toLocaleLowerCase(locale);
  const searching = normalizedQuery.length > 0;

  const results = useMemo(() => {
    if (!searching) return [];
    return categories.flatMap((category) =>
      category.items
        .filter((item) =>
          localize(item.name, locale)
            .toLocaleLowerCase(locale)
            .includes(normalizedQuery),
        )
        .map((item) => ({ category, item })),
    );
  }, [categories, locale, normalizedQuery, searching]);

  const current = useMemo(() => {
    const fromSegment = segmentCategories.find((c) => c.id === active);
    return fromSegment || segmentCategories[0] || categories[0];
  }, [active, segmentCategories, categories]);

  useEffect(() => {
    const row = chipRowRef.current;
    const chip = chipRefs.current[current?.id || ""];
    if (!row || !chip) return;
    const left = chip.offsetLeft - row.clientWidth / 2 + chip.offsetWidth / 2;
    row.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [current?.id, segment]);

  useEffect(() => {
    if (searching) return;
    const ids = segmentCategories.map((category) => category.id);
    if (ids.length === 0) return;

    const update = () => {
      if (ignoreSpy.current) return;
      const desktop = window.innerWidth >= 1024;
      const bar = document.querySelector("[data-menu-bar]");
      const marker = desktop
        ? 96
        : (bar?.getBoundingClientRect().bottom ?? 160) + 12;
      let nextId = ids[0];
      for (const id of ids) {
        const section = sectionRefs.current[id];
        if (!section) continue;
        if (section.getBoundingClientRect().top <= marker) nextId = id;
      }
      setActive((prev) => (prev === nextId ? prev : nextId));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [searching, segment, segmentCategories]);

  if (!current) return null;

  const scrollToCategory = (id: string) => {
    const section = sectionRefs.current[id];
    if (!section) return;
    const desktop = window.innerWidth >= 1024;
    const bar = document.querySelector("[data-menu-bar]");
    const offset = desktop
      ? 88
      : (bar?.getBoundingClientRect().bottom ?? 160) + 8;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    ignoreSpy.current = true;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

    let settled = false;
    const release = () => {
      if (settled) return;
      settled = true;
      ignoreSpy.current = false;
    };
    window.addEventListener("scrollend", release, { once: true });
    window.addEventListener("touchstart", release, { once: true, passive: true });
    window.setTimeout(release, 900);
  };

  const selectSegment = (next: Segment) => {
    ignoreSpy.current = true;
    setSegment(next);
    const nextCats =
      next === "food"
        ? foodCategories
        : next === "drinks"
          ? drinkCategories
          : dessertCategories;
    const nextId = nextCats[0]?.id;
    if (nextId) setActive(nextId);
    setQuery("");
    if (!nextId) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToCategory(nextId));
    });
  };

  const segments: { id: Segment; label: string }[] = [
    { id: "food", label: labels.foodSection },
    { id: "drinks", label: labels.drinksSection },
    { id: "desserts", label: labels.dessertsSection },
  ];

  const desktopGroups: { label: string; items: MenuCategory[] }[] = [
    { label: labels.foodSection, items: foodCategories },
    { label: labels.drinksSection, items: drinkCategories },
    { label: labels.dessertsSection, items: dessertCategories },
  ];

  return (
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[260px_1fr] lg:gap-12 lg:px-8">
      {/* Mobile: groups + category row stay under the header while the dish list scrolls. */}
      <div
        data-menu-bar
        className="sticky top-[72px] z-20 border-b border-charcoal/10 bg-white lg:static lg:col-span-2 lg:z-auto lg:border-0 lg:bg-transparent"
      >
        <div className="px-4 py-3 lg:px-0 lg:pb-6 lg:pt-0">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={labels.search}
            aria-label={labels.search}
            className="w-full border border-charcoal/15 bg-white px-4 py-3 text-[16px] text-charcoal outline-none placeholder:text-charcoal/40 focus:border-[#2e6b8b]"
          />
        </div>
        <div className={searching ? "hidden" : "lg:hidden"}>
        <div className="grid grid-cols-3 border-b border-charcoal/10">
          {segments.map((item) => {
            const selected = segment === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => selectSegment(item.id)}
                className={cx(
                  "px-1 py-4 text-center text-[18px] font-bold uppercase tracking-[0.02em] transition",
                  selected ? "text-white" : "bg-white text-charcoal/55",
                )}
                style={selected ? { backgroundColor: logoBlue } : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          ref={chipRowRef}
          className="flex gap-2 overflow-x-auto px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {segmentCategories.map((category) => {
            const selected = current.id === category.id;
            return (
              <button
                key={`m-${category.id}`}
                ref={(el) => {
                  chipRefs.current[category.id] = el;
                }}
                type="button"
                onClick={() => {
                  ignoreSpy.current = true;
                  setActive(category.id);
                  setQuery("");
                  scrollToCategory(category.id);
                }}
                className={cx(
                  "snap-start shrink-0 rounded-sm px-4 py-3 text-[17px] font-semibold transition",
                  selected ? "text-white" : "bg-charcoal/[0.06] text-charcoal/70",
                )}
                style={selected ? { backgroundColor: logoBlue } : undefined}
              >
                {localize(category.name, locale)}
              </button>
            );
          })}
        </div>
        </div>
      </div>

      <aside className="hidden lg:block">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/55">
          {labels.categories}
        </p>
        <div className="space-y-6" role="tablist" aria-label={labels.categories}>
          {desktopGroups.map((group) =>
            group.items.length === 0 ? null : (
              <div key={group.label}>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/45">
                  {group.label}
                </p>
                <div className="flex flex-col gap-2">
                  {group.items.map((category) => {
                    const selected = current.id === category.id;
                    return (
                      <button
                        key={`d-${category.id}`}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => {
                          ignoreSpy.current = true;
                          if (isDrinkCategory(category.id)) setSegment("drinks");
                          else if (isDessertCategory(category.id))
                            setSegment("desserts");
                          else setSegment("food");
                          setActive(category.id);
                          setQuery("");
                          requestAnimationFrame(() => {
                            requestAnimationFrame(() => scrollToCategory(category.id));
                          });
                        }}
                        className={cx(
                          "w-full px-3 py-2.5 text-left text-[13px] font-semibold transition",
                          selected
                            ? "text-white"
                            : "border border-charcoal/10 text-charcoal/60 hover:border-charcoal/30 hover:text-charcoal",
                        )}
                        style={selected ? { backgroundColor: logoBlue } : undefined}
                      >
                        {localize(category.name, locale)}
                      </button>
                    );
                  })}
                </div>
              </div>
            ),
          )}
        </div>
      </aside>

      <div
        data-menu-list
        className="bg-white px-4 pb-[calc(100dvh-14rem)] pt-5 sm:px-6 lg:bg-transparent lg:px-0 lg:pb-0 lg:pt-0"
      >
        {searching && results.length === 0 ? (
          <p className="py-8 text-[16px] text-charcoal/55">{labels.noResults}</p>
        ) : searching ? (
          <ul className="divide-y divide-charcoal/10 lg:border-y lg:border-charcoal/10">
            {results.map(({ category, item }) => {
              const price = formatMenuPrice(item.price, item.currency);
              const description = localize(item.description, locale);
              const displayPrice = price === "PRICE" ? labels.askPrice : price;

              return (
                <li key={`${category.id}-${item.id}`} className="py-4 lg:py-5">
                  <div className="lg:hidden">
                    <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-charcoal/40">
                      {localize(category.name, locale)}
                    </p>
                    <h3 className="text-[20px] font-bold leading-snug text-charcoal">
                      {localize(item.name, locale)}
                    </h3>
                    {description ? (
                      <p className="mt-1 text-[13px] leading-relaxed text-charcoal/50">
                        {description}
                      </p>
                    ) : null}
                    <p className="mt-2 text-[18px] font-bold tabular-nums text-charcoal">
                      {displayPrice}
                    </p>
                  </div>

                  <div className="hidden items-baseline justify-between gap-6 lg:flex">
                    <div className="min-w-0">
                      <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-charcoal/40">
                        {localize(category.name, locale)}
                      </p>
                      <h3 className="font-display text-xl text-aegean sm:text-2xl">
                        {localize(item.name, locale)}
                      </h3>
                      {description ? (
                        <p className="mt-1 text-sm text-charcoal/55">
                          {description}
                        </p>
                      ) : null}
                    </div>
                    <p className="shrink-0 font-medium tabular-nums text-charcoal">
                      {displayPrice}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="space-y-10">
            {segmentCategories.map((category) => (
              <section
                key={category.id}
                ref={(el) => {
                  sectionRefs.current[category.id] = el;
                }}
                data-menu-section={category.id}
              >
                <div className="mb-2 lg:hidden">
                  <h2
                    className="text-lg font-bold uppercase tracking-[0.1em]"
                    style={{ color: logoBlue }}
                  >
                    {localize(category.name, locale)}
                  </h2>
                  <div
                    className="mt-1.5 h-0.5 w-10"
                    style={{ backgroundColor: logoBlue }}
                  />
                </div>
                <h2 className="hidden font-display text-3xl font-medium text-aegean lg:block">
                  {localize(category.name, locale)}
                </h2>
                <ul className="divide-y divide-charcoal/10 lg:mt-6 lg:border-y lg:border-charcoal/10">
                  {category.items.map((item) => {
                    const price = formatMenuPrice(item.price, item.currency);
                    const description = localize(item.description, locale);
                    const displayPrice = price === "PRICE" ? labels.askPrice : price;

                    return (
                      <li key={item.id} className="py-4 lg:py-5">
                        <div className="lg:hidden">
                          <h3 className="text-[20px] font-bold leading-snug text-charcoal">
                            {localize(item.name, locale)}
                          </h3>
                          {description ? (
                            <p className="mt-1 text-[13px] leading-relaxed text-charcoal/50">
                              {description}
                            </p>
                          ) : null}
                          <p className="mt-2 text-[18px] font-bold tabular-nums text-charcoal">
                            {displayPrice}
                          </p>
                        </div>

                        <div className="hidden items-baseline justify-between gap-6 lg:flex">
                          <div className="min-w-0">
                            <h3 className="font-display text-xl text-aegean sm:text-2xl">
                              {localize(item.name, locale)}
                            </h3>
                            {description ? (
                              <p className="mt-1 text-sm text-charcoal/55">
                                {description}
                              </p>
                            ) : null}
                          </div>
                          <p className="shrink-0 font-medium tabular-nums text-charcoal">
                            {displayPrice}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        )}

        <div className="mt-10 border-t border-charcoal/10 pt-6">
          <p className="text-[15px] font-semibold text-charcoal">
            {labels.kitchenHoursLabel}
            <span className="ml-3 font-medium tabular-nums text-charcoal/70">
              {labels.kitchenHours}
            </span>
          </p>
          <p className="mt-2 text-[15px] font-semibold text-charcoal">
            {labels.barHoursLabel}
            <span className="ml-3 font-medium tabular-nums text-charcoal/70">
              {labels.barHours}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
