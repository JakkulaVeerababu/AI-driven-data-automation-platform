import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

function Logo({ className = "h-8 w-auto", showText = true }: LogoProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {/* Dynamic Geometric Brand Icon (Pure SVG) */}
      <svg
        style={{ height: "30px", width: "30px" }}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC801" />
            <stop offset="100%" stopColor="#FF9932" />
          </linearGradient>
          <linearGradient id="logo-mesh" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F4455" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FFC801" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        
        {/* Isometric Cube Structure */}
        <path
          d="M6 10 L16 4 L26 10 L26 22 L16 28 L6 22 Z"
          fill="url(#logo-mesh)"
          stroke="rgba(255,200,1,0.3)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        
        {/* Core Wireframe Lines */}
        <path d="M16 4 L16 16 L26 10" stroke="rgba(255,200,1,0.35)" strokeWidth="1" />
        <path d="M16 16 L6 10" stroke="rgba(255,200,1,0.35)" strokeWidth="1" />
        <path d="M16 16 L16 28" stroke="rgba(255,200,1,0.35)" strokeWidth="1" />
        
        {/* Center Glowing Hub node */}
        <circle cx="16" cy="16" r="3.5" fill="url(#logo-glow)" style={{ filter: "drop-shadow(0 0 5px #FFC801)" }} />
        
        {/* Vertex Network Node Highlights */}
        <circle cx="16" cy="4" r="1.2" fill="#FFF" />
        <circle cx="26" cy="10" r="1.2" fill="#FFF" />
        <circle cx="26" cy="22" r="1.2" fill="#FFF" />
        <circle cx="16" cy="28" r="1.2" fill="#FFF" />
        <circle cx="6" cy="22" r="1.2" fill="#FFF" />
        <circle cx="6" cy="10" r="1.2" fill="#FFF" />
      </svg>

      {/* Brand Text */}
      {showText && (
        <span style={{
          fontSize: "16px",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          color: "#ffffff",
          fontFamily: "var(--font-sans)",
          userSelect: "none"
        }}>
          NEURAL<span style={{ color: "#FFC801", fontFamily: "var(--font-mono)", fontWeight: 500, marginLeft: "1px" }}>.mesh</span>
        </span>
      )}
    </div>
  );
}

export default React.memo(Logo);
