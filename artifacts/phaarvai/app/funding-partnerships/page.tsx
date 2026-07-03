import type { Metadata } from "next";
import FundingPartnershipsPage from "@/views/funding-partnerships";

export const metadata: Metadata = {
  title: "Funding & Partnerships — Institutional Co-Investment & Grant-Ready Programs | PHAARVAI",
  description:
    "PHAARVAI structures implementations to align with grant funding cycles, co-investment frameworks, and institutional procurement requirements.",
  openGraph: {
    url: "https://phaarvai.com/funding-partnerships",
    title: "Funding & Partnerships | PHAARVAI",
  },
};

export default function Page() {
  return <FundingPartnershipsPage />;
}
