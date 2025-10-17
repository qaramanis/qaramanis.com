"use client";

import WebConfLogo from "@/svgs/webconf-logo";
import UnicornScene from "../unicorn-scene/unicorn-scene";

export default function WebConf() {
  const handleOnClick = () => {
    window.open("https://thewebconf.com/", "_blank");
  };

  return (
    <div>
      <div className="pt-[1rem] text-accent block items-start relative overflow-hidden group transition-all duration-500 ease-out">
        Contributing Organizer for{" "}
        <a
          onClick={handleOnClick}
          className="text-foreground hover:underline underline-offset-2 cursor-pointer"
        >
          &quot;The Web Conf 2026&quot;
        </a>
      </div>
      <div
        className="py-[1rem] select-none cursor-pointer"
        onClick={handleOnClick}
      >
        <div className="w-full aspect-square md:aspect-[5/4] relative border-1 border-accent rounded-[0.5rem]">
          <UnicornScene projectId="D44WtJNcYUNnkQfCweSm" />
          <div className="absolute inset-0 flex flex-col items-start p-4">
            <WebConfLogo className="w-12 h-12" />
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
          <div className="absolute inset-0 flex flex-col items-center self-center justify-center">
            <span className="font-writerReg text-[#0022FF] text-base md:text-lg">
              ATHENS — MAY 2026
            </span>
            <h1 className="text-foreground text-center text-2xl md:text-3xl tracking-tight mt-2">
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
