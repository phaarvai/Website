import type { Metadata } from "next";
import PartnerPage from "@/views/partner";

export const metadata: Metadata = {
  title: "Partner With Us — Phaarvai",
  description:
    "Institutional partnerships, deployment collaborations, and applied AI programs for governments and infrastructure operators.",
};

export default function Page() {
  return <PartnerPage />;
}
