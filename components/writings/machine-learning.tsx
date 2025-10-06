"use client";

import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose weights you need
  display: "swap",
});

export default function MachineLearning() {
  const handleOnClick = () => {
    window.open("/machine-learning/machine-learning.pdf", "_blank");
  };

  return (
    <div className="pt-[4rem]">
      <div className="pb-[1rem]">Writings</div>
      <div className="pt-[1rem] text-accent block items-start relative overflow-hidden group transition-all duration-500 ease-out">
        Co-Author:{" "}
        <a
          onClick={handleOnClick}
          className="text-foreground hover:underline underline-offset-2 cursor-pointer"
        >
          &quot;Air Quality Prediction from environmental and demographic
          factors using Classification&quot;
        </a>
      </div>
      <div
        className="py-[1rem] select-none cursor-pointer"
        onClick={handleOnClick}
      >
        <div className="w-full aspect-square md:aspect-[5/4] relative border-1 border-accent rounded-[0.5rem]">
          <div className="absolute h-[35%] inset-0 flex flex-col items-center self-start justify-center z-10">
            <span
              className={`${manrope.className} text-2xl md:text-4xl text-foreground tracking-wide`}
            >
              Machine Learning
            </span>
            <h1
              className={`${manrope.className} text-[#51da4c] text-center text-2xl md:text-4xl tracking-tight mt-2`}
            >
              Project Report
            </h1>
          </div>

          {/* Image - positioned ONLY in bottom half */}
          <div className="absolute bottom-0 left-0 right-0 h-[65%] pointer-events-none">
            <Image
              src="/machine-learning/machine-learning.png"
              alt="Machine Learning Project Report Visualization"
              fill
              className="object-cover rounded-b-[0.5rem]"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
