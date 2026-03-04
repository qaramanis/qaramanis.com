import ViewAll from "@/components/view-all-container";
import DigitalGalleryAnimation from "@/components/digital-gallery-animation";
import { Link } from "lucide-react";
import Image from "next/image";

export default function Monitor() {
  return (
    <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-4">
      {/* Large image container spanning all columns */}
      <div className="col-span-12 w-screen -ml-2 md:-ml-4 lg:-ml-8 -mt-1 md:-mt-2 lg:-mt-4  aspect-[1920/1080] bg-foreground relative overflow-hidden">
        <video
          src={
            "https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/monitor-video.mp4"
          }
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain transition-all duration-500"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2842/1526] bg-foreground relative">
        <Image
          src="https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/monitor-1.png"
          alt="Monitor Image"
          fill
          className="object-cover bg-foreground"
        />
      </div>

      {/* Description section */}

      <div className="col-span-12 border-t border-foreground mt-8 md:mt-16 lg:mt-16 mb-2 md:mb-4 lg:md-8"></div>

      <div className="col-span-12 md:col-span-9 text-lg md:text-3xl lg:text-3xl font-tinos tracking-tighter">
        A complete monitoring platform, providing the user with live world news.
        Interactive components, live trackers and AI powered insights and
        predictions.
        <br />
        <br />
        Keep everything in one place and easily find what you are looking for,
        to have and edge against the competition.
      </div>

      <div className="col-span-12 border-none border-foreground mt-8 md:mt-0 mb-2 md:mb-4 lg:mb-8"></div>

      <a
        href="https://monitor.qaramanis.com"
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
