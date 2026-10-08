import type { ProjectStage, ProjectLinkType, ProjectBadge, ThemeId } from "./types";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  themes: ThemeId[];
  stages: ProjectStage[];
  technologies: string[];
  tags: string[];
  systemType?: string;
  targetUsers?: string;
  deploymentContext?: string;
  building: string;
  potentialPartners: string[];
  status: ProjectStage[];
  featured?: boolean;
  externalUrl: string;
  linkType: ProjectLinkType;
  badge?: ProjectBadge;
  linkLabel?: string;
  openInNewTab?: boolean;
  image?: string;
}

export const projectStages: ProjectStage[] = [
  "Deployed",
  "Pilot",
  "Production Candidate",
  "In Integration",
  "Research System",
];

export const projects: Project[] = [
  {
    id: "government-services-ai",
    slug: "government-services-ai",
    title: "Government Services AI",
    description:
      "Production civic workflow platform with AI-assisted intake, case routing, review queues, and institutional dashboards for high-volume public service operations.",
    themes: ["government", "technology-systems"],
    stages: ["In Integration", "Pilot"],
    technologies: ["Next.js", "AI Assistants", "Workflow Engine", "RBAC"],
    tags: ["AI", "Platform", "Operational"],
    systemType: "Operational Platform",
    targetUsers: "Government digital service teams",
    deploymentContext: "Government digital service delivery environments",
    building:
      "Request pipelines, AI-assisted triage, institutional review workflows, and operator dashboards.",
    potentialPartners: ["City digital teams", "Public service departments", "GovTech programs"],
    status: ["In Integration", "Pilot"],
    featured: true,
    externalUrl: "/login",
    linkType: "system",
    badge: "Live",
    openInNewTab: true,
  },
  {
    id: "resilience-resource-optimizer",
    slug: "resilience-resource-optimizer",
    title: "Resilience Resource Optimizer",
    description:
      "Decision-support platform for climate resilience planning — risk scoring, intervention prioritization, and budget allocation modeling for municipal operations.",
    themes: ["environment-resilience", "government"],
    stages: ["Pilot", "Production Candidate"],
    technologies: ["Geospatial Analytics", "Risk Modeling", "React", "API Layer"],
    tags: ["Data", "Platform", "Deployment"],
    systemType: "Planning Platform",
    targetUsers: "Municipal resilience and planning teams",
    deploymentContext: "Municipal adaptation and resilience operations",
    building:
      "Risk analysis modules, resource planning engines, and transparency reporting interfaces.",
    potentialPartners: ["Local governments", "Climate agencies", "Development partners"],
    status: ["Pilot", "Production Candidate"],
    featured: true,
    externalUrl: "/projects/resilience-resource-optimizer",
    linkType: "platform",
    badge: "Platform",
    openInNewTab: true,
  },
  {
    id: "x-y-manufacturing-platform",
    slug: "x-y",
    title: "XFactorY",
    description:
      "Manufacturing operations platform with AI supplier discovery, workflow orchestration, booking pipelines, and provider onboarding across industrial supply chains.",
    themes: ["technology-systems", "data-ai-systems"],
    stages: ["In Integration", "Production Candidate"],
    technologies: ["AI Matching", "Marketplace API", "Workflow Automation", "Node.js"],
    tags: ["AI", "Platform", "Infrastructure"],
    systemType: "Manufacturing Platform",
    targetUsers: "Manufacturers and industrial operators",
    deploymentContext: "Industrial and SME manufacturing environments",
    building:
      "Manufacturing assistant, supplier marketplace, and provider operations console.",
    potentialPartners: ["Manufacturers", "Industrial networks", "Technology consortiums"],
    status: ["In Integration", "Production Candidate"],
    featured: true,
    externalUrl: "/XfactorY",
    linkType: "system",
    badge: "Live",
    // Same-tab so the address stays on Phaarvai at /XfactorY.
    openInNewTab: false,
  },
  {
    id: "ai-energy-demand-analytics",
    slug: "ai-energy",
    title: "AI Energy Demand Analytics",
    description:
      "Weather-Driven Indian Power Demand Intelligence & Prediction Platform",
    themes: ["environment-resilience", "data-ai-systems"],
    stages: ["Deployed", "Pilot"],
    technologies: ["Demand Forecasting", "Weather Analytics", "Random Forest", "Next.js"],
    tags: ["AI", "Data", "Operational"],
    systemType: "Analytics Platform",
    targetUsers: "Power system planners and utility operators",
    deploymentContext: "Indian state electricity demand operations",
    building:
      "Weather-linked demand forecasts, consumption intelligence, and reference cost estimates for state power systems.",
    potentialPartners: ["State utilities", "Energy agencies", "Grid operators"],
    status: ["Deployed", "Pilot"],
    featured: true,
    externalUrl: "/ai-energy/",
    linkType: "system",
    badge: "Live",
    openInNewTab: false,
  },
];

export function getProjectsByTheme(themeId: ThemeId) {
  return projects.filter((p) => p.themes.includes(themeId));
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
