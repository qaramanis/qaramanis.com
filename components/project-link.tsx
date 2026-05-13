import { Link as LinkIcon, LucideIcon } from "lucide-react";

type ProjectLinkProps = {
  label: string;
  icon?: LucideIcon;
  className?: string;
} & (
  | { href: string; onClick?: never }
  | { onClick: () => void; href?: never }
);

const BASE =
  "flex flex-row mt-4 md:mt-0 gap-2 size-fit btn-primary text-lg md:text-xl text-foreground font-medium group";

export default function ProjectLink({
  label,
  icon: Icon = LinkIcon,
  className = "col-span-6 md:col-span-3",
  href,
  onClick,
}: ProjectLinkProps) {
  const content = (
    <>
      <Icon className="self-center size-4.5 hidden md:block" />
      {label}
      <Icon className="self-center size-4 block md:hidden" />
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" className={`${BASE} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${BASE} ${className} cursor-pointer`}
    >
      {content}
    </button>
  );
}
