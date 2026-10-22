import type { Metadata } from "next";
import ProjectOverviewView from "@/projects/government-services-ai/views/ProjectOverviewView";

export const metadata: Metadata = {
  title: "Government Services AI",
  description: "Operational civic workflow platform for public service delivery.",
};

export default function Page() {
  return <ProjectOverviewView />;
}
