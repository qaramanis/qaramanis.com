import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getProjectMetadata, getProjectStructuredData } from "@/lib/seo";
import AdrenalineSpikeContent from "./adrenaline-spike-content";

export const metadata: Metadata = getProjectMetadata("adrenaline-spike");
const structuredData = getProjectStructuredData("adrenaline-spike");

export default function AdrenalineSpikePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <AdrenalineSpikeContent />
    </>
  );
}
