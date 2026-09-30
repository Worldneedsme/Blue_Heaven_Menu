import { cx } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  light,
}: Props) {
  return (
    <div
      className={cx(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cx(
            "mb-3 text-[11px] font-medium uppercase tracking-[0.2em]",
            light ? "text-white/70" : "text-charcoal/55",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cx(
          "font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-aegean",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cx(
            "mt-4 max-w-xl text-base leading-relaxed sm:text-lg",
            light ? "text-white/80" : "text-charcoal/70",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
