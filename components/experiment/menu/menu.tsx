"use client";

import React, { useState, useRef, useEffect } from "react";
import MenuItem from "./menu-item";
import { useHorizontalScroll } from "@/lib/hooks/useHorizontalScroll";

const menuItems = [
  {
    name: "Info",
    sectionId: "info",
  },
  {
    name: "Services",
    sectionId: "services",
  },
  {
    name: "Experience",
    sectionId: "experience",
  },
  {
    name: "Recognition",
    sectionId: "recognition",
  },
  {
    name: "Contact",
    sectionId: "contact",
  },
];

const Menu: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [naturalWidth, setNaturalWidth] = useState(0);
  const [hasMeasured, setHasMeasured] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { scrollProgress, lenisRef } = useHorizontalScroll(1100);

  useEffect(() => {
    if (menuRef.current && !hasMeasured) {
      const width = menuRef.current.offsetWidth;
      setNaturalWidth(width);
      setHasMeasured(true);
    }
  }, [hasMeasured]);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section && lenisRef.current) {
      const sectionLeft = section.offsetLeft;
      const targetScroll = sectionLeft - naturalWidth;
      lenisRef.current.scrollTo(targetScroll, { duration: 2.5 });
    }
  };

  const maxOffset =
    typeof window !== "undefined" && naturalWidth > 0
      ? window.innerWidth / 2 - naturalWidth / 2
      : 0;
  const menuOffset = Math.min(scrollProgress * maxOffset, maxOffset);

  return (
    <div className="fixed top-0 left-1/2 flex items-center pointer-events-none">
      <div
        ref={menuRef}
        className="flex flex-col h-screen px-[1rem] bg-transparent relative items-center justify-center pointer-events-auto w-fit"
        style={{
          transform: `translateX(calc(-50% - ${menuOffset}px))`,
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            index={index}
            hoverIndex={hoverIndex}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(item.sectionId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
