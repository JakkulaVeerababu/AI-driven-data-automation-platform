"use client";

import { usePricingStoreValues, pricingStore } from "@/hooks/usePricingStore";
import { Currency } from "@/types/pricing";

export default function CurrencySelector() {
  const { currency } = usePricingStoreValues();
  const currencies: Currency[] = ["USD", "INR", "EUR"];

  return (
    <div className="flex gap-2" aria-label="Select pricing currency">
      {currencies.map((cur) => {
        const isActive = currency === cur;

        return (
          <button
            key={cur}
            onClick={() => pricingStore.setCurrency(cur)}
            type="button"
            className={`px-3.5 py-1 text-2xs font-mono font-bold rounded-md border transition-all duration-200 focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic-noir ${
              isActive
                ? "bg-white/10 text-forsythia border-white/20"
                : "bg-transparent text-arctic-powder/60 border-white/5 hover:border-white/20 hover:text-white"
            }`}
            aria-pressed={isActive}
            aria-label={`Show pricing in ${cur}`}
          >
            {cur}
          </button>
        );
      })}
    </div>
  );
}
