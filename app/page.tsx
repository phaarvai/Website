import type { Metadata } from "next";
import HomePage from "@/views/home";

export const metadata: Metadata = {
  title: "Phaarvai — AI for Good, Built for Public Impact",
  description:
    "Phaarvai develops AI-powered ideas, prototypes, and platforms across government, climate, economic development, startups, technology, and policy.",
  openGraph: {
    url: "https://phaarvai.com",
    title: "Phaarvai — AI for Good, Built for Public Impact",
    description:
      "Practical AI solutions for governance, climate, economic development, startups, technology, and policy.",
  },
};

export default function Page() {
  return <HomePage />;
}
