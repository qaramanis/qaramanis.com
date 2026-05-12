import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getProjectMetadata, getProjectStructuredData } from "@/lib/seo";
import BloomAIClient from "./bloom-ai-client";

export const metadata: Metadata = getProjectMetadata("bloom-ai");
const structuredData = getProjectStructuredData("bloom-ai");

export default function BloomAIPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <BloomAIClient />
    </>
  );
}
