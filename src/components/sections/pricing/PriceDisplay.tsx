"use client";

import { usePricingStoreValues } from "@/hooks/usePricingStore";
import { calculateTierPrice, formatPrice } from "@/utils/pricingCalculator";

interface PriceDisplayProps {
  basePriceUSD: number;
}

export default function PriceDisplay({ basePriceUSD }: PriceDisplayProps) {
  const { currency, billingCycle } = usePricingStoreValues();

  // Compute and format dynamically based on active state selection
  const numericPrice = calculateTierPrice(basePriceUSD, currency, billingCycle);
  const displayPrice = formatPrice(numericPrice, currency);

  return (
    <span
      style={{
        fontSize: "32px",
        fontWeight: 800,
        color: "#ffffff",
        fontFamily: "var(--font-mono)",
        letterSpacing: "-0.03em",
      }}
    >
      {displayPrice}
    </span>
  );
}
