"use client";

import TheWebConfLogo from "@/svgs/thewebconf-logo";
import UnicornScene from "../unicorn-scene/unicorn-scene";

// import Image from "next/image";

export default function Featured() {
  return (
    <div className="pt-[4rem] ">
      <div className="pb-[1rem]">Featured</div>
      <div className="pt-[1rem] text-[#666666] block items-start  relative overflow-hidden group transition-all duration-500 ease-out">
        Contributing Organizer for
        <a
          href="https://thewebconf.com/"
          className="pl-[0.5rem] text-white hover:underline"
        >
          &quot;The Web Conf 2026&quot;
        </a>
      </div>
      <div className="py-[1rem] pointer-events-none select-none ">
        {/* <Image
          src="/thewebconf.png"
          alt="Image"
          width={500}
          height={300}
          className="rounded-[0.5rem] w-full"
        /> */}

        <div className="w-full h-[50vh] rounded-full relative">
          <UnicornScene projectId="D44WtJNcYUNnkQfCweSm" />
          <div className="absolute inset-0 flex flex-col items-start p-4">
            <TheWebConfLogo className="w-12 h-12" />
          </div>
          {/* Version 1 - Left-aligned text */}
          {/* <div className="absolute inset-0 flex flex-col items-start self-end px-4 pb-8">
            <span className="font-writerReg text-[#0022FF] text-sm md:text-base">
              ATHENS — MAY 2026
            </span>
            <h1 className="text-black text-xl md:text-2xl tracking-tight mt-2">
              The t<span className="font-paraDis">oo</span>ls you will use
              <br />
              to<span className="font-paraDis">m</span>orrow — to
              <span className="font-paraDis">d</span>ay.
            </h1>
          </div> */}

          {/* Version 2 - Centered text */}
          <div className="absolute inset-0 flex flex-col items-center self-center">
            <span className="font-writerReg text-[#0022FF] text-base md:text-lg">
              ATHENS — MAY 2026
            </span>
            <h1 className="text-black text-center text-2xl md:text-3xl tracking-tight mt-2">
              The t<span className="font-paraDis">oo</span>ls you will use
              <br />
              to<span className="font-paraDis">m</span>orrow — to
              <span className="font-paraDis">d</span>ay.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
