import { motion } from "framer-motion";
import { SectionIntro } from "@/components/SectionIntro";
import { CTASection } from "@/components/CTASection";

export default function About() {
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
            Institutional strategy backed by rigorous execution.
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            PHAARVAI was founded on a simple premise: large institutions do not need more advisory reports or unproven pilots. They need the partner that bridges the gap between ideas and execution — building scalable digital systems and AI-enabled solutions that produce measurable operational change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-border p-10 rounded-xl shadow-sm"
          >
            <div className="text-xs font-mono tracking-widest text-primary uppercase mb-4">Mission</div>
            <h2 className="text-2xl font-bold mb-5 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To build the technical capability of critical institutions. We deploy practical AI, unified data platforms, and secure digital workflows that enable governments, infrastructure operators, and foundations to build operational intelligence, allocate resources effectively, and act with measurable accountability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white border border-border p-10 rounded-xl shadow-sm"
          >
            <div className="text-xs font-mono tracking-widest text-primary uppercase mb-4">Vision</div>
            <h2 className="text-2xl font-bold mb-5 text-foreground">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A public and critical sector where data silos and legacy workflows no longer impede institutional capability. Where operational intelligence is a standard infrastructure — not a strategic aspiration — and where every institution has the technical foundation to make decisions with precision and deliver programs with accountability.
            </p>
          </motion.div>
        </div>

        <SectionIntro title="How We Work" subtitle="A structured approach to complex institutional deployments." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            {
              step: "01",
              title: "Understand",
              description: "We begin by mapping existing workflows, system architecture, and decision processes. Our goal is to locate the operational friction that carries the highest institutional cost — not to deploy technology for its own sake."
            },
            {
              step: "02",
              title: "Design",
              description: "We architect robust, interoperable solutions that respect your existing security and compliance constraints. Every design is built for scale, avoiding the common trap of pilot systems that cannot survive production."
            },
            {
              step: "03",
              title: "Build & Scale",
              description: "We execute the technical build and manage integration into active environments — with clear handoffs, human-in-the-loop safeguards, measurable outcome tracking, and a defined path to institutional scale."
            }
          ].map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-border p-8 rounded-xl shadow-sm"
            >
              <div className="text-primary font-mono text-2xl font-bold mb-4">{phase.step}</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{phase.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
            </motion.div>
          ))}
        </div>

        <SectionIntro title="Core Principles" className="mb-12" />

        <div className="space-y-0 mb-24 border border-border rounded-xl overflow-hidden bg-white shadow-sm">
          {[
            {
              title: "Usefulness Over Hype",
              description: "We evaluate every technology decision by one criterion: does it produce a measurable operational outcome? AI is a tool, not a destination. We deploy it precisely where it removes real institutional friction."
            },
            {
              title: "Strategy Must Equal Execution",
              description: "A strategic roadmap without technical execution is a document. We own both the design and the delivery — ensuring that what is promised can actually be built within the realities of the institution."
            },
            {
              title: "Built for Scale, Not Pilots",
              description: "Every system we deliver is designed to grow with the institution. We do not build proofs-of-concept that require complete rebuilds for production. Architecture decisions are made with scale in mind from the first day."
            },
            {
              title: "Measurable Systems, Not Vague Impact",
              description: "We build impact measurement into every deployment. Outcomes must be trackable, reportable, and verifiable — for leadership, for funders, and for the communities these institutions serve."
            }
          ].map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col md:flex-row gap-6 border-b border-border last:border-0 p-8"
            >
              <div className="md:w-1/3">
                <h3 className="text-base font-bold text-foreground">{principle.title}</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CTASection
        title="Partner with PHAARVAI"
        description="Learn more about our methodology and discuss how we approach institutional technology deployments."
        buttonLabel="Contact Our Team"
        buttonHref="/contact"
      />
    </div>
  );
}
