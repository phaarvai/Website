import type { Metadata } from "next";
import InsightsPage from "@/views/insights";

export const metadata: Metadata = {
  title: "Insights — Institutional Technology & AI Strategy Briefings | PHAARVAI",
  description:
    "Practical perspectives on AI implementation, infrastructure digitization, and public-sector technology adoption from PHAARVAI's technical team.",
  openGraph: {
    url: "https://phaarvai.com/insights",
    title: "Insights | PHAARVAI",
  },
};

export default function Page() {
  return <InsightsPage />;
}
