"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    const apply = () => {
      setDark(next);
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
    };

    if (document.startViewTransition) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  };

  if (!mounted) return <div className="w-10 h-5" />;

  return (
    <button
      onClick={toggle}
      className="relative w-10 h-5 rounded-full border border-foreground cursor-pointer"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      role="switch"
      aria-checked={dark}
    >
      <span
        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-foreground transition-[left] duration-300 ${dark ? "left-5.5" : "left-1"}`}
      />
    </button>
  );
}
