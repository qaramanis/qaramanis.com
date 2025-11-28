"use client";

import React from "react";

interface SectionProps {
  id: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <div
      id={id}
      className="min-h-screen min-w-[100vw]  flex items-center justify-center flex-shrink-0 p-[4rem]"
    >
      {children || <div className="text-foreground text-4xl">{id}</div>}
    </div>
  );
};

export default Section;
