type SocialLinksProps = {
  instagram?: string;
  facebook?: string;
  /** Light text on dark hero vs cream footer */
  variant?: "hero" | "footer";
};

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.25 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M14 8.5V6.75c0-.69.56-1.25 1.25-1.25H17V3h-1.75A3.75 3.75 0 0 0 11.5 6.75V8.5H9.5V11h2v10h3V11H17l.5-2.5H14.5Z" />
    </svg>
  );
}

export function SocialLinks({
  instagram,
  facebook,
  variant = "hero",
}: SocialLinksProps) {
  if (!instagram && !facebook) return null;

  const isHero = variant === "hero";
  const linkClass = isHero
    ? "inline-flex items-center gap-2.5 rounded-sm border border-white/70 bg-white/10 px-4 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20"
    : "inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.12em] text-cream transition hover:text-white";

  const iconClass = isHero ? "h-5 w-5 shrink-0" : "h-5 w-5 shrink-0";

  return (
    <div className={`flex flex-wrap items-center ${isHero ? "gap-3" : "gap-5"}`}>
      {instagram ? (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <InstagramIcon className={iconClass} />
          Instagram
        </a>
      ) : null}
      {facebook ? (
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <FacebookIcon className={iconClass} />
          Facebook
        </a>
      ) : null}
    </div>
  );
}
