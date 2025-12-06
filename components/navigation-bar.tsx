"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import TextType from "./text-type";
import { scrollToTop } from "@/lib/scroll";

export default function NavigationBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const texts = [
    "Web Design",
    "Creative Direction",
    "Branding",
    "Design Strategy",
    "Digital Media",
  ];

  const handleLogoClick = () => {
    if (pathname === "/") {
      scrollToTop();
    } else {
      router.push("/");
    }
  };

  return (
    <div
      className={`sticky top-0 z-10 flex flex-row items-center justify-between w-full text-xl mb-4 md:mb-8 lg:mb-16 bg-background py-2 border-b transition-all duration-300 ${scrolled ? "border-foreground" : "border-transparent"}`}
    >
      <div onClick={handleLogoClick} className="cursor-pointer btn-primary">
        Apostolos K.
      </div>
      <TextType
        text={texts}
        typingSpeed={75}
        deletingSpeed={75}
        initialDelay={1000}
        pauseDuration={1000}
        showCursor={true}
        cursorCharacter="_"
      />
      <a href="mailto:apostkaram@gmail.com" className="btn-primary">
        Get in Touch
      </a>
    </div>
  );
}
