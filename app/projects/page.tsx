import type { Metadata } from "next";
import ProjectsPage from "@/views/projects";

export const metadata: Metadata = {
  title: "Projects & Deployments — Phaarvai",
  description:
    "Applied AI systems, operational platforms, and deployment environments from Phaarvai's intelligent infrastructure portfolio.",
};

export default function Page() {
  return <ProjectsPage />;
}
