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
    <span className="text-4xl font-extrabold text-white font-mono tracking-tight animate-fade-in-up">
      {displayPrice}
    </span>
  );
}
