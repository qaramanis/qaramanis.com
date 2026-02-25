"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const montageImages = [
  "https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/flow-lounge-montage-1.jpg",
  "https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/flow-lounge-montage-2.jpg",
  "https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/flow-lounge-montage-3.jpg",
  "https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/flow-lounge-montage-4.jpg",
  "https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/flow-lounge-montage-5.jpg",
  "https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/flow-lounge-montage-6.jpg",
];

export default function ImageMontage({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  // Preload all images on mount
  useEffect(() => {
    montageImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % montageImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={montageImages[index]}
      alt="Flow Lounge"
      fill
      className={className}
    />
  );
}
