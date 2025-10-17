import DogImage from "./dog-image";
import SectionTitle from "../section-title";

export default function Dog() {
  return (
    <div>
      <SectionTitle title="Oscar" />
      <div className="pt-[1rem] text-accent block items-start  relative overflow-hidden group transition-all duration-500 ease-out">
        Here&apos;s a photo of my dog. His name is Oscar. I love my dog.
        <DogImage />
      </div>
    </div>
  );
}
