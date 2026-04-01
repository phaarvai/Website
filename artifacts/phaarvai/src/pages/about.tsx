import { motion } from "framer-motion";
import { SectionIntro } from "@/components/SectionIntro";
import { CTASection } from "@/components/CTASection";

export default function About() {
  return (
    <div className="pt-32 pb-16">
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
            PHAARVAI was founded on a simple premise: large institutions do not need more whitepapers or unproven software pilots. They need scalable systems that solve actual operational friction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground border-b border-border pb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To build the technical capability of critical institutions. We deploy pragmatic AI, unified data platforms, and secure digital workflows that enable governments, infrastructure operators, and foundations to allocate resources effectively and act decisively.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground border-b border-border pb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A public and critical sector where data silos and legacy workflows no longer impede impact. We envision a future where institutional leaders have absolute clarity over their operations, guided by precise data and secure, scalable automation.
            </p>
          </motion.div>
        </div>

        <SectionIntro title="How We Work" subtitle="A structured approach to complex deployments." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              step: "01",
              title: "Strategic Discovery",
              description: "We begin by mapping existing workflows and identifying data silos. Our goal is to locate the friction points that carry the highest operational cost, not just deploy technology for its own sake."
            },
            {
              step: "02",
              title: "Systems Architecture",
              description: "We design robust, interoperable solutions that respect your existing security and compliance constraints. The architecture is built for scale from day one, avoiding the trap of isolated pilot programs."
            },
            {
              step: "03",
              title: "Deployment & Integration",
              description: "We execute the technical build and manage the integration into active environments. We ensure clear handoffs, human-in-the-loop safeguards, and measurable operational outcomes."
            }
          ].map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border p-8 rounded-xl"
            >
              <div className="text-primary font-mono text-xl mb-4">{phase.step}</div>
              <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
              <p className="text-muted-foreground">{phase.description}</p>
            </motion.div>
          ))}
        </div>

        <SectionIntro title="Core Principles" className="mb-12" />
        
        <div className="space-y-8 mb-24">
          {[
            {
              title: "Pragmatism Over Novelty",
              description: "We leverage proven, robust technologies rather than untested frameworks. Institutional scale requires stability, predictability, and auditability."
            },
            {
              title: "Strategy Must Equal Execution",
              description: "A strategic roadmap is worthless if it cannot be technically executed within the realities of the organization. We own both."
            },
            {
              title: "Data Utility",
              description: "Data only has value when it influences a decision or automates a necessary task. We focus strictly on operational intelligence."
            }
          ].map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-6 border-t border-border pt-8"
            >
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold text-foreground">{principle.title}</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-muted-foreground leading-relaxed">{principle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <CTASection 
        title="Partner with PHAARVAI"
        description="Learn more about our methodology and previous successful deployments."
        buttonLabel="Contact Our Team"
        buttonHref="/contact"
      />
    </div>
  );
}
