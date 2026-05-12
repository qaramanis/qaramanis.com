import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getProjectMetadata, getProjectStructuredData } from "@/lib/seo";
import GoldIceClient from "./gold-ice-client";

export const metadata: Metadata = getProjectMetadata("gold-ice");
const structuredData = getProjectStructuredData("gold-ice");

export default function GoldIcePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <GoldIceClient />
    </>
  );
}
