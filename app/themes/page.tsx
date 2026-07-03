import type { Metadata } from "next";
import ThemesPage from "@/views/themes";

export const metadata: Metadata = {
  title: "Technology Domains — Applied AI & Infrastructure | Phaarvai",
  description:
    "Applied AI across infrastructure, institutions, and operational systems. Technology domains where Phaarvai designs, deploys, and scales intelligent platforms.",
};

export default function Page() {
  return <ThemesPage />;
}
