import {
  Bot,
  Database,
  Shield,
  Network,
  Building2,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

export interface CapabilityArea {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}

export const capabilityProcess: CapabilityArea[] = [
  {
    id: "ai-systems-applications",
    title: "AI Systems & Applications",
    description:
      "Enterprise AI workflows, intelligent agents, multimodal systems, and operational AI built for real institutional use.",
    icon: Bot,
    items: [
      "AI workflow orchestration and agents",
      "Multimodal operational intelligence",
      "Institutional copilots and assistants",
      "Production AI application architecture",
    ],
  },
  {
    id: "data-infrastructure",
    title: "Data & Infrastructure",
    description:
      "AI-ready data systems, streaming architecture, operational analytics, and infrastructure intelligence at scale.",
    icon: Database,
    items: [
      "High-throughput data ingestion pipelines",
      "Operational analytics and dashboards",
      "Knowledge graphs and intelligence layers",
      "Cloud and hybrid infrastructure design",
    ],
  },
  {
    id: "cybersecurity-trust",
    title: "Cybersecurity & Trust",
    description:
      "Trusted AI systems, privacy-aware architecture, secure deployment, and institutional trust frameworks.",
    icon: Shield,
    items: [
      "AI security architecture and threat modeling",
      "Privacy-aware system design",
      "Secure deployment and compliance readiness",
      "Governed access and audit systems",
    ],
  },
  {
    id: "intelligent-infrastructure",
    title: "Intelligent Infrastructure",
    description:
      "IoT systems, digital twins, smart facilities, and operational technology for infrastructure-grade environments.",
    icon: Network,
    items: [
      "Digital twin and sensor integration",
      "Smart facility operations",
      "Edge and IoT orchestration",
      "OT/IT convergence platforms",
    ],
  },
  {
    id: "civic-institutional",
    title: "Civic & Institutional Technology",
    description:
      "Multilingual systems, public-access infrastructure, modernization platforms, and institutional workflows.",
    icon: Building2,
    items: [
      "Government service operations platforms",
      "Multilingual and accessible interfaces",
      "Institutional workflow modernization",
      "Citizen and official-facing systems",
    ],
  },
  {
    id: "research-emerging",
    title: "Research & Emerging Technology",
    description:
      "Applied R&D, advanced systems integration, and future technology pathways for institutional deployment.",
    icon: FlaskConical,
    items: [
      "Applied research-to-deployment programs",
      "Advanced systems prototyping",
      "Emerging AI integration",
      "Institutional technology roadmaps",
    ],
  },
];

export const homeCapabilities = capabilityProcess.map((cap) => ({
  id: cap.id,
  title: cap.title,
  description: cap.description,
  icon: cap.icon,
}));

export const whatWeDoSteps = [
  {
    title: "Architect intelligent systems",
    description:
      "Design AI infrastructure, data flows, and operational platforms aligned to institutional environments.",
  },
  {
    title: "Build deployment-grade platforms",
    description:
      "Deliver applications, agents, and infrastructure components institutions can operate in production.",
  },
  {
    title: "Deploy across operational environments",
    description:
      "Pilot, integrate, and scale systems with governments, operators, and mission-driven partners.",
  },
] as const;
