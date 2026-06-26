"use client";

import { usePricingStoreValues, pricingStore } from "@/hooks/usePricingStore";

export default function BillingToggle() {
  const { billingCycle } = usePricingStoreValues();
  const isMonthly = billingCycle === "monthly";

  const handleToggle = () => {
    pricingStore.toggleBillingCycle();
  };

  const wrapperStyle = {
    background: "rgba(255, 255, 255, 0.04)",
    padding: "4px",
    borderRadius: "9999px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    display: "flex",
    alignItems: "center",
    position: "relative" as const,
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",
    width: "340px",
    maxWidth: "100%",
    userSelect: "none" as const,
  };

  const buttonStyle = (isActive: boolean) => ({
    background: "transparent",
    color: isActive ? "#07101A" : "rgba(240, 246, 243, 0.65)",
    padding: "9px 0",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    transition: "color 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
    fontSize: "10px",
    fontWeight: 800,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    flex: 1,
    textAlign: "center" as const,
    position: "relative" as const,
    zIndex: 2,
    outline: "none",
  });

  return (
    <div style={wrapperStyle} aria-label="Billing cycle selector">
      {/* Sliding background pill */}
      <div
        style={{
          position: "absolute",
          top: "4px",
          bottom: "4px",
          left: isMonthly ? "4px" : "calc(50% + 2px)",
          width: "calc(50% - 6px)",
          background: "#FFC801",
          borderRadius: "9999px",
          transition: "left 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: "0 2px 8px rgba(255,200,1,0.25)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <button
        onClick={handleToggle}
        type="button"
        style={buttonStyle(isMonthly)}
        aria-pressed={isMonthly}
        aria-label="Switch pricing to monthly billing cycle"
      >
        Monthly
      </button>
      <button
        onClick={handleToggle}
        type="button"
        style={buttonStyle(!isMonthly)}
        aria-pressed={!isMonthly}
        aria-label="Switch pricing to annual billing cycle (including 20% discount)"
      >
        Annually (Save 20%)
      </button>
    </div>
  );
}
