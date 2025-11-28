"use client";

import React, { useState, useRef, useEffect } from "react";
import MenuItem from "./menu-item";
import { useHorizontalScroll } from "@/lib/hooks/useHorizontalScroll";
import { useSectionDimensions } from "@/lib/hooks/useSectionDimensions";

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
  const { scrollProgress, lenisRef } = useHorizontalScroll(1200);
  const { setMenuWidth } = useSectionDimensions();

  useEffect(() => {
    if (menuRef.current && !hasMeasured) {
      const width = menuRef.current.offsetWidth;
      setNaturalWidth(width);
      setMenuWidth(width);
      setHasMeasured(true);
    }
  }, [setMenuWidth, hasMeasured]);

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

  const menuOffset =
    typeof window !== "undefined" && naturalWidth > 0
      ? scrollProgress * (window.innerWidth / 2 - naturalWidth / 2)
      : 0;

  const currentWidth =
    typeof window !== "undefined" && naturalWidth > 0 && hasMeasured
      ? window.innerWidth - scrollProgress * (window.innerWidth - naturalWidth)
      : "auto";

  return (
    <div className="fixed top-0 left-1/2 flex items-center pointer-events-none">
      <div
        ref={menuRef}
        className="flex flex-col h-screen px-[1rem] relative items-center justify-center pointer-events-auto bg-background"
        style={{
          transform: `translateX(calc(-50% - ${menuOffset}px))`,
          width:
            typeof currentWidth === "number"
              ? `${currentWidth}px`
              : currentWidth,
        }}
      >
        {/*{currentWidth}*/}
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
