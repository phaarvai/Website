import { motion } from "framer-motion";
import { insights } from "@/content/insights";
import { CTASection } from "@/components/CTASection";
import { Clock } from "lucide-react";

const categories = ["All", "AI for Public Impact", "Digitization Gaps", "Infrastructure Intelligence", "Sustainability & Impact"];

export default function Insights() {
  return (
    <div className="pt-32 pb-0 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Insights
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Briefings on technology strategy, AI deployment, systems architecture, and public-impact program design for institutional leaders.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-16">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className={`text-xs font-medium px-4 py-2 rounded-full border cursor-pointer transition-colors ${
                idx === 0
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="space-y-8 mb-16">
          {insights.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
            >
              <article className="group cursor-pointer bg-white border border-border p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {article.excerpt}
                </p>

                <div className="text-muted-foreground mb-8 border-l-2 border-border pl-6 max-w-4xl text-sm leading-relaxed">
                  {article.content}
                </div>

                <div className="flex items-center text-primary font-semibold text-sm">
                  Read full analysis
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
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
    </div>
  );
}
