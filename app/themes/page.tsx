import type { Metadata } from "next";
import ThemesPage from "@/views/themes";

export const metadata: Metadata = {
  title: "Impact Themes — Phaarvai",
  description:
    "Explore Phaarvai's impact themes across government, climate, economic development, startups, technology, and policy.",
};

export default function Page() {
  return <ThemesPage />;
}
