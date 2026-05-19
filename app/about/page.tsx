import type { Metadata } from "next";
import AboutPage from "@/views/about";

export const metadata: Metadata = {
  title: "About — AI for Good for Public Impact",
  description:
    "Learn about Phaarvai's mission, vision, values, and AI for Good positioning for governance and public impact.",
};

export default function Page() {
  return <AboutPage />;
}
