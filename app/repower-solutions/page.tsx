import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getProjectMetadata, getProjectStructuredData } from "@/lib/seo";
import RepowerSolutionsContent from "./repower-solutions-content";

export const metadata: Metadata = getProjectMetadata("repower-solutions");
const structuredData = getProjectStructuredData("repower-solutions");

export default function RepowerSolutionsPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <RepowerSolutionsContent />
    </>
  );
}
