"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SectionDimensionsContextType {
  menuWidth: number;
  windowWidth: number;
  sectionWidth: number;
  setMenuWidth: (width: number) => void;
}

const SectionDimensionsContext = createContext<
  SectionDimensionsContextType | undefined
>(undefined);

export const SectionDimensionsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [menuWidth, setMenuWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionWidth = windowWidth - menuWidth;

  return (
    <SectionDimensionsContext.Provider
      value={{ menuWidth, windowWidth, sectionWidth, setMenuWidth }}
    >
      {children}
    </SectionDimensionsContext.Provider>
  );
};

export const useSectionDimensions = () => {
  const context = useContext(SectionDimensionsContext);
  if (!context) {
    throw new Error(
      "useSectionDimensions must be used within SectionDimensionsProvider",
    );
  }
  return context;
};
