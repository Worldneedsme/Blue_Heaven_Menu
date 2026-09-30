"use client";

import Image from "next/image";
import { useState } from "react";
import { cx } from "@/lib/cn";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  label?: string;
};

export function PlaceholderImage({
  src,
  alt,
  className,
  aspect = "aspect-[4/3]",
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  label,
}: Props) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div
      className={cx(
        "relative overflow-hidden placeholder-media",
        aspect,
        className,
      )}
    >
      {showImage ? (
        <Image
          src={src!}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover img-zoom"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
          <span
            aria-hidden
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/60 text-primary"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="9" cy="10" r="1.5" fill="currentColor" />
              <path
                d="m7 16 3.5-3.5L14 16l2-2 3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-primary-deep/70">
            {label || "Photo coming soon"}
          </span>
        </div>
      )}
    </div>
  );
}
