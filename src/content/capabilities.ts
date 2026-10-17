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
  href: string;
}

export const capabilityProcess: CapabilityArea[] = [
  {
    id: "ai-systems-applications",
    title: "AI Systems & Applications",
    description:
      "Design and deploy intelligent software — agents, workflows, and operational AI — engineered for real-world decision environments.",
    icon: Bot,
    items: [
      "AI workflows",
      "Intelligent agents",
      "Multimodal AI systems",
      "Operational AI",
      "Decision-support systems",
      "Automation platforms",
      "AI-assisted knowledge systems",
      "Human-in-the-loop AI",
    ],
    href: "/projects",
  },
  {
    id: "data-infrastructure",
    title: "Data & Infrastructure",
    description:
      "Build resilient, scalable, production-grade data infrastructure that powers analytics, streaming intelligence, and AI-ready operations.",
    icon: Database,
    items: [
      "AI-ready data systems",
      "Analytics infrastructure",
      "Streaming architectures",
      "Operational intelligence",
      "Data engineering pipelines",
      "Cloud-native infrastructure",
      "Data integration platforms",
      "Real-time analytics",
    ],
    href: "/projects",
  },
  {
    id: "cybersecurity-trust",
    title: "Cybersecurity & Trust",
    description:
      "Engineer security and trust into every layer — secure AI deployment, privacy-aware architecture, and compliance-ready governance.",
    icon: Shield,
    items: [
      "Secure AI systems",
      "Privacy-aware architectures",
      "Trusted AI deployment",
      "Institutional trust systems",
      "Identity and access management",
      "Security-by-design",
      "Responsible AI governance",
      "Risk monitoring",
    ],
    href: "/themes#cybersecurity-trust",
  },
  {
    id: "intelligent-infrastructure",
    title: "Intelligent Infrastructure",
    description:
      "Connect physical infrastructure with intelligent digital systems — IoT, digital twins, and edge operations for measurable efficiency gains.",
    icon: Network,
    items: [
      "IoT systems",
      "Digital twins",
      "Smart facilities",
      "Operational technology",
      "Edge computing",
      "Sensor integration",
      "Infrastructure monitoring",
      "Predictive maintenance",
    ],
    href: "/themes#environment-resilience",
  },
  {
    id: "civic-institutional",
    title: "Civic & Institutional Technology",
    description:
      "Deliver scalable, accessible digital platforms for governments and institutions — multilingual services, workflow automation, and public access systems.",
    icon: Building2,
    items: [
      "Multilingual systems",
      "Public access platforms",
      "Infrastructure modernization",
      "Institutional workflows",
      "Digital public services",
      "Citizen engagement platforms",
      "Administrative automation",
      "Inclusive digital experiences",
    ],
    href: "/themes#government",
  },
  {
    id: "research-emerging",
    title: "Research & Emerging Technology",
    description:
      "Translate applied R&D and emerging technologies into deployable systems — advanced engineering that moves from exploration to production.",
    icon: FlaskConical,
    items: [
      "Applied R&D",
      "Advanced systems engineering",
      "Future technology integration",
      "Emerging computing technologies",
      "Technology validation",
      "Strategic technology exploration",
      "Research partnerships",
      "Production integration",
    ],
    href: "/themes#research-emerging",
  },
];

export const homeCapabilities = capabilityProcess.map((cap) => ({
  id: cap.id,
  title: cap.title,
  description: cap.description,
  icon: cap.icon,
}));
