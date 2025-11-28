"use client";

import Menu from "@/components/experiment/menu/menu";
import { SectionDimensionsProvider } from "@/lib/hooks/useSectionDimensions";

export default function Home() {
  return (
    <SectionDimensionsProvider>
      <Menu />
      <div className="flex gap-[4rem] ml-[100vw]">
        <section
          id="info"
          className="min-h-screen min-w-screen flex items-center justify-center flex-shrink-0 p-[4rem]"
        >
          Info
        </section>
        <section
          id="services"
          className="min-h-screen min-w-screen flex items-center justify-center flex-shrink-0 p-[4rem]"
        >
          Services
        </section>
        <section
          id="experience"
          className="min-h-screen min-w-screen flex items-center justify-center flex-shrink-0 p-[4rem]"
        >
          Experience
        </section>
        <section
          id="recognition"
          className="min-h-screen min-w-screen flex items-center justify-center flex-shrink-0 p-[4rem]"
        >
          Recognition
        </section>
        <section
          id="contact"
          className="min-h-screen min-w-screen flex items-center justify-center flex-shrink-0 p-[4rem]"
        >
          Contact
        </section>
      </div>
    </SectionDimensionsProvider>
  );
}
