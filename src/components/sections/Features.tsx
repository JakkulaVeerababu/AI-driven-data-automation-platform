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
      className="nm-section"
      aria-labelledby="features-title"
      style={{ background: "var(--bg)" }}
    >
      {/* Multi-layer glow backdrop */}
      <div
        className="glow-blob glow-blob-teal animate-aurora"
        style={{
          width: "600px",
          height: "600px",
          top: "0",
          right: "10%",
          opacity: 0.3,
        }}
        aria-hidden="true"
      />
      <div
        className="glow-blob glow-blob-orange"
        style={{
          width: "500px",
          height: "500px",
          bottom: "0",
          left: "10%",
          opacity: 0.15,
        }}
        aria-hidden="true"
      />

      <div
        className="nm-container"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        {/* Border laser light lines */}
        <div className="bg-laser-line-left" aria-hidden="true" />
        <div className="bg-laser-line-right" aria-hidden="true" />
        <ScrollReveal>
          <SectionTitle
            id="features-title"
            badgeText="Bento Architecture"
            title="Engineered for"
            titleAccent="High-Density AI Pipelines."
            subtitle="A modular, distributed platform built for AI engineers who require sub-millisecond execution speeds, telemetry pipelines, and strict sandbox compliance layers."
          />
        </ScrollReveal>

        {/* Animated scan-line divider */}
        <div className="scan-line-divider" style={{ margin: "-16px 0" }} />

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
