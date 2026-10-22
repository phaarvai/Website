"use client";

import { motion } from "framer-motion";
import { SectionIntro } from "@/components/SectionIntro";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
};

const phases = [
  {
    step: "01",
    title: "Understand",
    description: "We map existing workflows, system architecture, and decision processes — locating the friction that carries the highest operational cost.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=75"
  },
  {
    step: "02",
    title: "Design",
    description: "We architect robust, interoperable systems that respect your security and compliance constraints — and are built to scale from day one.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=75"
  },
  {
    step: "03",
    title: "Build & Scale",
    description: "We execute the full technical build, manage integration, and embed measurable outcome tracking into every system we deploy.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=75"
  }
];

const principles = [
  {
    title: "Usefulness Over Hype",
    description: "We apply AI precisely where it removes operational friction. Not because it is novel, but because it produces measurable change."
  },
  {
    title: "Strategy Must Equal Execution",
    description: "We own both the design and the delivery — ensuring what is promised can actually be built within institutional realities."
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

      <article className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 md:px-12">

          {/* Hero header + image split */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
                Institutional strategy backed by rigorous execution.
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                PHAARVAI was founded on a simple premise: large institutions do not need more advisory reports or unproven pilots. They need the partner who bridges the gap between ideas and execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-border">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Institutional technology workspace"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24" aria-label="Mission and Vision">
            <motion.div
              {...fadeIn}
              className="bg-white border border-border rounded-xl overflow-hidden"
            >
              <div className="h-36 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=75"
                  alt="Data analytics mission"
                  className="w-full h-full object-cover opacity-95"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-10">
                <span className="label-mono mb-4 block">Mission</span>
                <h2 className="text-xl font-bold mb-3 text-foreground">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To build the technical capability of critical institutions. We deploy practical AI, unified data platforms, and secure digital workflows that enable better resource allocation, operational visibility, and accountable program execution.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
              className="bg-white border border-border rounded-xl overflow-hidden"
            >
              <div className="h-36 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=75"
                  alt="Institutional vision for cities and infrastructure"
                  className="w-full h-full object-cover opacity-95"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-10">
                <span className="label-mono mb-4 block">Vision</span>
                <h2 className="text-xl font-bold mb-3 text-foreground">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A public and critical sector where data silos and legacy workflows no longer limit institutional capability. Where operational intelligence is standard infrastructure — and every institution can act with precision and accountability.
                </p>
              </div>
            </motion.div>
          </section>

          {/* How We Work */}
          <SectionIntro title="How We Work" subtitle="A structured approach to complex institutional deployments." />

          <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24" aria-label="Methodology">
            {phases.map((phase, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.08 }}
                className="bg-white border border-border rounded-xl overflow-hidden"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={phase.image}
                    alt={`${phase.title} phase`}
                    className="w-full h-full object-cover opacity-92"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <div className="text-primary font-mono text-xl font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Core Principles */}
          <SectionIntro title="Core Principles" className="mb-10" />

          <section className="bg-white border border-border rounded-xl overflow-hidden mb-20" aria-label="Core principles">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.06 }}
                className="flex flex-col md:flex-row gap-6 border-b border-border last:border-0 p-8"
              >
                <div className="md:w-1/3">
                  <h3 className="text-sm font-bold text-foreground">{principle.title}</h3>
                </div>
                <div className="md:w-2/3">
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
