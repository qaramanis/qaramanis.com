"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const montageImages = [
  "https://8mxjmxhvgtye4fln.public.blob.vercel-storage.com/DKP_2271.jpg",
  "https://8mxjmxhvgtye4fln.public.blob.vercel-storage.com/DKP_2286.jpg",
  "https://8mxjmxhvgtye4fln.public.blob.vercel-storage.com/DKP_2359.jpg",
  "https://8mxjmxhvgtye4fln.public.blob.vercel-storage.com/DKP_2296.jpg",
  "https://8mxjmxhvgtye4fln.public.blob.vercel-storage.com/DKP_2289.jpg",
  "https://8mxjmxhvgtye4fln.public.blob.vercel-storage.com/FTP_1294.jpg",
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
