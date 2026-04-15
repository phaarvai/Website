"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, ChevronRight, BarChart3, Database, Cpu, Target, Zap, Shield, TrendingUp, Globe } from "lucide-react";
import { siteContent } from "@/content/site";
import { insights } from "@/content/insights";
import { HeroSection } from "@/components/HeroSection";
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

const categoryIcons: Record<string, React.ElementType> = {
  "AI": BarChart3,
  "Data": Database,
  "IoT": Cpu,
  "Reporting": TrendingUp,
  "Operations": Zap,
  "Compliance": Shield,
  "Public Impact": Globe,
};

const marqueeItems = [
  "AI Decision Intelligence",
  "Workflow Digitization",
  "Real-Time Infrastructure Monitoring",
  "Data Platforms",
  "ESG Compliance",
  "Public Impact Programs",
  "Smart Cities",
  "Predictive Maintenance",
  "Executive Dashboards",
  "Digital Transformation",
  "IoT Infrastructure",
  "Grant-Aligned Programs",
];

const sectorItems = [
  { label: "Government", slug: "government", icon: "🏛️", desc: "Ministries & public agencies" },
  { label: "Critical Infrastructure", slug: "infrastructure", icon: "⚡", desc: "Power, water, transport" },
  { label: "Energy", slug: "energy", icon: "🔋", desc: "Oil, gas & renewables" },
  { label: "Foundations & Philanthropy", slug: "foundations", icon: "🌱", desc: "Impact & CSR programs" },
  { label: "Innovation Ecosystems", slug: "innovation-ecosystems", icon: "💡", desc: "Tech hubs & incubators" },
  { label: "Defense & Strategic Systems", slug: "defense", icon: "🛡️", desc: "Strategic & national security" },
];

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
}

