"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
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

const howWeContribute = [
  { step: "Concept", text: "Validate technical feasibility and define implementation architecture aligned to funding parameters." },
  { step: "Build", text: "Construct the platforms, workflows, and data pipelines required for program execution at institutional scale." },
  { step: "Report", text: "Automate the compliance, milestone, and impact reporting required by funding bodies." },
  { step: "Scale", text: "Design systems that expand geographically or across programs without full rebuilds." }
];

const priorityThemes = [
  { title: "AI & Digital Transformation", description: "End-to-end AI and digitization implementation for public and mission-driven institutions." },
  { title: "Sustainability & ESG Systems", description: "Automated tracking and reporting for sustainability commitments and environmental compliance." },
  { title: "Data Platforms & Infrastructure", description: "Foundational data architecture for unified operational visibility across distributed programs." },
  { title: "Public Impact Measurement", description: "Outcome tracking frameworks that demonstrate program effectiveness to funders and oversight bodies." }
];

export default function FundingPartnerships() {
  return (
    <>
      <PageSEO
        title="Funding & Partnerships — Public Impact Technology Programs"
        description="PHAARVAI structures implementation-ready, fundable technology initiatives for philanthropies, CSR programs, and public sector consortiums."
        path="/funding-partnerships"
      />

      <article className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-6 md:px-12">

          <motion.header
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 leading-[1.1]">
              Funding & Partnerships
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              We structure the technical foundation for implementation-ready, fundable initiatives — ensuring they meet the compliance, measurement, and accountability standards required by public funders and philanthropies.
            </p>
          </motion.header>

          {/* Why + How — combined two-column */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12" aria-label="Our approach to funding alignment">
            <motion.div {...fadeIn} className="bg-white border border-border p-7 rounded-xl">
              <span className="label-mono mb-3 block">Why It Matters</span>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Many consequential technology programs receive funding — then fail in execution. Not because the vision was wrong, but because the technical architecture was never designed to support the compliance and scale that funding mandates require.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Funding bodies are increasingly sophisticated. Weak technical execution is a primary reason programs lose funding after the first cycle. We de-risk execution before capital is deployed.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }} className="bg-white border border-border p-7 rounded-xl">
              <span className="label-mono mb-3 block">How We Contribute</span>
              <ul className="space-y-3">
                {howWeContribute.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-xs font-bold text-primary mt-0.5 w-14 shrink-0">{item.step}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </section>

          {/* Partnership Models + Priority Themes — side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            <div>
              <div className="mb-6">
                <motion.span {...fadeIn} className="label-mono mb-1 block">Partnership Types</motion.span>
                <motion.h2 {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.06 }} className="text-xl font-bold text-foreground">Who We Work With</motion.h2>
              </div>
              <div className="space-y-4">
                {partnerships.map((model, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
                    className="border-l-2 border-primary/30 hover:border-primary pl-5 py-1 transition-colors duration-200"
                  >
                    <h3 className="text-sm font-bold mb-1 text-foreground">{model.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{model.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6">
                <motion.span {...fadeIn} className="label-mono mb-1 block">Program Themes</motion.span>
                <motion.h2 {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.06 }} className="text-xl font-bold text-foreground">Priority Domains</motion.h2>
              </div>
              <div className="space-y-4">
                {priorityThemes.map((theme, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
                    className="bg-white border border-border p-5 rounded-xl"
                  >
                    <h3 className="text-sm font-bold mb-1.5 text-foreground">{theme.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{theme.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

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
