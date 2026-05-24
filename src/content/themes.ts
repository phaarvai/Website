import type { ThemeId } from "./types";
import {
  Cpu,
  Building2,
  CloudRain,
  Database,
  Shield,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

export interface Theme {
  id: ThemeId;
  title: string;
  description: string;
  shortDescription: string;
  icon: LucideIcon;
  problemAreas: string[];
  href: string;
}

export const themes: Theme[] = [
  {
    id: "technology-systems",
    title: "Technology Systems",
    shortDescription:
      "Applied AI, automation, enterprise platforms, and deployment-grade digital infrastructure.",
    description:
      "We build technology systems that institutions can deploy — from AI orchestration and data platforms to operational software and integration layers.",
    icon: Cpu,
    problemAreas: [
      "Fragmented enterprise systems",
      "AI adoption without operational fit",
      "Legacy integration complexity",
      "Scalability and reliability gaps",
      "Automation without governance",
      "Platform modernization needs",
    ],
    href: "/themes#technology-systems",
  },
  {
    id: "government",
    title: "Government & Public Infrastructure",
    shortDescription:
      "AI systems for public services, civic operations, governance workflows, and citizen access.",
    description:
      "We deliver AI-powered platforms that strengthen public services, modernize institutional workflows, and improve how citizens access essential systems.",
    icon: Building2,
    problemAreas: [
      "Service delivery fragmentation",
      "Manual approval and routing chains",
      "Cross-agency visibility gaps",
      "Citizen access barriers",
      "Legacy system interoperability",
      "Compliance and audit readiness",
    ],
    href: "/themes#government",
  },
  {
    id: "environment-resilience",
    title: "Environment & Resilience",
    shortDescription:
      "Operational intelligence for climate resilience, environmental systems, and adaptation planning.",
    description:
      "We build intelligence platforms for resilience planning, environmental monitoring, risk visibility, and institutional adaptation operations.",
    icon: CloudRain,
    problemAreas: [
      "Climate risk visibility gaps",
      "Adaptation planning data silos",
      "Environmental monitoring at scale",
      "Resilience program coordination",
      "Resource allocation complexity",
      "Cross-agency environmental data",
    ],
    href: "/themes#environment-resilience",
  },
  {
    id: "data-ai-systems",
    title: "Data & AI Systems",
    shortDescription:
      "AI-ready data architecture, streaming systems, analytics, and operational intelligence layers.",
    description:
      "We design data and AI systems that power institutional decisions — pipelines, knowledge layers, and analytics built for operational environments.",
    icon: Database,
    problemAreas: [
      "Data platform fragmentation",
      "Low-quality operational signals",
      "Analytics disconnected from action",
      "Knowledge silos across teams",
      "Real-time ingestion challenges",
      "AI-ready data foundations",
    ],
    href: "/themes#data-ai-systems",
  },
  {
    id: "cybersecurity-trust",
    title: "Cybersecurity & Trust",
    shortDescription:
      "Trusted AI, secure deployment, privacy-aware architecture, and institutional trust systems.",
    description:
      "We engineer security and trust into AI systems — from threat modeling and governed data access to compliant deployment in sensitive environments.",
    icon: Shield,
    problemAreas: [
      "AI security and adversarial risk",
      "Privacy and data governance gaps",
      "Compliance in regulated environments",
      "Identity and access complexity",
      "Audit and observability needs",
      "Institutional trust requirements",
    ],
    href: "/themes#cybersecurity-trust",
  },
  {
    id: "research-emerging",
    title: "Research & Emerging Technology",
    shortDescription:
      "Applied R&D, advanced systems, and emerging technology integration for institutional deployment.",
    description:
      "We bridge research and deployment — integrating emerging AI, advanced systems, and experimental capabilities into operational institutional programs.",
    icon: FlaskConical,
    problemAreas: [
      "Research-to-deployment gaps",
      "Experimental technology integration",
      "Evidence synthesis bottlenecks",
      "Cross-institution coordination",
      "Advanced systems validation",
      "Future capability roadmapping",
    ],
    href: "/themes#research-emerging",
  },
];

export function getThemeById(id: ThemeId) {
  return themes.find((t) => t.id === id);
}
