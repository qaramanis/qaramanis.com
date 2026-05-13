"use client";

import LogoImage from "./logo-image";
import SnowfallBackground from "./snowfall-background";

export default function GoldIceWorkItem() {
  return (
    <div className="relative bg-[var(--color-gold-ice)] w-full h-full flex flex-col items-center justify-center text-center gap-4 px-4 overflow-hidden">
      <SnowfallBackground />
      <LogoImage />
    </div>  
  );
}
