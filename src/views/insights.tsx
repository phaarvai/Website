"use client";

import { motion } from "framer-motion";
import { insights } from "@/content/insights";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { Clock, ChevronRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

export default function Insights() {
  return (
    <>
      <PageSEO
        title="Insights — Institutional Technology & AI Strategy Briefings"
        description="Expert analysis on AI deployment, digital transformation, operational intelligence, and public-impact program design for institutional leaders."
        path="/insights"
      />

      <article className="pt-24 pb-0 min-h-screen bg-background">
        <div className="container mx-auto px-6 md:px-12">

          <motion.header
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 leading-[1.1]">
              Insights
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Briefings on AI deployment, systems architecture, and public-impact program design for institutional leaders.
            </p>
          </motion.header>

          <div className="space-y-4 mb-12">
            {insights.map((article, idx) => (
              <motion.div
                key={article.id}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
              >
                <article className="group cursor-pointer bg-white border border-border p-6 md:p-7 rounded-xl card-hover">
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/6 text-primary border border-primary/12">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={10} /> {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg md:text-xl font-bold mb-2.5 text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-semibold text-xs gap-1">
                    Read analysis <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

        </div>

        <CTASection
          title="Stay informed on institutional technology."
          description="Our team publishes regularly on AI deployment, systems architecture, and public-impact program design."
          buttonLabel="Contact Us"
          buttonHref="/contact"
        />
      </article>
    </>
  );
}
