import type { Metadata } from "next";
import HomePage from "@/views/home";

export const metadata: Metadata = {
  title: "Phaarvai — Applied AI & Intelligent Infrastructure",
  description:
    "Phaarvai designs, builds, and deploys production-ready AI systems and intelligent infrastructure for governments, enterprises, and research institutions.",
  openGraph: {
    url: "https://phaarvai.com",
    title: "Phaarvai — Applied AI & Intelligent Infrastructure",
    description:
      "Production-ready AI systems and intelligent infrastructure — engineered for governments, enterprises, and complex real-world operations.",
  },
};

export default function Page() {
  return <HomePage />;
}
