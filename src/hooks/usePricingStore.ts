"use client";

import { useSyncExternalStore } from "react";
import { Currency, BillingCycle } from "@/types/pricing";

// Internal module-level state configuration
let currentCurrency: Currency = "USD";
let currentBillingCycle: BillingCycle = "monthly";
const listeners = new Set<() => void>();

export const pricingStore = {
  /**
   * Registers a listener to react to changes.
   */
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },

  /**
   * Returns a primitive string snapshot token to prevent object recreation triggers.
   */
  getSnapshot(): string {
    return `${currentCurrency}:${currentBillingCycle}`;
  },

  /**
   * Server-side static snapshot fallback for Next.js SSR prerendering.
   */
  getServerSnapshot(): string {
    return "USD:monthly";
  },

  /**
   * Gets current state values.
   */
  getValues() {
    return {
      currency: currentCurrency,
      billingCycle: currentBillingCycle,
    };
  },

  /**
   * Mutates active currency state.
   */
  setCurrency(newCurrency: Currency) {
    if (currentCurrency !== newCurrency) {
      currentCurrency = newCurrency;
      this.notify();
    }
  },

  /**
   * Mutates active billing cycle state.
   */
  setBillingCycle(newCycle: BillingCycle) {
    if (currentBillingCycle !== newCycle) {
      currentBillingCycle = newCycle;
      this.notify();
    }
  },

  /**
   * Toggle utility for billing cycles.
   */
  toggleBillingCycle() {
    const nextCycle: BillingCycle = currentBillingCycle === "monthly" ? "annually" : "monthly";
    this.setBillingCycle(nextCycle);
  },

  /**
   * Broadcasts state change updates to subscribers.
   */
  notify() {
    listeners.forEach((listener) => listener());
  },
};

/**
 * Custom hook subscribing only leaf components to state changes.
 * Avoids parent or adjacent layout container re-rendering.
 */
export function usePricingStoreValues() {
  // Subscribes using standard React 18 external sync loader with server snapshot fallback
  const snapshot = useSyncExternalStore(
    pricingStore.subscribe,
    pricingStore.getSnapshot,
    pricingStore.getServerSnapshot
  );
  const [currency, billingCycle] = snapshot.split(":") as [Currency, BillingCycle];

  return {
    currency,
    billingCycle,
  };
}