export default function Home() {
  const { hero, whatWeDo, whyPhaarvai, whatWeBuild, sectorsPreview, fundingTeaser } = siteContent;

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

      {/* Scrolling Marquee */}
      <div className="bg-foreground border-y border-white/[0.06] py-3.5 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none" />
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="flex items-center gap-4 px-5 text-white/35 text-sm font-medium shrink-0 whitespace-nowrap">
              <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* What We Do */}
      <section className="py-16 bg-background" aria-label="Services overview">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <motion.span {...fadeIn} className="label-mono mb-2 block">Practice Areas</motion.span>
              <motion.h2 {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.07 }} className="text-3xl md:text-4xl font-bold text-foreground mb-2">{whatWeDo.title}</motion.h2>
              <motion.p {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.12 }} className="text-base text-muted-foreground max-w-xl leading-relaxed">{whatWeDo.subtitle}</motion.p>
            </div>
            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.15 }}>
              <Link href="/capabilities" className="inline-flex items-center text-primary font-semibold text-sm hover:underline group gap-1.5 shrink-0">
                All capabilities <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whatWeDo.areas.map((area, idx) => {
              const Icon = iconMap[area.id] || Database;
              const imgUrl = areaImages[area.id];
              return (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.07 }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col h-full shine-hover"
                >
                  <Link href={area.href} className="flex flex-col h-full">
                    {imgUrl && (
                      <div className="h-44 overflow-hidden shrink-0 relative bg-muted">
                        <img
                          src={imgUrl}
                          alt={area.title}
                          className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent" />
                      </div>
                    )}
                    <div className="flex flex-col flex-grow p-7">
                      <div className="mb-4 w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200 shadow-sm">
                        <Icon size={17} />
                      </div>
                      <h3 className="text-base font-bold mb-2 text-foreground leading-snug">{area.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{area.description}</p>
                      <div className="flex items-center text-sm font-semibold text-primary mt-5 gap-1 group-hover:gap-2 transition-all">
                        Learn more <ChevronRight size={14} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="border-y border-border bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {[
              { value: 30, suffix: "+", label: "Institutions Served" },
              { value: 6, suffix: "", label: "Industry Sectors" },
              { value: 100, suffix: "%", label: "Production Delivery" },
              { value: 8, suffix: "+", label: "Countries" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.07 }}
                className="px-6 py-8 text-center"
              >
                <div className="text-3xl font-bold text-foreground mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-semibold text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Build — Bento Grid */}
      <section className="py-16 section-alt border-y border-border" aria-label="What we build">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-5">
            <div>
              <motion.span {...fadeIn} className="label-mono mb-2 block">Output-Defined</motion.span>
              <motion.h2 {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.07 }} className="text-3xl md:text-4xl font-bold text-foreground mb-2">{whatWeBuild.title}</motion.h2>
              <motion.p {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.12 }} className="text-base text-muted-foreground max-w-xl leading-relaxed">{whatWeBuild.subtitle}</motion.p>
            </div>
            <motion.div {...fadeIn}>
              <Link href="/solutions" className="inline-flex items-center text-primary font-semibold text-sm hover:underline group gap-1.5 shrink-0">
                All solutions <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whatWeBuild.items.map((item, idx) => {
              const CategoryIcon = categoryIcons[item.category] || Database;
              return (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                  className="bg-white border border-border rounded-xl p-5 flex flex-col gap-3 card-hover group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${categoryColors[item.category]?.replace("text-", "text-").replace("bg-", "bg-") || "bg-gray-50 text-gray-600"} text-xs`}>
                      <CategoryIcon size={13} />
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${categoryColors[item.category] || "bg-gray-50 text-gray-600 border-gray-100"}`}>
                      {item.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground leading-snug mb-1.5 group-hover:text-primary transition-colors">{item.output}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual break — pull quote */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=75"
          alt="Institutional infrastructure"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <p className="text-[10px] font-mono tracking-[0.16em] text-blue-300/85 uppercase mb-4">Our Approach</p>
              <blockquote className="text-xl md:text-2xl font-bold text-white leading-[1.35]">
                "We design the system and build it. Strategy and execution — in one partner, from architecture through production."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why PHAARVAI */}
      <section className="py-16 bg-background" aria-label="Why PHAARVAI">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-16 items-start">
            <motion.div {...fadeIn} className="lg:col-span-2 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border" style={{ aspectRatio: "3/4" }}>
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=75"
                  alt="Systems architecture"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="glass-card rounded-xl px-4 py-3">
                    <p className="text-white text-sm font-semibold leading-snug">Strategy and execution — in one partner</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-3">
              <motion.span {...fadeIn} className="label-mono mb-2 block">Our Differentiation</motion.span>
              <motion.h2 {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.07 }} className="text-3xl md:text-4xl font-bold text-foreground mb-2">{whyPhaarvai.title}</motion.h2>
              <motion.p {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.12 }} className="text-base text-muted-foreground mb-8 leading-relaxed">{whyPhaarvai.subtitle}</motion.p>

              <div className="flex flex-col gap-0 divide-y divide-border">
                {whyPhaarvai.points.map((point, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: idx * 0.06 }}
                    className="flex gap-5 py-5 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-200">
                        <span className="text-[10px] font-bold text-primary group-hover:text-white transition-colors">{String(idx + 1).padStart(2, "0")}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-1 text-foreground">{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 section-alt border-y border-border" aria-label="Sectors served">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-5">
            <div>
              <motion.span {...fadeIn} className="label-mono mb-2 block">Industry Focus</motion.span>
              <motion.h2 {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.07 }} className="text-3xl md:text-4xl font-bold text-foreground mb-2">{sectorsPreview.title}</motion.h2>
              <motion.p {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.12 }} className="text-base text-muted-foreground max-w-xl leading-relaxed">{sectorsPreview.subtitle}</motion.p>
            </div>
            <motion.div {...fadeIn}>
              <Link href="/sectors" className="inline-flex items-center text-primary font-semibold text-sm hover:underline group gap-1.5 shrink-0">
                All sectors <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectorItems.map((sector, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
              >
                <Link
                  href={`/sectors#${sector.slug}`}
                  className="group flex items-center gap-4 bg-white border border-border rounded-xl p-5 card-hover"
                >
                  <span className="text-2xl">{sector.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{sector.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{sector.desc}</div>
                  </div>
                  <ChevronRight size={14} className="ml-auto text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-16 bg-background" aria-label="Latest insights">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
            <div>
              <motion.span {...fadeIn} className="label-mono mb-2 block">Knowledge</motion.span>
              <motion.h2 {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.07 }} className="text-2xl md:text-3xl font-bold text-foreground">Latest Insights</motion.h2>
            </div>
            <motion.div {...fadeIn}>
              <Link href="/insights" className="inline-flex items-center text-primary font-semibold text-sm hover:underline group gap-1.5 shrink-0">
                All articles <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {insights.slice(0, 3).map((article, idx) => (
              <motion.div
                key={article.id}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.07 }}
                className="group bg-white border border-border rounded-xl p-6 card-hover flex flex-col"
              >
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-primary/6 text-primary border border-primary/12 self-start mb-4">
                  {article.category}
                </span>
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2 flex-1">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                <span className="text-xs font-semibold text-primary flex items-center gap-1">
                  Read more <ChevronRight size={12} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to build something that matters?"
        description="We work with governments, infrastructure operators, and mission-driven institutions. No sales cycle — a direct conversation."
        buttonLabel="Talk to Our Team"
        buttonHref="/contact"
      />
    </>
  );
}
