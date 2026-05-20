import type { ProjectStage, ThemeId } from "./types";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  themes: ThemeId[];
  stages: ProjectStage[];
  opportunity?: string;
  building: string;
  potentialPartners: string[];
  status: ProjectStage[];
  featured?: boolean;
}

export const projectStages: ProjectStage[] = [
  "Concept",
  "Prototype",
  "Proposal",
  "Pilot",
  "Seeking Partners",
  "Seeking Funding",
  "In Development",
  "Research",
];

export const projects: Project[] = [
  {
    id: "government-services-ai",
    slug: "government-services-ai",
    title: "Government Services AI",
    description:
      "Operational civic workflow platform connecting citizen intake, AI assistance, review queues, and result dashboards.",
    themes: ["government"],
    stages: ["Prototype", "In Development"],
    opportunity: "Digital service delivery modernization for governments",
    building:
      "A full-stack service operations application with request pipelines, status tracking, and institutional review workflows.",
    potentialPartners: ["City digital teams", "Public service departments", "GovTech programs"],
    status: ["In Development", "Seeking Partners"],
    featured: true,
  },
  {
    id: "resilience-resource-optimizer",
    slug: "resilience-resource-optimizer",
    title: "Resilience Resource Optimizer",
    description:
      "Climate resilience planning system for local governments to prioritize interventions and budget allocations for child-centered outcomes.",
    themes: ["climate"],
    stages: ["Prototype", "Pilot"],
    opportunity: "Municipal adaptation planning and resilience budgeting",
    building:
      "Risk analysis, resource planning, reporting, and transparency modules for institutional climate governance.",
    potentialPartners: ["Local governments", "Climate funds", "Development agencies"],
    status: ["Pilot", "Seeking Partners"],
    featured: true,
  },
  {
    id: "x-y-manufacturing-platform",
    slug: "x-y",
    title: "x!y - Manufacturing Made Easy & Efficient",
    description:
      "AI-powered manufacturing operations platform for supplier discovery, workflow optimization, booking, and partner onboarding.",
    themes: ["startups", "technology"],
    stages: ["Prototype", "In Development"],
    opportunity: "Startup and SME manufacturing acceleration",
    building:
      "Integrated manufacturing assistant, marketplace discovery, booking workflows, and provider setup operations.",
    potentialPartners: ["Manufacturers", "Startup networks", "Innovation hubs"],
    status: ["In Development", "Seeking Partners"],
    featured: true,
  },
  {
    id: "ai-for-cities",
    slug: "ai-for-cities",
    title: "AI for Cities",
    description:
      "Urban intelligence tools that help city governments prioritize services, respond to citizen needs, and coordinate cross-department programs.",
    themes: ["government"],
    stages: ["Prototype", "Proposal"],
    opportunity: "Smart cities and urban innovation programs",
    building:
      "A lightweight civic intelligence layer connecting service data, citizen signals, and operational dashboards for city teams.",
    potentialPartners: ["City governments", "Urban innovation labs", "Multilateral funders"],
    status: ["Prototype", "Proposal"],
    featured: true,
  },
  {
    id: "climate-intelligence-platform",
    slug: "climate-intelligence-platform",
    title: "Climate Intelligence Platform",
    description:
      "Environmental and resilience intelligence for adaptation planning, risk visibility, and climate program design.",
    themes: ["climate"],
    stages: ["Concept", "Proposal"],
    opportunity: "Climate adaptation and resilience funding",
    building:
      "A concept platform aggregating climate risk signals, adaptation indicators, and program-ready reporting views.",
    potentialPartners: ["Climate funds", "Environmental agencies", "Research institutions"],
    status: ["Concept", "Proposal", "Seeking Partners"],
    featured: true,
  },
  {
    id: "funding-access-assistant",
    slug: "funding-access-assistant",
    title: "Funding Access Assistant",
    description:
      "AI-guided discovery and readiness support for grants, RFPs, and development finance — built for entrepreneurs and program teams.",
    themes: ["economic-development", "startups"],
    stages: ["Prototype"],
    opportunity: "Inclusive finance and entrepreneurship programs",
    building:
      "An assistant that maps funding opportunities, surfaces eligibility fit, and drafts proposal-ready outlines.",
    potentialPartners: ["Accelerators", "Development banks", "Foundations"],
    status: ["Prototype", "In Development"],
    featured: true,
  },
  {
    id: "civic-service-navigator",
    slug: "civic-service-navigator",
    title: "Civic Service Navigator",
    description:
      "Multilingual navigation for public services — helping citizens find, understand, and complete essential government processes.",
    themes: ["government", "policy"],
    stages: ["Prototype"],
    opportunity: "Digital government and citizen access initiatives",
    building:
      "A conversational navigator with structured service pathways, eligibility guidance, and accessibility-first design.",
    potentialPartners: ["Government agencies", "Civic tech coalitions", "NGOs"],
    status: ["Prototype", "Seeking Partners"],
    featured: true,
  },
  {
    id: "public-impact-knowledge-graph",
    slug: "public-impact-knowledge-graph",
    title: "Public Impact Knowledge Graph",
    description:
      "An ecosystem intelligence layer connecting programs, funders, institutions, and outcomes across public-impact domains.",
    themes: ["technology", "policy"],
    stages: ["Research", "Prototype"],
    opportunity: "Policy research and ecosystem mapping grants",
    building:
      "A research prototype linking entities, funding flows, and program outcomes into queryable public-impact intelligence.",
    potentialPartners: ["Think tanks", "Research universities", "Philanthropic networks"],
    status: ["Research", "Prototype"],
    featured: true,
  },
];

export function getProjectsByTheme(themeId: ThemeId) {
  return projects.filter((p) => p.themes.includes(themeId));
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
