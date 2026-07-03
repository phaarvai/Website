"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { capabilityProcess } from "@/content/capabilities";
import { siteContent } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { CardTechHeader, techVariantForIndex } from "@/components/visuals/CardTechHeader";

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38 },
};

export default function Capabilities() {
  const { partnerCta } = siteContent;

  return (
    <>
      <PageSEO
        title="Capabilities — Systems Engineering & AI Deployment"
        description="AI systems, data infrastructure, cybersecurity, intelligent infrastructure, civic technology, and applied research — engineered for production deployment."
        path="/capabilities"
      />

      <article className="page-shell bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <PageHeader
            label="Engineering"
            title="Systems we build and deploy"
            description="Six capability domains spanning applied AI, data platforms, secure infrastructure, and institutional technology — delivered as operational systems, not slide decks."
            visual
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-8">
            {capabilityProcess.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.article
                  key={cap.id}
                  id={cap.id}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
                  className="scroll-mt-28 bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col tech-panel"
                >
                  <CardTechHeader variant={techVariantForIndex(idx)} />

                  <div className="card-pad-sm pt-0 flex flex-col flex-grow">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/12 flex items-center justify-center text-primary shrink-0">
                        <Icon size={22} strokeWidth={1.75} />
                      </div>
                      <div>
                        <span className="label-mono mb-1.5 block">
                          Domain {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-xl font-bold text-foreground leading-snug">{cap.title}</h2>
                      </div>
                    </div>

                    <p className="text-[15px] text-muted-foreground text-prose mb-6">{cap.description}</p>

                    <div className="mb-6">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                        Focus areas
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {cap.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-foreground/85"
                          >
                            <span
                              className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0"
                              aria-hidden
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={cap.href}
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all group"
                    >
                      Explore capability
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <CTASection
          title={partnerCta.title}
          description="Applied AI and intelligent infrastructure for mission-critical environments — from architecture through deployment."
          buttonLabel={partnerCta.primary.label}
          buttonHref={partnerCta.primary.href}
          secondaryLabel={partnerCta.secondary.label}
          secondaryHref={partnerCta.secondary.href}
        />
      </article>
    </>
  );
}
