"use client";

import Image from "next/image";

export default function Featured() {
  return (
    <div className="pt-[4rem]">
      <div className="pb-[1rem]">Featured</div>
      <div className="pt-[1rem] text-[#666666] block items-start  relative overflow-hidden group transition-all duration-500 ease-out">
        Contributing Organizer for
        <a href="https://www.example.com" className="pl-[0.5rem] text-white">
          &quot;The Web Conf 2026&quot;
        </a>
      </div>
      <div className="py-[1rem] pointer-events-none select-none">
        <Image
          src="/thewebconf.png"
          alt="Image"
          width={500}
          height={300}
          className="rounded-[0.5rem] w-full"
        />
      </div>
    </div>
  );
}
