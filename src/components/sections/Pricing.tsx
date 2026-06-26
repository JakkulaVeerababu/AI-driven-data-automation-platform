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
      className="py-28 bg-oceanic-noir relative overflow-hidden border-t border-mystic-mint/8 bg-grid-pattern"
      aria-labelledby="pricing-title"
    >
      {/* Glow overlays */}
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-glow-radial filter blur-[120px] pointer-events-none opacity-60" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-glow-forsythia filter blur-[100px] pointer-events-none opacity-40" aria-hidden="true" />

      <div className="container-custom flex flex-col gap-16 relative z-10">

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
          <div className="flex flex-col items-center gap-5">
            <BillingToggle />
            <CurrencySelector />
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {PLANS.map((plan, idx) => (
            <ScrollReveal key={plan.id} delay={idx * 100}>
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
          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-3xs font-mono text-arctic-powder/40">
            {["No credit card required", "Cancel anytime", "Instant provisioning", "WCAG AA compliant"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-forsythia/60" />
                {t.toUpperCase()}
              </span>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
