import {
  Building2,
  FlaskConical,
  Cpu,
  Network,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface PartnershipArea {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export const partnerContent = {
  hero: {
    label: "Strategic Partnerships",
    title: "Partner to build intelligent systems",
    subtitle:
      "Phaarvai partners with governments, research institutions, enterprises, and mission-driven organizations to design, deploy, and scale intelligent systems that strengthen operations, infrastructure, and public services.",
  },

  partnershipAreas: [
    {
      id: "institutional-technology",
      title: "Institutional Technology",
      description:
        "Long-term collaboration on digital transformation, AI-enabled operations, and institutional modernization across complex organizational environments.",
      items: [
        "Digital transformation",
        "AI-enabled operations",
        "Institutional modernization",
      ],
      icon: Building2,
    },
    {
      id: "research-collaboration",
      title: "Research Collaboration",
      description:
        "Joint initiatives bridging applied AI research, emerging technologies, and production deployment with academic and research ecosystems.",
      items: [
        "Applied AI research",
        "Emerging technologies",
        "Joint innovation initiatives",
        "Academic partnerships",
        "Technology validation",
      ],
      icon: FlaskConical,
    },
    {
      id: "ai-digital-systems",
      title: "AI & Digital Systems Deployment",
      description:
        "Co-development and deployment of intelligent applications, operational platforms, and secure enterprise integrations.",
      items: [
        "Intelligent applications",
        "Operational platforms",
        "Data infrastructure",
        "Secure AI systems",
        "Enterprise integration",
      ],
      icon: Cpu,
    },
    {
      id: "infrastructure-modernization",
      title: "Infrastructure Modernization",
      description:
        "Smart infrastructure, digital twins, IoT systems, and operational technology for mission-critical environments.",
      items: [
        "Smart infrastructure",
        "Digital twins",
        "IoT systems",
        "Operational technology",
        "Intelligent monitoring",
      ],
      icon: Network,
    },
    {
      id: "ecosystem-engagement",
      title: "Ecosystem Engagement",
      description:
        "Cross-sector alliances, innovation ecosystems, and strategic technology partnerships that advance shared capability.",
      items: [
        "Cross-sector collaboration",
        "Innovation ecosystems",
        "Strategic alliances",
        "Technology partnerships",
        "Knowledge exchange",
      ],
      icon: Users,
    },
  ] satisfies PartnershipArea[],

  collaborationPrinciples: [
    {
      title: "Long-term collaboration",
      description: "Partnerships structured for sustained engagement — from architecture through operations.",
    },
    {
      title: "Technical excellence",
      description: "Deployment-grade engineering standards across every system we design and deliver.",
    },
    {
      title: "Responsible AI",
      description: "Governed, transparent, and accountable AI systems built for institutional trust.",
    },
    {
      title: "Secure and scalable systems",
      description: "Security and scalability embedded in architecture — not added after deployment.",
    },
    {
      title: "Research-driven innovation",
      description: "Emerging research translated into operational technology with rigorous validation.",
    },
    {
      title: "Operational impact",
      description: "Measured by systems delivered, infrastructure strengthened, and outcomes enabled.",
    },
    {
      title: "Open collaboration",
      description: "Transparent partnership models aligned with institutional goals and shared capability building.",
    },
    {
      title: "Institutional trust",
      description: "Engineering credibility, security discipline, and professional accountability at every stage.",
    },
  ],

  contact: {
    title: "Start a conversation",
    description:
      "Share your organization, partnership interest, and collaboration scope. Our team reviews all partnership inquiries and will connect where there is strategic alignment.",
    submitLabel: "Connect With Our Team",
    successTitle: "Inquiry received",
    successDescription:
      "Our team reviews all partnership inquiries and will connect where there is strategic alignment.",
  },

  partnershipInterests: [
    { id: "institutional-technology", label: "Institutional Technology" },
    { id: "research-collaboration", label: "Research Collaboration" },
    { id: "ai-digital-systems", label: "AI & Digital Systems Deployment" },
    { id: "infrastructure-modernization", label: "Infrastructure Modernization" },
    { id: "ecosystem-engagement", label: "Ecosystem Engagement" },
    { id: "general", label: "General / Multiple Areas" },
  ],
};
