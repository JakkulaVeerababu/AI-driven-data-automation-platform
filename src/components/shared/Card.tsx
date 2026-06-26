"use client";

import React from "react";
import useMouseGlow from "@/hooks/useMouseGlow";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "bordered" | "dark";
  hoverEffect?: boolean;
  gradientBorder?: boolean;
}

function Card({
  children,
  variant = "bordered",
  hoverEffect = true,
  gradientBorder = false,
  className = "",
  ...props
}: CardProps) {
  const glowRef = useMouseGlow();

  const baseStyle =
    "rounded-2xl transition-all duration-300 pointer-glow-card";

  const variants = {
    bordered:
      "border border-white/8 bg-oceanic-noir/60 backdrop-blur-sm",
    glass:
      "bg-oceanic-noir/50 border border-mystic-mint/10 backdrop-blur-lg",
    dark:
      "bg-oceanic-noir/80 border border-nocturnal-expedition/20 shadow-premium-inner",
  };

  const hoverStyle = hoverEffect
    ? "hover:-translate-y-1 hover:border-white/20 hover:shadow-premium-lg"
    : "";

  const borderClass = gradientBorder ? "gradient-border-glow" : "";

  return (
    <div
      ref={glowRef}
      className={`${baseStyle} ${variants[variant]} ${hoverStyle} ${borderClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default React.memo(Card);
