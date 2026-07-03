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
    title: "x!y — Manufacturing Operations Platform",
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
    externalUrl: "/projects/x-y",
    linkType: "system",
    badge: "Live",
    openInNewTab: true,
  },
  {
    id: "ai-for-cities",
    slug: "ai-for-cities",
    title: "AI for Cities",
    description:
      "Urban intelligence system ingesting civic signals, service data, and operational metrics to prioritize interventions and coordinate municipal programs.",
    themes: ["government", "data-ai-systems"],
    stages: ["Production Candidate", "In Integration"],
    technologies: ["ML Pipelines", "Event Processing", "Dashboard APIs", "PostgreSQL"],
    tags: ["AI", "Data", "Operational"],
    systemType: "Urban Intelligence Platform",
    targetUsers: "City operations and infrastructure teams",
    deploymentContext: "Smart city and urban operations centers",
    building:
      "Civic intelligence layer connecting service data streams, signal processing, and program coordination.",
    potentialPartners: ["City governments", "Urban operations teams", "Infrastructure operators"],
    status: ["Production Candidate", "In Integration"],
    featured: true,
    externalUrl: "/assistant",
    linkType: "platform",
    badge: "Active",
    openInNewTab: true,
  },
  {
    id: "climate-intelligence-platform",
    slug: "climate-intelligence-platform",
    title: "Climate Intelligence Platform",
    description:
      "Environmental intelligence stack delivering adaptation indicators, climate risk signals, and operational reporting for adaptation program managers.",
    themes: ["environment-resilience", "data-ai-systems"],
    stages: ["Production Candidate", "In Integration"],
    technologies: ["Climate Models", "Risk Visualization", "Data Pipelines", "React"],
    tags: ["Data", "Research", "Deployment"],
    systemType: "Intelligence System",
    targetUsers: "Environmental and climate program operators",
    deploymentContext: "Climate adaptation and environmental operations",
    building:
      "Climate risk signal processing, adaptation indicators, and institutional reporting modules.",
    potentialPartners: ["Environmental agencies", "Climate programs", "Research institutions"],
    status: ["Production Candidate", "In Integration"],
    featured: true,
    externalUrl: "/projects/resilience-resource-optimizer/risk-map",
    linkType: "system",
    badge: "Research",
    openInNewTab: true,
  },
  {
    id: "institutional-readiness-assistant",
    slug: "institutional-readiness-assistant",
    title: "Institutional Readiness Assistant",
    description:
      "AI-guided readiness system mapping eligibility requirements, structured workflows, and decision support for institutional program modernization.",
    themes: ["government", "data-ai-systems"],
    stages: ["In Integration", "Pilot"],
    technologies: ["LLM Orchestration", "Rules Engine", "Form Workflows", "Analytics"],
    tags: ["AI", "Operational", "Platform"],
    systemType: "Decision Support System",
    targetUsers: "Public agencies and program administrators",
    deploymentContext: "Institutional program modernization environments",
    building:
      "Requirements mapping engine, structured readiness workflows, and operator decision interfaces.",
    potentialPartners: ["Public agencies", "Development programs", "Institutional operators"],
    status: ["In Integration", "Pilot"],
    featured: true,
    externalUrl: "/dashboard",
    linkType: "system",
    badge: "Active",
    openInNewTab: true,
  },
  {
    id: "civic-service-navigator",
    slug: "civic-service-navigator",
    title: "Civic Service Navigator",
    description:
      "Multilingual conversational navigation layer helping citizens discover services, understand eligibility, and complete public processes across government portals.",
    themes: ["government", "research-emerging"],
    stages: ["Pilot", "In Integration"],
    technologies: ["Conversational AI", "NLP", "Service Graph", "i18n"],
    tags: ["AI", "Platform", "Deployment"],
    systemType: "Citizen Access Platform",
    targetUsers: "Citizens and government front-office teams",
    deploymentContext: "Digital government and citizen access channels",
    building:
      "Conversational navigator with service pathway routing and eligibility guidance engines.",
    potentialPartners: ["Government agencies", "Civic coalitions", "Public institutions"],
    status: ["Pilot", "In Integration"],
    featured: true,
    externalUrl: "/assistant",
    linkType: "platform",
    badge: "Platform",
    openInNewTab: true,
  },
  {
    id: "institutional-knowledge-graph",
    slug: "institutional-knowledge-graph",
    title: "Institutional Knowledge Graph",
    description:
      "Operational intelligence graph linking institutions, systems, programs, and outcomes into queryable entity relationships for ecosystem analysis.",
    themes: ["data-ai-systems", "research-emerging"],
    stages: ["Research System", "In Integration"],
    technologies: ["Knowledge Graph", "Entity Resolution", "Graph API", "Search"],
    tags: ["Data", "Research", "Infrastructure"],
    systemType: "Knowledge Platform",
    targetUsers: "Research institutions and policy operators",
    deploymentContext: "Institutional ecosystem intelligence environments",
    building:
      "Entity linking pipelines, graph query APIs, and operational intelligence interfaces.",
    potentialPartners: ["Research universities", "Think tanks", "Institutional networks"],
    status: ["Research System", "In Integration"],
    featured: true,
    externalUrl: "/projects/government-services-ai",
    linkType: "landing",
    badge: "Research",
    linkLabel: "Explore Platform",
    openInNewTab: true,
  },
];

export function getProjectsByTheme(themeId: ThemeId) {
  return projects.filter((p) => p.themes.includes(themeId));
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
