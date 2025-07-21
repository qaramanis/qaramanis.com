import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-[4rem] text-[#666666] text-start">
      <Image
        src="/logo_white.svg"
        alt="Logo"
        width={150}
        height={10}
        className="select-none pointer-events-none"
        priority
      />

      <div className="flex flex-row pt-[4rem]">
        <div className="text-white">Apostolos (Q) Karamanis</div>
        <div className="ml-2 ">
          is a web developer from Thessaloniki, Greece.
        </div>
      </div>
      <div className="flex mx-auto pt-[1rem]">
        Looking for new opportunities.
      </div>
    </div>
  );
}
