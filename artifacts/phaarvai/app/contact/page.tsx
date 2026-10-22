import type { Metadata } from "next";
import ContactPage from "@/views/contact";

export const metadata: Metadata = {
  title: "Contact PHAARVAI — Engage Our Technical Team",
  description:
    "Discuss your institutional technology requirements with PHAARVAI's team. We respond within two business days.",
  openGraph: {
    url: "https://phaarvai.com/contact",
    title: "Contact PHAARVAI",
  },
};

export default function Page() {
  return <ContactPage />;
}
