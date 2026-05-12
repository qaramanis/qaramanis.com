import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getProjectMetadata, getProjectStructuredData } from "@/lib/seo";
import GoldIceContent from "./gold-ice-content";

export const metadata: Metadata = getProjectMetadata("gold-ice");
const structuredData = getProjectStructuredData("gold-ice");

export default function GoldIcePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <GoldIceContent />
    </>
  );
}
