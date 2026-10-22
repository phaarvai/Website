import type { Metadata } from "next";
import CapabilitiesPage from "@/views/capabilities";

export const metadata: Metadata = {
  title: "Capabilities — AI, Digitization, IoT & Public Impact | PHAARVAI",
  description:
    "Four practice areas built for institutional complexity: AI Decision Intelligence, Digitization & Data Platforms, IoT & Smart Infrastructure, and Public Impact Programs.",
  openGraph: {
    url: "https://phaarvai.com/capabilities",
    title: "Capabilities | PHAARVAI",
  },
};

export default function Page() {
  return <CapabilitiesPage />;
}
