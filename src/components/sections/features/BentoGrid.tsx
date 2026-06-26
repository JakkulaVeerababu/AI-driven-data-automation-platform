"use client";

import React, { useCallback } from "react";
import FeatureCard from "../../shared/FeatureCard";

interface BentoGridProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconPath: string;
  tagLeft: string;
  tagRight?: string;
}

const FEATURES: FeatureItem[] = [
  {
    id: "sandbox-telemetry",
    title: "Real-time AI Pipeline Telemetry",
    description: "Monitor AI worker threads, pipeline queues, and active LLM caches instantly. Our zero-allocation metric loop records execution cycles down to the CPU hardware clock.",
    iconPath: "/assets/svg/chart-pie.svg",
    tagLeft: "AI Pipeline Loop",
    tagRight: "LCP Optimized",
  },
  {
    id: "sandbox-zones",
    title: "Isolated AI Sandbox Zones",
    description: "Execute autonomous AI agent payloads within isolated kernel sandbox threads with hardware memory security.",
    iconPath: "/assets/svg/cube-16-solid.svg",
    tagLeft: "Security Grade AA",
  },
  {
    id: "sandbox-settings",
    title: "Agent Settings Telemetry",
    description: "Deep model execution configurations. Optimize token chunk sizes, retry intervals, and context windows directly in our live settings node.",
    iconPath: "/assets/svg/cog-8-tooth.svg",
    tagLeft: "Agent Config",
  },
  {
    id: "sandbox-workflows",
    title: "Automated AI Agent Workflows",
    description: "Deploy self-healing workflow loops, agent retry thresholds, and alert webhooks. Integrated triggers automatically shift execution load to adjacent AI nodes if latency limits are exceeded.",
    iconPath: "/assets/svg/arrow-path.svg",
    tagLeft: "Automatic Failover",
    tagRight: "Active",
  },
];

