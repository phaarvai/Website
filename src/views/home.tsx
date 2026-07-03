"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/site";
import { HeroSection } from "@/components/HeroSection";
import { BrandTagline } from "@/components/BrandTagline";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { SystemsArchitecture } from "@/components/SystemsArchitecture";
import { IntelligentSystemsSection } from "@/components/IntelligentSystemsSection";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.35 },
};

export default function Home() {
  const { hero, whyPhaarvai, partnerCta } = siteContent;

  return (
    <>
      <PageSEO
        title="Applied AI & Intelligent Infrastructure"
        description="Phaarvai designs, builds, and deploys production-ready AI systems and intelligent infrastructure for governments, enterprises, and research institutions."
        path="/"
      />

      <HeroSection
        headline={hero.headline}
        headlineAccent={hero.headlineAccent}
        subheadline={hero.subheadline}
        ctaPrimary={hero.ctaPrimary}
        ctaSecondary={hero.ctaSecondary}
        ctaTertiary={hero.ctaTertiary}
        badges={hero.badges}
      />

      <BrandTagline />

      <WhatWeDoSection />

      <SystemsArchitecture />

      <IntelligentSystemsSection />

      <section className="section-y section-alt border-y border-border" aria-label="Why Phaarvai">
        <div className="container mx-auto px-6 md:px-12">
          <div className="section-header text-center max-w-2xl mx-auto">
            <h2 className="heading-section mb-3">{whyPhaarvai.title}</h2>
            <p className="text-lead">{whyPhaarvai.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyPhaarvai.points.map((point, idx) => (
              <motion.div
                key={point.title}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                className="bg-card border border-border rounded-xl card-pad-sm card-hover"
              >
                <h3 className="text-base font-bold text-foreground mb-2">{point.title}</h3>
                <p className="text-[15px] text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={partnerCta.title}
        description={partnerCta.description}
        buttonLabel={partnerCta.primary.label}
        buttonHref={partnerCta.primary.href}
        secondaryLabel={partnerCta.secondary.label}
        secondaryHref={partnerCta.secondary.href}
      />
    </>
  );
}
