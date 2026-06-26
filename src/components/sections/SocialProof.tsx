"use client";

import Image from "next/image";
import ScrollReveal from "../shared/ScrollReveal";
import TestimonialCard from "../shared/TestimonialCard";


const STATS = [
  { value: "0.42ms",  label: "Inference Latency",     sub: "Industry-leading AI agent pipeline speed" },
  { value: "99.999%", label: "Sandbox Uptime",        sub: "Zero-fault hot-swappable node clusters" },
  { value: "45.2M+",  label: "Workflows Daily",       sub: "High-density automated pipeline telemetry" },
  { value: "14+",     label: "Global Secure Regions", sub: "Distributed low-overhead mesh nodes" },
];

const TESTIMONIALS = [
  {
    quote: "Moving our real-time telemetry compilation to NEURAL.mesh reduced AI agent pipeline overhead by 40%. The inference indicators are incredibly precise.",
    author: "Elena Rostova", role: "Lead AI Platform Engineer", company: "Vercel Systems", rating: 5,
  },
  {
    quote: "The visual modular architecture is the best I've seen. Scaffolding custom AI sandbox instances is instantaneous and the dark theme matches our branding flawlessly.",
    author: "Marcus Vance", role: "Principal Design Engineer", company: "Linear Corp", rating: 5,
  },
];

const PARTNERS = [
  { icon: "/assets/svg/cube-16-solid.svg",     name: "AI_MESH.IO",      color: "#FFC801" },
  { icon: "/assets/svg/chart-pie.svg",         name: "AGENT_FLOW",      color: "#FF9932" },
  { icon: "/assets/svg/cog-8-tooth.svg",       name: "NEURAL_PIPELINE", color: "#5EC8DC" },
  { icon: "/assets/svg/arrow-trending-up.svg", name: "TELEMETRY_CORE",  color: "#FFC801" },
  { icon: "/assets/svg/cube-16-solid.svg",     name: "SANDBOX_LABS",    color: "#FF9932" },
  { icon: "/assets/svg/chart-pie.svg",         name: "MESH_ANALYTICS",  color: "#5EC8DC" },
];

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      className="nm-section"
      aria-labelledby="social-proof-title"
      style={{ background: "var(--bg)" }}
    >
      <div className="glow-blob glow-blob-teal" style={{ width: "600px", height: "600px", top: "20%", left: "10%", opacity: 0.3 }} aria-hidden="true" />
      <div className="glow-blob glow-blob-orange" style={{ width: "400px", height: "400px", bottom: "10%", right: "15%", opacity: 0.25 }} aria-hidden="true" />

      <h2 id="social-proof-title" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }}>
        Social Proof and System Performance Metrics
      </h2>

      <div className="nm-container" style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", gap: "80px" }}>

        {/* Partner marquee */}
        <ScrollReveal>
          <div style={{ textAlign: "center", overflow: "hidden", position: "relative" }}>
            <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(240,246,243,0.3)", marginBottom: "28px" }}>
              Powering Next-Gen AI Telemetry For Elite Teams
            </p>
            <div style={{ position: "absolute", left: 0, top: "28px", bottom: 0, width: "120px", background: "linear-gradient(to right, var(--bg), transparent)", zIndex: 10, pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: "28px", bottom: 0, width: "120px", background: "linear-gradient(to left, var(--bg), transparent)", zIndex: 10, pointerEvents: "none" }} />
            <div style={{ overflow: "hidden" }}>
              <div className="animate-marquee" style={{ gap: "60px", opacity: 0.55 }}>
                {[...PARTNERS, ...PARTNERS].map(({ icon, name, color }, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0, userSelect: "none" }}>
                    <Image src={icon} width={16} height={16} alt="" aria-hidden="true" style={{ filter: `drop-shadow(0 0 4px ${color}40)` }} />
                    <span style={{ fontSize: "13px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "#fff", letterSpacing: "0.04em" }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
          <style>{`
            @media(min-width:1024px){.stats-grid{grid-template-columns:repeat(4,1fr)!important}}
            .stat-card-premium {
              background: rgba(16,30,44,0.8);
              border: 1px solid rgba(255,255,255,0.07);
              border-radius: 20px;
              padding: 28px 24px;
              position: relative;
              overflow: hidden;
              backdrop-filter: blur(12px);
              transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
            }
            .stat-card-premium::before {
              content: "";
              position: absolute;
              top: 0; left: 10%; right: 10%;
              height: 1px;
              background: linear-gradient(90deg, transparent, rgba(255,200,1,0.3), transparent);
            }
            .stat-card-premium:hover {
              border-color: rgba(255,200,1,0.25);
              transform: translateY(-6px) scale(1.02);
              box-shadow: 0 20px 50px rgba(0,0,0,0.6), 0 0 40px rgba(255,200,1,0.06);
            }
          `}</style>
          <div className="stats-grid" style={{ display: "contents" }}>
            {STATS.map((s, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="stat-card-premium">
                  <div style={{
                    fontSize: "clamp(28px, 3.5vw, 38px)",
                    fontWeight: 800,
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                    background: "linear-gradient(135deg, #fff 30%, rgba(255,200,1,0.85))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "10px",
                  }}>{s.value}</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>{s.label}</div>
                  <div style={{ fontSize: "11px", color: "rgba(240,246,243,0.45)", lineHeight: 1.5 }}>{s.sub}</div>
                  {/* Corner accent */}
                  <div style={{ position: "absolute", top: "16px", right: "16px", width: "8px", height: "8px", borderRadius: "50%", background: "#FFC801", opacity: 0.6, animation: "pulse-scale 3s ease-in-out infinite", animationDelay: `${i * 0.5}s` }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Animated scan-line divider */}
        <div className="scan-line-divider" style={{ margin: "8px 0" }} />

        {/* Testimonials */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", paddingTop: "32px" }}>
          <style>{`@media(min-width:1024px){.testi-grid{grid-template-columns:1fr 2fr!important}}`}</style>
          <div className="testi-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
            {/* Left */}
            <ScrollReveal>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div className="nm-badge nm-badge-gold" style={{ width: "fit-content" }}>Developer Rated</div>
                <h3 style={{ fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.25 }}>
                  Loved by UI Engineers and Platform Architects.
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(240,246,243,0.55)", lineHeight: 1.7 }}>
                  Read real logs from engineering leads who deployed our secure AI data automation nodes directly into production clusters.
                </p>
                {/* Stars */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ fontSize: "18px", color: "#FFC801", letterSpacing: "2px" }}>★★★★★</div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#fff" }}>4.92 / 5.0</div>
                    <div style={{ fontSize: "10px", color: "rgba(240,246,243,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Average rating</div>
                  </div>
                </div>
                {/* Review pill */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "99px", padding: "6px 14px", width: "fit-content" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ADE80", animation: "pulse 2s ease-in-out infinite" }} />
                  <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "rgba(240,246,243,0.6)" }}>1,200+ verified reviews</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonial cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
              <style>{`@media(min-width:640px){.testi-cards{grid-template-columns:repeat(2,1fr)!important}}`}</style>
              <div className="testi-cards" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
                {TESTIMONIALS.map((t, i) => (
                  <ScrollReveal key={i} delay={i * 120} style={{ height: "100%" }}>
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
          </div>
        </div>

      </div>
    </section>
  );
}
