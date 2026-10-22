"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Network,
  HeartPulse,
  Landmark,
  Cpu,
} from "lucide-react";
import { institutionalPositioning, partnerAudiences } from "@/content/site";
import { NetworkMesh } from "@/components/visuals/NetworkMesh";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

const audienceIcons: Record<string, LucideIcon> = {
  governments: Landmark,
  research: GraduationCap,
  infrastructure: Network,
  healthcare: HeartPulse,
  enterprise: Building2,
  technology: Cpu,
};

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.38 },
};

interface InstitutionalPositioningSectionProps {
  showCtas?: boolean;
  className?: string;
}

export function InstitutionalPositioningSection({
  showCtas = true,
  className,
}: InstitutionalPositioningSectionProps) {
  const { label, title, subtitle, description, capabilityHighlights, ctas } =
    institutionalPositioning;

  return (
    <section
      className={`section-y section-alt border-y border-border relative overflow-hidden ${className ?? ""}`}
      aria-label="Institutional positioning"
    >
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" aria-hidden>
        <NetworkMesh variant="light" density="sparse" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 mb-14 md:mb-16">
          <motion.div {...fadeIn}>
            <span className="label-mono mb-3 block">{label}</span>
            <h2 className="heading-section mb-4">{title}</h2>
            <p className="text-lead text-prose mb-4">{subtitle}</p>
            <p className="text-[15px] text-muted-foreground text-prose">{description}</p>

            {showCtas && (
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
                {ctas.map((cta, idx) => (
                  <Link key={cta.href} href={cta.href}>
                    <Button
                      size="lg"
                      variant={idx === 1 ? "default" : "outline"}
                      className={`h-12 px-6 font-semibold gap-2 group ${idx === 1 ? "hover-elevate" : ""}`}
                    >
                      {cta.label}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }}>
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
              Technology we deliver
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {capabilityHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {partnerAudiences.map((audience, idx) => {
            const Icon = audienceIcons[audience.id] ?? Building2;
            return (
              <motion.article
                key={audience.id}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                className="bg-card border border-border rounded-xl card-pad-sm card-hover flex gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center text-primary shrink-0">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
