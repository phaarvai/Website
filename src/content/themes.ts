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
  coreTechnologies: string[];
  operationalCapabilities: string[];
  industries: string[];
  href: string;
}

export const themes: Theme[] = [
  {
    id: "technology-systems",
    title: "Technology",
    shortDescription:
      "Applied AI, automation platforms, and deployment-grade digital infrastructure for enterprise and institutional operations.",
    description:
      "We build AI orchestration layers, integration platforms, and operational software engineered for production — from intelligent agents to enterprise automation at national scale.",
    icon: Cpu,
    coreTechnologies: [
      "AI orchestration",
      "Automation platforms",
      "Enterprise integration",
      "Cloud-native architecture",
    ],
    operationalCapabilities: [
      "Intelligent workflow automation",
      "Production AI deployment",
      "Multi-system integration",
    ],
    industries: ["Enterprise", "Technology operators", "Institutional IT"],
    href: "/themes#technology-systems",
  },
  {
    id: "government",
    title: "Government & Public Systems",
    shortDescription:
      "AI-powered platforms and secure digital infrastructure for government operations and public service delivery.",
    description:
      "We deploy operational technology for agencies — service platforms, workflow automation, and secure citizen-facing applications built for institutional scale and governance requirements.",
    icon: Building2,
    coreTechnologies: [
      "Public service platforms",
      "Workflow automation",
      "Secure access systems",
      "Multilingual interfaces",
    ],
    operationalCapabilities: [
      "Digital public services",
      "Institutional process automation",
      "Citizen-facing applications",
    ],
    industries: ["Government agencies", "Public institutions", "Civic technology"],
    href: "/themes#government",
  },
  {
    id: "environment-resilience",
    title: "Environment & Resilience",
    shortDescription:
      "Environmental monitoring systems, resilience intelligence, and field-deployed infrastructure for adaptation operations.",
    description:
      "We engineer sensing networks, risk intelligence platforms, and operational dashboards that connect environmental data to real-time adaptation and resource decisions.",
    icon: CloudRain,
    coreTechnologies: [
      "IoT & sensor networks",
      "Environmental analytics",
      "Digital twin models",
      "Risk intelligence engines",
    ],
    operationalCapabilities: [
      "Field monitoring & alerting",
      "Adaptation planning systems",
      "Resource optimization",
    ],
    industries: ["Environmental agencies", "Infrastructure operators", "Resilience programs"],
    href: "/themes#environment-resilience",
  },
  {
    id: "data-ai-systems",
    title: "Data & AI Systems",
    shortDescription:
      "AI-ready data platforms, streaming pipelines, and operational intelligence for real-time institutional decisions.",
    description:
      "We architect data platforms that sustain production AI — ingestion pipelines, knowledge layers, and analytics infrastructure built for continuous operational inference.",
    icon: Database,
    coreTechnologies: [
      "Streaming data pipelines",
      "Knowledge graphs",
      "Operational analytics",
      "AI-ready data lakes",
    ],
    operationalCapabilities: [
      "Real-time decision support",
      "Unified operational visibility",
      "Automated reporting & insights",
    ],
    industries: ["Enterprise", "Research institutions", "Public sector"],
    href: "/themes#data-ai-systems",
  },
  {
    id: "cybersecurity-trust",
    title: "Cybersecurity & Trust",
    shortDescription:
      "Secure AI deployment, privacy-aware architecture, and governance controls for regulated operational environments.",
    description:
      "We engineer trust into every layer — threat-resilient AI systems, identity and access controls, and compliance-ready architectures for mission-critical deployments.",
    icon: Shield,
    coreTechnologies: [
      "Secure AI architecture",
      "Privacy-aware design",
      "Identity & access management",
      "Governance frameworks",
    ],
    operationalCapabilities: [
      "Trusted AI deployment",
      "Risk monitoring & audit",
      "Compliant operations",
    ],
    industries: ["Government", "Healthcare", "Regulated enterprise"],
    href: "/themes#cybersecurity-trust",
  },
  {
    id: "research-emerging",
    title: "Research & Emerging Technology",
    shortDescription:
      "Applied R&D and emerging AI integrated into production-ready institutional systems and platforms.",
    description:
      "We advance emerging technologies from research into deployable platforms — systems engineering that bridges exploration with production integration at institutional scale.",
    icon: FlaskConical,
    coreTechnologies: [
      "Applied R&D pipelines",
      "Emerging AI systems",
      "Advanced systems engineering",
      "Technology validation",
    ],
    operationalCapabilities: [
      "Research-to-production integration",
      "Platform engineering",
      "Capability scaling",
    ],
    industries: ["Universities", "National laboratories", "Research partnerships"],
    href: "/themes#research-emerging",
  },
];

export function getThemeById(id: ThemeId) {
  return themes.find((t) => t.id === id);
}
