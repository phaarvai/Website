import type { Metadata } from "next";
import AboutPage from "@/views/about";

export const metadata: Metadata = {
  title: "About PHAARVAI — Institutional Strategy Backed by Rigorous Execution",
  description:
    "PHAARVAI was founded on a simple premise: large institutions do not need more advisory reports. They need the partner who bridges the gap between ideas and execution.",
  openGraph: {
    url: "https://phaarvai.com/about",
    title: "About PHAARVAI",
  },
};

export default function Page() {
  return <AboutPage />;
}
