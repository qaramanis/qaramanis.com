"use client";

// import Grid from "@/components/grid";
import NavigationBar from "@/components/navigation-bar";
import PageTransition from "@/components/page-transition";
import Footer from "./footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-screen tracking-tight">
      {/*<Grid />*/}
      <div className="w-full  mx-auto px-2 md:px-4 lg:px-8">
        <NavigationBar />
        <PageTransition>{children}</PageTransition>
      </div>
      <Footer />
    </div>
  );
}
