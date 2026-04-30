import ViewAll from "@/components/view-all-container";
import { Link } from "lucide-react";
import Image from "next/image";

export default function GoldIce() {
  return (
    <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-4">
      {/* Large image container spanning all columns */}
      <div className="col-span-12 w-screen -ml-2 md:-ml-4 lg:-ml-8 aspect-[1920/1080] bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gold-ice/IMG_4302.jpg"
          alt="Gold Ice"
          fill
          className="object-cover bg-foreground"
        />
      </div>

      {/* Smaller adjustable images */}
      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gold-ice/IMG_4302.jpg"
          alt="Gold Ice"
          fill
          className="object-cover bg-foreground object-center"
        />
      </div>
      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gold-ice/IMG_4302.jpg"
          alt="Gold Ice"
          fill
          className="object-cover bg-foreground object-center"
        />
      </div>

      {/* Description section */}

      <div className="col-span-12 border-t border-foreground mt-8 md:mt-16 lg:mt-16 mb-2 md:mb-4 lg:md-8"></div>

      <div className="col-span-12 md:col-span-9 text-lg md:text-3xl lg:text-3xl font-tinos tracking-tighter">
        Gold Ice has been producing and distributing clean, food-grade drinking
        ice across northern Greece since 2000, serving cafés, bars, restaurants,
        hotels, and households through its own fleet of refrigerated trucks.
        <br />
        <br />
        The new Gold Ice website translates over two decades of reliability into
        a considered digital presence. Built around clarity, hygiene, and the
        quiet precision the product demands.
      </div>

      <div className="col-span-12 border-none border-foreground mt-8 md:mt-0 mb-2 md:mb-4 lg:mb-8"></div>

      <div className="col-span-6 col-start-1 md:col-start-1 md:col-span-2 flex flex-col items-start text-start mt-4 md:mt-0">
        <div className="flex flex-col text- md:text-xl text-accent">
          <div className="text-lg md:text-xl text-foreground font-medium">
            My Role
          </div>
          <div>Web Design</div>
        </div>
      </div>

      <a
        href="https://www.goldice.eu/"
        target="_blank"
        className="flex flex-row mt-4 md:mt-0 gap-2 size-fit btn-primary col-span-6 md:col-span-3 md:col-start-3 text-lg md:text-xl text-foreground font-medium group"
      >
        <Link className="self-center size-4.5 hidden md:block" />
        View Website
        <Link className="self-center size-4 block md:hidden" />
      </a>
      <ViewAll />
    </div>
  );
}
