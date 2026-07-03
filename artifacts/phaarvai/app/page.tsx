import type { Metadata } from "next";
import HomePage from "@/views/home";

export const metadata: Metadata = {
  title: "PHAARVAI — Applied Innovation for Institutions That Cannot Afford to Fail",
  description:
    "We build AI systems, data platforms, and digital infrastructure for governments, infrastructure operators, energy companies, and public-impact institutions — from architecture through production deployment.",
  openGraph: {
    url: "https://phaarvai.com",
    title: "PHAARVAI — Applied Innovation for Institutions That Cannot Afford to Fail",
    description:
      "We build AI systems, data platforms, and digital infrastructure for governments, infrastructure operators, energy companies, and public-impact institutions.",
  },
};

export default function Page() {
  return <HomePage />;
}
