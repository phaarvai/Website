import type { Metadata } from "next";
import TeamPage from "@/views/team";

export const metadata: Metadata = {
  title: "Our Team — PHAARVAI",
  description:
    "Meet the practitioners behind PHAARVAI — experienced leaders in AI, IoT, cloud security, distributed systems, and institutional strategy.",
  openGraph: {
    url: "https://phaarvai.com/team",
    title: "Our Team — PHAARVAI",
    description:
      "Meet the practitioners behind PHAARVAI — experienced leaders in AI, IoT, cloud security, distributed systems, and institutional strategy.",
  },
};

export default function Page() {
  return <TeamPage />;
}
