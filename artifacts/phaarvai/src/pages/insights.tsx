import { motion } from "framer-motion";
import { insights } from "@/content/insights";
import { Card } from "@/components/Card";
import { ArrowRight, Clock } from "lucide-react";

export default function Insights() {
  return (
    <div className="pt-32 pb-32 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Insights
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Briefings on technology strategy, systems architecture, and AI deployment for institutional leaders.
          </p>
        </motion.div>

        <div className="space-y-12">
          {insights.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <article className="group cursor-pointer bg-card border border-border p-8 md:p-12 rounded-2xl hover-elevate">
                <div className="flex items-center gap-4 text-sm font-mono text-primary mb-6">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-primary/50"></span>
                  <span className="flex items-center gap-1"><Clock size={14}/> {article.readTime}</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="text-base text-foreground/80 mb-8 border-l-2 border-border pl-6 max-w-4xl">
                  {article.content}
                </div>

                <div className="flex items-center text-primary font-semibold">
                  Read full analysis <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
