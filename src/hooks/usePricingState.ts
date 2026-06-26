"use client";

import { useState, useCallback, useMemo } from "react";
import { Currency, BillingCycle, FormattedPrice } from "@/types/pricing";
import { PRICING_MATRIX } from "@/config/pricingMatrix";
import { calculateTierPrice, formatPrice } from "@/utils/pricingCalculator";

export function usePricingState(defaultCurrency: Currency = "USD", defaultCycle: BillingCycle = "monthly") {
  const [currency, setCurrency] = useState<Currency>(defaultCurrency);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(defaultCycle);

  const changeCurrency = useCallback((newCurrency: Currency) => {
    setCurrency(newCurrency);
  }, []);

  const changeBillingCycle = useCallback((newCycle: BillingCycle) => {
    setBillingCycle(newCycle);
  }, []);

  const toggleBillingCycle = useCallback(() => {
    setBillingCycle((prev) => (prev === "monthly" ? "annually" : "monthly"));
  }, []);

  const activeCurrencyDetails = useMemo(() => {
    const matrixCurrency = PRICING_MATRIX.currencies[currency];
    return {
      code: matrixCurrency.code,
      symbol: matrixCurrency.symbol,
      name: matrixCurrency.code === "USD" ? "United States Dollar" : matrixCurrency.code === "INR" ? "Indian Rupee" : "Euro",
      exchangeRate: matrixCurrency.exchangeRate,
    };
  }, [currency]);

  /**
   * Pure price calculator based on inputs.
   */
  const calculatePrice = useCallback(
    (basePriceUSD: number): FormattedPrice => {
      const finalPrice = calculateTierPrice(basePriceUSD, currency, billingCycle);
      const displayPrice = formatPrice(finalPrice, currency);

      return {
        value: finalPrice,
        symbol: PRICING_MATRIX.currencies[currency].symbol,
        code: currency,
        displayPrice,
      };
    },
    [currency, billingCycle]
  );

  return {
    currency,
    billingCycle,
    activeCurrencyDetails,
    changeCurrency,
    changeBillingCycle,
    toggleBillingCycle,
    calculatePrice,
  };
}
