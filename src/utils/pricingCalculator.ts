import { Currency, BillingCycle } from "@/types/pricing";
import { PRICING_MATRIX } from "@/config/pricingMatrix";

/**
 * Calculates raw price in target currency and billing cycle based on base USD values.
 *
 * @param basePriceUSD Base monthly price in USD
 * @param currency Target currency code
 * @param billingCycle Selected billing cycle
 */
export function calculateTierPrice(
  basePriceUSD: number,
  currency: Currency,
  billingCycle: BillingCycle
): number {
  const currencyConfig = PRICING_MATRIX.currencies[currency];
  
  // 1. Convert base USD price using regional exchange rates and regional tariff variables
  let price = basePriceUSD * currencyConfig.exchangeRate * currencyConfig.regionalTariff;

  // 2. Adjust for billing cycle discount
  if (billingCycle === "annually") {
    price = price * (1 - PRICING_MATRIX.discounts.annually);
  }

  // Rounded to integer values for clean visual style
  return Math.round(price);
}

const formatterCache = new Map<string, Intl.NumberFormat>();

function getFormatter(locale: string, currency: Currency): Intl.NumberFormat {
  const key = `${locale}:${currency}`;
  let formatter = formatterCache.get(key);
  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
      maximumFractionDigits: 0,
    });
    formatterCache.set(key, formatter);
  }
  return formatter;
}

/**
 * Formats value into locale-aware currency strings without manual string concatenations.
 *
 * @param value Computed numeric value
 * @param currency Target currency code
 */
export function formatPrice(value: number, currency: Currency): string {
  const currencyConfig = PRICING_MATRIX.currencies[currency];
  
  try {
    return getFormatter(currencyConfig.locale, currency).format(value);
  } catch {
    // Fallback to manual concat if format fails
    return `${currencyConfig.symbol}${value.toLocaleString()}`;
  }
}
