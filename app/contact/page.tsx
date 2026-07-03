import type { Metadata } from "next";
import ContactPage from "@/views/contact";

export const metadata: Metadata = {
  title: "Contact Phaarvai — AI Systems & Infrastructure",
  description:
    "Connect with Phaarvai's engineering team about AI systems, digital infrastructure, and institutional technology deployments.",
  openGraph: {
    url: "https://phaarvai.com/contact",
    title: "Contact Phaarvai",
  },
};

export default function Page() {
  return <ContactPage />;
}
