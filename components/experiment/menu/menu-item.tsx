import React from "react";

interface MenuItemProps {
  item: {
    name: string;
    sectionId: string;
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
  const getTextColor = () => {
    if (hoverIndex !== null) {
      return hoverIndex === index ? "text-foreground" : "text-accent";
    }
    return "text-foreground";
  };

  return (
    <button
      className={`
        menu-item cursor-pointer
        transition-all duration-500 ease-in-out py-[2rem] px-[1rem] hover:scale-110
        ${getTextColor()}
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="flex items-center">{item.name}</div>
    </button>
  );
};

export default MenuItem;
