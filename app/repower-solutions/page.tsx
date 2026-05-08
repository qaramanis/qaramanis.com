import ViewAll from "@/components/view-all-container";
import { Link } from "lucide-react";
import Image from "next/image";

export default function RepowerSolutions() {
  return (
    <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-4">
      {/* Large image container spanning all columns */}
      <div className="col-span-12 w-screen -ml-2 md:-ml-4 lg:-ml-8 aspect-[1920/1080] bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gold-ice/IMG_4302.jpg"
          alt="Repower Solutions"
          fill
          className="object-cover bg-foreground"
        />
      </div>

      {/* Smaller adjustable images */}
      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gold-ice/IMG_4302.jpg"
          alt="Repower Solutions"
          fill
          className="object-cover bg-foreground object-center"
        />
      </div>
      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gold-ice/IMG_4302.jpg"
          alt="Repower Solutions"
          fill
          className="object-cover bg-foreground object-center"
        />
      </div>

      {/* Description section */}

      <div className="col-span-12 border-t border-foreground mt-8 md:mt-16 lg:mt-16 mb-2 md:mb-4 lg:md-8"></div>

      <div className="col-span-12 md:col-span-9 text-lg md:text-3xl lg:text-3xl font-tinos tracking-tighter">
        Repower Solutions is a Thessaloniki-based technical and construction
        firm delivering complete energy upgrades, photovoltaic systems, heat
        pumps, and the engineering studies that hold them together.
        <br />
        <br />
        The new Repower Solutions website distills a broad service catalogue
        into a calm, navigable experience. Built around consistency,
        transparency, and the technical competence the practice is known for.
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
        href="https://www.repowersolutions.gr/"
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
