import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

function Logo({ className = "h-8 w-auto", showText = true }: LogoProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {/* Dynamic Geometric Brand Icon (Pure SVG) with Ambient Breathing Halo */}
      <div className="logo-wrapper" style={{ height: "30px", width: "30px" }}>
        <div className="logo-halo" />
        <svg
          style={{ height: "30px", width: "30px", zIndex: 1, position: "relative" }}
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
            <linearGradient id="top-face-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 200, 1, 0.25)" />
              <stop offset="100%" stopColor="rgba(255, 153, 50, 0.04)" />
            </linearGradient>
            <linearGradient id="left-face-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(15, 219, 255, 0.18)" />
              <stop offset="100%" stopColor="rgba(15, 68, 85, 0.02)" />
            </linearGradient>
            <linearGradient id="right-face-grad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          
          {/* Isometric 3D Cube Facets */}
          <path d="M16 4 L26 10 L16 16 L6 10 Z" fill="url(#top-face-grad)" />
          <path d="M6 10 L16 16 L16 28 L6 22 Z" fill="url(#left-face-grad)" />
          <path d="M16 16 L26 10 L26 22 L16 28 Z" fill="url(#right-face-grad)" />
          
          {/* Core Wireframe Lines */}
          <path d="M16 16 L16 28" stroke="rgba(15, 219, 255, 0.35)" strokeWidth="1.2" />
          <path d="M16 16 L6 10" stroke="rgba(255, 200, 1, 0.3)" strokeWidth="1.2" />
          <path d="M16 16 L26 10" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.2" />
          
          {/* Outer wireframe border */}
          <path
            d="M6 10 L16 4 L26 10 L26 22 L16 28 L6 22 Z"
            stroke="rgba(255,200,1,0.35)"
            strokeWidth="1.5"
            strokeLinejoin="round"
            fill="none"
          />
          
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
      </div>

      {/* Brand Text */}
      {showText && (
        <span style={{
          fontSize: "18px",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          color: "#ffffff",
          fontFamily: "var(--font-sans)",
          userSelect: "none"
        }}>
          NEURAL<span style={{ color: "#FFC801", fontWeight: 800, letterSpacing: "-0.04em" }}>.mesh</span>
        </span>
      )}
    </div>
  );
}

export default React.memo(Logo);
