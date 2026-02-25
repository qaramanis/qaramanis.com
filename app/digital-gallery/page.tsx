import ViewAll from "@/components/view-all-container";
import DigitalGalleryAnimation from "@/components/digital-gallery-animation";
import { Link } from "lucide-react";
import Image from "next/image";

export default function DigitalGallery() {
  return (
    <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-4">
      {/* Large image container spanning all columns */}
      <div className="col-span-12 w-screen -ml-2 md:-ml-4 lg:-ml-8 aspect-[1920/1080] bg-foreground relative overflow-hidden">
        <DigitalGalleryAnimation className="scale" />
      </div>
      <div className="col-span-12 w-full aspect-[2842/1526] bg-foreground relative">
        <Image
          src="https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/digital-gallery-image-1.png"
          alt="Digital Gallery"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2842/1526] bg-foreground relative">
        <Image
          src="https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/digital-gallery-image-2.png"
          alt="Digital Gallery"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2842/1526] bg-foreground relative">
        <Image
          src="https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/digital-gallery-image-3.png"
          alt="Digital Gallery"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2842/1526] bg-foreground relative">
        <Image
          src="https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/digital-gallery-image-4.png"
          alt="Digital Gallery"
          fill
          className="object-cover bg-foreground"
        />
      </div>

      {/* Description section */}

      <div className="col-span-12 border-t border-foreground mt-8 md:mt-16 lg:mt-16 mb-2 md:mb-4 lg:md-8"></div>

      <div className="col-span-12 md:col-span-9 text-lg md:text-3xl lg:text-3xl font-tinos tracking-tighter">
        A curated collection of personal works exploring the intersection of
        design, photography, and digital media.
        <br />
        <br />
        Each piece reflects a distinct moment of creative expression - blending
        visual storytelling with modern aesthetics.
      </div>

      <div className="col-span-12 border-none border-foreground mt-8 md:mt-0 mb-2 md:mb-4 lg:mb-8"></div>

      <a
        href="https://gallery.qaramanis.com"
        target="_blank"
        className="flex flex-row mt-4 md:mt-0 gap-2 size-fit btn-primary col-span-6 md:col-span-3 md:col-start-1 text-lg md:text-xl text-foreground font-medium group"
      >
        <Link className="self-center size-4.5 hidden md:block" />
        View Website
        <Link className="self-center size-4 block md:hidden" />
      </a>
      <ViewAll />
    </div>
  );
}
