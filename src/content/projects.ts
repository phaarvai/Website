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
<<<<<<< HEAD
=======
  githubUrl?: string;
  liveUrl?: string;
>>>>>>> master
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
    id: "x-y-manufacturing-platform",
    slug: "xfactory",
    title: "XFactorY",
    description:
      "Manufacturing operations platform for industrial and SME supply chains — AI supplier discovery, workflow orchestration, and booking in one console. Teams match manufacturers, coordinate orders, and onboard providers without leaving the platform.",
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
    externalUrl: "/projects/xfactory",
    linkType: "system",
    badge: "Live",
    openInNewTab: false,
    image: "/images/projects/xfactory.jpg",
  },
  {
    id: "ai-energy-demand-analytics",
    slug: "ai-energy",
    title: "AI Energy Demand Analytics",
    description:
      "Weather-driven demand intelligence for Indian state electricity operations, forecasting load and consumption from meteorological and grid data. Utility planners use it for procurement, dispatch, and day-ahead capacity decisions.",
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
    externalUrl: "/projects/ai-energy",
    linkType: "system",
    badge: "Live",
    openInNewTab: false,
    image: "/images/projects/ai-energy.jpg",
  },
  {
    id: "government-services-ai",
    slug: "government-services-ai",
    title: "Government Services AI",
    description:
      "Production civic workflow platform for high-volume public services — intake, AI-assisted routing, review, and status tracking in governed dashboards. Built for digital service teams that need consistent operations under load.",
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
    externalUrl: "/projects/government-services-ai",
    linkType: "system",
    badge: "Live",
    openInNewTab: false,
    image: "/images/projects/government-services-ai.jpg",
  },
  {
    id: "resilience-resource-optimizer",
    slug: "resilience-resource-optimizer",
    title: "Resilience Resource Optimizer",
    description:
      "Decision-support for municipal climate resilience — risk scoring, intervention prioritization, and budget allocation across adaptation programs. Planning teams turn hazard and geospatial data into clear, reportable investment plans.",
    themes: ["environment-resilience", "government"],
<<<<<<< HEAD
    stages: ["Pilot", "Production Candidate"],
=======
    stages: ["Deployed", "Pilot"],
>>>>>>> master
    technologies: ["Geospatial Analytics", "Risk Modeling", "React", "API Layer"],
    tags: ["Data", "Platform", "Deployment"],
    systemType: "Planning Platform",
    targetUsers: "Municipal resilience and planning teams",
    deploymentContext: "Municipal adaptation and resilience operations",
    building:
      "Risk analysis modules, resource planning engines, and transparency reporting interfaces.",
    potentialPartners: ["Local governments", "Climate agencies", "Development partners"],
<<<<<<< HEAD
    status: ["Pilot", "Production Candidate"],
    featured: true,
    externalUrl: "/projects/resilience-resource-optimizer",
    linkType: "platform",
    badge: "Platform",
    openInNewTab: false,
    image: "/images/projects/resilience-resource-optimizer.jpg",
=======
    status: ["Deployed", "Pilot"],
    featured: true,
    externalUrl: "/projects/resilience-resource-optimizer",
    linkType: "platform",
    badge: "Live",
    openInNewTab: false,
    image: "/images/projects/resilience-resource-optimizer.jpg",
    githubUrl: "https://github.com/Phaarvai-technologies/Resilience-resource-optimizer.git",
    liveUrl: "https://resilience-resource-optimizer-zq3c.vercel.app/",
>>>>>>> master
  },
];

export function getProjectsByTheme(themeId: ThemeId) {
  return projects.filter((p) => p.themes.includes(themeId));
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
