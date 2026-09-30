"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { reviews } from "@/data/reviews";
import { localize } from "@/lib/i18n";
import type { Locale } from "@/i18n/routing";

export function ReviewsSection() {
  const locale = useLocale() as Locale;
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  return (
    <section className="chapter-pad bg-cream">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <blockquote>
          <p className="font-display text-2xl font-medium leading-snug text-aegean sm:text-3xl lg:text-4xl">
            “{localize(review.quote, locale)}”
          </p>
          <footer className="mt-8 text-sm text-charcoal/60">
            <span className="font-medium text-charcoal">{review.name}</span>
            <span className="mx-2 opacity-40">·</span>
            <span>{review.source}</span>
          </footer>
        </blockquote>

        <div className="mt-10 flex items-center justify-center gap-3">
          {reviews.map((r, i) => (
            <button
              key={r.id}
              type="button"
              aria-label={`Review ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-8 transition-colors ${
                i === index ? "bg-aegean" : "bg-charcoal/20 hover:bg-charcoal/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
