import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-sm">
      <div className="w-full md:max-w-[40vw] p-[1rem] md:p-0 mx-auto text-center">
        <div className="mb-[2rem]">
          <Image
            src="/logo_black.svg"
            alt="Logo"
            width={100}
            height={10}
            className="select-none pointer-events-none mx-auto"
            priority
          />
        </div>

        <div className="mb-[2rem]">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-[1rem]">
            404
          </h1>
          {/* <h2 className="text-xl md:text-2xl text-foreground mb-[1rem]">
            Page Not Found
          </h2> */}
          <p className="text-accent mb-[2rem]">
            The page you&apos;re looking for
            <br></br> went to play with Oscar
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="text-foreground hover:underline underline-offset-2 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>

        <div className="absolute bottom-[2rem] text-center left-1/2 transform -translate-x-1/2  text-accent text-xs font-mono block">
          <div> How did we get here?</div>
          <br />
          <pre>{`¯\\_(ツ)_/¯`}</pre>
        </div>
      </div>
    </div>
  );
}
