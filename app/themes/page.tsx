import type { Metadata } from "next";
import ThemesPage from "@/views/themes";

export const metadata: Metadata = {
  title: "Operational Domains — Phaarvai",
  description:
    "Technology systems, government infrastructure, environment & resilience, data & AI, cybersecurity, and emerging research.",
};

export default function Page() {
  return <ThemesPage />;
}
