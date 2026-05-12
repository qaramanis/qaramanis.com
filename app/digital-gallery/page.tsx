import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getProjectMetadata, getProjectStructuredData } from "@/lib/seo";
import DigitalGalleryContent from "./digital-gallery-content";

export const metadata: Metadata = getProjectMetadata("digital-gallery");
const structuredData = getProjectStructuredData("digital-gallery");

export default function DigitalGalleryPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <DigitalGalleryContent />
    </>
  );
}
