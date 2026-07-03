export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  expertise: string[];
  achievements: string[];
  systemsDelivered: string[];
  certifications?: string[];
  linkedin: string;
  github?: string;
  photo?: string;
  initials: string;
}

export const teamContent = {
  hero: {
    label: "Engineering Team",
    title: "Technical leadership with proven deployment experience",
    subtitle:
      "Engineers and architects who design, build, and operate AI systems, cloud infrastructure, enterprise platforms, and mission-critical operational technology at institutional scale.",
  },

  collectiveImpact: {
    label: "Collective engineering impact",
    title: "Verified delivery across large-scale systems",
    description:
      "Our team has collectively delivered production systems spanning high-throughput data platforms, governed identity environments, digital twin deployments, and secure AI architectures.",
  },

  credibilityMetrics: [
    { label: "Catalog assets managed", value: "60M+" },
    { label: "Peak ingestion throughput", value: "50K TPS" },
    { label: "Governed PII records", value: "100M+" },
    { label: "Technology program delivery", value: "$15M+" },
    { label: "Digital twin deployments", value: "Multi-sector" },
    { label: "AI security architecture", value: "Production-grade" },
    { label: "Multimodal AI systems", value: "Deployed" },
    { label: "Infrastructure modernization", value: "Enterprise-scale" },
  ],

  members: [
    {
      id: "praveen-ashok-kumar",
      name: "Praveen Ashok Kumar",
      role: "Senior Technical Program Manager",
      specialization: "IoT systems, digital twins, and government-scale cloud delivery",
      bio: "Leads architecture and delivery of large-scale IoT and digital twin platforms for government and smart infrastructure environments. Owns end-to-end technical program execution — from systems design through production deployment across cloud-native and operational technology stacks.",
      expertise: [
        "Digital Twins",
        "IoT Systems",
        "Cloud Infrastructure",
        "Smart Infrastructure",
        "Systems Architecture",
        "Public Sector Technology",
      ],
      achievements: [
        "Led multi-sector digital twin and smart infrastructure deployments",
        "Delivered government-scale cloud and IoT systems programs",
        "Managed cross-functional engineering teams on $15M+ technology initiatives",
        "Architected operational technology integration across cloud and edge environments",
      ],
      systemsDelivered: [
        "Government-scale digital twin platforms",
        "Smart infrastructure monitoring systems",
        "IoT data ingestion and operations consoles",
        "Multi-sector cloud deployment programs",
      ],
      linkedin: "https://www.linkedin.com/in/praveenashok",
      photo: "/images/team/praveen.jpg",
      initials: "PA",
    },
    {
      id: "prathipa-ashok-kumar",
      name: "Prathipa Ashok Kumar",
      role: "Business & Strategy Lead",
      specialization: "Institutional program delivery and enterprise technology modernization",
      bio: "Drives cross-functional execution of institutional technology programs across government and enterprise environments. Translates complex engineering initiatives into deployable outcomes — coordinating stakeholders, delivery timelines, and operational readiness for large-scale modernization efforts.",
      expertise: [
        "Enterprise Platforms",
        "Public Sector Technology",
        "Operational Technology",
        "Systems Architecture",
        "Research & Innovation",
      ],
      achievements: [
        "Led institutional partnerships for government and enterprise technology programs",
        "Coordinated $15M+ technology delivery across multi-stakeholder environments",
        "Managed cross-functional teams spanning engineering, operations, and institutions",
        "Established delivery frameworks for public-sector digital modernization",
      ],
      systemsDelivered: [
        "Government digital service modernization programs",
        "Enterprise technology transformation initiatives",
        "Institutional AI and infrastructure deployment programs",
        "Multi-partner operational technology engagements",
      ],
      linkedin: "https://www.linkedin.com/in/prathipa-ashok",
      photo: "/images/team/prathipa.jpg",
      initials: "PA",
    },
    {
      id: "udhgee-murugesan",
      name: "Udhgee Murugesan",
      role: "AI Security Engineer",
      specialization: "AI security architecture and secure cloud deployment",
      bio: "Designs production-grade secure AI architectures with threat modeling, identity governance, and cloud security controls built into deployment pipelines. Engineers security patterns for AI systems operating in governed, high-sensitivity institutional environments.",
      expertise: [
        "Cybersecurity",
        "AI Systems",
        "Cloud Infrastructure",
        "DevSecOps",
        "Distributed Systems",
      ],
      achievements: [
        "Architected production-grade AI security frameworks for institutional deployments",
        "Implemented threat modeling and secure deployment patterns on AWS",
        "Built security controls for governed AI systems in regulated environments",
        "Established DevSecOps practices for AI and cloud-native platforms",
      ],
      systemsDelivered: [
        "Secure AI deployment architectures",
        "Cloud security and identity governance systems",
        "Threat-modeled AI application platforms",
        "Enterprise secure integration layers",
      ],
      linkedin: "https://www.linkedin.com/in/udhgee",
      photo: "/images/team/udhgee.jpg",
      initials: "UM",
    },
    {
      id: "raghavan-kothandaraman",
      name: "Raghavan Kothandaraman",
      role: "Senior Software Engineer",
      specialization: "High-throughput distributed systems and real-time data platforms",
      bio: "Builds high-performance distributed systems and real-time data pipelines on AWS — engineered for throughput-critical production workloads. Specializes in system design for large-scale ingestion, data platform architecture, and high-availability service layers.",
      expertise: [
        "Distributed Systems",
        "Data Engineering",
        "Cloud Infrastructure",
        "Systems Architecture",
        "Enterprise Platforms",
      ],
      achievements: [
        "Engineered ingestion architectures reaching 50K TPS peak throughput",
        "Built large-scale data platforms managing 60M+ catalog assets",
        "Designed high-availability distributed systems on AWS",
        "Delivered real-time data pipeline infrastructure for production operations",
      ],
      systemsDelivered: [
        "High-throughput ingestion and catalog systems",
        "Real-time data pipeline platforms",
        "AWS-scale distributed service architectures",
        "Enterprise data platform backends",
      ],
      linkedin: "https://www.linkedin.com/in/raghavankothandaraman",
      photo: "/images/team/raghavan.jpg",
      initials: "RK",
    },
    {
      id: "priyanka-praveen",
      name: "Priyanka Praveen",
      role: "Architect & Design Specialist",
      specialization: "Systems design and UX architecture for operational platforms",
      bio: "Architects user-centric operational platforms that bridge infrastructure complexity with accessible institutional interfaces. Designs systems spanning spatial environments, enterprise dashboards, and accessibility-compliant digital products for mission-critical operations.",
      expertise: [
        "Systems Architecture",
        "Enterprise Platforms",
        "Operational Technology",
        "Research & Innovation",
      ],
      achievements: [
        "Designed enterprise platform interfaces for infrastructure and operations teams",
        "Architected accessible, multilingual systems for institutional environments",
        "Bridged spatial design and systems thinking for operational technology products",
        "Established UX architecture standards for complex platform deployments",
      ],
      systemsDelivered: [
        "Operational dashboard and control interfaces",
        "Institutional platform UX architectures",
        "Accessibility-compliant enterprise applications",
        "Spatial and systems design frameworks for OT environments",
      ],
      linkedin: "https://www.linkedin.com/in/ar-priyanka-praveen-8bb34418a",
      photo: "/images/team/priyanka.jpg",
      initials: "PP",
    },
    {
      id: "anchana-m",
      name: "Anchana",
      role: "AI & Full Stack Developer",
      specialization: "Applied AI systems and full-stack platform engineering",
      bio: "Develops applied AI and full-stack platforms — from multimodal detection systems to operational applications with accessibility and production deployment requirements. Engineers end-to-end AI features integrated into institutional software environments.",
      expertise: [
        "AI Systems",
        "MLOps",
        "Enterprise Platforms",
        "Distributed Systems",
        "Research & Innovation",
      ],
      achievements: [
        "Deployed multimodal AI systems in production application environments",
        "Built full-stack AI platforms with detection, accessibility, and operations modules",
        "Engineered Python-based AI pipelines integrated into enterprise applications",
        "Delivered applied AI features across institutional software platforms",
      ],
      systemsDelivered: [
        "Multimodal AI detection and analysis platforms",
        "Full-stack institutional application systems",
        "Applied AI integration layers for enterprise software",
        "Operational AI-assisted application modules",
      ],
      linkedin: "https://www.linkedin.com/in/anchana-mariselvam/",
      photo: "/images/team/anchana.jpg",
      initials: "AM",
    },
  ] satisfies TeamMember[],

  mission: {
    label: "Engineering standard",
    title: "Deployment-grade execution across every initiative",
    body: "Every team member owns outcomes from architecture through production operations. We measure credibility by systems delivered — high-throughput data platforms, secure AI architectures, digital twin deployments, and institutional technology that runs in real environments.",
  },
};

export type TeamContent = typeof teamContent;
