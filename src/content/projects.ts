import type { ProjectStage, ThemeId } from "./types";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  themes: ThemeId[];
  stages: ProjectStage[];
  deploymentContext?: string;
  building: string;
  potentialPartners: string[];
  status: ProjectStage[];
  featured?: boolean;
  externalUrl: string;
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
      "Operational civic workflow platform connecting citizen intake, AI assistance, review queues, and institutional dashboards.",
    themes: ["government", "technology-systems"],
    stages: ["In Integration", "Pilot"],
    deploymentContext: "Digital service delivery modernization for governments",
    building:
      "Full-stack service operations application with request pipelines, status tracking, and institutional review workflows.",
    potentialPartners: ["City digital teams", "Public service departments", "GovTech programs"],
    status: ["In Integration", "Pilot"],
    featured: true,
    externalUrl: "/login",
  },
  {
    id: "resilience-resource-optimizer",
    slug: "resilience-resource-optimizer",
    title: "Resilience Resource Optimizer",
    description:
      "Climate resilience planning system for local governments to prioritize interventions and operational budget allocations.",
    themes: ["environment-resilience", "government"],
    stages: ["Pilot", "Production Candidate"],
    deploymentContext: "Municipal adaptation planning and resilience operations",
    building:
      "Risk analysis, resource planning, reporting, and transparency modules for institutional climate governance.",
    potentialPartners: ["Local governments", "Climate agencies", "Development partners"],
    status: ["Pilot", "Production Candidate"],
    featured: true,
    externalUrl: "/projects/resilience-resource-optimizer",
  },
  {
    id: "x-y-manufacturing-platform",
    slug: "x-y",
    title: "x!y — Manufacturing Operations Platform",
    description:
      "AI-powered manufacturing operations platform for supplier discovery, workflow optimization, booking, and partner onboarding.",
    themes: ["technology-systems", "data-ai-systems"],
    stages: ["In Integration", "Production Candidate"],
    deploymentContext: "Industrial and SME manufacturing acceleration",
    building:
      "Integrated manufacturing assistant, marketplace discovery, booking workflows, and provider operations.",
    potentialPartners: ["Manufacturers", "Industrial networks", "Innovation hubs"],
    status: ["In Integration", "Production Candidate"],
    featured: true,
    externalUrl: "/projects/x-y",
  },
  {
    id: "ai-for-cities",
    slug: "ai-for-cities",
    title: "AI for Cities",
    description:
      "Urban intelligence platform helping city governments prioritize services, respond to operational signals, and coordinate programs.",
    themes: ["government", "data-ai-systems"],
    stages: ["Production Candidate", "In Integration"],
    deploymentContext: "Smart city and urban operations programs",
    building:
      "Civic intelligence layer connecting service data, operational signals, and dashboards for city teams.",
    potentialPartners: ["City governments", "Urban innovation labs", "Infrastructure operators"],
    status: ["Production Candidate", "In Integration"],
    featured: true,
    externalUrl: "/projects",
  },
  {
    id: "climate-intelligence-platform",
    slug: "climate-intelligence-platform",
    title: "Climate Intelligence Platform",
    description:
      "Environmental and resilience intelligence for adaptation planning, risk visibility, and operational program design.",
    themes: ["environment-resilience", "data-ai-systems"],
    stages: ["Production Candidate", "In Integration"],
    deploymentContext: "Climate adaptation and resilience operations",
    building:
      "Platform aggregating climate risk signals, adaptation indicators, and operational reporting views.",
    potentialPartners: ["Environmental agencies", "Climate programs", "Research institutions"],
    status: ["Production Candidate", "In Integration"],
    featured: true,
    externalUrl: "/projects",
  },
  {
    id: "institutional-readiness-assistant",
    slug: "institutional-readiness-assistant",
    title: "Institutional Readiness Assistant",
    description:
      "AI-guided operational readiness for complex programs — eligibility mapping, workflow preparation, and structured decision support.",
    themes: ["government", "data-ai-systems"],
    stages: ["In Integration", "Pilot"],
    deploymentContext: "Institutional program modernization",
    building:
      "Assistant that maps program requirements, surfaces operational fit, and structures readiness workflows.",
    potentialPartners: ["Public agencies", "Development programs", "Institutional operators"],
    status: ["In Integration", "Pilot"],
    featured: true,
    externalUrl: "/projects",
  },
  {
    id: "civic-service-navigator",
    slug: "civic-service-navigator",
    title: "Civic Service Navigator",
    description:
      "Multilingual navigation for public services — helping citizens find, understand, and complete essential government processes.",
    themes: ["government", "research-emerging"],
    stages: ["Pilot", "In Integration"],
    deploymentContext: "Digital government and citizen access initiatives",
    building:
      "Conversational navigator with structured service pathways, eligibility guidance, and accessibility-first design.",
    potentialPartners: ["Government agencies", "Civic coalitions", "Public institutions"],
    status: ["Pilot", "In Integration"],
    featured: true,
    externalUrl: "/projects",
  },
  {
    id: "public-impact-knowledge-graph",
    slug: "public-impact-knowledge-graph",
    title: "Public Impact Knowledge Graph",
    description:
      "Ecosystem intelligence layer connecting programs, institutions, and outcomes across public-impact operational domains.",
    themes: ["data-ai-systems", "research-emerging"],
    stages: ["Research System", "In Integration"],
    deploymentContext: "Institutional ecosystem intelligence programs",
    building:
      "Research system linking entities, program flows, and outcomes into queryable operational intelligence.",
    potentialPartners: ["Research universities", "Think tanks", "Institutional networks"],
    status: ["Research System", "In Integration"],
    featured: true,
    externalUrl: "/projects",
  },
];

export function getProjectsByTheme(themeId: ThemeId) {
  return projects.filter((p) => p.themes.includes(themeId));
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
