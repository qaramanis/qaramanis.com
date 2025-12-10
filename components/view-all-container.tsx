import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function ViewAll() {
  return (
    <Link
      href="/"
      target="_self"
      className="flex flex-row items-center justify-start gap-2 btn-primary col-span-12 mt-8 md:mt-16 lg:mt-16 mb-8 md:mb-16 lg:mb-32 pt-2 border-t border-foreground text-lg md:text-xl font-medium transition-colors"
    >
      <MoveLeft size={24} />
      View All
    </Link>
  );
}
