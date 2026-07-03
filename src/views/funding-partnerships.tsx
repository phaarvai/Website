"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { institutionalPositioning } from "@/content/site";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { InstitutionalPositioningSection } from "@/components/InstitutionalPositioningSection";
import { NetworkMesh } from "@/components/visuals/NetworkMesh";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

const deliveryModel = [
  {
    title: "Systems Architecture",
    description:
      "Define AI infrastructure, data flows, and secure system design aligned to institutional operational requirements.",
  },
  {
    title: "Platform Engineering",
    description:
      "Build operational platforms, automation layers, and intelligence systems institutions can run in production.",
  },
  {
    title: "Deployment & Integration",
    description:
      "Integrate and operationalize systems across environments with measurable performance and reliability outcomes.",
  },
  {
    title: "Scale & Evolution",
    description:
      "Extend deployments across programs and geographies without architectural rebuilds or operational disruption.",
  },
];

export default function FundingPartnerships() {
  return (
    <>
      <PageSEO
        title="Institutional Technology Partnerships — Phaarvai"
        description="Phaarvai partners with governments, research institutions, and infrastructure operators to design, deploy, and operate AI systems and digital infrastructure."
        path="/funding-partnerships"
      />

      <InstitutionalPositioningSection />

      <article className="section-y bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden>
          <NetworkMesh variant="light" density="sparse" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-14">
            <motion.div {...fadeIn}>
              <span className="label-mono mb-3 block">Delivery Model</span>
              <h2 className="heading-section mb-4">How we work with institutions</h2>
              <p className="text-[15px] text-muted-foreground text-prose">
                Complex deployments fail when architecture is designed for demonstration rather than
                operations. Institutions need engineering partners who build systems they can run,
                monitor, and scale in production.
              </p>
            </motion.div>

            <div className="space-y-4">
              {deliveryModel.map((item, idx) => (
                <motion.div
                  key={item.title}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
                  className="border-l-2 border-primary/30 pl-5 py-1"
                >
                  <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...fadeIn} className="flex flex-wrap gap-3 justify-center">
            {institutionalPositioning.ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary border border-primary/20 bg-primary/5 hover:bg-primary/10 px-5 py-2.5 rounded-full transition-colors group"
              >
                {cta.label}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </motion.div>
        </div>
      </article>

      <CTASection
        title="Explore institutional solutions"
        description="View our capabilities, featured systems, and deployment portfolio — or contact our team to discuss your environment."
        buttonLabel="Contact Our Team"
        buttonHref="/partner#contact"
        secondaryLabel="View Capabilities"
        secondaryHref="/capabilities"
      />
    </>
  );
}
