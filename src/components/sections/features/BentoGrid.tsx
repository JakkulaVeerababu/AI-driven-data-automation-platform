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
  gridClass: string;
}

const FEATURES: FeatureItem[] = [
  {
    id: "sandbox-telemetry",
    title: "Real-time AI Pipeline Telemetry",
    description: "Monitor AI worker threads, pipeline queues, and active LLM caches instantly. Our zero-allocation metric loop records execution cycles down to the CPU hardware clock.",
    iconPath: "/assets/svg/chart-pie.svg",
    tagLeft: "AI Pipeline Loop",
    tagRight: "LCP Optimized",
    gridClass: "col-span-1 sm:col-span-2 row-span-2",
  },
  {
    id: "sandbox-zones",
    title: "Isolated AI Sandbox Zones",
    description: "Execute autonomous AI agent payloads within isolated kernel sandbox threads with hardware memory security.",
    iconPath: "/assets/svg/cube-16-solid.svg",
    tagLeft: "Security Grade AA",
    gridClass: "col-span-1",
  },
  {
    id: "sandbox-settings",
    title: "Agent Settings Telemetry",
    description: "Deep model execution configurations. Optimize token chunk sizes, retry intervals, and context windows directly in our live settings node.",
    iconPath: "/assets/svg/cog-8-tooth.svg",
    tagLeft: "Agent Config",
    gridClass: "row-span-2",
  },
  {
    id: "sandbox-workflows",
    title: "Automated AI Agent Workflows",
    description: "Deploy self-healing workflow loops, agent retry thresholds, and alert webhooks. Integrated triggers automatically shift execution load to adjacent AI nodes if latency limits are exceeded.",
    iconPath: "/assets/svg/arrow-path.svg",
    tagLeft: "Automatic Failover",
    tagRight: "Active",
    gridClass: "col-span-1 sm:col-span-2",
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
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[290px]">
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
            className={`group/card outline-none rounded-3xl transition-all duration-300 ${item.gridClass} ${
              isActive
                ? "ring-2 ring-forsythia border-transparent shadow-premium-lg scale-[1.01]"
                : "hover:ring-1 hover:ring-white/10"
            }`}
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
              className={`h-full cursor-pointer ${
                isActive ? "border-forsythia/35 bg-white/5" : "border-white/5"
              }`}
            >
              {/* Graphic components for specific cells */}
              {idx === 0 && (
                <div className="w-full bg-black/20 border border-white/5 rounded-2xl p-4 flex flex-col gap-3 font-mono text-3xs text-arctic-powder/60 mt-4 overflow-hidden relative select-none">
                  <div className="flex justify-between items-center text-2xs border-b border-white/5 pb-2">
                    <span className="text-forsythia font-bold">AI_AGENT: AGI-418</span>
                    <span className="text-mystic-mint font-semibold animate-pulse">● STABLE_FEED</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-3xs">
                    <div className="bg-white/5 rounded p-1">
                      <span className="block text-arctic-powder/40 font-semibold">TOKEN_HIT</span>
                      <span className="text-forsythia font-bold">98.4%</span>
                    </div>
                    <div className="bg-white/5 rounded p-1">
                      <span className="block text-arctic-powder/40 font-semibold">INFERENCE</span>
                      <span className="text-mystic-mint font-bold">0.42ms</span>
                    </div>
                    <div className="bg-white/5 rounded p-1">
                      <span className="block text-arctic-powder/40 font-semibold">AGENT_LOAD</span>
                      <span className="text-deep-saffron font-bold">12.5%</span>
                    </div>
                  </div>
                  {/* SVG Wave chart */}
                  <svg className="w-full h-8 mt-1" viewBox="0 0 200 50" fill="none" aria-hidden="true">
                    <path d="M0 35 Q 25 15, 50 35 T 100 35 T 150 15 T 200 25" stroke="#FFC801" strokeWidth="2" strokeLinecap="round" />
                    <path d="M0 35 Q 25 15, 50 35 T 100 35 T 150 15 T 200 25 L 200 50 L 0 50 Z" fill="rgba(255, 200, 1, 0.05)" />
                    <circle cx="150" cy="15" r="4.5" fill="#FF9932" className="animate-ping" />
                    <circle cx="150" cy="15" r="3" fill="#FF9932" />
                  </svg>
                </div>
              )}

              {idx === 1 && (
                <div className="w-full flex items-center justify-center p-2 mt-4 bg-black/10 border border-white/5 rounded-2xl relative overflow-hidden h-[100px] select-none">
                  {/* Circular shield ring mockup */}
                  <div className="absolute h-16 w-16 rounded-full border border-mystic-mint/10 animate-spin" style={{ animationDuration: "8s" }} />
                  <div className="absolute h-12 w-12 rounded-full border border-dashed border-forsythia/30 animate-spin" style={{ animationDuration: "12s" }} />
                  {/* Core CPU node */}
                  <div className="h-7 w-7 rounded bg-nocturnal-expedition flex items-center justify-center border border-forsythia/40 shadow-[0_0_15px_rgba(255,200,1,0.2)]">
                    <span className="text-4xs font-mono font-bold text-forsythia">AGI</span>
                  </div>
                </div>
              )}

              {idx === 2 && (
                <div className="flex flex-col gap-3.5 bg-black/20 border border-white/5 rounded-2xl p-4 font-mono text-3xs text-arctic-powder/60 my-6 select-none">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-4xs font-semibold">
                      <span>CHUNK_SIZE</span>
                      <span className="text-forsythia font-bold">4096 TOKENS</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-forsythia w-[90%]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-4xs font-semibold">
                      <span>TOKEN_LIMITS</span>
                      <span className="text-mystic-mint font-bold">128K ACTIVE</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-mystic-mint w-[75%]" />
                    </div>
                  </div>
                </div>
              )}

              {idx === 3 && (
                <div className="w-full bg-black/20 border border-white/5 rounded-2xl p-4 mt-4 font-mono text-3xs text-arctic-powder/60 relative overflow-hidden select-none">
                  <div className="flex items-center justify-between">
                    <span className="bg-white/5 px-2 py-0.5 rounded text-4xs text-white">Trigger</span>
                    <span className="text-arctic-powder/20">&rarr;</span>
                    <span className="bg-nocturnal-expedition/30 border border-nocturnal-expedition/50 px-2 py-0.5 rounded text-4xs text-mystic-mint animate-pulse">Orchestrate</span>
                    <span className="text-arctic-powder/20">&rarr;</span>
                    <span className="bg-forsythia/10 border border-forsythia/20 px-2 py-0.5 rounded text-4xs text-forsythia">AI Sandbox</span>
                  </div>
                  <div className="flex justify-between items-center text-4xs pt-3 mt-3 border-t border-white/5 text-arctic-powder/45">
                    <span>AGENT_RETRY: Active</span>
                    <span className="text-emerald-400 font-bold">99.9% EFF</span>
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
