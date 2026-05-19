import type { Metadata } from "next";
import ProjectsPage from "@/views/projects";

export const metadata: Metadata = {
  title: "Projects — Phaarvai",
  description:
    "Active concepts, prototypes, and proposal-ready projects from Phaarvai's AI for Good portfolio.",
};

export default function Page() {
  return <ProjectsPage />;
}
