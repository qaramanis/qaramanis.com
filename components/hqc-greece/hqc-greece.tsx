"use client";

import BrowserWindow from "@/components/browser-window";

export default function HqcGreeceWorkItem() {
  return (
    <div className="relative w-full h-full bg-[var(--color-hqc-greece)] flex flex-col items-center justify-center text-center px-4 md:px-8 overflow-hidden">
      <BrowserWindow className="relative w-8/10 max-w-xl">
        <div className="aspect-[1920/1027] bg-accent/30" />
      </BrowserWindow>
    </div>
  );
}
