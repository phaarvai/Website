import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, BarChart3, Database, Cpu, Target, CheckCircle2 } from "lucide-react";
import { siteContent } from "@/content/site";
import { insights } from "@/content/insights";
import { HeroSection } from "@/components/HeroSection";
import { SectionIntro } from "@/components/SectionIntro";
import { Card } from "@/components/Card";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";

const iconMap: Record<string, React.ElementType> = {
  "ai-decision-intelligence": BarChart3,
  "digitization-data-platforms": Database,
  "iot-smart-infrastructure": Cpu,
  "public-impact-programs": Target,
};

const areaImages: Record<string, string> = {
  "ai-decision-intelligence": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=700&q=75",
  "digitization-data-platforms": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=700&q=75",
  "iot-smart-infrastructure": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=75",
  "public-impact-programs": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=75",
};

const categoryColors: Record<string, string> = {
  "AI": "bg-blue-50 text-blue-700 border-blue-100",
  "Data": "bg-indigo-50 text-indigo-700 border-indigo-100",
  "IoT": "bg-cyan-50 text-cyan-700 border-cyan-100",
  "Reporting": "bg-violet-50 text-violet-700 border-violet-100",
  "Operations": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Compliance": "bg-amber-50 text-amber-700 border-amber-100",
  "Public Impact": "bg-teal-50 text-teal-700 border-teal-100",
};

