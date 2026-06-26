"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  type = "button",
  onClick,
  ...props
}: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleIdRef = useRef(0);
  const timeoutsRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());

  // Memory cleanup of active timeouts on unmount to prevent memory leaks
  useEffect(() => {
    const activeTimeouts = timeoutsRef.current;
    return () => {
      activeTimeouts.forEach((tId) => clearTimeout(tId));
    };
  }, []);

  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      // Bounding box calculation for local coordinates
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = rippleIdRef.current++;

      setRipples((prev) => [...prev, { id, x, y }]);

      // Remove ripple element after duration (450ms matching keyframe duration)
      const tId = setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
        timeoutsRef.current.delete(tId);
      }, 450);

      timeoutsRef.current.add(tId);

      if (onClick) {
        onClick(e);
      }
    },
    [onClick]
  );

  const baseStyles =
    "relative overflow-hidden inline-flex items-center justify-center rounded-xl font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic-noir active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none select-none";

  const variants = {
    primary:
      "bg-forsythia text-oceanic-noir hover:bg-forsythia/90 hover:shadow-lg hover:shadow-forsythia/10",
    secondary:
      "border border-mystic-mint/30 bg-transparent text-arctic-powder hover:bg-mystic-mint/10 hover:border-mystic-mint/50",
    accent:
      "bg-deep-saffron text-oceanic-noir hover:bg-deep-saffron/90 hover:shadow-lg hover:shadow-deep-saffron/15",
    glass:
      "glass-panel text-arctic-powder hover:bg-white/10 hover:border-white/20",
    ghost:
      "bg-transparent text-arctic-powder/80 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={handleOnClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {/* Click ripple overlay */}
      <span className="ripple-container">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="ripple-span"
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}
      </span>

      {/* Button content (relative to sit above ripple) */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export default React.memo(Button);
