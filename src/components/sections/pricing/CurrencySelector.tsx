"use client";

import { usePricingStoreValues, pricingStore } from "@/hooks/usePricingStore";
import { Currency } from "@/types/pricing";

export default function CurrencySelector() {
  const { currency } = usePricingStoreValues();
  const currencies: Currency[] = ["USD", "INR", "EUR"];

  const containerStyle = {
    display: "flex",
    position: "relative" as const,
    background: "rgba(255, 255, 255, 0.03)",
    padding: "4px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",
    width: "240px",
    userSelect: "none" as const,
  };

  const buttonStyle = (isActive: boolean) => ({
    background: "transparent",
    color: isActive ? "#FFC801" : "rgba(240, 246, 243, 0.55)",
    border: "none",
    padding: "6px 0",
    fontSize: "11px",
    fontFamily: "var(--font-mono)",
    fontWeight: 700,
    borderRadius: "6px",
    cursor: "pointer",
    transition: "color 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
    outline: "none",
    position: "relative" as const,
    zIndex: 2,
    flex: 1,
    textAlign: "center" as const,
  });

  const getLeft = () => {
    if (currency === "USD") return "4px";
    if (currency === "INR") return "calc(33.33% + 2px)";
    return "calc(66.66% + 2px)";
  };

  return (
    <div style={containerStyle} aria-label="Select pricing currency">
      {/* Sliding background pill */}
      <div
        style={{
          position: "absolute",
          top: "4px",
          bottom: "4px",
          left: getLeft(),
          width: "calc(33.33% - 6px)",
          background: "rgba(255, 255, 255, 0.06)",
          borderRadius: "6px",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          transition: "left 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {currencies.map((cur) => {
        const isActive = currency === cur;

        return (
          <button
            key={cur}
            onClick={() => pricingStore.setCurrency(cur)}
            type="button"
            style={buttonStyle(isActive)}
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
