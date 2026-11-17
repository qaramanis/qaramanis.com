"use client";

import DemetraLogo from "@/svgs/demetra-logo";

export default function DemetraWorkItem() {
  return (
    <div className="relative w-full h-full bg-[var(--color-demetra)] flex items-center justify-center overflow-hidden">
      <DemetraLogo className="h-1/4 w-auto text-[var(--color-demetra-mark)]" />
    </div>
  );
}
