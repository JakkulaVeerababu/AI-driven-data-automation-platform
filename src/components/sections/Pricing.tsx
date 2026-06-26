"use client";

import SectionTitle from "../shared/SectionTitle";
import PricingCard from "../shared/PricingCard";
import ScrollReveal from "../shared/ScrollReveal";
import BillingToggle from "./pricing/BillingToggle";
import CurrencySelector from "./pricing/CurrencySelector";

interface PricingPlan {
  id: string;
  name: string;
  basePriceUSD: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  highlight?: string;
}

const PLANS: PricingPlan[] = [
  {
    id: "sandbox-starter",
    name: "Developer AI Node",
    basePriceUSD: 0,
    description: "Ideal for individual developers building their first telemetry-backed AI sandbox pipelines.",
    highlight: "Free forever",
    features: [
      "2 distributed AI sandbox nodes",
      "Standard execution latency (~2ms)",
      "Standard AI telemetry dashboard",
      "WAI-ARIA accessibility checker",
      "Community support logs",
    ],
  },
  {
    id: "sandbox-pro",
    name: "Enterprise Agent",
    basePriceUSD: 29,
    description: "Perfect for fast-growing teams demanding sub-millisecond inference telemetry at scale.",
    highlight: "Most popular",
    features: [
      "14 distributed AI sandbox nodes",
      "Sub-millisecond latency (0.42ms)",
      "Real-time AI pipeline widgets",
      "Optimized AVX2 inference threads",
      "Priority GPU pipeline queues",
      "Priority developer SLA support",
    ],
    isPopular: true,
  },
  {
    id: "sandbox-enterprise",
    name: "Custom AGI Mesh",
    basePriceUSD: 99,
    description: "Custom-fit for large-scale operations with dedicated sandbox security compliance layers.",
    highlight: "Enterprise-grade",
    features: [
      "Unlimited isolated AI sandbox nodes",
      "Dedicated CPU cores & memory limits",
      "Advanced model latency analytics",
      "Automated failover configurations",
      "Complete WCAG audit reports",
      "24/7 Dedicated account engineer",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="nm-section"
      aria-labelledby="pricing-title"
      style={{ background: "var(--bg)" }}
    >
      {/* Glow overlays */}
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" aria-hidden="true" />
      <div
        className="glow-blob glow-blob-teal animate-aurora"
        style={{
          width: "500px",
          height: "500px",
          top: "0",
          left: "20%",
          opacity: 0.35,
        }}
        aria-hidden="true"
      />
      <div
        className="glow-blob glow-blob-orange"
        style={{
          width: "400px",
          height: "400px",
          bottom: "10%",
          right: "20%",
          opacity: 0.25,
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
          gap: "64px",
        }}
      >
        {/* Header */}
        <ScrollReveal>
          <SectionTitle
            id="pricing-title"
            badgeText="Flexible Subscription Tiers"
            title="Scale execution on your"
            titleAccent="Own Terms."
            subtitle="Select the tier that matches your system throughput. Upgrade or downgrade AI nodes instantly without losing historical telemetry logs."
          />
        </ScrollReveal>

        {/* Toggles */}
        <ScrollReveal delay={50}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <BillingToggle />
            <CurrencySelector />
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="pricing-cards-grid">
          <style>{`
            .pricing-cards-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 24px;
              align-items: stretch;
            }
            @media (min-width: 768px) {
              .pricing-cards-grid {
                grid-template-columns: repeat(3, 1fr) !important;
              }
            }
          `}</style>
          {PLANS.map((plan, idx) => (
            <ScrollReveal key={plan.id} delay={idx * 100} style={{ height: "100%" }}>
              <PricingCard
                name={plan.name}
                basePriceUSD={plan.basePriceUSD}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                highlight={plan.highlight}
                className="h-full"
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom trust strip */}
        <ScrollReveal delay={200}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px 28px",
              paddingTop: "16px",
              fontSize: "10px",
              fontFamily: "var(--font-mono)",
              color: "rgba(240,246,243,0.38)",
              fontWeight: 700,
            }}
          >
            {["No credit card required", "Cancel anytime", "Instant provisioning", "WCAG AA compliant"].map((t) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    height: "4px",
                    width: "4px",
                    borderRadius: "50%",
                    background: "rgba(255, 200, 1, 0.6)",
                  }}
                />
                {t.toUpperCase()}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
