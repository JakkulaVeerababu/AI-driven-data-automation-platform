"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "../shared/ScrollReveal";

function CommandTyper() {
  const commandText = "npx @neuralmesh/cli provision-agent --region global";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < commandText.length) {
          setDisplayedText(commandText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 55);
      return () => clearInterval(interval);
    }, 450);

    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <span style={{ color: "rgba(240,246,243,0.85)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
      {displayedText}
    </span>
  );
}

export default function CTA() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("npx @neuralmesh/cli provision-agent --region global");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="cta"
      className="nm-section"
      aria-labelledby="cta-heading"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" aria-hidden="true" />
      {/* Central glow */}
      <div className="glow-blob glow-blob-gold" style={{ width: "700px", height: "700px", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.45 }} aria-hidden="true" />

      <div className="nm-container" style={{ position: "relative", zIndex: 10 }}>
        <ScrollReveal>

          {/* Glass card */}
          <div style={{
            maxWidth: "860px", margin: "0 auto",
            borderRadius: "24px",
            border: "1px solid rgba(255,200,1,0.15)",
            background: "rgba(12,24,37,0.6)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            padding: "72px 48px",
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: "28px", textAlign: "center",
            boxShadow: "inset 0 0 0 1px rgba(255,200,1,0.08), 0 40px 80px rgba(0,0,0,0.6)",
            position: "relative", overflow: "hidden",
          }}>
            {/* Inner glow */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none",
              background: "radial-gradient(ellipse at 50% 0%, rgba(255,200,1,0.08) 0%, transparent 60%)",
            }} aria-hidden="true" />

            {/* Tag */}
            <div className="nm-badge nm-badge-gold" style={{ position: "relative", zIndex: 1, gap: "8px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FFC801", animation: "pulse 2s ease-in-out infinite", display: "inline-block" }} />
              Deploy AI Sandbox Nodes Instantly
            </div>

            {/* Heading */}
            <h2 id="cta-heading" style={{
              position: "relative", zIndex: 1,
              fontSize: "clamp(28px, 4.5vw, 48px)",
              fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1,
              color: "#fff", maxWidth: "640px", margin: "0 auto",
            }}>
              Ready to Accelerate Your
              <br />
              <span className="text-shimmer">AI&nbsp;Telemetry?</span>
            </h2>

            {/* Subtitle */}
            <p style={{
              position: "relative", zIndex: 1,
              fontSize: "15px", color: "rgba(240,246,243,0.58)",
              lineHeight: 1.75, maxWidth: "480px", margin: "0 auto",
            }}>
              Spin up secure AI sandbox zones globally in seconds. Sub-millisecond execution,
              automated failover, and WCAG AA compliance out of the box.
            </p>

            {/* CLI */}
            <div style={{
              position: "relative", zIndex: 1,
              width: "100%", maxWidth: "500px",
              background: "rgba(0,0,0,0.55)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "14px", padding: "16px",
              fontFamily: "var(--font-mono)", fontSize: "12px",
            }}>
              {/* Terminal top bar */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "10px", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  {["#FF5F56","#FFBD2E","#27C93F"].map(c => (
                    <span key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
                  ))}
                  <span style={{ color: "rgba(240,246,243,0.25)", fontSize: "10px", marginLeft: "8px" }}>bash</span>
                </div>
                <span style={{ color: "rgba(240,246,243,0.2)", fontSize: "10px" }}>Shell Console</span>
              </div>
              {/* Command */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, overflow: "hidden" }}>
                  <span style={{ color: "#FFC801", flexShrink: 0 }}>$</span>
                  <CommandTyper />
                  <span className="cli-cursor" />
                </div>
                <button
                  type="button"
                  onClick={copy}
                  aria-label="Copy command"
                  style={{
                    flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "32px", height: "32px", borderRadius: "8px",
                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer", color: copied ? "#FFC801" : "rgba(240,246,243,0.5)",
                    transition: "all 0.2s",
                  }}
                >
                  {copied
                    ? <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                    : <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="8" y="8" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                  }
                </button>
              </div>
            </div>

            {/* Trust bullets */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 28px" }}>
              {["No Credit Card Required", "14 Free AI Sandboxes", "Cancel Anytime"].map(t => (
                <span key={t} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(240,246,243,0.38)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,200,1,0.55)", flexShrink: 0 }} />
                  {t}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "14px" }}>
              <button className="nm-btn nm-btn-primary nm-btn-lg">Create Free Account</button>
              <a href="#pricing" style={{ textDecoration: "none" }}>
                <button className="nm-btn nm-btn-secondary nm-btn-lg">Compare Plan Tiers</button>
              </a>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
