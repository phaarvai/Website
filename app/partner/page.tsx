import type { Metadata } from "next";
import PartnerPage from "@/views/partner";

export const metadata: Metadata = {
  title: "Partner With Us — Phaarvai",
  description:
    "Collaborate with Phaarvai on public-impact challenges, funding opportunities, and AI for Good innovation.",
};

export default function Page() {
  return <PartnerPage />;
}
