import Awards from "@/components/awards/awards";
import Dog from "@/components/dog/dog";
import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Highlight from "@/components/highlight/highlight";
import Writings from "@/components/writings/writings";

export default function Home() {
  return (
    <div className="text-sm">
      <div className="w-full md:max-w-[35vw] p-[1rem] md:p-0 mx-auto">
        <Hero />
        <Experience />
        <Awards />
        <Highlight />
        <Writings />
        <Dog />
      </div>
      <Footer />
    </div>
  );
}
