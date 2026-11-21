"use client";

import { MoveRight } from "lucide-react";
import { scrollToElement } from "@/lib/scroll";

// Height of the sticky navigation bar on mobile (45px) plus a 16px gap,
// so the top border of the description shows below the navigation bar.
const SCROLL_OFFSET = 61;

// Mobile only: on a phone the description is below all the works.
export default function AboutMeLink() {
  return (
    <a
      href="#about"
      onClick={(event) => {
        event.preventDefault();
        scrollToElement("about", SCROLL_OFFSET);
      }}
      className="md:hidden flex w-fit items-center gap-2 py-2 text-lg btn-primary focus-visible:underline focus-visible:underline-offset-4"
    >
      About me
      <MoveRight size={24} aria-hidden />
    </a>
  );
}
