export const siteContent = {
  brand: {
    name: "Phaarvai",
    tagline: "AI for Good, built for public impact.",
    positioning:
      "An AI for Good company building practical technology solutions for governance, climate, economic development, startups, technology, and policy.",
  },
  hero: {
    headline: "AI for Good, built for public impact.",
    subheadline:
      "Phaarvai develops AI-powered ideas, prototypes, and platforms across government, climate, economic development, startups, technology, and policy.",
    ctaPrimary: { label: "Explore Themes", href: "/themes" },
    ctaSecondary: { label: "View Projects", href: "/projects" },
    ctaTertiary: { label: "Partner With Us", href: "/partner" },
    badges: [
      "AI for Good",
      "Govtech & Policy",
      "Proposal-Ready Innovation",
      "Public Impact",
    ],
  },
  whatWeDo: {
    title: "What We Do",
    subtitle:
      "We help turn public-interest challenges into fundable AI solutions, practical prototypes, and implementation-ready project concepts.",
  },
  operatingModel: {
    title: "How Ideas Become Impact",
    subtitle: "Our work follows a clear path from opportunity to deployment.",
    steps: [
      { label: "Opportunity", description: "Challenge or funding signal identified" },
      { label: "Theme", description: "Aligned to a public-impact domain" },
      { label: "Concept", description: "Structured idea and hypothesis" },
      { label: "Prototype", description: "Demo or lightweight platform" },
      { label: "Proposal", description: "Funder- and partner-ready package" },
      { label: "Partner", description: "Institutional collaboration" },
      { label: "Deployment", description: "Pilot or scaled implementation" },
    ],
  },
  whyPhaarvai: {
    title: "Why Phaarvai",
    subtitle:
      "Built for funders, governments, and institutions that need credible innovation — not generic AI hype.",
    points: [
      {
        title: "Public-interest technology experience",
        description:
          "Deep familiarity with governance, climate, development, and institutional program design.",
      },
      {
        title: "Proposal and funding ecosystem fluency",
        description:
          "We structure concepts for grants, RFPs, and multilateral programs from the start.",
      },
      {
        title: "AI + governance positioning",
        description:
          "Responsible, institution-ready AI that earns trust with officials and funders.",
      },
      {
        title: "Ideas to prototypes, fast",
        description:
          "We convert thinking into demos and proposal assets partners can evaluate quickly.",
      },
    ],
  },
  partnerCta: {
    title: "Have a public-impact challenge or funding opportunity? Let's build around it.",
    description:
      "Whether you are a government agency, funder, nonprofit, startup, or research institution — we collaborate to shape concepts, prototypes, and programs.",
    primary: { label: "Partner With Us", href: "/partner" },
    secondary: { label: "Contact Phaarvai", href: "/partner#contact" },
  },
  footer: {
    tagline: "AI for Good, built for public impact.",
    statement:
      "Practical AI solutions for governance, climate, economic development, startups, technology, and policy.",
    email: "partnerships@phaarvai.com",
    links: {
      explore: [
        { label: "Themes", href: "/themes" },
        { label: "Projects", href: "/projects" },
        { label: "Capabilities", href: "/capabilities" },
        { label: "About", href: "/about" },
      ],
      connect: [
        { label: "Partner With Us", href: "/partner" },
        { label: "Contact", href: "/partner#contact" },
      ],
    },
    copyright: `© ${new Date().getFullYear()} Phaarvai. All rights reserved.`,
  },
};

export const partnerAudiences = [
  {
    id: "funders",
    title: "Funders",
    description:
      "Philanthropies, development finance, and grantmakers seeking credible, proposal-ready innovation partners.",
  },
  {
    id: "governments",
    title: "Governments",
    description:
      "Agencies and public institutions exploring AI for services, governance, and citizen access.",
  },
  {
    id: "nonprofits",
    title: "Nonprofits",
    description:
      "Organizations scaling programs that need prototypes, data tools, and funder-aligned technology.",
  },
  {
    id: "startups",
    title: "Startups",
    description:
      "Founders and ecosystems building grant-ready, impact-focused ventures.",
  },
  {
    id: "research",
    title: "Research Institutions",
    description:
      "Universities and think tanks translating research into applied public-impact prototypes.",
  },
];

export const collaborationFlow = [
  { step: "01", title: "Share the challenge", description: "Tell us about the opportunity, program, or public-impact problem." },
  { step: "02", title: "Align on theme and scope", description: "We map the challenge to themes, concepts, and partnership fit." },
  { step: "03", title: "Co-create concepts", description: "Develop proposal-ready ideas, prototypes, or platform directions." },
  { step: "04", title: "Build toward deployment", description: "Move from demo to pilot with institutional partners and funders." },
];
