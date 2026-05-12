import type { ReactNode } from "react";

interface BrowserWindowProps {
  children: ReactNode;
  className?: string;
}

export default function BrowserWindow({
  children,
  className = "",
}: BrowserWindowProps) {
  return (
    <div
      className={`rounded-md overflow-hidden bg-background border border-foreground/15 shadow-2xl ${className}`}
    >
      <div className="relative flex items-center border-b border-foreground/10 bg-background px-1.5 py-1">
        <div className="flex gap-1.5">
          <div className="size-1.5 rounded-full bg-destructive" />
          <div className="size-1.5 rounded-full bg-warning" />
          <div className="size-1.5 rounded-full bg-success" />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-2">
          <div className="h-2 w-full max-w-[8rem] rounded-md bg-foreground/10" />
        </div>
      </div>
      <div className="relative bg-background">{children}</div>
    </div>
  );
}
