"use client";

import { useEffect, useRef } from "react";

interface AutoplayVideoProps {
  src: string;
  className?: string;
  // Above the fold: start downloading with the page, like next/image `priority`.
  priority?: boolean;
  onLoadedData?: () => void;
}

// Muted looping video that plays only while it is on (or near) the screen.
// Without `priority`, nothing is downloaded until it comes near the viewport.
export default function AutoplayVideo({
  src,
  className,
  priority = false,
  onLoadedData,
}: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Rejects when autoplay is blocked (e.g. iOS Low Power Mode).
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "50% 0px" },
    );
    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay={priority}
      preload={priority ? "auto" : "none"}
      loop
      muted
      playsInline
      onLoadedData={onLoadedData}
      className={className}
    />
  );
}
