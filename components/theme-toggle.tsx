"use client";

import { useSyncExternalStore } from "react";

function syncThemeColor() {
  const color = getComputedStyle(document.documentElement)
    .getPropertyValue("--background")
    .trim();
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", color);
}

// The theme lives on <html class="dark">, set by the head script before paint.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

export default function ThemeToggle() {
  // null on the server: the theme is not known until the client renders.
  const dark = useSyncExternalStore<boolean | null>(
    subscribe,
    () => document.documentElement.classList.contains("dark"),
    () => null,
  );

  const toggle = () => {
    const next = !dark;
    const apply = () => {
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      syncThemeColor();
    };

    if (document.startViewTransition) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  };

  if (dark === null) return <div className="w-10 h-5" />;

  return (
    <button
      onClick={toggle}
      className="relative w-10 h-5 rounded-full border border-foreground cursor-pointer"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      role="switch"
      aria-checked={dark}
    >
      <span
        className={`absolute top-1/2 left-1 -translate-y-1/2 w-3 h-3 rounded-full bg-foreground transition-transform duration-200 ease-in-out ${dark ? "translate-x-4.5" : ""}`}
      />
    </button>
  );
}
