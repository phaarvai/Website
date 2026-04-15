"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/content/capabilities";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { CheckCircle2, Users } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

export default function Capabilities() {
  return (
    <>
      <PageSEO
        title="Capabilities — AI Decision Intelligence, Data Platforms, IoT & Public Impact"
        description="Four practice areas: AI Decision Intelligence, Digitization & Data Platforms, IoT & Smart Infrastructure, and Public Impact Programs. Each backed by full delivery capability."
        path="/capabilities"
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
              Capabilities
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Four practice areas — each backed by full delivery capability, from architecture to production. We own both the design and the build.
            </p>
          </motion.header>

          <div className="space-y-14 mb-12">
            {capabilities.map((cap, idx) => (
              <motion.section
                key={cap.id}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.04 }}
                aria-label={cap.title}
              >
                {/* Header row */}
                <div className="border-b border-border pb-5 mb-8 flex items-end justify-between gap-5">
                  <div>
                    <span className="label-mono mb-1.5 block">Practice Area {String(idx + 1).padStart(2, '0')}</span>
                    <h2 className="text-2xl font-bold text-foreground">{cap.title}</h2>
                  </div>
                </div>

                {/* Intro line — no image strip */}
                <p className="text-base text-muted-foreground leading-relaxed mb-7 max-w-3xl">{cap.intro}</p>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left — bullets + ideal client */}
                  <div className="lg:col-span-4 space-y-4">
                    <ul className="space-y-2">
                      {cap.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          <span className="text-sm text-foreground leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-primary/5 border border-primary/15 p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-primary font-semibold text-xs mb-2">
                        <Users size={12} /> Ideal Client
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{cap.idealClient}</p>
                    </div>
                  </div>

                  {/* Right — services + deliverables (merged, dropped scenarios) */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="bg-white border border-border p-6 rounded-xl">
                      <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">What We Build</h3>
                      <ul className="space-y-2.5">
                        {cap.services.map((service, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white border border-border p-6 rounded-xl">
                      <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Deliverables</h3>
                      <div className="flex flex-wrap gap-2">
                        {cap.deliverables.map((deliverable, dIdx) => (
                          <span key={dIdx} className="text-xs bg-primary/6 text-primary border border-primary/12 px-3 py-1 rounded-full font-medium">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

        </div>

        <CTASection
          title="Require specific technical capability?"
          description="We architect solutions precisely aligned to your operational parameters and institutional constraints."
          buttonLabel="Request a Capabilities Brief"
          buttonHref="/contact"
        />
      </article>
    </>
  );
}
