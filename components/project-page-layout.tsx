import { ReactNode } from "react";
import ViewAll from "@/components/view-all-container";

interface ProjectPageLayoutProps {
  media: ReactNode;
  description: ReactNode;
  footer: ReactNode;
}

export default function ProjectPageLayout({
  media,
  description,
  footer,
}: ProjectPageLayoutProps) {
  return (
    <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-4">
      {media}

      <div className="col-span-12 border-t border-foreground mt-8 md:mt-16 lg:mt-16 mb-2 md:mb-4 lg:mb-8" />

      <div className="col-span-12 md:col-span-9 text-lg md:text-3xl lg:text-3xl font-tinos tracking-tighter">
        {description}
      </div>

      <div className="col-span-12 mt-8 md:mt-0 mb-2 md:mb-4 lg:mb-8" />

      {footer}
      <ViewAll />
    </div>
  );
}
