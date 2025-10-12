import { Play, Pause, Minus, Plus } from "lucide-react";
import NowPlaying from "@/components/spotify/now-playing";

export default function portPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex flex-col justify-between items-center w-[313px] h-[500px] bg-gradient-to-br from-[#425062] via-[#353b47] to-[#353b47] rounded-3xl pt-[12px] pb-[24px] border border-[#1F1E26] overflow-visible drop-shadow-lg">
        <div className="absolute top-0 left-10 w-[30px] h-[3px] bg-gradient-to-br from-[#425062] to-[#3C4555] -mt-1 rounded-t-xs border-[0.5px] border-[#1F1E26]"></div>
        <div className="absolute top-[87px] left-0 w-[3px] h-[50px] bg-gradient-to-br from-[#425062] to-[#3C4555] -ml-1 rounded-l-xs border-[0.5px] border-[#1F1E26]"></div>
        <div className="absolute top-[152px] left-0 w-[3px] h-[50px] bg-gradient-to-br from-[#425062] to-[#3C4555] -ml-1 rounded-l-xs border-[0.5px] border-[#1F1E26]"></div>
        <div className="relative flex items-center justify-center w-[289px] h-[210px] bg-black rounded-2xl overflow-hidden border border-[#1F1E26]">
          <NowPlaying />
          {/*<div className="absolute -left-5 -top-10 size-[75px] bg-white/75 rounded-full overflow-hidden blur-3xl"></div>*/}
        </div>
        <div className="relative flex items-center justify-center w-[220px] h-[220px] rounded-full bg-gradient-to-b from-[#2A2F3A] to-[#1F1E26] border border-[#1F1E26]">
          <div className="absolute size-[86px] bg-gradient-to-b from-[#1B1A22] to-[#2B2D3C] rounded-full border border-[#1F1E26]"></div>
          <div className="flex flex-col justify-between items-center size-full absolute top-0 text-accent p-2">
            <Plus
              size={24}
              className="cursor-pointer hover:text-white transition-all duration-200"
            />
            <div className="w-full flex flex-row justify-between items-center h-full">
              <div className="flex flex-row cursor-pointer hover:text-white transition-all duration-200">
                <Minus size={15} className="rotate-90 -mx-1" />
                <Play size={15} className="rotate-180 -mx-1" />
                <Play size={15} className="rotate-180" />
              </div>
              <div className="flex flex-row cursor-pointer hover:text-white transition-all duration-200">
                <Play size={15} />
                <Play size={15} className="-mx-1" />
                <Minus size={15} className="rotate-90 -mx-1" />
              </div>
            </div>
            <div className="flex flex-row cursor-pointer hover:text-white transition-all duration-200">
              <Play size={15} className="-mx-[2px]" />
              <Pause size={15} className="-mx-[2px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
