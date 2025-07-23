import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-[2rem] md:pt-[4rem] text-[#666666] text-start">
      <Image
        src="/logo_white.svg"
        alt="Logo"
        width={150}
        height={10}
        className="select-none pointer-events-none"
        priority
      />

      <div className=" pt-[4rem]">
        <a className="text-white">Apostolos (Q) Karamanis</a>
        <a className="pl-[0.5rem] ">
          is a web developer from Thessaloniki, Greece.
        </a>
      </div>
      <div className="pt-[1rem]">Looking for new opportunities.</div>
    </div>
  );
}
