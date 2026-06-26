"use client";

import React, { useCallback } from "react";
import Image from "next/image";

interface FeatureAccordionProps {
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

export default function FeatureAccordion({
  activeIndex,
  setActiveIndex,
}: FeatureAccordionProps) {
  
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      let nextIndex = index;

      if (e.key === "ArrowDown") {
        nextIndex = (index + 1) % FEATURES.length;
        e.preventDefault();
      } else if (e.key === "ArrowUp") {
        nextIndex = (index - 1 + FEATURES.length) % FEATURES.length;
        e.preventDefault();
      }

      if (nextIndex !== index) {
        const nextEl = document.getElementById(`accordion-btn-${nextIndex}`);
        if (nextEl) {
          nextEl.focus();
        }
      }
    },
    []
  );

  return (
    <div 
      style={{ display: "flex", flexDirection: "column", gap: "16px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }}
      role="tablist"
      aria-label="Features Accordion List"
    >
      {FEATURES.map((item, idx) => {
        const isOpen = activeIndex === idx;

        return (
          <div
            key={item.id}
            style={{
              borderBottom: "1px solid rgba(200, 224, 216, 0.08)",
              paddingBottom: "16px",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              background: isOpen ? "rgba(255,255,255,0.02)" : "transparent",
              padding: isOpen ? "16px" : "0 0 16px 0",
              borderRadius: isOpen ? "16px" : "0",
              border: isOpen ? "1px solid rgba(255,255,255,0.08)" : "",
              boxShadow: isOpen ? "inset 0 1px 0 rgba(255,255,255,0.02), 0 8px 24px rgba(0,0,0,0.2)" : "none",
            }}
          >
            <h3>
              <button
                id={`accordion-btn-${idx}`}
                onClick={() => setActiveIndex(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                type="button"
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: isOpen ? "#FFC801" : "#fff",
                  outline: "none",
                }}
                aria-expanded={isOpen}
                aria-controls={`feature-panel-${idx}`}
                role="tab"
                aria-selected={isOpen}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{
                    display: "inline-flex",
                    height: "36px",
                    width: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.05)",
                    background: isOpen ? "#0F4455" : "rgba(255,255,255,0.04)",
                    color: isOpen ? "#FFC801" : "rgba(240,246,243,0.6)",
                    transition: "all 0.2s"
                  }}>
                    <Image src={item.iconPath} alt="" width={18} height={18} style={{ height: "18px", width: "18px", filter: isOpen ? "drop-shadow(0 0 4px rgba(255,200,1,0.2))" : "none" }} aria-hidden="true" />
                  </div>
                  <span style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    transition: "color 0.2s"
                  }}>
                    {item.title}
                  </span>
                </div>

                <span style={{ marginLeft: "24px", display: "flex", alignItems: "center", color: "rgba(240,246,243,0.5)" }}>
                  <svg
                    style={{
                      height: "18px",
                      width: "18px",
                      transition: "transform 0.2s",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
            </h3>

            {/* Accordion Content Panel (using layout-safe grid rows height transitions) */}
            <div
              id={`feature-panel-${idx}`}
              role="tabpanel"
              aria-labelledby={`accordion-btn-${idx}`}
              className={`accordion-wrap${isOpen ? " open" : ""}`}
            >
              <div className="accordion-inner">
                <div style={{
                  padding: "8px 4px 12px 4px",
                  fontSize: "12px",
                  color: "rgba(240,246,243,0.75)",
                  lineHeight: 1.7,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px"
                }}>
                  <p>{item.description}</p>
                  
                  {/* Visual details */}
                  {idx === 0 && (
                    <div style={{
                      width: "100%",
                      background: "rgba(0,0,0,0.2)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: "12px",
                      padding: "14px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "rgba(240,246,243,0.55)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px"
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "4px" }}>
                        <span>AI_AGENT: AGI-418</span>
                        <span style={{ color: "#C8E0D8", fontWeight: 600 }}>● STABLE_FEED</span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        <div style={{ background: "rgba(0,0,0,0.15)", padding: "8px", borderRadius: "6px" }}>
                          <span>Inference: 0.42ms</span>
                        </div>
                        <div style={{ background: "rgba(0,0,0,0.15)", padding: "8px", borderRadius: "6px" }}>
                          <span>Agent Load: 12.5%</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      background: "rgba(0,0,0,0.2)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: "12px",
                      padding: "14px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "rgba(240,246,243,0.55)"
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px" }}>
                        <span>CHUNK_SIZE</span>
                        <span style={{ color: "#FFC801", fontWeight: "bold" }}>4096 TOKENS</span>
                      </div>
                      <div style={{ height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "99px", overflow: "hidden" }}>
                        <div style={{ height: "100%", background: "#FFC801", width: "90%" }} />
                      </div>
                    </div>
                  )}

                  {/* Metadata tags */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    paddingTop: "8px",
                    fontSize: "10px",
                    fontFamily: "var(--font-mono)",
                    color: "#FFC801",
                    textTransform: "uppercase",
                    fontWeight: 700
                  }}>
                    <span>{item.tagLeft}</span>
                    {item.tagRight && (
                      <>
                        <span style={{ color: "rgba(255,255,255,0.15)" }}>&bull;</span>
                        <span style={{ color: "#C8E0D8" }}>{item.tagRight}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