export default function BentoGrid({ activeIndex, setActiveIndex }: BentoGridProps) {
  
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
      let nextIndex = index;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        nextIndex = (index + 1) % FEATURES.length;
        e.preventDefault();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        nextIndex = (index - 1 + FEATURES.length) % FEATURES.length;
        e.preventDefault();
      } else if (e.key === "Enter" || e.key === " ") {
        setActiveIndex(index);
        e.preventDefault();
        return;
      }

      if (nextIndex !== index) {
        const nextEl = document.getElementById(`feature-card-${nextIndex}`);
        if (nextEl) {
          nextEl.focus();
        }
        setActiveIndex(nextIndex);
      }
    },
    [setActiveIndex]
  );

  return (
    <div className="bento-grid">
      <style>{`
        .bento-grid {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 24px !important;
        }
        
        .bento-card-0 { grid-column: span 1; }
        .bento-card-1 { grid-column: span 1; }
        .bento-card-2 { grid-column: span 1; }
        .bento-card-3 { grid-column: span 1; }

        @media (min-width: 640px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 320px !important;
          }
          .bento-card-0 { grid-column: span 2 !important; }
          .bento-card-3 { grid-column: span 2 !important; }
        }
        
        @media (min-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .bento-card-0 { grid-column: span 2 !important; }
          .bento-card-3 { grid-column: span 2 !important; }
        }

        .bento-card-item:focus-visible {
          outline: 2px solid #FFC801 !important;
          outline-offset: 3px;
        }
      `}</style>
        {FEATURES.map((item, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={item.id}
              id={`feature-card-${idx}`}
              tabIndex={0}
              onClick={() => setActiveIndex(idx)}
              onFocus={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`bento-card-item bento-card-${idx}`}
              style={{
                outline: "none",
                borderRadius: "24px",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                border: isActive ? "1px solid #FFC801" : "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: isActive ? "0 0 30px rgba(255, 200, 1, 0.08)" : "none",
                transform: isActive ? "scale(1.01)" : "none",
                background: isActive ? "rgba(255, 255, 255, 0.02)" : "transparent",
                cursor: "pointer",
                overflow: "hidden",
              }}
              role="tab"
              aria-selected={isActive}
              aria-label={`${item.title} feature card`}
              aria-controls={`feature-desc-${idx}`}
            >
              <FeatureCard
                title={item.title}
                description={item.description}
                iconPath={item.iconPath}
                tagLeft={item.tagLeft}
                tagRight={item.tagRight}
                className="h-full"
                style={{ border: "none", background: "transparent" }}
              >
                {/* Graphic components for specific cells */}
                {idx === 0 && (
                  <div style={{
                    width: "100%",
                    background: "rgba(0,0,0,0.2)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "rgba(240,246,243,0.6)",
                    marginTop: "16px",
                    overflow: "hidden",
                    position: "relative",
                    userSelect: "none"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}>
                      <span style={{ color: "#FFC801", fontWeight: "bold" }}>AI_AGENT: AGI-418</span>
                      <span className="animate-pulse" style={{ color: "#C8E0D8", fontWeight: 600 }}>● STABLE_FEED</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", textAlign: "center", fontSize: "10px" }}>
                      <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "4px", padding: "4px" }}>
                        <span style={{ display: "block", color: "rgba(240,246,243,0.4)", fontWeight: 600, fontSize: "9px" }}>TOKEN_HIT</span>
                        <span style={{ color: "#FFC801", fontWeight: "bold" }}>98.4%</span>
                      </div>
                      <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "4px", padding: "4px" }}>
                        <span style={{ display: "block", color: "rgba(240,246,243,0.4)", fontWeight: 600, fontSize: "9px" }}>INFERENCE</span>
                        <span style={{ color: "#4ADE80", fontWeight: "bold" }}>0.42ms</span>
                      </div>
                      <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "4px", padding: "4px" }}>
                        <span style={{ display: "block", color: "rgba(240,246,243,0.4)", fontWeight: 600, fontSize: "9px" }}>AGENT_LOAD</span>
                        <span style={{ color: "#FF9932", fontWeight: "bold" }}>12.5%</span>
                      </div>
                    </div>
                    {/* SVG Wave chart */}
                    <svg style={{ width: "100%", height: "32px", marginTop: "4px" }} viewBox="0 0 200 50" fill="none" aria-hidden="true">
                      <path d="M0 35 Q 25 15, 50 35 T 100 35 T 150 15 T 200 25" stroke="#FFC801" strokeWidth="2" strokeLinecap="round" />
                      <path d="M0 35 Q 25 15, 50 35 T 100 35 T 150 15 T 200 25 L 200 50 L 0 50 Z" fill="rgba(255, 200, 1, 0.05)" />
                      <circle cx="150" cy="15" r="4.5" fill="#FF9932" className="animate-pulse" />
                      <circle cx="150" cy="15" r="3" fill="#FF9932" />
                    </svg>
                  </div>
                )}

                {idx === 1 && (
                  <div style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px",
                    marginTop: "16px",
                    background: "rgba(0,0,0,0.1)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    position: "relative",
                    overflow: "hidden",
                    height: "100px",
                    userSelect: "none"
                  }}>
                    {/* Circular shield ring mockup */}
                    <div className="animate-spin" style={{ position: "absolute", height: "64px", width: "64px", borderRadius: "50%", border: "1px solid rgba(200, 224, 216, 0.1)", animationDuration: "8s" }} />
                    <div className="animate-spin" style={{ position: "absolute", height: "48px", width: "48px", borderRadius: "50%", border: "1px dashed rgba(255,200,1,0.3)", animationDuration: "12s" }} />
                    {/* Core CPU node */}
                    <div style={{
                      height: "28px",
                      width: "28px",
                      borderRadius: "4px",
                      background: "#0F4455",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(255,200,1,0.4)",
                      boxShadow: "0 0 15px rgba(255,200,1,0.2)"
                    }}>
                      <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", fontWeight: "bold", color: "#FFC801" }}>AGI</span>
                    </div>
                  </div>
                )}

                {idx === 2 && (
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    background: "rgba(0,0,0,0.2)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    padding: "16px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "rgba(240,246,243,0.6)",
                    margin: "24px 0",
                    userSelect: "none"
                  }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", fontWeight: "bold" }}>
                        <span>CHUNK_SIZE</span>
                        <span style={{ color: "#FFC801" }}>4096 TOKENS</span>
                      </div>
                      <div style={{ height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "99px", overflow: "hidden" }}>
                        <div style={{ height: "100%", background: "#FFC801", width: "90%" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", fontWeight: "bold" }}>
                        <span>TOKEN_LIMITS</span>
                        <span style={{ color: "#C8E0D8" }}>128K ACTIVE</span>
                      </div>
                      <div style={{ height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "99px", overflow: "hidden" }}>
                        <div style={{ height: "100%", background: "#C8E0D8", width: "75%" }} />
                      </div>
                    </div>
                  </div>
                )}

                {idx === 3 && (
                  <div style={{
                    width: "100%",
                    background: "rgba(0,0,0,0.2)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    padding: "16px",
                    marginTop: "16px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "rgba(240,246,243,0.6)",
                    position: "relative",
                    overflow: "hidden",
                    userSelect: "none"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: "4px", fontSize: "9px", color: "#fff" }}>Trigger</span>
                      <span style={{ color: "rgba(240,246,243,0.2)" }}>&rarr;</span>
                      <span className="animate-pulse" style={{ background: "rgba(15,68,85,0.3)", border: "1px solid rgba(15,68,85,0.5)", padding: "2px 8px", borderRadius: "4px", fontSize: "9px", color: "#C8E0D8" }}>Orchestrate</span>
                      <span style={{ color: "rgba(240,246,243,0.2)" }}>&rarr;</span>
                      <span style={{ background: "rgba(255,200,1,0.1)", border: "1px solid rgba(255,200,1,0.2)", padding: "2px 8px", borderRadius: "4px", fontSize: "9px", color: "#FFC801" }}>AI Sandbox</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "9px", paddingTop: "12px", marginTop: "12px", borderTop: "1px solid rgba(255,255,255,0.05)", color: "rgba(240,246,243,0.45)" }}>
                      <span>AGENT_RETRY: Active</span>
                      <span style={{ color: "#4ADE80", fontWeight: "bold" }}>99.9% EFF</span>
                    </div>
                  </div>
                )}
              </FeatureCard>
            </div>
          );
        })}
    </div>
  );
}
