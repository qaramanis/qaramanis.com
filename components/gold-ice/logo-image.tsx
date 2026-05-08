"use client";

import Image from "next/image";
import { useState } from "react";

export default function LogoImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-[70%] max-w-[390px] aspect-square">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-foreground/20 border-t-foreground/40 rounded-full animate-spin" />
        </div>
      )}
      <Image
        src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gold-ice/gold-ice-logo-square.png"
        alt="Gold Ice Logo"
        fill
        sizes="(max-width: 768px) 50vw, 390px"
        className={`object-contain transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        priority
      />
    </div>
  );
}
