"use client";

import { motion } from "framer-motion";
import { insights } from "@/content/insights";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { Clock } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
};

const categories = ["All", "AI for Public Impact", "Digitization Gaps", "Infrastructure Intelligence", "Sustainability & Impact", "Sustainability Systems"];

export default function Insights() {
  return (
    <>
      <PageSEO
        title="Insights — Institutional Technology & AI Strategy Briefings"
        description="Expert analysis on AI deployment, digital transformation, operational intelligence, and public-impact program design for institutional leaders."
        path="/insights"
      />

      <article className="pt-32 pb-0 min-h-screen bg-background">
        <div className="container mx-auto px-6 md:px-12">

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Insights
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Briefings on AI deployment, systems architecture, digital transformation, and public-impact program design for institutional leaders.
            </p>
          </motion.header>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className={`text-xs font-medium px-4 py-2 rounded-full border cursor-pointer transition-all duration-200 ${
                  idx === 0
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="space-y-6 mb-12">
            {insights.map((article, idx) => (
              <motion.div
                key={article.id}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
              >
                <article className="group cursor-pointer bg-white border border-border p-8 rounded-xl card-hover">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/6 text-primary border border-primary/12">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={11} /> {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>

                  <p className="text-muted-foreground mb-5 border-l-2 border-border pl-5 text-sm leading-relaxed">
                    {article.content}
                  </p>

                  <div className="flex items-center text-primary font-semibold text-sm">
                    Read full analysis
                    <span className="ml-2 group-hover:translate-x-0.5 transition-transform duration-200 inline-block">→</span>
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
