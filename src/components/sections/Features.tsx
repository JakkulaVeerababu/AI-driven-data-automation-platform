"use client";

import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import ScrollReveal from "../shared/ScrollReveal";
import useViewport from "@/hooks/useViewport";
import BentoGrid from "./features/BentoGrid";
import FeatureAccordion from "./features/FeatureAccordion";

export default function Features() {
  const isMobile = useViewport(1024);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      id="features"
      className="py-28 bg-oceanic-noir relative overflow-hidden border-t border-mystic-mint/8"
      aria-labelledby="features-title"
    >
      {/* Multi-layer glow backdrop */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle at 80% 20%, rgba(17,76,90,0.35) 0%, transparent 65%)" }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle at 20% 80%, rgba(255,153,50,0.1) 0%, transparent 60%)" }} aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-glow-radial filter blur-[100px] pointer-events-none opacity-30" aria-hidden="true" />

      <div className="container-custom flex flex-col gap-16 relative z-10">

        <ScrollReveal>
          <SectionTitle
            id="features-title"
            badgeText="Bento Architecture"
            title="Engineered for"
            titleAccent="High-Density AI Pipelines."
            subtitle="A modular, distributed platform built for AI engineers who require sub-millisecond execution speeds, telemetry pipelines, and strict sandbox compliance layers."
          />
        </ScrollReveal>

        {isMobile ? (
          <ScrollReveal delay={80}>
            <FeatureAccordion activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={80}>
            <BentoGrid activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}
