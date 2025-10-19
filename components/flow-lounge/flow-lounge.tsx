import FlowLoungeLogo from "@/svgs/flow-lounge-logo";
import UnicornScene from "../unicorn-scene/unicorn-scene";

export default function FlowLounge() {
  const handleOnClick = () => {
    window.open("https://flow-lounge.vercel.app/", "_blank");
  };

  return (
    <div>
      <div className="pt-[1rem] text-accent block items-start relative overflow-hidden group transition-all duration-500 ease-out">
        Creative Direction for{" "}
        <a
          onClick={handleOnClick}
          className="text-foreground hover:underline underline-offset-2 decoration-1 cursor-pointer"
        >
          &quot;Flow Lounge&quot;
        </a>
        <br />
        <a className="text-accent text-[0.6rem]"> (currently working on)</a>
      </div>
      <div
        className="py-[1rem] select-none cursor-pointer"
        onClick={handleOnClick}
      >
        <div className="w-full aspect-square md:aspect-[5/4] relative border-1 border-accent rounded-[0.5rem] overflow-hidden">
          <div className="absolute inset-0 scale-175">
            <UnicornScene projectId="D3XV9A8wfytqYBlHrrCI" />
          </div>
          <div className="absolute inset-0 flex flex-col items-start p-4">
            <FlowLoungeLogo className="w-12 h-12" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-[#ef5021] font-echelon italic font-extralight text-[6rem] md:text-[8rem] tracking-wide drop-shadow-[0_0_40px_rgba(239,80,33,1)]">
              Hookah
            </h1>
            <span className="font-satoshi text-white text-lg md:text-2xl -mt-5">
              Immersive Experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
