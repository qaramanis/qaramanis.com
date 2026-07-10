"use client";

import Image from "next/image";
import BrowserWindow from "@/components/browser-window";

export default function AdrenalineSpikeWorkItem() {
  return (
    <div className="relative w-full h-full bg-foreground/40 flex flex-col items-center justify-center text-center px-4 md:px-8 overflow-hidden">
      <Image
        src="/adrenaline-spike/banner.png"
        alt="Adrenaline Spike"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <BrowserWindow className="relative w-8/10 max-w-xl">
        <Image
          src="/adrenaline-spike/screenshot1.png"
          alt="Adrenaline Spike website hero"
          width={711}
          height={382}
          className="w-full h-auto object-contain"
          priority
        />
      </BrowserWindow>
    </div>
  );
}
