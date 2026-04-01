import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, BarChart3, Database, Cpu, Target } from "lucide-react";
import { siteContent } from "@/content/site";
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
  const { hero, whatWeDo, whyPhaarvai, problemsSolve, featuredSolutions, sectorsPreview, fundingTeaser } = siteContent;

  return (
    <div className="flex flex-col w-full">
      <HeroSection
        headline={hero.headline}
        subheadline={hero.subheadline}
        ctaPrimary={{ label: hero.ctaPrimary, href: "/capabilities" }}
        ctaSecondary={{ label: hero.ctaSecondary, href: "/contact" }}
      />

      {/* What We Do */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro title={whatWeDo.title} subtitle={whatWeDo.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDo.areas.map((area, idx) => {
              const Icon = iconMap[area.id] || Database;
              return (
                <Card key={idx} delay={idx * 0.1} className="group cursor-pointer border border-border shadow-sm hover:shadow-md">
                  <Link href={area.href} className="flex flex-col h-full">
                    <div className="mb-5 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">{area.description}</p>
                    <div className="flex items-center text-sm font-semibold text-primary mt-5">
                      Explore <ChevronRight size={16} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why PHAARVAI */}
      <section className="py-24 section-alt border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro title={whyPhaarvai.title} subtitle={whyPhaarvai.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPhaarvai.points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-border p-8 rounded-xl shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-primary mb-5" />
                <h3 className="text-lg font-bold mb-3 text-foreground">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro title={problemsSolve.title} subtitle={problemsSolve.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemsSolve.problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="border-l-2 border-primary pl-6 py-2"
              >
                <h3 className="text-base font-bold mb-2 text-foreground">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-24 section-alt border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <SectionIntro title={featuredSolutions.title} subtitle={featuredSolutions.subtitle} className="mb-0" />
            <Link href="/solutions" className="flex items-center text-primary font-semibold hover:underline group shrink-0">
              View all solutions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSolutions.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white border border-border p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-base font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <SectionIntro title={sectorsPreview.title} subtitle={sectorsPreview.subtitle} className="mb-0" />
            <Link href="/sectors" className="flex items-center text-primary font-semibold hover:underline group shrink-0">
              All sectors <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Government", "Infrastructure", "Energy", "Foundations & Philanthropy", "Innovation Ecosystems", "Defense & Strategic Systems"].map((sector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white border border-border p-5 rounded-xl text-sm font-semibold text-foreground shadow-sm"
              >
                {sector}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Teaser */}
      <section className="py-24 section-alt border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-mono tracking-widest text-primary uppercase mb-6">Funding Alignment</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{fundingTeaser.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {fundingTeaser.description}
              </p>
              <Link href={fundingTeaser.ctaHref} className="inline-flex items-center text-primary font-semibold hover:underline group">
                {fundingTeaser.cta} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <SectionIntro title="Latest Insights" className="mb-0" />
            <Link href="/insights" className="flex items-center text-primary font-semibold hover:underline group shrink-0">
              Read all articles <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.slice(0, 3).map((article, idx) => (
              <Card key={idx} delay={idx * 0.1} className="group border border-border shadow-sm hover:shadow-md">
                <Link href="/insights" className="flex flex-col h-full">
                  <div className="text-xs font-mono tracking-wider text-primary mb-1">{article.category}</div>
                  <div className="text-xs text-muted-foreground mb-4">{article.date}</div>
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center text-sm font-semibold text-primary">
                    Read article <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's design something that can scale."
        description="Schedule a technical discovery call to discuss your institutional challenges and evaluate our capabilities."
        buttonLabel="Talk to Us"
        buttonHref="/contact"
      />
    </div>
  );
}
