import DogImage from "./dog-image";

export default function Dog() {
  return (
    <div className="pt-[4rem]">
      <div className="pb-[1rem]">Oscar</div>
      <div className="pt-[1rem] text-accent block items-start  relative overflow-hidden group transition-all duration-500 ease-out">
        Here&apos;s a photo of my dog. His name is Oscar. I love my dog.
        <div className="py-[1rem] pointer-events-none select-none overflow-hidden">
          <div className="w-full aspect-square md:aspect-[5/4] relative border-1 border-accent rounded-[0.5rem] overflow-hidden object-fill">
            <DogImage />
          </div>
        </div>
      </div>
    </div>
  );
}
