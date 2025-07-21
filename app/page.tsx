import Awards from "@/components/awards";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="text-sm">
      <div className="w-full md:max-w-[40vw] mx-auto ">
        <Hero />
        <Experience />
        <Awards />
      </div>
      <Footer />
    </div>
  );
}
