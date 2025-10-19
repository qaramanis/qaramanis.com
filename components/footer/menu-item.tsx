import React from "react";

interface MenuItemProps {
  item: {
    name: string;
    url: string;
    download?: string;
  };
  index: number;
  hoverIndex: number | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  index,
  hoverIndex,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <a
      href={item.url}
      target={
        item.url.startsWith("mailto:") || item.url.startsWith("/")
          ? "_self"
          : "_blank"
      }
      rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
      download={item.download}
      className={`
        menu-item cursor-pointer block no-underline
        transition-all duration-500 ease-in-out px-1 md:pr-[1rem] hover:underline underline-offset-2 decoration-1
        ${
          hoverIndex !== null && hoverIndex !== index
            ? "text-accent/50"
            : "text-foreground"
        }
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center">{item.name}</div>
    </a>
  );
};

export default MenuItem;
