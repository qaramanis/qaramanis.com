import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getProjectMetadata, getProjectStructuredData } from "@/lib/seo";
import HqcGreeceContent from "./hqc-greece-content";

export const metadata: Metadata = getProjectMetadata("hqc-greece");
const structuredData = getProjectStructuredData("hqc-greece");

export default function HqcGreecePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <HqcGreeceContent />
    </>
  );
}
