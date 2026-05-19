import type { ThemeId } from "./types";
import {
  Building2,
  CloudRain,
  TrendingUp,
  Rocket,
  Cpu,
  Scale,
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
    id: "government",
    title: "Government",
    shortDescription:
      "AI tools for public services, governance, civic workflows, and citizen access.",
    description:
      "We design AI-powered tools that strengthen public services, streamline governance workflows, and improve how citizens access essential programs and information.",
    icon: Building2,
    problemAreas: [
      "Fragmented civic service delivery",
      "Manual approval and routing chains",
      "Low visibility across departments",
      "Citizen access barriers",
      "Legacy system interoperability",
      "Compliance and audit readiness",
    ],
    href: "/themes#government",
  },
  {
    id: "climate",
    title: "Climate",
    shortDescription:
      "AI for resilience, adaptation, environmental intelligence, and climate finance.",
    description:
      "We build intelligence systems for climate resilience, environmental monitoring, adaptation planning, and climate finance readiness.",
    icon: CloudRain,
    problemAreas: [
      "Climate risk visibility gaps",
      "Adaptation planning data silos",
      "Environmental monitoring at scale",
      "Climate finance readiness",
      "Resilience program reporting",
      "Cross-agency environmental data",
    ],
    href: "/themes#climate",
  },
  {
    id: "economic-development",
    title: "Economic Development",
    shortDescription:
      "AI for jobs, entrepreneurship, funding access, and inclusive growth.",
    description:
      "We develop solutions that expand economic opportunity — connecting people and enterprises to jobs, capital, skills, and inclusive growth pathways.",
    icon: TrendingUp,
    problemAreas: [
      "Uneven access to economic opportunity",
      "Funding discovery friction",
      "Workforce and skills mismatches",
      "SME and entrepreneur support gaps",
      "Program impact measurement",
      "Inclusive growth program design",
    ],
    href: "/themes#economic-development",
  },
  {
    id: "startups",
    title: "Startups",
    shortDescription:
      "AI support for grants, proposals, ecosystem building, and startup readiness.",
    description:
      "We help startup ecosystems, accelerators, and founders navigate grants, proposals, and AI-enabled readiness for public and philanthropic programs.",
    icon: Rocket,
    problemAreas: [
      "Grant and proposal readiness",
      "Ecosystem intelligence gaps",
      "Founder support at scale",
      "Program-to-startup matching",
      "Impact narrative development",
      "Innovation pipeline visibility",
    ],
    href: "/themes#startups",
  },
  {
    id: "technology",
    title: "Technology",
    shortDescription:
      "Applied AI, automation, digital infrastructure, robotics, and data systems.",
    description:
      "We prototype applied AI, automation, and data infrastructure that institutions can adopt incrementally — from research through lightweight platforms.",
    icon: Cpu,
    problemAreas: [
      "Applied AI adoption barriers",
      "Data platform fragmentation",
      "Automation without governance",
      "Research-to-prototype gaps",
      "Digital infrastructure readiness",
      "Responsible AI deployment",
    ],
    href: "/themes#technology",
  },
  {
    id: "policy",
    title: "Policy",
    shortDescription:
      "AI for research, ecosystem intelligence, governance, and evidence-based decisions.",
    description:
      "We support evidence-based policy with ecosystem intelligence, research synthesis, and governance-oriented AI tools.",
    icon: Scale,
    problemAreas: [
      "Policy research fragmentation",
      "Weak ecosystem intelligence",
      "Evidence synthesis bottlenecks",
      "Stakeholder mapping gaps",
      "Regulatory readiness",
      "Cross-institution coordination",
    ],
    href: "/themes#policy",
  },
];

export function getThemeById(id: ThemeId) {
  return themes.find((t) => t.id === id);
}
