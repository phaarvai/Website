import type { Metadata } from "next";
import SolutionsPage from "@/views/solutions";

export const metadata: Metadata = {
  title: "Solutions — AI Decision Support, Workflow Digitization & Infrastructure Monitoring | PHAARVAI",
  description:
    "Concrete implementations that remove operational friction and build institutional intelligence. Each solution grounded in real client challenges.",
  openGraph: {
    url: "https://phaarvai.com/solutions",
    title: "Solutions | PHAARVAI",
  },
};

export default function Page() {
  return <SolutionsPage />;
}
