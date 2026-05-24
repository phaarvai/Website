import type { Metadata } from "next";
import HomePage from "@/views/home";

export const metadata: Metadata = {
  title: "Phaarvai — Applied AI & Intelligent Infrastructure",
  description:
    "Phaarvai develops AI-powered systems and intelligent infrastructure for governments, institutions, and real-world operational environments.",
  openGraph: {
    url: "https://phaarvai.com",
    title: "Phaarvai — Applied AI & Intelligent Infrastructure",
    description:
      "Deployment-grade AI systems, operational intelligence, and intelligent infrastructure for institutional environments.",
  },
};

export default function Page() {
  return <HomePage />;
}
