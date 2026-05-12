import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getProjectMetadata, getProjectStructuredData } from "@/lib/seo";
import FlowLoungeClient from "./flow-lounge-client";

export const metadata: Metadata = getProjectMetadata("flow-lounge");
const structuredData = getProjectStructuredData("flow-lounge");

export default function FlowLoungePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <FlowLoungeClient />
    </>
  );
}
