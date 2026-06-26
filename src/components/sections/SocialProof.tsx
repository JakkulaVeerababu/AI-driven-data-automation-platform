import Container from "../shared/Container";
import Badge from "../shared/Badge";
import StatisticCard from "../shared/StatisticCard";
import TestimonialCard from "../shared/TestimonialCard";
import ScrollReveal from "../shared/ScrollReveal";
import Image from "next/image";

interface StatItem { value: string; label: string; sublabel: string; }
interface TestimonialItem { quote: string; author: string; role: string; company: string; rating: number; }

const STATS: StatItem[] = [
  { value: "0.42ms",  label: "Inference Latency",         sublabel: "Industry-leading AI agent pipeline speed" },
  { value: "99.999%", label: "Sandbox Uptime",            sublabel: "Zero-fault hot-swappable node clusters" },
  { value: "45.2M+",  label: "Workflows Daily",           sublabel: "High-density automated pipeline telemetry" },
  { value: "14+",     label: "Global Secure Regions",     sublabel: "Distributed low-overhead mesh nodes" },
];

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Moving our real-time telemetry compilation to NEURAL.mesh reduced our AI agent pipeline overhead by 40%. The inference indicators are incredibly precise, and visible focus outlines conform completely with our compliance standard.",
    author: "Elena Rostova",
    role: "Lead AI Platform Engineer",
    company: "Vercel Systems",
    rating: 5,
  },
  {
    quote: "The visual modular architecture is the best I've seen. Scaffolding custom AI sandbox instances is instantaneous, and the zero-dependency CSS theme matches our dark premium branding flawlessly.",
    author: "Marcus Vance",
    role: "Principal Design Engineer",
    company: "Linear Corp",
    rating: 5,
  },
];

const PARTNERS = [
  { icon: "/assets/svg/cube-16-solid.svg",     name: "AI_MESH.IO",        color: "text-forsythia" },
  { icon: "/assets/svg/chart-pie.svg",         name: "AGENT_FLOW",        color: "text-deep-saffron" },
  { icon: "/assets/svg/cog-8-tooth.svg",       name: "NEURAL_PIPELINE",   color: "text-mystic-mint" },
  { icon: "/assets/svg/arrow-trending-up.svg", name: "TELEMETRY_CORE",    color: "text-forsythia" },
  { icon: "/assets/svg/cube-16-solid.svg",     name: "SANDBOX_LABS",      color: "text-deep-saffron" },
  { icon: "/assets/svg/chart-pie.svg",         name: "MESH_ANALYTICS",    color: "text-mystic-mint" },
];

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      className="py-28 bg-oceanic-noir relative overflow-hidden border-t border-mystic-mint/8"
      aria-labelledby="social-proof-title"
    >
      {/* Glow layers */}
      <div className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-glow-radial filter blur-[120px] pointer-events-none opacity-50" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/3 h-[350px] w-[350px] rounded-full bg-glow-saffron filter blur-[90px] pointer-events-none opacity-40" aria-hidden="true" />

      <Container className="flex flex-col gap-24 relative z-10">
        <h2 id="social-proof-title" className="sr-only">Social Proof and System Performance Metrics</h2>

        {/* Partner Logo Marquee */}
        <ScrollReveal>
          <div className="flex flex-col gap-8 text-center overflow-hidden relative">
            <span className="text-3xs font-extrabold uppercase tracking-[0.2em] text-arctic-powder/35">
              Powering Next-Gen AI Telemetry For Elite Teams
            </span>

            <div className="absolute left-0 top-8 bottom-0 w-32 bg-gradient-to-r from-oceanic-noir to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-8 bottom-0 w-32 bg-gradient-to-l from-oceanic-noir to-transparent z-10 pointer-events-none" />

            <div className="w-full overflow-hidden py-2">
              <div className="animate-marquee flex items-center gap-20 opacity-50 hover:opacity-80 transition-opacity duration-500">
                {[...PARTNERS, ...PARTNERS].map(({ icon, name, color }, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-white font-mono text-xs font-bold shrink-0 select-none">
                    <Image src={icon} width={16} height={16} className={`h-4 w-4 ${color}`} alt="" aria-hidden="true" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 80}>
              <StatisticCard value={stat.value} label={stat.label} sublabel={stat.sublabel} />
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start pt-10 border-t border-white/5">
          
          {/* Left — Rating summary */}
          <ScrollReveal>
            <div className="flex flex-col gap-5 text-left lg:pr-6">
              <Badge variant="amber">Developer Rated</Badge>
              <h3 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
                Loved by UI Engineers and Platform Architects.
              </h3>
              <p className="text-xs text-arctic-powder/60 leading-relaxed">
                Read real logs from engineering leads who deployed our secure AI data automation nodes directly into production clusters.
              </p>

              {/* Stars + rating */}
              <div className="flex items-center gap-3 mt-1">
                <div className="flex text-forsythia text-base">{"★★★★★"}</div>
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold text-white tracking-tight">4.92 / 5.0</span>
                  <span className="text-3xs text-arctic-powder/45 uppercase tracking-wider">Average rating</span>
                </div>
              </div>

              {/* Review count pill */}
              <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/8 rounded-full px-3 py-1.5 w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-3xs font-mono text-arctic-powder/65">1,200+ verified reviews</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <TestimonialCard
                  quote={t.quote}
                  author={t.author}
                  role={t.role}
                  company={t.company}
                  rating={t.rating}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
