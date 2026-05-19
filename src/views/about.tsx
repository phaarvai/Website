"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/content/about";
import { ProcessFlow } from "@/components/ProcessFlow";
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
        title="About Phaarvai — AI for Good for Public Impact"
        description="Phaarvai builds practical AI solutions for governance, climate, economic development, startups, technology, and policy."
        path="/about"
      />

      <article className="pt-28 pb-12 bg-background">
        <motion.div className="container mx-auto px-6 md:px-12">
          <PageHeader
            label="About"
            title="A public-impact innovation platform"
            description={aboutContent.narrative}
          />

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16" aria-label="Mission and Vision">
            <motion.div
              {...fadeIn}
              className="bg-card border border-border rounded-2xl p-8"
            >
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

          <section className="mb-16" aria-label="AI for Good positioning">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              AI for Good positioning
            </motion.h2>
            <motion.div
              className="bg-primary/5 border border-primary/15 rounded-2xl p-8"
              {...fadeIn}
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                Phaarvai is not a generic AI startup. We are an AI for Good company focused on
                governance, climate, funding access, and institutional collaboration — building
                practical technology that funders and governments can understand and trust.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our work spans opportunity identification, concept development, prototyping,
                proposal support, and partnership — designed to scale as new public-impact
                challenges emerge.
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

          <section className="mb-16 section-alt border border-border rounded-2xl p-8 md:p-10">
            <h2 className="text-xl font-bold text-foreground mb-2 text-center">
              How we work
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-8">
              From opportunity to deployment
            </p>
            <ProcessFlow steps={siteContent.operatingModel.steps} />
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
