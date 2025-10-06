import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-[2rem] md:pt-[4rem] text-accent text-start flex flex-col gap-[1rem]">
      <Image
        src="/logo_black.svg"
        alt="Logo"
        width={150}
        height={10}
        className="select-none pointer-events-none"
        priority
      />

      <div className="pt-[3rem]">
        <a className="text-foreground">Apostolos Karamanis</a>{" "}
        <a className="">
          is a Computer Science Student from Thessaloniki, Greece.
        </a>
      </div>
      <div className="">
        Focused on Machine Learning, Web Development and Data Analysis.
      </div>
      <div className="">I also have a dog.</div>
    </div>
  );
}
