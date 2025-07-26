import Image from "next/image";

export default function Dog() {
  return (
    <div className="pt-[4rem]">
      <div className="pb-[1rem]">Oscar</div>
      <div className="pt-[1rem] text-[#555555] block items-start  relative overflow-hidden group transition-all duration-500 ease-out">
        Here&apos;s a photo of my dog. His name is Oscar. I love my dog.
        <div className="py-[1rem] pointer-events-none select-none overflow-hidden">
          <div className="w-full h-auto relative border-1 border-[#555555] rounded-[0.5rem] overflow-hidden">
            <Image
              src="/oscar.jpg"
              alt="Oscar"
              width={4032}
              height={3024}
              className="w-full select-none pointer-events-none"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
