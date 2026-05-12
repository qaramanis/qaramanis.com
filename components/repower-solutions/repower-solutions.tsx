"use client";

import Image from "next/image";
import BrowserWindow from "@/components/browser-window";

export default function RepowerSolutionsWorkItem() {
  return (
    <div className="relative w-full h-full bg-foreground/40 flex flex-col items-center justify-center text-center px-4 md:px-8 overflow-hidden">
      <Image
        src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/repower-item-1.jpg"
        alt="Repower Solutions"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <BrowserWindow className="relative w-8/10 max-w-xl">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/repower-solutions/repower-1.png"
          alt="Repower Solutions logo"
          width={400}
          height={400}
          className="w-full h-auto object-contain"
          priority
        />
      </BrowserWindow>
    </div>
  );
}