const differentiators = [
  { label: "Architecture to Production", detail: "Full-cycle delivery — no handoffs" },
  { label: "Output-Defined Engagements", detail: "Defined deliverables, not time-and-materials" },
  { label: "Fundable Program Design", detail: "Structured for grants and CSR capital" },
  { label: "Institutional-Grade Security", detail: "Audit trails, access controls, compliance" },
];

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function Home() {
  const { hero, whatWeDo, whyPhaarvai, problemsSolve, whatWeBuild, sectorsPreview, fundingTeaser } = siteContent;

  return (
    <>
      <PageSEO
        title="AI & Digital Systems for Governments and Institutions"
        description="PHAARVAI deploys practical AI, data platforms, and digital infrastructure for governments, infrastructure operators, energy companies, and public-impact foundations."
        path="/"
      />

      <HeroSection
        headline={hero.headline}
        subheadline={hero.subheadline}
        ctaPrimary={{ label: hero.ctaPrimary, href: "/capabilities" }}
        ctaSecondary={{ label: hero.ctaSecondary, href: "/contact" }}
        positioning={hero.positioning}
      />

      {/* Differentiator Strip */}
      <div className="bg-foreground py-5 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {differentiators.map((item, idx) => (
              <div key={idx} className="bg-foreground px-6 py-4">
                <div className="flex items-center gap-2.5 mb-1">
                  <CheckCircle2 size={13} className="text-primary shrink-0" />
                  <span className="text-white text-sm font-semibold">{item.label}</span>
                </div>
                <p className="text-white/40 text-xs leading-relaxed pl-[21px]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Do */}
      <section className="pt-28 pb-20 bg-background" aria-label="Services overview">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro title={whatWeDo.title} subtitle={whatWeDo.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whatWeDo.areas.map((area, idx) => {
              const Icon = iconMap[area.id] || Database;
              const imgUrl = areaImages[area.id];
              return (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.08 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden card-hover flex flex-col h-full cursor-pointer"
                >
                  <Link href={area.href} className="flex flex-col h-full">
                    {imgUrl && (
                      <div className="h-44 overflow-hidden shrink-0">
                        <img
                          src={imgUrl}
                          alt={area.title}
                          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="flex flex-col flex-grow p-7">
                      <div className="mb-4 w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">{area.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{area.description}</p>
                      <div className="flex items-center text-sm font-semibold text-primary mt-5 group-hover:underline">
                        Learn more <ChevronRight size={15} className="ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 section-alt border-y border-border" aria-label="What we build">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-5">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{whatWeBuild.title}</h2>
              <p className="text-base text-muted-foreground max-w-xl">{whatWeBuild.subtitle}</p>
            </div>
            <Link href="/solutions" className="flex items-center text-primary font-semibold text-sm hover:underline group shrink-0">
              All solutions <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whatWeBuild.items.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
                className="bg-white border border-border p-6 rounded-xl flex flex-col gap-3 card-hover"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[item.category] || "bg-gray-50 text-gray-600 border-gray-100"}`}>
                    {item.category}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug">{item.output}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual break — dashboard image */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-foreground">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=75"
          alt="Data analytics platform overview"
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              {...fadeIn}
              className="max-w-2xl"
            >
              <p className="text-[11px] font-mono tracking-[0.14em] text-blue-300/70 uppercase mb-4">Our Approach</p>
              <blockquote className="text-xl md:text-2xl font-semibold text-white leading-snug">
                "We design the system and build it. Strategy and execution — in one partner, from architecture through production."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Problems We Solve */}
      <section className="py-20 bg-background" aria-label="Problems we solve">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro title={problemsSolve.title} subtitle={problemsSolve.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problemsSolve.problems.map((problem, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.06 }}
                className="bg-white border border-border p-6 rounded-xl"
              >
                <h3 className="text-sm font-bold mb-2 text-foreground">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PHAARVAI */}
      <section className="py-20 section-alt border-y border-border" aria-label="Why PHAARVAI">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Image side */}
            <motion.div
              {...fadeIn}
              className="lg:col-span-2 hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md border border-border">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=75"
                  alt="Systems architecture and integration"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[10px] font-mono text-blue-300/80 tracking-[0.12em] uppercase mb-1">Why Us</p>
                  <p className="text-white text-sm font-semibold leading-snug">Strategy and execution — in one partner</p>
                </div>
              </div>
            </motion.div>

            {/* Content side */}
            <div className="lg:col-span-3">
              <SectionIntro title={whyPhaarvai.title} subtitle={whyPhaarvai.subtitle} />
              <div className="grid grid-cols-1 gap-y-7">
                {whyPhaarvai.points.map((point, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: idx * 0.07 }}
                    className="flex gap-4"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-1.5 text-foreground">{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Preview */}
      <section className="py-20 bg-background" aria-label="Sectors served">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-5">
            <SectionIntro title={sectorsPreview.title} subtitle={sectorsPreview.subtitle} className="mb-0" />
            <Link href="/sectors" className="flex items-center text-primary font-semibold text-sm hover:underline group shrink-0">
              All sectors <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Government", slug: "government" },
              { label: "Critical Infrastructure", slug: "infrastructure" },
              { label: "Energy", slug: "energy" },
              { label: "Foundations & Philanthropy", slug: "foundations" },
              { label: "Innovation Ecosystems", slug: "innovation-ecosystems" },
              { label: "Defense & Strategic Systems", slug: "defense" },
            ].map((sector, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
              >
                <Link
                  href={`/sectors#${sector.slug}`}
                  className="flex items-center justify-between bg-white border border-border px-5 py-4 rounded-xl text-sm font-semibold text-foreground card-hover group w-full"
                >
                  <span>{sector.label}</span>
                  <ChevronRight size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Teaser */}
      <section className="py-20 section-alt border-y border-border" aria-label="Funding and partnerships">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <motion.div {...fadeIn}>
              <span className="label-mono mb-5 block">Funding Alignment</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{fundingTeaser.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                {fundingTeaser.description}
              </p>
              <Link href={fundingTeaser.ctaHref} className="inline-flex items-center text-primary font-semibold hover:underline group text-sm">
                {fundingTeaser.cta} <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="py-20 bg-background" aria-label="Latest insights">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-5">
            <SectionIntro title="Latest Insights" className="mb-0" />
            <Link href="/insights" className="flex items-center text-primary font-semibold text-sm hover:underline group shrink-0">
              All articles <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {insights.slice(0, 3).map((article, idx) => (
              <Card key={idx} delay={idx * 0.08} className="group cursor-pointer">
                <Link href="/insights" className="flex flex-col h-full">
                  <span className="label-mono mb-1 block">{article.category}</span>
                  <p className="text-xs text-muted-foreground mb-4">{article.date}</p>
                  <h3 className="text-base font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center text-sm font-semibold text-primary mt-5">
                    Read <ChevronRight size={15} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's design something that can scale."
        description="Schedule a technical discovery call to discuss your requirements."
        buttonLabel="Talk to Us"
        buttonHref="/contact"
      />
    </>
  );
}
