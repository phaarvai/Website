"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/content/about";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { siteContent } from "@/content/site";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38 },
};

export default function About() {
  return (
    <>
      <PageSEO
        title="About — Applied AI & Intelligent Infrastructure"
        description="Phaarvai builds AI-powered systems and intelligent infrastructure for governments, institutions, and operational environments."
        path="/about"
      />

      <article className="pt-28 pb-12 bg-background">
        <motion.div className="container mx-auto px-6 md:px-12">
          <PageHeader
            label="About"
            title="Applied AI for institutional environments"
            description={aboutContent.narrative}
          />

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16" aria-label="Mission and Vision">
            <motion.div {...fadeIn} className="bg-card border border-border rounded-2xl p-8">
              <span className="label-mono mb-3 block">Mission</span>
              <p className="text-lg font-semibold text-foreground leading-relaxed">
                {aboutContent.mission}
              </p>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.06 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <span className="label-mono mb-3 block">Vision</span>
              <p className="text-lg font-semibold text-foreground leading-relaxed">
                {aboutContent.vision}
              </p>
            </motion.div>
          </section>

          <section className="mb-16" aria-label="Scale and delivery metrics">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-8">
              Scale & Delivery Metrics
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {aboutContent.deliveryMetrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                  className="glass-panel rounded-xl p-5 border border-border text-center"
                >
                  <p className="stat-number text-2xl font-bold text-primary mb-1">{metric.value}</p>
                  <p className="text-[11px] text-muted-foreground leading-snug">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-16" aria-label="Applied AI positioning">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              What we build
            </motion.h2>
            <motion.div
              className="bg-primary/5 border border-primary/15 rounded-2xl p-8"
              {...fadeIn}
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                Phaarvai is not a generic consultancy or innovation lab. We are an applied AI and
                intelligent infrastructure company — building systems that governments, operators,
                and institutions can deploy in real operational environments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our work spans AI systems architecture, operational intelligence platforms, data
                infrastructure, cybersecurity, and institutional technology — delivered with the
                rigor expected of enterprise-grade engineering.
              </p>
            </motion.div>
          </section>

          <section className="mb-16" aria-label="Values">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-8">
              Values
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aboutContent.values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                  className="bg-card border border-border rounded-xl p-6 card-hover"
                >
                  <h3 className="text-sm font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          <section aria-label="Why partner">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              Why institutions work with us
            </motion.h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {aboutContent.positioning.map((item, idx) => (
                <motion.li
                  key={item}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.03 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground bg-card border border-border rounded-lg px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </section>
        </motion.div>

        <CTASection
          title={siteContent.partnerCta.title}
          description={siteContent.partnerCta.description}
          buttonLabel={siteContent.partnerCta.primary.label}
          buttonHref={siteContent.partnerCta.primary.href}
        />
      </article>
    </>
  );
}
