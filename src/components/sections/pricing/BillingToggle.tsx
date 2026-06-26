"use client";

import { usePricingStoreValues, pricingStore } from "@/hooks/usePricingStore";

export default function BillingToggle() {
  const { billingCycle } = usePricingStoreValues();

  const handleToggle = () => {
    pricingStore.toggleBillingCycle();
  };

  const wrapperStyle = {
    background: "rgba(255, 255, 255, 0.04)",
    padding: "5px",
    borderRadius: "9999px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",
  };

  const getButtonStyle = (isActive: boolean) => ({
    background: isActive ? "#FFC801" : "transparent",
    color: isActive ? "#07101A" : "rgba(240, 246, 243, 0.65)",
    padding: "8px 20px",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
    fontSize: "10px",
    fontWeight: 800,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    boxShadow: isActive ? "0 2px 8px rgba(255,200,1,0.25)" : "none",
  });

  return (
    <div style={wrapperStyle} aria-label="Billing cycle selector">
      <button
        onClick={handleToggle}
        type="button"
        style={getButtonStyle(billingCycle === "monthly")}
        aria-pressed={billingCycle === "monthly"}
        aria-label="Switch pricing to monthly billing cycle"
      >
        Monthly
      </button>
      <button
        onClick={handleToggle}
        type="button"
        style={getButtonStyle(billingCycle === "annually")}
        aria-pressed={billingCycle === "annually"}
        aria-label="Switch pricing to annual billing cycle (including 20% discount)"
      >
        Annually (Save 20%)
      </button>
    </div>
  );
}
