import Awards from "@/components/awards";
import Experience from "@/components/experience";
import Highlight from "@/components/highlight/highlight";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero";
import Dog from "@/components/dog/dog";

export default function Home() {
  return (
    <div className="text-sm">
      <div className="w-full  md:max-w-[40vw] p-[1rem] md:p-0 mx-auto ">
        <Hero />
        <Experience />
        <Awards />
        <Highlight />
        <Dog />
      </div>
      <Footer />
    </div>
  );
}
