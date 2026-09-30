import { cx } from "@/lib/cn";
import { Link } from "@/i18n/navigation";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-aegean text-white hover:bg-primary-deep",
  secondary:
    "bg-transparent text-aegean border border-aegean/30 hover:border-aegean hover:bg-cream",
  outline:
    "bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal/40",
  accent:
    "bg-terracotta text-white hover:brightness-105",
  ghost:
    "bg-transparent text-white border border-white/60 hover:bg-white/10 hover:border-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-[11px] tracking-[0.14em] uppercase",
  md: "px-6 py-3 text-[11px] tracking-[0.14em] uppercase",
  lg: "px-8 py-3.5 text-xs tracking-[0.14em] uppercase",
};

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-none font-semibold transition-all duration-300 focus-visible:outline-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  onClick,
  ...props
}: CommonProps & {
  href: string;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = cx(
    "inline-flex items-center justify-center gap-2 rounded-none font-semibold transition-all duration-300 focus-visible:outline-none",
    variants[variant],
    sizes[size],
    className,
  );

  if (
    external ||
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("#")
  ) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
