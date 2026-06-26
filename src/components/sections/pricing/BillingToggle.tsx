"use client";

import { usePricingStoreValues, pricingStore } from "@/hooks/usePricingStore";

export default function BillingToggle() {
  const { billingCycle } = usePricingStoreValues();

  const handleToggle = () => {
    pricingStore.toggleBillingCycle();
  };

  return (
    <div className="flex items-center gap-3 bg-white/5 p-1.5 rounded-full border border-white/10 shadow-premium-sm">
      <button
        onClick={handleToggle}
        type="button"
        className={`px-5 py-1.5 rounded-full text-2xs font-extrabold uppercase tracking-wider transition-all duration-200 focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic-noir ${
          billingCycle === "monthly"
            ? "bg-forsythia text-oceanic-noir shadow-sm"
            : "text-arctic-powder/70 hover:text-white"
        }`}
        aria-pressed={billingCycle === "monthly"}
        aria-label="Switch pricing to monthly billing cycle"
      >
        Monthly
      </button>
      <button
        onClick={handleToggle}
        type="button"
        className={`px-5 py-1.5 rounded-full text-2xs font-extrabold uppercase tracking-wider transition-all duration-200 focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic-noir ${
          billingCycle === "annually"
            ? "bg-forsythia text-oceanic-noir shadow-sm"
            : "text-arctic-powder/70 hover:text-white"
        }`}
        aria-pressed={billingCycle === "annually"}
        aria-label="Switch pricing to annual billing cycle (including 20% discount)"
      >
        Annually (Save 20%)
      </button>
    </div>
  );
}
