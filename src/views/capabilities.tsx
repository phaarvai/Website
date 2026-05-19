"use client";

import { motion } from "framer-motion";
import { capabilityProcess } from "@/content/capabilities";
import { ProcessFlow } from "@/components/ProcessFlow";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { siteContent } from "@/content/site";
import { CheckCircle2 } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38 },
};

export default function Capabilities() {
  return (
    <>
      <PageSEO
        title="Capabilities — From Discovery to Deployment"
        description="Challenge discovery, proposal development, AI prototyping, data research, product design, and implementation partnerships for public impact."
        path="/capabilities"
      />

      <article className="pt-28 pb-12 bg-background">
        <motion.div className="container mx-auto px-6 md:px-12">
          <PageHeader
            label="Capabilities"
            title="End-to-end support for AI for Good"
            description="We help institutions and partners move from public-interest challenges to fundable concepts, working prototypes, and deployment-ready programs."
          />

          <section className="mb-16 section-alt border border-border rounded-2xl p-8 md:p-10">
            <h2 className="text-lg font-bold text-foreground mb-2 text-center">
              {siteContent.operatingModel.title}
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-8 max-w-xl mx-auto">
              {siteContent.operatingModel.subtitle}
            </p>
            <ProcessFlow steps={siteContent.operatingModel.steps} />
          </section>

          <div className="space-y-12">
            {capabilityProcess.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.section
                  key={cap.id}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.03 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-border pb-12 last:border-0"
                >
                  <div className="lg:col-span-4">
                    <span className="label-mono mb-2 block">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Icon size={20} />
                      </motion.div>
                      <h2 className="text-xl font-bold text-foreground">{cap.title}</h2>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                  <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cap.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 bg-card border border-border rounded-xl p-4"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              );
            })}
          </div>
        </motion.div>

        <CTASection
          title="Need a specific capability for your program?"
          description="Tell us about your challenge — we'll outline how our team can support discovery, prototyping, or partnership."
          buttonLabel="Partner With Us"
          buttonHref="/partner"
        />
      </article>
    </>
  );
}
