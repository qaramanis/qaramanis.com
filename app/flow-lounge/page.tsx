import ViewAll from "@/components/view-all-container";
import ImageMontage from "@/components/image-montage";
import { Link } from "lucide-react";
import Image from "next/image";

export default function FlowLounge() {
  return (
    <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-4">
      {/* Large image container spanning all columns */}
      <div className="col-span-12 w-screen -ml-2 md:-ml-4 lg:-ml-8 aspect-[1920/1080] bg-accent/30 relative">
        <Image
          src="https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/flow-lounge-1.jpg"
          alt="Flow Lounge"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[1920/1080] bg-accent/30 relative">
        <Image
          src="https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/flow-lounge-banner.png"
          alt="Flow Lounge"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[1920/1080] bg-accent/30 relative">
        <Image
          src="https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/flow-lounge-7.jpg"
          alt="Flow Lounge"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      {/* Second row */}
      {/*<div className="col-span-4 aspect-[2/3] bg-accent-30 relative">
        <Image
          src="https://8mxjmxhvgtye4fln.public.blob.vercel-storage.com/FTP_1276.jpg"
          alt="Flow Lounge"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-4 aspect-[2/3] bg-accent/30 relative">
        <Image
          src="https://8mxjmxhvgtye4fln.public.blob.vercel-storage.com/FTP_1245.jpg"
          alt="Flow Lounge"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-4 aspect-[2/3] bg-accent/30 relative">
        <Image
          src="https://8mxjmxhvgtye4fln.public.blob.vercel-storage.com/FTP_1280.jpg"
          alt="Flow Lounge"
          fill
          className="object-cover"
        />
      </div>*/}

      {/* espresso martini + hookah */}
      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <Image
          src="https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/flow-lounge-2.jpg"
          alt="Flow Lounge"
          fill
          className="object-cover bg-foreground object-center"
        />
      </div>
      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <Image
          src="https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/flow-lounge-3.jpg"
          alt="Flow Lounge"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* collage + 4hookah */}
      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <ImageMontage className="object-cover object-bottom" />
      </div>
      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <Image
          src="https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/flow-lounge-4.jpg"
          alt="Flow Lounge"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* tshirt + guitar row */}
      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <Image
          src="https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/flow-lounge-5.jpg"
          alt="Flow Lounge"
          fill
          className="object-cover bg-foreground object-center"
        />
      </div>
      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <Image
          src="https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/flow-lounge-6.jpg"
          alt="Flow Lounge"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Description section */}

      <div className="col-span-12 border-t border-foreground mt-8 md:mt-16 lg:mt-16 mb-2 md:mb-4 lg:md-8"></div>

      <div className="col-span-12 md:col-span-9 text-lg md:text-3xl lg:text-3xl font-tinos tracking-tighter">
        Flow Lounge, under the curation and signature of Titto Peronetti,
        presents a comprehensive service designed for restaurants, hotels,
        enterprises, and private events.
        <br />
        <br />
        The new Flow Lounge website and visual identity embody an evolution of
        design and digital storytelling. Shaped by years of expertise, global
        recognition, and a profound connection to modern hookah culture.
      </div>

      <div className="col-span-12 border-none border-foreground mt-8 md:mt-0 mb-2 md:mb-4 lg:mb-8"></div>

      <div className="col-span-6 col-start-1 md:col-start-1 md:col-span-2 flex flex-col items-start text-start mt-4 md:mt-0">
        <div className="flex flex-col text- md:text-xl text-accent">
          <div className="text-lg md:text-xl text-foreground font-medium">
            My Role
          </div>
          <div>Web Design</div>
          <div>Brand Collateral</div>
          <div>Digital Media</div>
        </div>
      </div>
      <div className="col-span-6 col-start-7 md:col-start-3 md:col-span-2 flex flex-col items-start text-start mt-4 md:mt-0">
        <div className="flex flex-col text- md:text-xl text-accent">
          <div className="text-lg md:text-xl text-foreground font-medium">
            Collaborators
          </div>
          <div>Titto Peronetti</div>
        </div>
      </div>

      <a
        href="https://flowlounge.gr"
        target="_blank"
        className="flex flex-row mt-4 md:mt-0 gap-2 size-fit btn-primary col-span-6 md:col-span-3 md:col-start-5 text-lg md:text-xl text-foreground font-medium group"
      >
        <Link className="self-center size-4.5 hidden md:block" />
        View Website
        <Link className="self-center size-4 block md:hidden" />
        {/*<div className="h-[1px] group-hover:bg-accent bg-transparent transition-all duration-300"></div>*/}
      </a>
      <ViewAll />
    </div>
  );
}
