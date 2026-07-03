import type { Metadata } from "next";
import FundingPartnershipsPage from "@/views/funding-partnerships";

export const metadata: Metadata = {
  title: "Institutional Technology Partnerships — Phaarvai",
  description:
    "Phaarvai partners with governments, research institutions, and infrastructure operators to design, deploy, and operate AI systems and digital infrastructure.",
  openGraph: {
    url: "https://phaarvai.com/funding-partnerships",
    title: "Institutional Technology Partnerships | Phaarvai",
  },
};

export default function Page() {
  return <FundingPartnershipsPage />;
}
