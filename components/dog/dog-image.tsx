import Image from "next/image";

export default function DogImage() {
  return (
    <div className="py-[1rem] pointer-events-none select-none overflow-hidden">
      <div className="w-full aspect-square md:aspect-[5/4] relative border-1 border-accent rounded-[0.5rem] overflow-hidden object-fill">
        <Image
          src="/oscar.jpg"
          alt="Oscar"
          fill
          className="object-cover object-bottom select-none pointer-events-none"
          priority
        />
      </div>
    </div>
  );
}
