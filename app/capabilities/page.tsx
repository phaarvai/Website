import type { Metadata } from "next";
import CapabilitiesPage from "@/views/capabilities";

export const metadata: Metadata = {
  title: "Capabilities — Applied AI & Infrastructure",
  description:
    "AI systems, data infrastructure, cybersecurity, intelligent infrastructure, civic technology, and emerging research integration.",
};

export default function Page() {
  return <CapabilitiesPage />;
}
