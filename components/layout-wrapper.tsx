"use client";

import NavigationBar from "@/components/navigation-bar";
import Footer from "./footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-screen tracking-tight">
      <div className="w-full mx-auto px-2 md:px-4 lg:px-8">
        <NavigationBar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
