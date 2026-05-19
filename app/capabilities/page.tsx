import type { Metadata } from "next";
import CapabilitiesPage from "@/views/capabilities";

export const metadata: Metadata = {
  title: "Capabilities — Discovery to Deployment",
  description:
    "Challenge discovery, proposal development, AI prototyping, data research, product design, and implementation partnerships.",
};

export default function Page() {
  return <CapabilitiesPage />;
}
