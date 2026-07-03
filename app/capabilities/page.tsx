import type { Metadata } from "next";
import CapabilitiesPage from "@/views/capabilities";

export const metadata: Metadata = {
  title: "Capabilities — Systems Engineering & AI Deployment | Phaarvai",
  description:
    "AI systems, data infrastructure, cybersecurity, intelligent infrastructure, civic technology, and applied research — engineered for production deployment.",
};

export default function Page() {
  return <CapabilitiesPage />;
}
