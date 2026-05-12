import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getProjectMetadata, getProjectStructuredData } from "@/lib/seo";
import DigitalGalleryClient from "./digital-gallery-client";

export const metadata: Metadata = getProjectMetadata("digital-gallery");
const structuredData = getProjectStructuredData("digital-gallery");

export default function DigitalGalleryPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <DigitalGalleryClient />
    </>
  );
}
