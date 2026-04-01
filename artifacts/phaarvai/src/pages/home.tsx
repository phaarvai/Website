import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, BarChart3, Database, Cpu, Target } from "lucide-react";
import { siteContent } from "@/content/site";
import { capabilities } from "@/content/capabilities";
import { solutions } from "@/content/solutions";
import { sectors } from "@/content/sectors";
import { insights } from "@/content/insights";
import { HeroSection } from "@/components/HeroSection";
import { SectionIntro } from "@/components/SectionIntro";
import { Card } from "@/components/Card";
import { CTASection } from "@/components/CTASection";

const iconMap: Record<string, React.ElementType> = {
  "ai-decision-intelligence": BarChart3,
  "digitization-data-platforms": Database,
  "iot-smart-infrastructure": Cpu,
  "public-impact-programs": Target,
};

export default function Home() {
  const { hero, whyPhaarvai, problemsSolve } = siteContent;

  return (
    <div className="flex flex-col w-full">
      <HeroSection 
        headline={hero.headline}
        subheadline={hero.subheadline}
        ctaPrimary={{ label: hero.ctaPrimary, href: "/capabilities" }}
        ctaSecondary={{ label: hero.ctaSecondary, href: "/contact" }}
      />

      {/* Why PHAARVAI */}
      <section className="py-24 bg-card/50 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro title={whyPhaarvai.title} subtitle={whyPhaarvai.subtitle} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyPhaarvai.points.map((point, idx) => (
              <Card key={idx} delay={idx * 0.1}>
                <h3 className="text-xl font-bold mb-4 text-foreground">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro title={problemsSolve.title} subtitle={problemsSolve.subtitle} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemsSolve.problems.map((problem, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-l-2 border-primary pl-6 py-2"
              >
                <h3 className="text-lg font-bold mb-3 text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Preview */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <SectionIntro title="Practice Areas" className="mb-0" />
            <Link href="/capabilities" className="flex items-center text-primary font-semibold hover:underline group">
              View all capabilities <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.slice(0, 4).map((cap, idx) => {
              const Icon = iconMap[cap.id] || Database;
              return (
                <Card key={idx} delay={idx * 0.1} className="group cursor-pointer">
                  <Link href="/capabilities">
                    <div className="mb-6 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{cap.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-2">{cap.intro}</p>
                    <div className="flex items-center text-sm font-semibold text-primary">
                      Learn more <ChevronRight size={16} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro title="Sectors We Serve" subtitle="Specialized infrastructure for critical domains." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.slice(0, 3).map((sector, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background border border-border p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-3">{sector.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{sector.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/sectors">
              <span className="inline-flex items-center justify-center h-10 px-6 font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors cursor-pointer">
                Explore all sectors
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="py-24 bg-card/30 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <SectionIntro title="Latest Insights" className="mb-0" />
            <Link href="/insights" className="flex items-center text-primary font-semibold hover:underline group">
              Read all articles <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.slice(0, 3).map((article, idx) => (
              <Card key={idx} delay={idx * 0.1} className="group">
                <Link href="/insights">
                  <div className="text-sm text-primary font-mono mb-4">{article.date}</div>
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center text-sm font-semibold text-foreground">
                    Read article <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to modernize your operational infrastructure?"
        description="Schedule a technical discovery call to discuss your institutional challenges and evaluate our capabilities."
        buttonLabel="Talk to Us"
        buttonHref="/contact"
      />
    </div>
  );
}
