import { useState, useEffect, useRef } from "react";
import Lenis from "lenis";

export const useHorizontalScroll = (maxScroll: number = 1200) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      orientation: "horizontal",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    const handleScroll = () => {
      const progress = Math.min(window.scrollX / maxScroll, 1);
      setScrollProgress(progress);
    };

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, [maxScroll]);

  return { scrollProgress, lenisRef };
};
