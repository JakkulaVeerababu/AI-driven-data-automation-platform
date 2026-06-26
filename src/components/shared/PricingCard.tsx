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
    <span
      style={{
        marginLeft: "8px",
        fontSize: "11px",
        color: "rgba(240, 246, 243, 0.45)",
        textTransform: "uppercase",
        fontWeight: 700,
        letterSpacing: "0.06em",
      }}
    >
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
  
  const popularCardStyle = isPopular
    ? {
        borderColor: "rgba(255, 200, 1, 0.25)",
        boxShadow: "0 0 40px rgba(255, 200, 1, 0.08), inset 0 0 0 1px rgba(255, 200, 1, 0.1)",
        transform: "scale(1.02)",
      }
    : {
        borderColor: "rgba(255, 255, 255, 0.06)",
      };

  const cardStyle = {
    position: "relative" as const,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
    overflow: "hidden",
    height: "100%",
    borderRadius: "24px",
    background: "var(--card)",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    ...popularCardStyle,
  };

  return (
    <Card
      variant="bordered"
      gradientBorder={isPopular}
      style={cardStyle}
      className={`group ${className}`}
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
        <div
          style={{
            position: "absolute",
            top: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <Badge variant="amber">Most Popular</Badge>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          padding: "32px",
          textAlign: "left",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Plan header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {highlight && (
            <span
              style={{
                fontSize: "9px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#FFC801",
                display: "block",
              }}
            >
              {highlight}
            </span>
          )}
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            {name}
          </h3>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(240, 246, 243, 0.55)",
              lineHeight: 1.65,
              minHeight: "54px",
            }}
          >
            {description}
          </p>
        </div>

        {/* Price row — leaf-rendered, no global reflow */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "20px 0",
          }}
        >
          <PriceDisplay basePriceUSD={basePriceUSD} />
          <BillingCycleLabel />
        </div>

        {/* Feature list */}
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
          aria-label={`Features included in ${name}`}
        >
          {features.map((feature, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontSize: "12px",
                color: "rgba(240, 246, 243, 0.75)",
              }}
            >
              <svg
                style={{
                  height: "16px",
                  width: "16px",
                  flexShrink: 0,
                  marginTop: "2px",
                  color: isPopular ? "#FFC801" : "rgba(200, 224, 216, 0.7)",
                }}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.8"
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
      <div style={{ padding: "0 32px 32px 32px", position: "relative", zIndex: 10 }}>
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
