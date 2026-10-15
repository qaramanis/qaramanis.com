"use client";

import ProjectPageLayout from "@/components/project-page-layout";
import ProjectLink from "@/components/project-link";
import AutoplayVideo from "@/components/autoplay-video";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

// Same as the exit duration of .dialog-transition in globals.css.
const DIALOG_EXIT_MS = 150;

export default function BloomAIContent() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [videoOpen, setVideoOpen] = useState(false);

  const openDialog = () => {
    clearTimeout(closeTimer.current);
    setVideoOpen(true);
    dialogRef.current?.showModal();
  };

  // Keep the video in the box while the dialog fades out, then remove it.
  const onDialogClose = () => {
    closeTimer.current = setTimeout(() => setVideoOpen(false), DIALOG_EXIT_MS);
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const media = (
    <>
      <div className="col-span-12 w-screen -ml-2 md:-ml-4 lg:-ml-8 aspect-[1920/1080] bg-foreground relative overflow-hidden">
        <AutoplayVideo
          src={
            "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/bloom-ai/bloom-ai-video.mp4"
          }
          priority
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2842/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/bloom-ai/bloom-ai-1.png"
          alt="Bloom AI - live personalized news monitor interface"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2842/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/bloom-ai/bloom-ai-2.png"
          alt="Bloom AI - AI chat, insights and predictions"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-6 w-full aspect-[1640/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/bloom-ai/bloom-ai-3.png"
          alt="Bloom AI - interactive components and live trackers"
          fill
          sizes="50vw"
          className="object-cover bg-foreground object-right"
        />
      </div>
      <div className="col-span-6 w-full aspect-[1640/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/bloom-ai/bloom-ai-4.png"
          alt="Bloom AI - user personalization and engagement"
          fill
          sizes="50vw"
          className="object-cover bg-foreground object-right"
        />
      </div>
    </>
  );

  const description = (
    <>
      A complete world news platform powered by AI, providing the user with a
      live personalized monitor. AI chat, insights and predictions, interactive
      components, live trackers, user engagement and personalization.
      <br />
      <br />
      Keep everything in one place and monitor the situation with ease. Have and
      edge against the competition.
    </>
  );

  const footer = (
    <>
      <ProjectLink
        href="https://bloom.qaramanis.com"
        label="View Website"
        ariaLabel="Visit Bloom AI website, opens in new tab"
        className="col-span-3 md:col-span-2 md:col-start-1"
      />
      <ProjectLink
        onClick={openDialog}
        label="View Demo"
        icon={Play}
        ariaLabel="Open Bloom AI demo video"
        className="col-span-3 md:col-span-3 md:col-start-3"
      />
    </>
  );

  return (
    <>
      <ProjectPageLayout
        media={media}
        description={description}
        footer={footer}
      />

      <dialog
        ref={dialogRef}
        onClose={onDialogClose}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDialog();
        }}
        aria-label="Bloom AI demo video"
        className="dialog-transition fixed inset-0 z-50 w-full h-full max-w-none max-h-none m-0 p-0 border-none bg-transparent backdrop:bg-black/80 open:flex items-center justify-center"
      >
        <button
          type="button"
          onClick={closeDialog}
          aria-label="Close video"
          className="absolute top-4 right-4 text-white cursor-pointer"
        >
          <X className="size-8" aria-hidden />
        </button>
        <div className="w-[90vw] max-w-5xl aspect-video">
          {videoOpen && (
            <iframe
              src="https://www.youtube.com/embed/ozCRY6v-U00?autoplay=1"
              title="Bloom AI demo video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          )}
        </div>
      </dialog>
    </>
  );
}
