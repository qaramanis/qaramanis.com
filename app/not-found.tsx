import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative h-[80vh] flex flex-row text-center items-center justify-center gap-1 md:gap-2 lg:gap-4">
      <div className="flex flex-col w-[50%] gap-1 md:gap-2 lg:gap-4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-foreground">
          404
        </h1>
        <div className="text-base md:text-lg text-accent font-">
          <div> How did you get here?</div>
          <br />
          <pre>{`¯ \\_(ツ)_/¯`}</pre>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-[50%]">
        <Link
          href="/"
          className="text-foreground hover:text-accent underline-offset-2 decoration-1 transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
