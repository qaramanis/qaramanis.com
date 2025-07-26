import Image from "next/image";

export default function DogImage() {
  return (
    <Image
      src="/oscar.jpg"
      alt="Oscar"
      fill
      className="object-cover object-bottom select-none pointer-events-none"
      priority
    />
  );
}
