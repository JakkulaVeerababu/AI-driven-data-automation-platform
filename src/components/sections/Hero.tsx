"use client";

import useMouseParallax from "@/hooks/useMouseParallax";
import Button from "../shared/Button";
import Container from "../shared/Container";
import Badge from "../shared/Badge";
import Image from "next/image";

export default function Hero() {
  const parallaxRef = useMouseParallax<HTMLDivElement>(0.03);

  return (
    <section
      className="relative flex min-h-[95vh] flex-col items-center justify-center overflow-hidden bg-oceanic-noir py-24 lg:py-36 bg-grid-pattern"
      aria-labelledby="hero-title"
      aria-describedby="hero-description"
    >
      {/* Grid fade overlay */}
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" aria-hidden="true" />

      {/* Aurora blobs */}
      <div
        className="absolute top-[-10%] left-[-5%] h-[700px] w-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(17,76,90,0.35) 0%, transparent 65%)",
          animation: "aurora 10s ease-in-out infinite alternate",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-5%] right-[-8%] h-[500px] w-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,200,1,0.1) 0%, transparent 60%)",
          animation: "aurora 14s ease-in-out infinite alternate-reverse",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle at center, rgba(255,153,50,0.12) 0%, transparent 70%)",
          animation: "float-slow 8s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 flex flex-col items-center text-center gap-8 lg:gap-10">

        {/* Trust pill badge */}
        <div
          className="opacity-0 animate-fade-in-up inline-flex items-center gap-2.5 rounded-full border border-mystic-mint/15 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md shadow-premium-sm shimmer-border"
          style={{ animationDelay: "0ms" }}
        >
          <Badge variant="amber">NEW V2.4</Badge>
          <span className="text-3xs font-extrabold uppercase tracking-widest text-arctic-powder/80">
            Trustworthy AI Sandbox Nodes&nbsp;·&nbsp;★ 4.9/5
          </span>
        </div>

        {/* Main Heading */}
        <h1
          id="hero-title"
          className="opacity-0 animate-blur-reveal max-w-5xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[72px] leading-[1.08] lg:leading-[1.06]"
          style={{ animationDelay: "60ms" }}
        >
          Orchestrate Autonomous AI{" "}
          <br className="hidden sm:block" />
          Workflows on a{" "}
          <span className="shimmer-text">
            Secure&nbsp;Mesh.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-description"
          className="opacity-0 animate-fade-in-up max-w-2xl text-base text-arctic-powder/65 md:text-lg leading-relaxed"
          style={{ animationDelay: "120ms" }}
        >
          Unlock state-of-the-art AI-driven data automation pipelines. Securely execute, monitor, and scale
          models with sub-millisecond execution telemetry and zero infrastructure overhead.
        </p>

        {/* CTA Buttons */}
        <div
          className="opacity-0 animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          style={{ animationDelay: "180ms" }}
        >
          <a
            href="#pricing"
            className="w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-xl"
          >
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              <span>Provision Node Free</span>
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-xl"
          >
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore Telemetry
            </Button>
          </a>
        </div>

        {/* Floating Tech Pills — Mouse Parallax */}
        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: "240ms" }}
        >
          <div
            ref={parallaxRef}
            className="flex flex-wrap justify-center gap-3 text-2xs font-mono text-arctic-powder/55"
            style={{ transition: "transform 250ms cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {[
              { icon: "/assets/svg/cube-16-solid.svg", label: "AI Node Core: Neural-Mesh", color: "text-forsythia" },
              { icon: "/assets/svg/cog-8-tooth.svg",  label: "Orchestrator: v2.4-Autonomous", color: "text-deep-saffron", spin: true },
              { icon: "/assets/svg/chart-pie.svg",     label: "Telemetry: Active",  color: "text-mystic-mint" },
            ].map(({ icon, label, color, spin }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-xl px-3.5 py-2 hover:border-forsythia/25 hover:bg-white/[0.07] transition-all duration-200 select-none backdrop-blur-sm"
              >
                <Image
                  src={icon}
                  width={14}
                  height={14}
                  className={`h-3.5 w-3.5 ${color} ${spin ? "animate-spin" : ""}`}
                  style={spin ? { animationDuration: "10s" } : undefined}
                  alt=""
                  aria-hidden="true"
                />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Dashboard */}
        <div
          className="opacity-0 animate-blur-reveal w-full max-w-5xl mt-8 rounded-2xl border border-mystic-mint/10 bg-oceanic-noir/60 backdrop-blur-xl overflow-hidden hero-dashboard-glow"
          style={{ animationDelay: "300ms" }}
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between border-b border-mystic-mint/8 bg-oceanic-noir/70 px-4 py-2.5">
            <div className="flex items-center gap-4">
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>

              {/* Tabs */}
              <div className="flex items-center">
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-oceanic-noir text-white text-3xs font-mono font-medium rounded-t-md border-t border-x border-mystic-mint/12 select-none translate-y-[11px] relative z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-forsythia animate-pulse" />
                  <span>ai_pipeline.py</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-arctic-powder/35 hover:text-arctic-powder/70 text-3xs font-mono select-none transition-colors cursor-pointer translate-y-[11px] relative z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-nocturnal-expedition" />
                  <span>agent_telemetry.log</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-arctic-powder/35 hover:text-arctic-powder/70 text-3xs font-mono select-none transition-colors cursor-pointer translate-y-[11px] relative z-10">
                  <span>config.yaml</span>
                </div>
              </div>
            </div>

            {/* Live status */}
            <div className="flex items-center gap-2 text-3xs font-mono text-mystic-mint">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">LIVE MESH: Connected</span>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[360px] divide-y lg:divide-y-0 lg:divide-x divide-mystic-mint/8">

            {/* Code Editor */}
            <div className="lg:col-span-3 p-6 bg-black/25 font-mono text-xs text-left overflow-x-auto select-text scrollbar-none flex flex-col justify-between">
              <div className="flex flex-col gap-1 text-arctic-powder/75">
                <div className="flex items-center gap-2 text-3xs text-arctic-powder/30 pb-2.5 border-b border-white/5 mb-5 select-none">
                  <span>Python 3.11</span>
                  <span className="text-white/20">·</span>
                  <span>Active Core: Sandy-Mesh-X89</span>
                  <span className="ml-auto text-mystic-mint/40 font-medium">UTF-8</span>
                </div>

                {[
                  { n: 1,  tokens: [{ t: "import", c: "text-deep-saffron" }, { t: " neuralmesh ", c: "" }, { t: "as", c: "text-deep-saffron" }, { t: " nm", c: "" }] },
                  { n: 2,  tokens: [{ t: "from", c: "text-deep-saffron" }, { t: " neuralmesh.agents ", c: "" }, { t: "import", c: "text-deep-saffron" }, { t: " AutonomousPipeline", c: "" }] },
                  { n: 3,  tokens: [] },
                  { n: 4,  tokens: [{ t: "# Initialize secure AI data automation cluster", c: "text-arctic-powder/40" }] },
                  { n: 5,  tokens: [{ t: "pipeline", c: "text-mystic-mint" }, { t: " = ", c: "" }, { t: "AutonomousPipeline", c: "text-mystic-mint" }, { t: "(", c: "" }] },
                  { n: 6,  tokens: [{ t: "    node_id", c: "" }, { t: "=", c: "text-deep-saffron" }, { t: '"agi-node-418"', c: "text-forsythia" }, { t: ",", c: "" }] },
                  { n: 7,  tokens: [{ t: "    region", c: "" }, { t: "=", c: "text-deep-saffron" }, { t: '"global-mesh"', c: "text-forsythia" }, { t: ",", c: "" }] },
                  { n: 8,  tokens: [{ t: "    sandbox_compliance", c: "" }, { t: "=", c: "text-deep-saffron" }, { t: '"grade-aa"', c: "text-forsythia" }] },
                  { n: 9,  tokens: [{ t: ")", c: "" }] },
                  { n: 10, tokens: [] },
                  { n: 11, tokens: [{ t: "# Spin up telemetry workers", c: "text-arctic-powder/40" }] },
                  { n: 12, tokens: [{ t: "pipeline", c: "text-mystic-mint" }, { t: ".orchestrate(", c: "" }] },
                  { n: 13, tokens: [{ t: "    agents", c: "" }, { t: "=[", c: "" }, { t: '"telemetry-analyzer"', c: "text-forsythia" }, { t: ", ", c: "" }, { t: '"self-healer"', c: "text-forsythia" }, { t: "],", c: "" }] },
                  { n: 14, tokens: [{ t: "    context_limit", c: "" }, { t: "=", c: "text-deep-saffron" }, { t: "131072", c: "text-deep-saffron" }] },
                  { n: 15, tokens: [{ t: ")", c: "" }] },
                ].map(({ n, tokens }) => (
                  <div key={n} className="flex gap-4 leading-5">
                    <span className="text-arctic-powder/20 select-none text-right w-5 shrink-0">{n}</span>
                    <span className="text-mystic-mint/80">
                      {tokens.map((tok, i) => (
                        <span key={i} className={tok.c}>{tok.t}</span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-3xs border-t border-white/5 pt-4 mt-6 text-arctic-powder/30 select-none">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-mystic-mint/70 font-bold uppercase tracking-wider">active inference pipeline running...</span>
                </div>
                <span className="font-mono text-forsythia/70">Done in 0.42ms</span>
              </div>
            </div>

            {/* Right Sidebar Telemetry */}
            <div className="lg:col-span-1 p-5 flex flex-col gap-5 bg-oceanic-noir/40">

              {/* Mesh Topology SVG */}
              <div className="flex flex-col gap-2">
                <span className="text-3xs font-bold font-mono text-arctic-powder/35 uppercase tracking-wider">Active Mesh Topology</span>
                <div className="border border-mystic-mint/8 rounded-xl p-2 bg-oceanic-noir/50 flex items-center justify-center">
                  <svg className="w-full h-20" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="40" cy="50" r="5" fill="#FFC801" className="animate-pulse" />
                    <circle cx="100" cy="18" r="4" fill="#FF9932" />
                    <circle cx="100" cy="82" r="4" fill="#D9E8E2" />
                    <circle cx="160" cy="50" r="5" fill="#114C5A" className="animate-pulse" />
                    <path d="M40 50 L100 18 L160 50 L100 82 Z" stroke="rgba(217, 232, 226, 0.1)" strokeWidth="1" />
                    <path d="M40 50 L100 82 L160 50 L100 18 Z" stroke="rgba(217, 232, 226, 0.1)" strokeWidth="1" />
                    <path d="M40 50 L100 18 L160 50" stroke="#FFC801" strokeWidth="1.5" strokeDasharray="8 28" style={{ animation: "dash 2.5s linear infinite" }} />
                    <path d="M160 50 L100 82 L40 50" stroke="#FF9932" strokeWidth="1.5" strokeDasharray="8 28" style={{ animation: "dash 2.5s linear infinite reverse" }} />
                  </svg>
                </div>
              </div>

              {/* Telemetry Items */}
              {[
                {
                  label: "Active AI Sandbox",
                  value: "Agent-Node-X89",
                  badge: { text: "Active", variant: "amber" as const },
                },
                {
                  label: "Pipeline Load",
                  value: "42.1%",
                  bar: 42,
                },
                {
                  label: "Inference Latency",
                  value: "0.42 ms",
                  tag: "Optimized",
                },
              ].map(({ label, value, badge, bar, tag }) => (
                <div key={label} className="flex flex-col gap-2 border-t border-mystic-mint/8 pt-4">
                  <span className="text-3xs font-bold font-mono text-arctic-powder/35 uppercase tracking-wider">{label}</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white font-mono">{value}</span>
                    {badge && (
                      <span className="text-2xs font-extrabold uppercase tracking-wider bg-forsythia/15 text-forsythia border border-forsythia/20 rounded-full px-2 py-0.5">
                        {badge.text}
                      </span>
                    )}
                    {tag && (
                      <span className="text-3xs text-deep-saffron font-bold uppercase tracking-widest">{tag}</span>
                    )}
                  </div>
                  {bar !== undefined && (
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-nocturnal-expedition to-mystic-mint/60 rounded-full transition-all duration-1000"
                        style={{ width: `${bar}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom scroll hint */}
        <div
          className="opacity-0 animate-fade-in-up flex flex-col items-center gap-1.5 mt-4"
          style={{ animationDelay: "500ms" }}
          aria-hidden="true"
        >
          <span className="text-3xs font-mono text-arctic-powder/30 uppercase tracking-widest">Scroll to explore</span>
          <svg className="h-4 w-4 text-arctic-powder/25 animate-bounce" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

      </Container>
    </section>
  );
}
