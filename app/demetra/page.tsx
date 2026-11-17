import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getProjectMetadata, getProjectStructuredData } from "@/lib/seo";
import DemetraContent from "./demetra-content";

export const metadata: Metadata = getProjectMetadata("demetra");
const structuredData = getProjectStructuredData("demetra");

export default function DemetraPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <DemetraContent />
    </>
  );
}
