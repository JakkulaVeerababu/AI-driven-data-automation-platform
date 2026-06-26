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
      className="flex flex-col gap-4 border-t border-white/10 pt-6"
      role="tablist"
      aria-label="Features Accordion List"
    >
      {FEATURES.map((item, idx) => {
        const isOpen = activeIndex === idx;

        return (
          <div
            key={item.id}
            className={`border-b border-mystic-mint/10 pb-4 transition-all duration-300 ${
              isOpen ? "bg-white/[0.02] p-4 rounded-2xl border-white/10 shadow-premium-inner" : ""
            }`}
          >
            <h3>
              <button
                id={`accordion-btn-${idx}`}
                onClick={() => setActiveIndex(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                type="button"
                className="flex w-full items-center justify-between py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-md"
                aria-expanded={isOpen}
                aria-controls={`feature-panel-${idx}`}
                role="tab"
                aria-selected={isOpen}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                    isOpen ? "bg-nocturnal-expedition border-forsythia/30 text-forsythia" : "bg-white/5 border-white/5 text-arctic-powder/60"
                  }`}>
                    <Image src={item.iconPath} alt="" width={18} height={18} className="h-4.5 w-4.5" aria-hidden="true" />
                  </div>
                  <span className={`text-sm font-bold tracking-tight transition-colors ${
                    isOpen ? "text-forsythia" : "text-white hover:text-forsythia"
                  }`}>
                    {item.title}
                  </span>
                </div>

                <span className="ml-6 flex items-center text-arctic-powder/60">
                  <svg
                    className={`h-4.5 w-4.5 transform transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
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
              className={`accordion-content ${isOpen ? "open" : ""}`}
            >
              <div className="accordion-inner">
                <div className="pt-2 pb-3 px-1 text-xs text-arctic-powder/75 leading-relaxed flex flex-col gap-4">
                  <p>{item.description}</p>
                  
                  {/* Visual detail elements rendered inside the expanded panel on mobile */}
                  {idx === 0 && (
                    <div className="w-full bg-white/5 border border-white/5 rounded-xl p-3.5 font-mono text-3xs text-arctic-powder/55 flex flex-col gap-2">
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span>AI_AGENT: AGI-418</span>
                        <span className="text-mystic-mint font-semibold">● STABLE_FEED</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-oceanic-noir/50 p-2 rounded-lg">
                          <span>Inference: 0.42ms</span>
                        </div>
                        <div className="bg-oceanic-noir/50 p-2 rounded-lg">
                          <span>Agent Load: 12.5%</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="flex flex-col gap-2.5 bg-white/5 border border-white/5 rounded-xl p-3.5 font-mono text-3xs text-arctic-powder/55">
                      <div className="flex justify-between text-4xs">
                        <span>CHUNK_SIZE</span>
                        <span className="text-forsythia font-bold">4096 TOKENS</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-forsythia w-[90%]" />
                      </div>
                    </div>
                  )}

                  {/* Metadata tags */}
                  <div className="flex items-center gap-2 pt-2 text-3xs font-mono text-forsythia uppercase font-bold">
                    <span>{item.tagLeft}</span>
                    {item.tagRight && (
                      <>
                        <span className="text-arctic-powder/30">&bull;</span>
                        <span className="text-mystic-mint">{item.tagRight}</span>
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
