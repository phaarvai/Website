"use client";

import { motion } from "framer-motion";
import { solutions } from "@/content/solutions";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

export default function Solutions() {
  return (
    <>
      <PageSEO
        title="Solutions — AI Decision Support, Workflow Digitization & Infrastructure Monitoring"
        description="Concrete implementations that remove operational friction and build institutional intelligence. Each solution grounded in real client challenges."
        path="/solutions"
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
              Solutions
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Concrete implementations designed to remove operational friction and build institutional intelligence — from architecture through production deployment.
            </p>
          </motion.header>

          <div className="space-y-5 mb-12">
            {solutions.map((solution, idx) => (
              <motion.section
                key={idx}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                className="bg-white border border-border rounded-xl overflow-hidden"
                aria-label={solution.title}
              >
                <header className="px-7 py-5 border-b border-border">
                  <span className="label-mono mb-1 block">{solution.category}</span>
                  <h2 className="text-xl font-bold text-foreground">{solution.title}</h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
                  {[
                    { label: "Challenge", text: solution.challenge },
                    { label: "Typical Client", text: solution.typicalClient },
                    { label: "What We Build", text: solution.whatWeBuild },
                    { label: "Impact", text: solution.impact },
                  ].map((col, cIdx) => (
                    <div key={cIdx} className="p-5 md:p-6">
                      <h3 className={`text-[10px] font-semibold tracking-widest uppercase mb-2.5 ${col.label === "What We Build" ? "text-primary/80" : "text-muted-foreground"}`}>
                        {col.label}
                      </h3>
                      <p className="text-sm text-foreground leading-relaxed">{col.text}</p>
                    </div>
                  ))}
                </div>

                <footer className="px-7 py-4 bg-muted/30 border-t border-border">
                  <div className="flex flex-wrap gap-1.5">
                    {solution.outputs.map((output, oIdx) => (
                      <span key={oIdx} className="text-xs bg-primary/6 text-primary border border-primary/12 px-2.5 py-0.5 rounded-full font-medium">
                        {output}
                      </span>
                    ))}
                  </div>
                </footer>
              </motion.section>
            ))}
          </div>

        </div>

        <CTASection
          title="Discuss a Specific Use Case"
          description="Our team will map your operational constraints and propose a high-confidence technical path forward."
          buttonLabel="Schedule a Call"
          buttonHref="/contact"
        />
      </article>
    </>
  );
}
