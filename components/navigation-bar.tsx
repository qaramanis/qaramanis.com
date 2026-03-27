"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import TextType from "./text-type";
import ThemeToggle from "./theme-toggle";
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
    "Branding / Digital Media",
    "Design Strategy",
    "System Design",
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
      className={`sticky top-0 z-10 flex flex-row items-center justify-between w-screen -ml-2 md:-ml-4 lg:-ml-8 px-2 md:px-4 lg:px-8 text-xl py-2 border-b bg-background transition-[border-color] duration-300 ${scrolled ? "border-foreground" : "border-transparent"}`}
    >
      <div className="flex items-center gap-4 md:gap-6">
        <div onClick={handleLogoClick} className="cursor-pointer btn-primary">
          Apostolos K.
        </div>
        <ThemeToggle />
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
