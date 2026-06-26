import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

function Logo({ className = "h-8 w-auto", showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      {/* Dynamic Geometric Brand Icon (Pure SVG) */}
      <svg
        className={className}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Layer 1: Nocturnal Expedition Background Shape */}
        <path
          d="M6 10L16 4L26 10V22L16 28L6 22V10Z"
          stroke="#114C5A"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Layer 2: Forsythia Accent Center Core */}
        <path
          d="M16 10L22 13.5V20.5L16 24L10 20.5V13.5L16 10Z"
          fill="#FFC801"
          opacity="0.85"
        />
        {/* Layer 3: Deep Saffron Highlights */}
        <path
          d="M16 4V16L26 22"
          stroke="#FF9932"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16 16L6 22"
          stroke="#FF9932"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Text */}
      {showText && (
        <span className="font-sans text-lg font-extrabold tracking-tight text-white select-none">
          NEURAL<span className="text-forsythia font-mono font-medium">.mesh</span>
        </span>
      )}
    </div>
  );
}

export default React.memo(Logo);
