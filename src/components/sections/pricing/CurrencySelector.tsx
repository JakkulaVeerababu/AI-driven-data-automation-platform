"use client";

import { usePricingStoreValues, pricingStore } from "@/hooks/usePricingStore";
import { Currency } from "@/types/pricing";

export default function CurrencySelector() {
  const { currency } = usePricingStoreValues();
  const currencies: Currency[] = ["USD", "INR", "EUR"];

  const containerStyle = {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  };

  const getButtonStyle = (isActive: boolean) => ({
    background: isActive ? "rgba(255, 255, 255, 0.08)" : "transparent",
    color: isActive ? "#FFC801" : "rgba(240, 246, 243, 0.55)",
    border: isActive ? "1px solid rgba(255, 255, 255, 0.18)" : "1px solid rgba(255, 255, 255, 0.04)",
    padding: "6px 14px",
    fontSize: "11px",
    fontFamily: "var(--font-mono)",
    fontWeight: 700,
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
    outline: "none",
  });

  return (
    <div style={containerStyle} aria-label="Select pricing currency">
      {currencies.map((cur) => {
        const isActive = currency === cur;

        return (
          <button
            key={cur}
            onClick={() => pricingStore.setCurrency(cur)}
            type="button"
            style={getButtonStyle(isActive)}
            aria-pressed={isActive}
            aria-label={`Show pricing in ${cur}`}
            onMouseEnter={e => {
              if (!isActive) {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                e.currentTarget.style.color = "rgba(240, 246, 243, 0.55)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.04)";
              }
            }}
          >
            {cur}
          </button>
        );
      })}
    </div>
  );
}
