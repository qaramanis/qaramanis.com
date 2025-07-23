"use client";

import React, { useRef, useState } from "react";
import { redirect } from "next/navigation";
import MenuItem from "./menu-item";

const menuItems = [
  {
    name: "X.com",
    url: "https://x.com/qaramanis",
  },
  {
    name: "GitHub",
    url: "https://github.com/qaramanis",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/apostolos-karamanis/",
  },
  {
    name: "Mail",
    url: "mailto:apostkaram@gmail.com",
  },
];

const Menu: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleItemClick = (url: string) => {
    redirect(url);
  };

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="relative overflow-hidden">
      <div id="menu" className="flex items-center relative z-10">
        <div
          id="menu-items"
          className="flex flex-row relative"
          data-active-index={hoverIndex !== null ? hoverIndex : undefined}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
                if (index === 0) ref.current = el;
              }}
            >
              <MenuItem
                item={item}
                index={index}
                hoverIndex={hoverIndex}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleItemClick(item.url)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
