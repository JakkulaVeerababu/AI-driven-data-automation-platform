"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const LOG_MESSAGES = [
  "Initializing telemetry analyzer...",
  "Context window set to 131,072 tokens",
  "Regional failover loops verified: OK",
  "Active inference stream connected: 0.42ms",
  "Sandbox memory isolation: grade-aa",
  "Worker threads synchronized: 16 active",
  "Telemetry buffer flushed to region: global-mesh",
  "Model query optimized via AVX2 instruction sets",
  "Zero-fault cluster nodes status: healthy",
  "Securing memory boundary for node core X89",
  "Compiling metrics telemetry loop data",
];

function LiveTelemetryLogs() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const formatTime = (d: Date) => d.toLocaleTimeString("en-US", { hour12: false }).split(" ")[0];
    const now = new Date();
    
    setLogs([
      `[${formatTime(new Date(now.getTime() - 6000))}] Node agi-node-418 provisioned in global-mesh.`,
      `[${formatTime(new Date(now.getTime() - 3000))}] Isolated sandbox compliance grade-aa active.`,
      `[${formatTime(now)}] Telemetry telemetry-analyzer worker thread active.`
    ]);

    const interval = setInterval(() => {
      setLogs(prev => {
        const nextMsg = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
        const time = formatTime(new Date());
        const nextLine = `[${time}] ${nextMsg}`;
        // Fallback for safety in case state initializes late
        return [...(prev.length >= 3 ? prev.slice(1) : prev), nextLine];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      fontFamily: "var(--font-mono)",
      fontSize: "9px",
      color: "rgba(240,246,243,0.4)",
      background: "rgba(0,0,0,0.35)",
      border: "1px solid rgba(255,255,255,0.04)",
      borderRadius: "8px",
      padding: "8px 12px",
      marginTop: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      minHeight: "54px",
      userSelect: "none",
    }}>
      {logs.map((log, idx) => (
        <div key={idx} style={{ display: "flex", gap: "8px", opacity: idx === logs.length - 1 ? 1 : idx === logs.length - 2 ? 0.65 : 0.35, transition: "all 0.3s" }}>
          <span style={{ color: "#FF9932" }}>&gt;&gt;</span>
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{log}</span>
        </div>
      ))}
    </div>
  );
}

