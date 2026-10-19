"use client";

import { useState, useEffect, useRef } from "react";
import Image, { getImageProps } from "next/image";

const montageImages = [
  "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/montage/flow-lounge-montage-1.jpg",
  "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/montage/flow-lounge-montage-2.jpg",
  "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/montage/flow-lounge-montage-3.jpg",
  "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/montage/flow-lounge-montage-4.jpg",
  "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/montage/flow-lounge-montage-5.jpg",
  "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/montage/flow-lounge-montage-6.jpg",
];

export default function ImageMontage({
  className,
  sizes = "100vw",
}: {
  className?: string;
  sizes?: string;
}) {
  const [index, setIndex] = useState(0);
  const preloaded = useRef(false);

  // Once the first image has loaded (it is lazy, so only near the viewport),
  // preload the others with the same URLs that <Image> requests.
  const preloadAll = () => {
    if (preloaded.current) return;
    preloaded.current = true;
    montageImages.forEach((src) => {
      const { props } = getImageProps({ src, alt: "", fill: true, sizes });
      const img = new window.Image();
      img.sizes = props.sizes ?? "";
      img.srcset = props.srcSet ?? "";
      img.src = props.src;
    });
  };

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
      sizes={sizes}
      onLoad={preloadAll}
      className={className}
    />
  );
}
