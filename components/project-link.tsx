import { Link as LinkIcon, LucideIcon } from "lucide-react";

type ProjectLinkProps = {
  label: string;
  icon?: LucideIcon;
  className?: string;
  ariaLabel?: string;
} & (
  | { href: string; onClick?: never; disabled?: never }
  | { onClick: () => void; href?: never; disabled?: never }
  | { disabled: true; href?: never; onClick?: never }
);

const BASE =
  "flex flex-row mt-4 md:mt-0 gap-2 size-fit btn-primary text-lg md:text-xl text-foreground font-medium group";

export default function ProjectLink({
  label,
  icon: Icon = LinkIcon,
  className = "col-span-6 md:col-span-3",
  ariaLabel,
  href,
  onClick,
  disabled,
}: ProjectLinkProps) {
  const content = (
    <>
      <Icon className="self-center size-4.5 hidden md:block" aria-hidden />
      {label}
      <Icon className="self-center size-4 block md:hidden" aria-hidden />
    </>
  );

  if (disabled) {
    return (
      <span aria-disabled="true" className={`${BASE} ${className}`}>
        {content}
      </span>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={`${BASE} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${BASE} ${className} cursor-pointer`}
    >
      {content}
    </button>
  );
}
