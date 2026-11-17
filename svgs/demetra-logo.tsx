"use client";

// The Demetra mark: an ear of wheat. The drawing is the same as the logo of
// the Demetra app (components/layout/logo.tsx). It uses the text color.
export default function DemetraLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="16 0 32 64"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 2 37 14.5 32 19.5 27 14.5ZM18 9.75 30.5 22.25V29L22.5 21ZM46 9.75 33.5 22.25V29L41.5 21ZM18 20.75 30.5 33.25V40L22.5 32ZM46 20.75 33.5 33.25V40L41.5 32ZM18 31.75 32 45.75 46 31.75 41.5 43 33.5 51V58.25L32 62 30.5 58.25V51L22.5 43Z" />
    </svg>
  );
}
