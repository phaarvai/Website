import type { Metadata } from "next";
import AboutPage from "@/views/about";

export const metadata: Metadata = {
  title: "About — Applied AI & Intelligent Infrastructure",
  description:
    "Phaarvai builds AI-powered systems and intelligent infrastructure for governments, institutions, and operational environments.",
};

export default function Page() {
  return <AboutPage />;
}