function TechPill({ icon, label, spin = false }: { icon: string; label: string; spin?: boolean }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "10px",
        padding: "6px 12px",
        fontSize: "11px",
        fontFamily: "var(--font-mono)",
        color: "rgba(240,246,243,0.55)",
        transition: "all 0.2s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,200,1,0.25)";
        (e.currentTarget as HTMLElement).style.color = "rgba(240,246,243,0.95)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLElement).style.color = "rgba(240,246,243,0.55)";
      }}
    >
      <Image
        src={icon}
        width={13}
        height={13}
        alt=""
        aria-hidden="true"
        style={spin ? { animation: "spin 10s linear infinite" } : {}}
      />
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
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      className="nm-hero"
      aria-labelledby="hero-title"
      aria-describedby="hero-desc"
      style={{ minHeight: "80vh", padding: "88px 0 48px" }}
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" aria-hidden="true" />
      {/* Aurora blobs */}
      <div
        className="glow-blob glow-blob-teal animate-aurora"
        style={{ width: "700px", height: "700px", top: "-15%", left: "-10%", opacity: 0.65 }}
        aria-hidden="true"
      />
      <div
        className="glow-blob glow-blob-gold animate-aurora"
        style={{ width: "500px", height: "500px", bottom: "-10%", right: "-8%", opacity: 0.45, animationDelay: "-5s" }}
        aria-hidden="true"
      />
      <div
        className="glow-blob glow-blob-orange animate-float"
        style={{ width: "400px", height: "400px", top: "35%", left: "50%", opacity: 0.3, animationDelay: "-2s" }}
        aria-hidden="true"
      />

      <div className="nm-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Border laser light lines */}
        <div className="bg-laser-line-left" aria-hidden="true" />
        <div className="bg-laser-line-right" aria-hidden="true" />
        {/* Responsive layout configuration styling */}
        <style>{`
          .hero-split-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
            align-items: center;
            text-align: center;
          }
          .hero-left-col {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-split-title {
            font-size: clamp(30px, 4.8vw, 46px) !important;
            line-height: 1.15 !important;
            font-weight: 800;
            letter-spacing: -0.025em;
            color: #fff;
            text-align: center;
          }
          .hero-split-sub {
            font-size: 13.5px !important;
            line-height: 1.7 !important;
            color: rgba(240, 246, 243, 0.55) !important;
            margin-top: 18px !important;
            text-align: center;
            max-width: 480px;
          }
          
          @media (min-width: 1024px) {
            .hero-split-grid {
              grid-template-columns: 1.15fr 1fr !important;
              text-align: left !important;
              gap: 44px !important;
            }
            .hero-left-col {
              align-items: flex-start !important;
            }
            .hero-split-title {
              text-align: left !important;
            }
            .hero-split-sub {
              text-align: left !important;
            }
            .hero-buttons-wrapper {
              justify-content: flex-start !important;
            }
            .hero-tech-pills-wrapper {
              justify-content: flex-start !important;
            }
          }
        `}</style>

        <div className="hero-split-grid">
          {/* Left Column (Main Brand Copy & CTAs) */}
          <div className="hero-left-col">
            {/* Top trust badge */}
            <div className="anim-fade-up delay-0" style={{ marginBottom: "18px" }}>
              <div className="nm-badge nm-badge-gold" style={{ gap: "8px" }}>
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#FFC801",
                    animation: "pulse 2s ease-in-out infinite",
                    display: "inline-block",
                  }}
                />
                NEW V2.4 — AI Sandbox Nodes · ★ 4.9/5
              </div>
            </div>

            {/* Main heading */}
            <h1 id="hero-title" className="hero-split-title anim-blur-in delay-60">
              Orchestrate Autonomous AI<br />
              Workflows on a <span className="text-shimmer">Secure Mesh.</span>
            </h1>

            {/* Subtitle */}
            <p id="hero-desc" className="hero-split-sub anim-fade-up delay-120">
              Unlock AI-driven data automation pipelines. Execute, monitor, and scale models with
              sub-millisecond telemetry and zero infrastructure overhead.
            </p>

            {/* CTA buttons */}
            <div
              className="hero-buttons-wrapper anim-fade-up delay-180"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "28px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <a href="#pricing" style={{ textDecoration: "none" }}>
                <button
                  className="nm-btn nm-btn-primary nm-btn-lg"
                  style={{ height: "44px", padding: "0 22px", fontSize: "13.5px" }}
                >
                  Provision Node Free
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                    style={{ marginLeft: "4px" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </a>
              <a href="#features" style={{ textDecoration: "none" }}>
                <button
                  className="nm-btn nm-btn-secondary nm-btn-lg"
                  style={{ height: "44px", padding: "0 22px", fontSize: "13.5px" }}
                >
                  Explore Telemetry
                </button>
              </a>
            </div>

            {/* Tech pills */}
            <div
              ref={parallaxRef}
              className="hero-tech-pills-wrapper anim-fade-up delay-240"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "8px",
                marginTop: "24px",
                transition: "transform 250ms cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <TechPill icon="/assets/svg/cube-16-solid.svg" label="AI Node Core: Neural-Mesh" />
              <TechPill icon="/assets/svg/cog-8-tooth.svg" label="v2.4-Autonomous" spin />
              <TechPill icon="/assets/svg/chart-pie.svg" label="Telemetry: Active" />
            </div>
          </div>

          {/* Right Column (Mock IDE Dashboard Console) */}
          <div
            className="anim-blur-in delay-300"
            onMouseMove={(e) => {
              const el = e.currentTarget;
              const rect = el.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              const rotX = -(y / rect.height) * 8; // Max 8 degrees vertical tilt
              const rotY = (x / rect.width) * 8;  // Max 8 degrees horizontal tilt
              el.style.setProperty("--rotate-x", `${rotX}deg`);
              el.style.setProperty("--rotate-y", `${rotY}deg`);
              el.style.borderColor = "rgba(255, 200, 1, 0.22)";
              el.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.8), 0 0 60px rgba(255,200,1,0.12)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.setProperty("--rotate-x", "0deg");
              el.style.setProperty("--rotate-y", "0deg");
              el.style.borderColor = "rgba(255,255,255,0.08)";
              el.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.8), 0 0 60px rgba(255,200,1,0.04)";
            }}
            style={{
              width: "100%",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(10,20,30,0.7)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              overflow: "hidden",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.8), 0 0 60px rgba(255,200,1,0.04)",
              transform: "perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))",
              transformStyle: "preserve-3d" as const,
              transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            {/* Window bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                padding: "10px 16px",
                background: "rgba(7,16,26,0.8)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ display: "flex", gap: "6px" }}>
                  {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => (
                    <span key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[
                    { name: "ai_pipeline.py", active: true, dot: "#FFC801" },
                    { name: "agent_telemetry.log", active: false, dot: "#0F4455" },
                    { name: "config.yaml", active: false },
                  ].map((tab) => (
                    <div
                      key={tab.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "4px 10px",
                        background: tab.active ? "rgba(255,255,255,0.06)" : "transparent",
                        borderRadius: "6px",
                        fontSize: "10px",
                        fontFamily: "var(--font-mono)",
                        color: tab.active ? "#F0F6F3" : "rgba(240,246,243,0.3)",
                        cursor: "default",
                        userSelect: "none",
                      }}
                    >
                      {tab.dot && (
                        <span
                          style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: tab.dot,
                            animation: tab.active ? "pulse 2s ease-in-out infinite" : "none",
                          }}
                        />
                      )}
                      <span>{tab.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "10px",
                  fontFamily: "var(--font-mono)",
                  color: "#4ADE80",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "#4ADE80",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                LIVE MESH: Connected
              </div>
            </div>

            {/* Dashboard body */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr", minHeight: "340px" }}>
              <style>{`
                .hero-telemetry-panel {
                  border-top: 1px solid rgba(255,255,255,0.05);
                  border-left: none;
                }
                @media (min-width: 1024px) {
                  .hero-dashboard-grid {
                    grid-template-columns: 3fr 1.3fr !important;
                  }
                  .hero-telemetry-panel {
                    border-top: none !important;
                    border-left: 1px solid rgba(255,255,255,0.05) !important;
                  }
                }
              `}</style>
              <div className="hero-dashboard-grid" style={{ display: "grid", gridTemplateColumns: "1fr" }}>
                {/* Code panel */}
                <div
                  style={{
                    padding: "20px",
                    background: "rgba(0,0,0,0.35)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    textAlign: "left",
                    overflowX: "auto",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "9px",
                      color: "rgba(240,246,243,0.25)",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      paddingBottom: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <span>Python 3.11</span>
                    <span>·</span>
                    <span>Active Core: Sandy-Mesh-X89</span>
                  </div>
                  {[
                    {
                      n: 1,
                      t: (
                        <>
                          <span style={{ color: "#FF9932" }}>import</span>
                          <span style={{ color: "#C8E0D8" }}> neuralmesh </span>
                          <span style={{ color: "#FF9932" }}>as</span>
                          <span style={{ color: "#C8E0D8" }}> nm</span>
                        </>
                      ),
                    },
                    {
                      n: 2,
                      t: (
                        <>
                          <span style={{ color: "#FF9932" }}>from</span>
                          <span style={{ color: "#C8E0D8" }}> neuralmesh.agents </span>
                          <span style={{ color: "#FF9932" }}>import</span>
                          <span style={{ color: "#C8E0D8" }}> AutonomousPipeline</span>
                        </>
                      ),
                    },
                    { n: 3, t: <></> },
                    {
                      n: 4,
                      t: (
                        <span style={{ color: "rgba(240,246,243,0.25)" }}>
                          # Initialize secure AI data automation cluster
                        </span>
                      ),
                    },
                    {
                      n: 5,
                      t: (
                        <>
                          <span style={{ color: "#5EC8DC" }}>pipeline</span>
                          <span style={{ color: "#C8E0D8" }}> = </span>
                          <span style={{ color: "#5EC8DC" }}>AutonomousPipeline</span>
                          <span style={{ color: "#C8E0D8" }}>(</span>
                        </>
                      ),
                    },
                    {
                      n: 6,
                      t: (
                        <>
                          <span style={{ color: "#C8E0D8" }}>    node_id=</span>
                          <span style={{ color: "#FFC801" }}>&quot;agi-node-418&quot;</span>
                          <span style={{ color: "#C8E0D8" }}>,</span>
                        </>
                      ),
                    },
                    {
                      n: 7,
                      t: (
                        <>
                          <span style={{ color: "#C8E0D8" }}>    region=</span>
                          <span style={{ color: "#FFC801" }}>&quot;global-mesh&quot;</span>
                          <span style={{ color: "#C8E0D8" }}>,</span>
                        </>
                      ),
                    },
                    {
                      n: 8,
                      t: (
                        <>
                          <span style={{ color: "#C8E0D8" }}>    sandbox_compliance=</span>
                          <span style={{ color: "#FFC801" }}>&quot;grade-aa&quot;</span>
                        </>
                      ),
                    },
                    { n: 9, t: <span style={{ color: "#C8E0D8" }}>)</span> },
                    { n: 10, t: <></> },
                    {
                      n: 11,
                      t: <span style={{ color: "rgba(240,246,243,0.25)" }}># Spin up telemetry workers</span>,
                    },
                    {
                      n: 12,
                      t: (
                        <>
                          <span style={{ color: "#5EC8DC" }}>pipeline</span>
                          <span style={{ color: "#C8E0D8" }}>.orchestrate(</span>
                        </>
                      ),
                    },
                    {
                      n: 13,
                      t: (
                        <>
                          <span style={{ color: "#C8E0D8" }}>    agents=[</span>
                          <span style={{ color: "#FFC801" }}>&quot;telemetry-analyzer&quot;</span>
                          <span style={{ color: "#C8E0D8" }}>, </span>
                          <span style={{ color: "#FFC801" }}>&quot;self-healer&quot;</span>
                          <span style={{ color: "#C8E0D8" }}>],</span>
                        </>
                      ),
                    },
                    {
                      n: 14,
                      t: (
                        <>
                          <span style={{ color: "#C8E0D8" }}>    context_limit=</span>
                          <span style={{ color: "#FF9932" }}>131072</span>
                        </>
                      ),
                    },
                    { n: 15, t: <span style={{ color: "#C8E0D8" }}>)</span> },
                  ].map(({ n, t }) => (
                    <div key={n} style={{ display: "flex", gap: "12px", lineHeight: "1.6" }}>
                      <span style={{ color: "rgba(240,246,243,0.15)", minWidth: "16px", textAlign: "right", userSelect: "none" }}>
                        {n}
                      </span>
                      <span>{t}</span>
                    </div>
                  ))}

                  {/* Live scrolling logs */}
                  <LiveTelemetryLogs />

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                      paddingTop: "12px",
                      marginTop: "12px",
                      fontSize: "9px",
                      color: "rgba(240,246,243,0.25)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#4ADE80",
                          animation: "pulse 2s ease-in-out infinite",
                        }}
                      />
                      <span style={{ color: "#5EC8DC", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        active inference pipeline running...
                      </span>
                    </div>
                    <span style={{ color: "rgba(255,200,1,0.6)" }}>Done in 0.42ms</span>
                  </div>
                </div>

                {/* Right telemetry panel */}
                <div
                  className="hero-telemetry-panel"
                  style={{
                    padding: "16px",
                    background: "rgba(7,16,26,0.5)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {/* Topology SVG */}
                  <div>
                    <div
                      style={{
                        fontSize: "9px",
                        fontFamily: "var(--font-mono)",
                        color: "rgba(240,246,243,0.3)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "6px",
                      }}
                    >
                      Active Mesh Topology
                    </div>
                    <div
                      style={{
                        border: "1px solid rgba(255,255,255,0.05)",
                        borderRadius: "10px",
                        padding: "6px",
                        background: "rgba(7,16,26,0.5)",
                      }}
                    >
                      <svg viewBox="0 0 200 100" style={{ width: "100%", height: "64px" }} fill="none" aria-hidden="true">
                        <circle cx="40" cy="50" r="4.5" fill="#FFC801" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                        <circle cx="100" cy="18" r="3.5" fill="#FF9932" />
                        <circle cx="100" cy="82" r="3.5" fill="#C8E0D8" />
                        <circle cx="160" cy="50" r="4.5" fill="#0F4455" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                        <path d="M40 50 L100 18 L160 50 L100 82 Z" stroke="rgba(200,224,216,0.06)" strokeWidth="1" />
                        <path d="M40 50 L100 18 L160 50" stroke="#FFC801" strokeWidth="1.2" strokeDasharray="6 22" className="dash-anim" />
                        <path d="M160 50 L100 82 L40 50" stroke="#FF9932" strokeWidth="1.2" strokeDasharray="6 22" className="dash-anim-r" />
                      </svg>
                    </div>
                  </div>

                  {/* Metrics */}
                  {[
                    {
                      label: "Active Sandbox",
                      value: "Node-X89",
                      badge: { text: "Active", color: "#FFC801", bg: "rgba(255,200,1,0.08)" },
                    },
                    { label: "Pipeline Load", value: "42.1%", progress: 42 },
                    { label: "Inference Latency", value: "0.42 ms" },
                  ].map(({ label, value, badge, progress }) => (
                    <div
                      key={label}
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                        paddingTop: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "9px",
                          fontFamily: "var(--font-mono)",
                          color: "rgba(240,246,243,0.3)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {label}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "11px", fontWeight: 700, fontFamily: "var(--font-mono)", color: "#fff" }}>
                          {value}
                        </span>
                        {badge && (
                          <span
                            style={{
                              fontSize: "8px",
                              fontWeight: 800,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: badge.color,
                              background: badge.bg,
                              borderRadius: "99px",
                              padding: "1px 6px",
                            }}
                          >
                            {badge.text}
                          </span>
                        )}
                      </div>
                      {progress !== undefined && (
                        <div className="nm-progress">
                          <div className="nm-progress-fill" style={{ width: `${progress}%` }} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="anim-fade-up delay-500"
          style={{ marginTop: "48px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}
          aria-hidden="true"
        >
          <span
            style={{
              fontSize: "10px",
              fontFamily: "var(--font-mono)",
              color: "rgba(240,246,243,0.25)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Scroll to explore
          </span>
          <svg
            className="animate-bounce"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: "rgba(240,246,243,0.2)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
