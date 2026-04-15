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

const principles = [
  {
    title: "Usefulness Over Hype",
    description: "We apply AI precisely where it removes operational friction — not because it is novel, but because it produces measurable change."
  },
  {
    title: "Strategy Must Equal Execution",
    description: "We own both the design and the delivery, ensuring what is promised can actually be built within institutional realities."
  },
  {
    title: "Built for Scale, Not Pilots",
    description: "Every system is designed to grow with the institution. Architecture decisions are made with scale in mind from day one."
  },
  {
    title: "Measurable Systems, Not Vague Impact",
    description: "Outcomes must be trackable and reportable — for leadership, funders, and the communities institutions serve."
  }
];

export default function About() {
  return (
    <>
      <PageSEO
        title="About PHAARVAI — Institutional Technology Strategy and Execution"
        description="PHAARVAI bridges the gap between strategy and execution for complex institutions. Learn about our mission, methodology, and core principles."
        path="/about"
      />

      <article className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-6 md:px-12">

          {/* Hero header + image split */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.1]">
                Institutional strategy backed by rigorous execution.
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                PHAARVAI was founded on a simple premise: large institutions do not need more advisory reports or unproven pilots. They need the partner who bridges the gap between ideas and execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2 hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-border">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Institutional technology workspace"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision — text-only, no thumbnail images */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16" aria-label="Mission and Vision">
            <motion.div {...fadeIn} className="bg-white border border-border rounded-xl p-8">
              <span className="label-mono mb-3 block">Mission</span>
              <h2 className="text-lg font-bold mb-3 text-foreground">Our Mission</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To build the technical capability of critical institutions. We deploy practical AI, unified data platforms, and secure digital workflows that enable better resource allocation, operational visibility, and accountable program execution.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }} className="bg-white border border-border rounded-xl p-8">
              <span className="label-mono mb-3 block">Vision</span>
              <h2 className="text-lg font-bold mb-3 text-foreground">Our Vision</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A public and critical sector where data silos and legacy workflows no longer limit institutional capability — where operational intelligence is standard infrastructure, and every institution can act with precision and accountability.
              </p>
            </motion.div>
          </section>

          {/* Core Principles */}
          <div className="mb-8">
            <motion.span {...fadeIn} className="label-mono mb-2 block">How We Think</motion.span>
            <motion.h2 {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.07 }} className="text-2xl md:text-3xl font-bold text-foreground">Core Principles</motion.h2>
          </div>

          <section className="bg-white border border-border rounded-xl overflow-hidden mb-16" aria-label="Core principles">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
                className="flex flex-col md:flex-row gap-5 border-b border-border last:border-0 px-8 py-6"
              >
                <div className="md:w-2/5 flex items-center gap-3">
                  <span className="text-[10px] font-mono text-primary/50 font-bold shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                  <h3 className="text-sm font-bold text-foreground">{principle.title}</h3>
                </div>
                <div className="md:w-3/5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </section>

        </div>

        <CTASection
          title="Partner with PHAARVAI"
          description="Learn more about our methodology and discuss how we approach institutional technology deployments."
          buttonLabel="Contact Our Team"
          buttonHref="/contact"
        />
      </article>
    </>
  );
}
