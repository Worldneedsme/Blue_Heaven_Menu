import { getEmailLink, getPhoneLink } from "@/data/hotel";
import { ButtonLink } from "@/components/ui/Button";
import { cx } from "@/lib/cn";

type Props = {
  labels: {
    callUs: string;
    emailUs?: string;
    contactUs?: string;
  };
  className?: string;
  compact?: boolean;
  /** If true, Call Us always uses tel: (e.g. on the contact page). */
  alwaysDial?: boolean;
};

export function ContactCTA({
  labels,
  className,
  compact,
  alwaysDial = false,
}: Props) {
  const size = compact ? "md" : "lg";

  return (
    <div className={cx("flex flex-wrap gap-3", className)}>
      {alwaysDial ? (
        <ButtonLink href={getPhoneLink()} variant="primary" size={size} external>
          {labels.callUs}
        </ButtonLink>
      ) : (
        <>
          <ButtonLink
            href={getPhoneLink()}
            variant="primary"
            size={size}
            external
            className="md:hidden"
          >
            {labels.callUs}
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="primary"
            size={size}
            className="hidden md:inline-flex"
          >
            {labels.callUs}
          </ButtonLink>
        </>
      )}
      {labels.emailUs ? (
        <ButtonLink
          href={getEmailLink()}
          variant="secondary"
          size={size}
          external
        >
          {labels.emailUs}
        </ButtonLink>
      ) : null}
    </div>
  );
}
