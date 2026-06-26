import { Currency } from "@/types/pricing";

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  locale: string;
  exchangeRate: number; // multiplier against USD base
  regionalTariff: number; // regional tariff multiplier (e.g. market-specific pricing adjustment)
}

export interface PricingMatrixConfig {
  basePrices: Record<string, number>; // maps planId to base monthly price in USD
  currencies: Record<Currency, CurrencyConfig>;
  discounts: {
    annually: number; // e.g. 0.2 for 20% discount
  };
}

export const PRICING_MATRIX: PricingMatrixConfig = {
  basePrices: {
    "sandbox-starter": 0,       // Developer AI Node
    "sandbox-pro": 29,          // Enterprise Agent
    "sandbox-enterprise": 99,   // Custom AGI Mesh
  },
  currencies: {
    USD: {
      code: "USD",
      symbol: "$",
      locale: "en-US",
      exchangeRate: 1.0,
      regionalTariff: 1.0, // standard rate
    },
    INR: {
      code: "INR",
      symbol: "₹",
      locale: "en-IN",
      exchangeRate: 83.5,
      regionalTariff: 0.85, // 15% discount tariff optimized for the Indian market
    },
    EUR: {
      code: "EUR",
      symbol: "€",
      locale: "de-DE",
      exchangeRate: 0.92,
      regionalTariff: 1.10, // 10% premium tariff adjustment for EU VAT/compliance
    },
  },
  discounts: {
    annually: 0.2, // 20% discount applied to annual billing cycle
  },
};
