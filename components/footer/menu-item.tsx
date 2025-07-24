import Link from "next/link";
import React from "react";

interface MenuItemProps {
  item: {
    name: string;
    url: string;
  };
  index: number;
  hoverIndex: number | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  index,
  hoverIndex,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <div
      className={`
        menu-item cursor-pointer block
        transition-all duration-500 ease-in-out px-1 md:pr-[1rem]
        ${
          hoverIndex !== null && hoverIndex !== index
            ? "text-[#555555] scale-99"
            : "text-foreground scale-100"
        }
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <Link className="flex items-center" href={item.url}>
        {item.name}
      </Link>
    </div>
  );
};

export default MenuItem;
