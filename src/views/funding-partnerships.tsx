"use client";

import { motion } from "framer-motion";
import { SectionIntro } from "@/components/SectionIntro";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

const partnerships = [
  {
    title: "Philanthropic & Foundation Programs",
    description: "Foundations deploying capital to social or infrastructure programs need technical partners who architect impact tracking from day one — not retrospectively."
  },
  {
    title: "CSR & Corporate Initiatives",
    description: "Large corporations executing CSR-mandated technology programs require implementation partners who satisfy both internal governance and external audit requirements."
  },
  {
    title: "Donor-Backed Public Programs",
    description: "International donor agencies need technical execution partners who understand the compliance and outcome-measurement requirements of sovereign funding."
  },
  {
    title: "Public Sector Consortiums",
    description: "Multi-agency programs require interoperable architecture and shared reporting systems that serve multiple stakeholders without compromising data security."
  }
];

const priorityThemes = [
  { title: "AI & Digital Transformation", description: "End-to-end AI and digitization implementation for public and mission-driven institutions." },
  { title: "Sustainability & ESG Systems", description: "Automated tracking and reporting for sustainability commitments and environmental compliance." },
  { title: "Data Platforms & Infrastructure", description: "Foundational data architecture for unified operational visibility across distributed programs." },
  { title: "Public Impact Measurement", description: "Outcome tracking frameworks that demonstrate program effectiveness to funders and oversight bodies." }
];

const howWeContribute = [
  { step: "Concept", text: "Validate technical feasibility and define implementation architecture aligned to funding parameters." },
  { step: "Build", text: "Construct the platforms, workflows, and data pipelines required for program execution at institutional scale." },
  { step: "Report", text: "Automate the compliance, milestone, and impact reporting required by funding bodies." },
  { step: "Scale", text: "Design systems that expand geographically or across programs without full rebuilds." }
];

export default function FundingPartnerships() {
  return (
    <>
      <PageSEO
        title="Funding & Partnerships — Public Impact Technology Programs"
        description="PHAARVAI structures implementation-ready, fundable technology initiatives for philanthropies, CSR programs, and public sector consortiums."
        path="/funding-partnerships"
      />

      <article className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 md:px-12">

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Funding & Partnerships
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              We structure the technical foundation for implementation-ready, fundable initiatives — ensuring they meet the compliance, measurement, and accountability standards required by public funders, philanthropies, and CSR mandates.
            </p>
          </motion.header>

          {/* Why it matters + How we contribute */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20" aria-label="Our approach to funding alignment">
            <motion.div
              {...fadeIn}
              className="bg-white border border-border p-8 rounded-xl"
            >
              <span className="label-mono mb-4 block">Why It Matters</span>
              <h2 className="text-xl font-bold mb-4 text-foreground">Why Funding Alignment Matters</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Many consequential technology programs receive funding — then fail in execution. Not because the vision was wrong, but because the technical architecture was never designed to support the compliance and scale that funding mandates require.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Funding bodies are increasingly sophisticated. Weak technical execution is a primary reason programs lose funding after the first cycle. We de-risk execution before capital is deployed.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
              className="bg-white border border-border p-8 rounded-xl"
            >
              <span className="label-mono mb-4 block">Our Contribution</span>
              <h2 className="text-xl font-bold mb-5 text-foreground">How PHAARVAI Contributes</h2>
              <ul className="space-y-3">
                {howWeContribute.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-xs font-bold text-primary mt-0.5 w-12 shrink-0">{item.step}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </section>

          {/* Partnership Models */}
          <SectionIntro title="Types of Partnerships" subtitle="We work with different funding models, each with specific technical requirements." />

          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20" aria-label="Partnership types">
            {partnerships.map((model, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.07 }}
                className="bg-white border border-border p-7 rounded-xl"
              >
                <h3 className="text-base font-bold mb-3 text-foreground">{model.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{model.description}</p>
              </motion.div>
            ))}
          </section>

          {/* Priority Themes */}
          <SectionIntro title="Priority Program Themes" subtitle="Technology domains where PHAARVAI has deepest implementation experience." />

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16" aria-label="Priority themes">
            {priorityThemes.map((theme, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.07 }}
                className="border-l-2 border-primary pl-5 py-1"
              >
                <h3 className="text-sm font-bold mb-1.5 text-foreground">{theme.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{theme.description}</p>
              </motion.div>
            ))}
          </section>

        </div>

        <CTASection
          title="Let's explore a scalable initiative together."
          description="Engage PHAARVAI to establish the technical and data requirements for your next funded or public-impact deployment."
          buttonLabel="Discuss Partnerships"
          buttonHref="/contact"
        />
      </article>
    </>
  );
}
