import Awards from "@/components/awards";
import Experience from "@/components/experience";
import Featured from "@/components/featured/featured";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="text-sm">
      <div className="w-full  md:max-w-[40vw] p-[1rem] md:p-0 mx-auto ">
        <Hero />
        <Experience />
        <Awards />
        <Featured />
      </div>
      <Footer />
    </div>
  );
}
