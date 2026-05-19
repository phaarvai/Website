import {
  Search,
  FileText,
  Boxes,
  Database,
  Palette,
  Handshake,
  Lightbulb,
  PenLine,
  Bot,
  BarChart3,
  Globe,
  Sparkles,
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
    id: "challenge-discovery",
    title: "Challenge Discovery",
    description:
      "We map public-interest challenges, funding landscapes, and system gaps to identify where AI can create practical, fundable impact.",
    icon: Search,
    items: [
      "Opportunity and challenge scoping",
      "Stakeholder and ecosystem mapping",
      "Gap analysis across institutions",
      "Theme-aligned concept framing",
    ],
  },
  {
    id: "proposal-development",
    title: "Proposal Development",
    description:
      "We translate concepts into proposal-ready narratives, budgets, and technical approaches aligned to funder and government requirements.",
    icon: PenLine,
    items: [
      "Grant and RFP strategy",
      "Technical approach documentation",
      "Impact and outcomes framing",
      "Compliance-ready program design",
    ],
  },
  {
    id: "ai-prototyping",
    title: "AI Prototyping",
    description:
      "We build lightweight demos and prototypes that make ideas tangible for partners, reviewers, and funding committees.",
    icon: Bot,
    items: [
      "Rapid AI product prototyping",
      "Workflow and UX validation",
      "Pilot-ready technical architecture",
      "Responsible AI guardrails",
    ],
  },
  {
    id: "data-research",
    title: "Data and Research",
    description:
      "We synthesize evidence, build data models, and create intelligence layers that strengthen decisions and proposals.",
    icon: Database,
    items: [
      "Ecosystem and policy research",
      "Data pipeline design",
      "Knowledge graphs and intelligence layers",
      "Evidence synthesis for decisions",
    ],
  },
  {
    id: "product-design",
    title: "Product Design",
    description:
      "We design inclusive, accessible experiences for diverse users — citizens, officials, founders, and program teams.",
    icon: Palette,
    items: [
      "Service and product UX",
      "Multilingual and inclusive design",
      "Institutional workflow design",
      "Accessibility-first interfaces",
    ],
  },
  {
    id: "implementation-partnerships",
    title: "Implementation Partnerships",
    description:
      "We collaborate with governments, funders, nonprofits, and institutions to move from prototype to deployment.",
    icon: Handshake,
    items: [
      "Co-design with institutional partners",
      "Pilot planning and delivery support",
      "Vendor and ecosystem coordination",
      "Scale and sustainability planning",
    ],
  },
];

export const homeCapabilities = [
  {
    id: "ai-product-prototyping",
    title: "AI Product Prototyping",
    description: "Lightweight demos and platforms that make public-impact ideas tangible and fundable.",
    icon: Lightbulb,
  },
  {
    id: "grant-proposal-strategy",
    title: "Grant & Proposal Strategy",
    description: "Proposal-ready concepts aligned to government, philanthropic, and development finance requirements.",
    icon: FileText,
  },
  {
    id: "civic-govtech",
    title: "Civic & Government Technology",
    description: "Tools for public services, governance workflows, and citizen-facing digital access.",
    icon: Boxes,
  },
  {
    id: "data-ecosystem",
    title: "Data & Ecosystem Intelligence",
    description: "Research, data systems, and intelligence layers for policy and program decisions.",
    icon: BarChart3,
  },
  {
    id: "multilingual-design",
    title: "Multilingual & Inclusive Design",
    description: "Accessible experiences designed for diverse communities and institutional users.",
    icon: Globe,
  },
  {
    id: "emerging-technology",
    title: "Emerging Technology",
    description: "Applied AI, automation, robotics, and digital infrastructure for public systems.",
    icon: Sparkles,
  },
] as const;

export const whatWeDoSteps = [
  {
    title: "Discover opportunities and system gaps",
    description:
      "Identify public-interest challenges, funding pathways, and institutional friction worth solving.",
  },
  {
    title: "Design AI-powered prototypes",
    description:
      "Build concepts, demos, and proposal-ready solutions that partners can evaluate quickly.",
  },
  {
    title: "Deploy solutions with institutions and partners",
    description:
      "Collaborate with governments, funders, and organizations to move from prototype to impact.",
  },
] as const;
