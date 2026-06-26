"use client";

import React from "react";
import Card from "./Card";
import Button from "./Button";
import Badge from "./Badge";
import PriceDisplay from "../sections/pricing/PriceDisplay";
import { usePricingStoreValues } from "@/hooks/usePricingStore";

interface PricingCardProps {
  name: string;
  basePriceUSD: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  highlight?: string;
  buttonText?: string;
  className?: string;
}

// Leaf component — re-renders ONLY when billing cycle changes
function BillingCycleLabel() {
  const { billingCycle } = usePricingStoreValues();
  return (
    <span className="ml-1.5 text-2xs text-arctic-powder/45 uppercase font-semibold tracking-wide">
      / {billingCycle === "monthly" ? "mo" : "mo equiv"}
    </span>
  );
}

export default function PricingCard({
  name,
  basePriceUSD,
  description,
  features,
  isPopular = false,
  highlight,
  buttonText = "Select Plan",
  className = "",
}: PricingCardProps) {
  return (
    <Card
      variant="bordered"
      gradientBorder={isPopular}
      className={`group relative flex flex-col justify-between overflow-hidden transition-all duration-300 ${
        isPopular
          ? "border-forsythia/25 bento-popular-glow scale-[1.02] md:scale-[1.03]"
          : "border-white/6 hover:border-white/12"
      } ${className}`}
    >
      {/* Popular glow overlay */}
      {isPopular && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(255,200,1,0.06) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Popular badge pill */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <Badge variant="amber">Most Popular</Badge>
        </div>
      )}

      <div className="flex flex-col gap-7 p-8 text-left relative z-10">

        {/* Plan header */}
        <div className="flex flex-col gap-2">
          {highlight && (
            <span className="text-3xs font-extrabold uppercase tracking-[0.15em] text-forsythia/80">
              {highlight}
            </span>
          )}
          <h3 className="text-lg font-extrabold text-white tracking-tight">{name}</h3>
          <p className="text-2xs text-arctic-powder/55 leading-relaxed min-h-[36px]">
            {description}
          </p>
        </div>

        {/* Price row — leaf-rendered, no global reflow */}
        <div className="flex items-baseline border-y border-white/5 py-5">
          <PriceDisplay basePriceUSD={basePriceUSD} />
          <BillingCycleLabel />
        </div>

        {/* Feature list */}
        <ul
          className="flex flex-col gap-3 text-2xs text-arctic-powder/75"
          aria-label={`Features included in ${name}`}
        >
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <svg
                className={`h-4 w-4 shrink-0 mt-[1px] ${isPopular ? "text-forsythia" : "text-mystic-mint/70"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-8 pb-8 relative z-10">
        <Button
          variant={isPopular ? "primary" : "secondary"}
          fullWidth
          className="rounded-xl py-3 font-semibold"
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
}
