import type { Metadata } from "next";
import SectorsPage from "@/views/sectors";

export const metadata: Metadata = {
  title: "Sectors — Government, Infrastructure, Energy & Public Impact | PHAARVAI",
  description:
    "PHAARVAI works exclusively with sectors where institutional complexity, public accountability, and operational continuity are non-negotiable.",
  openGraph: {
    url: "https://phaarvai.com/sectors",
    title: "Sectors | PHAARVAI",
  },
};

export default function Page() {
  return <SectorsPage />;
}
