import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getProjectMetadata, getProjectStructuredData } from "@/lib/seo";
import AgoraMcpContent from "./agora-mcp-content";

export const metadata: Metadata = getProjectMetadata("agora-mcp");
const structuredData = getProjectStructuredData("agora-mcp");

export default function AgoraMcpPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <AgoraMcpContent />
    </>
  );
}
