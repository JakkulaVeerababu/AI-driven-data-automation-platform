import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "amber" | "teal" | "mint" | "saffron" | "outline";
  className?: string;
}

function Badge({
  children,
  variant = "teal",
  className = "",
}: BadgeProps) {
  const baseStyle =
    "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-2xs font-bold uppercase tracking-widest";

  const variants = {
    amber: "bg-forsythia/10 text-forsythia border border-forsythia/20",
    teal: "bg-nocturnal-expedition/20 text-mystic-mint border border-nocturnal-expedition/30",
    mint: "bg-mystic-mint/10 text-mystic-mint border border-mystic-mint/20",
    saffron: "bg-deep-saffron/10 text-deep-saffron border border-deep-saffron/20",
    outline: "bg-transparent text-arctic-powder/60 border border-arctic-powder/15",
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

export default React.memo(Badge);
