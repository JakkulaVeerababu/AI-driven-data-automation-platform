export type Currency = "USD" | "INR" | "EUR";

export type BillingCycle = "monthly" | "annually";

export interface CurrencyDetails {
  code: Currency;
  symbol: string;
  name: string;
  exchangeRate: number; // relative to base USD
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  basePriceUSD: number; // base monthly price
  features: string[];
  isPopular?: boolean;
}

export interface PricingState {
  currency: Currency;
  billingCycle: BillingCycle;
  changeCurrency: (currency: Currency) => void;
  changeBillingCycle: (cycle: BillingCycle) => void;
  toggleBillingCycle: () => void;
}

export interface FormattedPrice {
  value: number;
  symbol: string;
  code: Currency;
  displayPrice: string;
}
