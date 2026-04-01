import { motion } from "framer-motion";
import { SectionIntro } from "@/components/SectionIntro";
import { CTASection } from "@/components/CTASection";
import { ArrowRight } from "lucide-react";

const partnerships = [
  {
    title: "Philanthropic & Foundation Programs",
    description: "Foundations deploying capital to social or infrastructure programs require technical partners who can architect impact tracking from the beginning, not retrofit reporting systems after deployment."
  },
  {
    title: "CSR & Corporate Initiatives",
    description: "Large corporations executing CSR-mandated technology programs require implementation partners with the credibility to satisfy both internal governance and external audit requirements."
  },
  {
    title: "Donor-Backed Public Programs",
    description: "International donor organizations and bilateral development agencies need technical execution partners who understand the compliance and outcome-measurement requirements of sovereign funding."
  },
  {
    title: "Public Sector Consortiums",
    description: "Multi-agency or cross-jurisdictional programs require interoperable architecture and shared reporting systems. We design platforms that serve multiple institutional stakeholders without compromising data security."
  }
];

const priorityThemes = [
  { title: "AI & Digital Transformation", description: "End-to-end technical implementation of AI and digitization programs for public and mission-driven institutions." },
  { title: "Sustainability & ESG Systems", description: "Automated tracking, measurement, and reporting for sustainability commitments and environmental compliance mandates." },
  { title: "Data Platforms & Infrastructure", description: "Foundational data architecture for institutions that need unified operational visibility across distributed programs." },
  { title: "Public Impact Measurement", description: "Outcome tracking frameworks that demonstrate program effectiveness to funders, oversight bodies, and communities." }
];

export default function FundingPartnerships() {
  return (
    <div className="pt-32 pb-16 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Funding & Partnerships
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We structure the technical foundation for implementation-ready, fundable initiatives — ensuring they meet the stringent compliance, measurement, and accountability standards required by public funders, philanthropies, and CSR mandates.
          </p>
        </motion.div>

        {/* Why Alignment Matters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-border p-10 rounded-xl shadow-sm"
          >
            <div className="text-xs font-mono tracking-widest text-primary uppercase mb-4">Why It Matters</div>
            <h2 className="text-2xl font-bold mb-5 text-foreground">Why Funding Alignment Matters</h2>
            <p className="text-muted-foreground leading-relaxed">
              Many consequential technology programs receive funding — then fail in execution. Not because the vision was wrong, but because the technical architecture was never designed to support the compliance, reporting, and scale that funding mandates require. Funding bodies are sophisticated: weak technical execution is a primary reason programs lose funding after the first cycle. We de-risk execution before capital is deployed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white border border-border p-10 rounded-xl shadow-sm"
          >
            <div className="text-xs font-mono tracking-widest text-primary uppercase mb-4">Our Contribution</div>
            <h2 className="text-2xl font-bold mb-5 text-foreground">How PHAARVAI Contributes</h2>
            <div className="space-y-4">
              {[
                { step: "→", text: "Concept: We validate technical feasibility and define implementation architecture aligned to funding parameters." },
                { step: "→", text: "System: We build the platforms, workflows, and data pipelines required for program execution at institutional scale." },
                { step: "→", text: "Reporting: We automate the compliance, milestone, and impact reporting required by funding bodies." },
                { step: "→", text: "Scale: We design systems that can expand geographically or across programs without complete rebuilds." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">{item.step}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Types of Partnerships */}
        <SectionIntro title="Types of Partnerships" subtitle="We work with different funding models, each with specific technical requirements." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {partnerships.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-border p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-lg font-bold mb-4 text-foreground">{model.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{model.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Priority Themes */}
        <SectionIntro title="Priority Program Themes" subtitle="The technology domains where PHAARVAI has deepest implementation experience within funded program contexts." />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-24">
          {priorityThemes.map((theme, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-l-2 border-primary pl-6 py-2"
            >
              <h3 className="text-base font-bold mb-2 text-foreground">{theme.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{theme.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <CTASection
        title="Let's explore a scalable initiative together."
        description="Engage PHAARVAI to establish the technical and data requirements for your next funded or public-impact deployment."
        buttonLabel="Discuss Partnerships"
        buttonHref="/contact"
      />
    </div>
  );
}
