import Description from "@/components/description";
import WorksGrid from "@/components/works-grid";

export default function Home() {
  return (
    <div className="mt-4 md:mt-8 lg:mt-16">
      <WorksGrid />
      <Description />
      {/*<div className="h-screen bg-[linear-gradient(135deg,#0137E1_0%,#0023BF_100%)]"></div>*/}
    </div>
  );
}
