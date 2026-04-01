import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  positioning?: string[];
}

function DataFlowGraphic() {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <defs>
        <radialGradient id="nodeglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Grid lines */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1="0" y1={i * 45} x2="480" y2={i * 45}
          stroke="white" strokeOpacity="0.05" strokeWidth="1"
        />
      ))}
      {Array.from({ length: 11 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={i * 48} y1="0" x2={i * 48} y2="360"
          stroke="white" strokeOpacity="0.05" strokeWidth="1"
        />
      ))}

      {/* Connection edges */}
      <motion.path
        d="M96 90 L192 180" stroke="#3B82F6" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 4"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "loop", repeatDelay: 3 }}
      />
      <motion.path
        d="M192 180 L336 180" stroke="#3B82F6" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 4"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.2, repeat: Infinity, repeatType: "loop", repeatDelay: 3 }}
      />
      <motion.path
        d="M192 180 L192 270" stroke="#3B82F6" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 4"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.8, repeat: Infinity, repeatType: "loop", repeatDelay: 3 }}
      />
      <motion.path
        d="M336 180 L384 270" stroke="#3B82F6" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 4"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 2.2, repeat: Infinity, repeatType: "loop", repeatDelay: 3 }}
      />
      <motion.path
        d="M96 90 L192 90" stroke="#60A5FA" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, delay: 0.3, repeat: Infinity, repeatType: "loop", repeatDelay: 4 }}
      />
      <motion.path
        d="M192 90 L336 90" stroke="#60A5FA" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 4 }}
      />

      {/* Nodes */}
      {[
        { cx: 96, cy: 90, r: 6, delay: 0 },
        { cx: 192, cy: 90, r: 4, delay: 0.3 },
        { cx: 336, cy: 90, r: 5, delay: 0.6 },
        { cx: 192, cy: 180, r: 10, delay: 0.9, primary: true },
        { cx: 336, cy: 180, r: 7, delay: 1.2 },
        { cx: 192, cy: 270, r: 5, delay: 1.5 },
        { cx: 384, cy: 270, r: 4, delay: 1.8 },
        { cx: 96, cy: 270, r: 3, delay: 2.1 },
        { cx: 432, cy: 135, r: 4, delay: 2.4 },
        { cx: 48, cy: 180, r: 3, delay: 2.7 },
      ].map((node, idx) => (
        <motion.g key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: node.delay, duration: 0.6 }}>
          {node.primary && <circle cx={node.cx} cy={node.cy} r={22} fill="url(#nodeglow)" />}
          <circle
            cx={node.cx} cy={node.cy} r={node.r}
            fill={node.primary ? "#3B82F6" : "none"}
            stroke="#60A5FA"
            strokeOpacity={node.primary ? 1 : 0.5}
            strokeWidth={node.primary ? 2 : 1.5}
          />
          {node.primary && (
            <motion.circle
              cx={node.cx} cy={node.cy} r={node.r + 6}
              stroke="#3B82F6" strokeOpacity={0.3} strokeWidth={1} fill="none"
              style={{ originX: `${node.cx}px`, originY: `${node.cy}px` }}
              animate={{ scale: [1, 2.2], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
          )}
        </motion.g>
      ))}

      {/* Data labels */}
      {[
        { x: 104, y: 84, label: "Input" },
        { x: 344, y: 84, label: "Analysis" },
        { x: 200, y: 285, label: "Output" },
        { x: 344, y: 174, label: "AI Model" },
      ].map((label, idx) => (
        <motion.text
          key={idx}
          x={label.x} y={label.y}
          fill="white" fillOpacity="0.25"
          fontSize="8"
          fontFamily="monospace"
          letterSpacing="0.08em"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 + idx * 0.2, duration: 0.8 }}
        >
          {label.label}
        </motion.text>
      ))}
    </svg>
  );
}

export function HeroSection({ headline, subheadline, ctaPrimary, ctaSecondary, positioning }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden hero-gradient">
      {/* Ambient glow */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 -right-[20%] w-[70vw] h-[70vw] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            {/* Positioning tags */}
            {positioning && (
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {positioning.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono tracking-widest text-blue-300/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-[1.08] mb-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {headline}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-blue-100/70 leading-relaxed mb-12 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {subheadline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {ctaPrimary && (
                <Link href={ctaPrimary.href}>
                  <Button size="lg" className="h-13 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-white hover-elevate">
                    {ctaPrimary.label}
                  </Button>
                </Link>
              )}
              {ctaSecondary && (
                <Link href={ctaSecondary.href}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-13 px-8 text-base font-semibold bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover-elevate"
                  >
                    {ctaSecondary.label}
                  </Button>
                </Link>
              )}
            </motion.div>
          </div>

          {/* Right: abstract data-flow graphic */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full max-w-md opacity-80">
              <DataFlowGraphic />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
