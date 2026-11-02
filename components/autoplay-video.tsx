"use client";

import { useEffect, useRef } from "react";

interface AutoplayVideoProps {
  src: string;
  // Still shown before the video plays, and when it cannot play (reduced
  // motion, iOS Low Power Mode). Use the first frame, at the video's size.
  poster?: string;
  // Text alternative. Leave it out when the video is decorative.
  ariaLabel?: string;
  className?: string;
  // Above the fold: start downloading with the page, like next/image `priority`.
  priority?: boolean;
  onLoadedData?: () => void;
}

// Muted looping video that plays only while it is on (or near) the screen.
// Without `priority`, nothing is downloaded until it comes near the viewport.
// When the user prefers reduced motion, it does not play: it shows a still.
export default function AutoplayVideo({
  src,
  poster,
  ariaLabel,
  className,
  priority = false,
  onLoadedData,
}: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;

    const update = () => {
      if (visible && !reducedMotion.matches) {
        // Rejects when autoplay is blocked (e.g. iOS Low Power Mode).
        video.play().catch(() => {});
        return;
      }
      video.pause();
      // Reduced motion and no poster: load only the first frame as the still.
      if (visible && !video.poster && video.preload === "none") {
        video.preload = "metadata";
      }
    };

    // `autoPlay` can start a priority video before this effect runs.
    if (reducedMotion.matches) {
      video.pause();
      video.currentTime = 0;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        update();
      },
      { rootMargin: "50% 0px" },
    );
    observer.observe(video);
    reducedMotion.addEventListener("change", update);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      aria-label={ariaLabel}
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
