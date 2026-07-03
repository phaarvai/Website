import type { Metadata } from "next";
import SectorsPage from "@/views/sectors";

export const metadata: Metadata = {
  title: "Sectors — Government, Infrastructure, Energy & Enterprise",
  description:
    "Phaarvai builds and deploys AI systems and intelligent infrastructure across government, critical infrastructure, energy, enterprise, and defense sectors.",
  openGraph: {
    url: "https://phaarvai.com/sectors",
    title: "Sectors | Phaarvai",
  },
};

export default function Page() {
  return <SectorsPage />;
}
