"use client";

import { useState } from "react";
import Button from "../shared/Button";
import Container from "../shared/Container";
import ScrollReveal from "../shared/ScrollReveal";

export default function CTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx @neuralmesh/cli provision-agent --region global");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="cta"
      className="bg-oceanic-noir relative bg-grid-pattern"
      style={{ padding: "112px 0", borderTop: "1px solid rgba(217,232,226,0.06)" }}
      aria-labelledby="cta-heading"
    >
      {/* Grid fade */}
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" aria-hidden="true" />

      {/* Central glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(255,200,1,0.07) 0%, rgba(255,153,50,0.05) 35%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <ScrollReveal>
          {/* Card */}
          <div
            className="relative overflow-hidden gradient-border-glow"
            style={{
              maxWidth: "880px",
              margin: "0 auto",
              borderRadius: "24px",
              border: "1px solid rgba(217,232,226,0.09)",
              background: "rgba(14,30,40,0.55)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              padding: "64px 40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "28px",
              textAlign: "center",
            }}
          >
            {/* Inner glow overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: "inherit",
                background: "radial-gradient(ellipse at 50% 0%, rgba(255,200,1,0.07) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />

            {/* Tag */}
            <div
              className="relative z-10"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "10px",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#FFC801",
                  background: "rgba(255,200,1,0.07)",
                  border: "1px solid rgba(255,200,1,0.2)",
                  borderRadius: "999px",
                  padding: "6px 16px",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FFC801", flexShrink: 0, animation: "pulse-glow 2s ease-in-out infinite" }} />
                Deploy AI Sandbox Nodes Instantly
              </span>
            </div>

            {/* Heading */}
            <h2
              id="cta-heading"
              className="relative z-10"
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "#fff",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Ready to Accelerate Your
              <br />
              <span className="shimmer-text">AI&nbsp;Telemetry?</span>
            </h2>

            {/* Subtitle */}
            <p
              className="relative z-10"
              style={{
                fontSize: "14px",
                color: "rgba(241,246,244,0.60)",
                lineHeight: 1.7,
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              Spin up secure AI sandbox zones globally in seconds. Sub-millisecond execution speeds,
              automated failover, and WCAG AA compliance out of the box.
            </p>

            {/* CLI Terminal */}
            <div
              className="relative z-10"
              style={{
                width: "100%",
                maxWidth: "480px",
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(217,232,226,0.1)",
                borderRadius: "16px",
                padding: "16px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textAlign: "left",
              }}
            >
              {/* Terminal header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  paddingBottom: "10px",
                  marginBottom: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,80,80,0.6)" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,200,60,0.6)" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(40,210,80,0.6)" }} />
                  <span style={{ color: "rgba(241,246,244,0.3)", marginLeft: "8px", fontSize: "9px" }}>bash</span>
                </div>
                <span style={{ color: "rgba(241,246,244,0.2)", fontSize: "9px" }}>Shell Console</span>
              </div>

              {/* Command row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", overflow: "hidden", flex: 1 }}>
                  <span style={{ color: "#FFC801", flexShrink: 0 }}>$</span>
                  <span style={{ color: "rgba(241,246,244,0.85)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    npx @neuralmesh/cli provision-agent --region global
                  </span>
                  <span className="cli-cursor" />
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label="Copy provisioning command to clipboard"
                  style={{
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    cursor: "pointer",
                    color: copied ? "#FFC801" : "rgba(241,246,244,0.5)",
                    transition: "all 0.2s",
                  }}
                  className="hover:!bg-white/10 hover:!text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forsythia"
                >
                  {copied ? (
                    <svg style={{ width: "14px", height: "14px" }} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  ) : (
                    <svg style={{ width: "15px", height: "15px" }} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Trust bullets */}
            <div
              className="relative z-10"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "24px 32px",
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "rgba(241,246,244,0.4)",
              }}
            >
              {["No Credit Card Required", "14 Free AI Sandboxes", "Cancel Anytime"].map((t) => (
                <span key={t} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,200,1,0.6)", flexShrink: 0 }} />
                  {t.toUpperCase()}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="relative z-10"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                width: "100%",
              }}
            >
              <Button variant="primary" size="lg">
                Create Free Account
              </Button>
              <a href="#pricing" style={{ display: "inline-flex" }}>
                <Button variant="secondary" size="lg">
                  Compare Plan Tiers
                </Button>
              </a>
            </div>

          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
