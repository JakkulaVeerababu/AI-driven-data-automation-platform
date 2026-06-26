"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

function TechPill({ icon, label, spin = false }: { icon: string; label: string; spin?: boolean }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "8px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "10px", padding: "7px 14px",
      fontSize: "12px", fontFamily: "var(--font-mono)",
      color: "rgba(240,246,243,0.6)",
      transition: "all 0.2s",
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,200,1,0.25)";
        (e.currentTarget as HTMLElement).style.color = "rgba(240,246,243,0.9)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLElement).style.color = "rgba(240,246,243,0.6)";
      }}
    >
      <Image src={icon} width={14} height={14} alt="" aria-hidden="true"
        style={spin ? { animation: "spin 10s linear infinite" } : {}} />
      <span>{label}</span>
    </div>
  );
}

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="nm-hero bg-grid bg-grid-fade" aria-labelledby="hero-title" aria-describedby="hero-desc">

      {/* Aurora blobs */}
      <div className="glow-blob glow-blob-teal animate-aurora" style={{ width: "700px", height: "700px", top: "-15%", left: "-10%", opacity: 0.7 }} aria-hidden="true" />
      <div className="glow-blob glow-blob-gold animate-aurora" style={{ width: "500px", height: "500px", bottom: "-10%", right: "-8%", opacity: 0.5, animationDelay: "-5s" }} aria-hidden="true" />
      <div className="glow-blob glow-blob-orange animate-float" style={{ width: "400px", height: "400px", top: "40%", left: "55%", opacity: 0.35, animationDelay: "-2s" }} aria-hidden="true" />

      <div className="nm-container" style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0" }}>

        {/* Top trust badge */}
        <div className="anim-fade-up delay-0" style={{ marginBottom: "28px" }}>
          <div className="nm-badge nm-badge-gold" style={{ gap: "8px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FFC801", animation: "pulse 2s ease-in-out infinite", display: "inline-block" }} />
            NEW V2.4 — Trustworthy AI Sandbox Nodes · ★ 4.9/5
          </div>
        </div>

        {/* Main heading */}
        <h1
          id="hero-title"
          className="nm-hero-title anim-blur-in delay-60"
        >
          Orchestrate Autonomous AI<br />
          Workflows on a{" "}
          <span className="text-shimmer">Secure Mesh.</span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-desc"
          className="nm-hero-sub anim-fade-up delay-120"
        >
          Unlock AI-driven data automation pipelines. Execute, monitor, and scale models with
          sub-millisecond telemetry and zero infrastructure overhead.
        </p>

        {/* CTA buttons */}
        <div className="anim-fade-up delay-180" style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "36px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#pricing" style={{ textDecoration: "none" }}>
            <button className="nm-btn nm-btn-primary nm-btn-lg">
              Provision Node Free
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </a>
          <a href="#features" style={{ textDecoration: "none" }}>
            <button className="nm-btn nm-btn-secondary nm-btn-lg">Explore Telemetry</button>
          </a>
        </div>

        {/* Tech pills */}
        <div
          ref={parallaxRef}
          className="anim-fade-up delay-240"
          style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px",
            marginTop: "32px", transition: "transform 250ms cubic-bezier(0.16,1,0.3,1)"
          }}
        >
          <TechPill icon="/assets/svg/cube-16-solid.svg" label="AI Node Core: Neural-Mesh" />
          <TechPill icon="/assets/svg/cog-8-tooth.svg" label="Orchestrator: v2.4-Autonomous" spin />
          <TechPill icon="/assets/svg/chart-pie.svg" label="Telemetry: Active" />
        </div>

        {/* Hero Dashboard */}
        <div
          className="anim-blur-in delay-300"
          style={{
            width: "100%", maxWidth: "960px", marginTop: "56px",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(10,20,30,0.7)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            overflow: "hidden",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.8), 0 0 60px rgba(255,200,1,0.04)",
          }}
        >
          {/* Window bar */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "10px 16px", background: "rgba(7,16,26,0.8)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                {["#FF5F56","#FFBD2E","#27C93F"].map(c => (
                  <span key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div style={{ display: "flex", gap: "2px" }}>
                {[
                  { name: "ai_pipeline.py", active: true, dot: "#FFC801" },
                  { name: "agent_telemetry.log", active: false, dot: "#0F4455" },
                  { name: "config.yaml", active: false },
                ].map(tab => (
                  <div key={tab.name} style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    padding: "4px 12px",
                    background: tab.active ? "rgba(255,255,255,0.06)" : "transparent",
                    borderRadius: "6px",
                    fontSize: "11px", fontFamily: "var(--font-mono)",
                    color: tab.active ? "#F0F6F3" : "rgba(240,246,243,0.3)",
                    cursor: "default", userSelect: "none",
                  }}>
                    {tab.dot && <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: tab.dot, animation: tab.active ? "pulse 2s ease-in-out infinite" : "none" }} />}
                    <span>{tab.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", fontFamily: "var(--font-mono)", color: "#4ADE80" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ADE80", animation: "pulse 2s ease-in-out infinite" }} />
              LIVE MESH: Connected
            </div>
          </div>

          {/* Dashboard body */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", minHeight: "340px" }}>
            {/* Responsive: on ≥1024 use 3fr+1fr */}
            <style>{`@media(min-width:1024px){.hero-dashboard-grid{grid-template-columns:3fr 1fr !important}}`}</style>
            <div className="hero-dashboard-grid" style={{ display: "grid", gridTemplateColumns: "1fr" }}>

              {/* Code panel */}
              <div style={{ padding: "24px", background: "rgba(0,0,0,0.3)", fontFamily: "var(--font-mono)", fontSize: "12px", textAlign: "left", overflowX: "auto" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "10px", color: "rgba(240,246,243,0.3)", borderBottom: "1px solid rgba(255,255,255,0.04)", paddingBottom: "10px", marginBottom: "16px" }}>
                  <span>Python 3.11</span><span>·</span><span>Active Core: Sandy-Mesh-X89</span>
                </div>
                {[
                  { n:1,  t: <><span style={{color:"#FF9932"}}>import</span><span style={{color:"#C8E0D8"}}> neuralmesh </span><span style={{color:"#FF9932"}}>as</span><span style={{color:"#C8E0D8"}}> nm</span></> },
                  { n:2,  t: <><span style={{color:"#FF9932"}}>from</span><span style={{color:"#C8E0D8"}}> neuralmesh.agents </span><span style={{color:"#FF9932"}}>import</span><span style={{color:"#C8E0D8"}}> AutonomousPipeline</span></> },
                  { n:3,  t: <></> },
                  { n:4,  t: <span style={{color:"rgba(240,246,243,0.3)"}}># Initialize secure AI data automation cluster</span> },
                  { n:5,  t: <><span style={{color:"#5EC8DC"}}>pipeline</span><span style={{color:"#C8E0D8"}}> = </span><span style={{color:"#5EC8DC"}}>AutonomousPipeline</span><span style={{color:"#C8E0D8"}}>(</span></> },
                  { n:6,  t: <><span style={{color:"#C8E0D8"}}>    node_id=</span><span style={{color:"#FFC801"}}>&quot;agi-node-418&quot;</span><span style={{color:"#C8E0D8"}}>,</span></> },
                  { n:7,  t: <><span style={{color:"#C8E0D8"}}>    region=</span><span style={{color:"#FFC801"}}>&quot;global-mesh&quot;</span><span style={{color:"#C8E0D8"}}>,</span></> },
                  { n:8,  t: <><span style={{color:"#C8E0D8"}}>    sandbox_compliance=</span><span style={{color:"#FFC801"}}>&quot;grade-aa&quot;</span></> },
                  { n:9,  t: <span style={{color:"#C8E0D8"}}>)</span> },
                  { n:10, t: <></> },
                  { n:11, t: <span style={{color:"rgba(240,246,243,0.3)"}}># Spin up telemetry workers</span> },
                  { n:12, t: <><span style={{color:"#5EC8DC"}}>pipeline</span><span style={{color:"#C8E0D8"}}>.orchestrate(</span></> },
                  { n:13, t: <><span style={{color:"#C8E0D8"}}>    agents=[</span><span style={{color:"#FFC801"}}>&quot;telemetry-analyzer&quot;</span><span style={{color:"#C8E0D8"}}>, </span><span style={{color:"#FFC801"}}>&quot;self-healer&quot;</span><span style={{color:"#C8E0D8"}}>],</span></> },
                  { n:14, t: <><span style={{color:"#C8E0D8"}}>    context_limit=</span><span style={{color:"#FF9932"}}>131072</span></> },
                  { n:15, t: <span style={{color:"#C8E0D8"}}>)</span> },
                ].map(({ n, t }) => (
                  <div key={n} style={{ display: "flex", gap: "16px", lineHeight: "1.8" }}>
                    <span style={{ color: "rgba(240,246,243,0.2)", minWidth: "20px", textAlign: "right", userSelect: "none" }}>{n}</span>
                    <span>{t}</span>
                  </div>
                ))}

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "14px", marginTop: "14px", fontSize: "10px", color: "rgba(240,246,243,0.3)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ADE80", animation: "pulse 2s ease-in-out infinite" }} />
                    <span style={{ color: "#5EC8DC", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>active inference pipeline running...</span>
                  </div>
                  <span style={{ color: "rgba(255,200,1,0.7)" }}>Done in 0.42ms</span>
                </div>
              </div>

              {/* Right telemetry panel */}
              <div style={{ padding: "20px", background: "rgba(7,16,26,0.5)", display: "flex", flexDirection: "column", gap: "16px", borderLeft: "1px solid rgba(255,255,255,0.05)" }}>
                {/* Topology SVG */}
                <div>
                  <div style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: "rgba(240,246,243,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Active Mesh Topology</div>
                  <div style={{ border: "1px solid rgba(255,255,255,0.05)", borderRadius: "12px", padding: "8px", background: "rgba(7,16,26,0.5)" }}>
                    <svg viewBox="0 0 200 100" style={{ width: "100%", height: "72px" }} fill="none" aria-hidden="true">
                      <circle cx="40" cy="50" r="5" fill="#FFC801" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                      <circle cx="100" cy="18" r="4" fill="#FF9932" />
                      <circle cx="100" cy="82" r="4" fill="#C8E0D8" />
                      <circle cx="160" cy="50" r="5" fill="#0F4455" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                      <path d="M40 50 L100 18 L160 50 L100 82 Z" stroke="rgba(200,224,216,0.08)" strokeWidth="1" />
                      <path d="M40 50 L100 18 L160 50" stroke="#FFC801" strokeWidth="1.5" strokeDasharray="8 28" className="dash-anim" />
                      <path d="M160 50 L100 82 L40 50" stroke="#FF9932" strokeWidth="1.5" strokeDasharray="8 28" className="dash-anim-r" />
                    </svg>
                  </div>
                </div>

                {/* Metrics */}
                {[
                  { label: "Active AI Sandbox", value: "Agent-Node-X89", badge: { text: "Active", color: "#FFC801", bg: "rgba(255,200,1,0.1)" } },
                  { label: "Pipeline Load", value: "42.1%", progress: 42 },
                  { label: "Inference Latency", value: "0.42 ms", tag: { text: "Optimized", color: "#FF9932" } },
                ].map(({ label, value, badge, progress, tag }) => (
                  <div key={label} style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: "rgba(240,246,243,0.3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "13px", fontWeight: 700, fontFamily: "var(--font-mono)", color: "#fff" }}>{value}</span>
                      {badge && <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: badge.color, background: badge.bg, borderRadius: "99px", padding: "2px 8px" }}>{badge.text}</span>}
                      {tag && <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: tag.color }}>{tag.text}</span>}
                    </div>
                    {progress !== undefined && (
                      <div className="nm-progress"><div className="nm-progress-fill" style={{ width: `${progress}%` }} /></div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="anim-fade-up delay-500" style={{ marginTop: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }} aria-hidden="true">
          <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "rgba(240,246,243,0.25)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Scroll to explore</span>
          <svg className="animate-bounce" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ color: "rgba(240,246,243,0.2)" }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

      </div>
    </section>
  );
}
