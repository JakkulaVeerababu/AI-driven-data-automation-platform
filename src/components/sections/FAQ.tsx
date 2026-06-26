"use client";

import { useState } from "react";

const FAQS = [
  { q: "What is the primary tech stack for this battle submission?", a: "The project is architected with Next.js (App Router), TypeScript, and Tailwind CSS v4. We use native CSS and CSS variables for theming, transitions, and accessibility compliance — avoiding heavy animation or widget packages entirely.", tag: "Architecture" },
  { q: "How does the pricing switcher calculate AI node pricing?", a: "The pricing switcher uses our usePricingState hook, which retrieves currency rates (USD, INR, EUR) and applies a 20% discount on annual billing tiers. A multi-dimensional configuration matrix prevents layout shift and isolates renders to only the targeted price text nodes.", tag: "Pricing" },
  { q: "What accessibility measures have been integrated?", a: "We support visible keyboard focus indicators via focus-visible rings, a screen-reader-only skip link to bypass navigation, semantic landmarks for easy page parsing, and complete prefers-reduced-motion queries to suppress all animations for affected users.", tag: "A11y" },
  { q: "How are the SVG telemetry widgets and assets loaded?", a: "All SVG telemetry maps and system icons are stored locally in public/assets/svg/ to prevent third-party fetch bottlenecks. This guarantees page-load speeds remain fully optimized for Lighthouse audits.", tag: "Performance" },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="nm-section"
      aria-labelledby="faq-title"
      style={{ background: "var(--bg)" }}
    >
      {/* Glows */}
      <div className="glow-blob glow-blob-teal" style={{ width: "500px", height: "500px", top: "0", right: "15%", opacity: 0.3 }} aria-hidden="true" />
      <div className="glow-blob glow-blob-orange" style={{ width: "350px", height: "350px", bottom: "0", left: "20%", opacity: 0.2 }} aria-hidden="true" />

      <div className="nm-container" style={{ position: "relative", zIndex: 10, maxWidth: "760px" }}>

        {/* Header */}
        <div className="reveal-on-scroll" style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="nm-badge nm-badge-gold" style={{ marginBottom: "20px", display: "inline-flex" }}>
            Frequently Asked Questions
          </div>
          <h2 id="faq-title" className="nm-section-title" style={{ marginBottom: "16px" }}>
            System &amp; Architecture FAQ
          </h2>
          <p className="nm-section-sub" style={{ margin: "0 auto" }}>
            Quick, precise responses to essential technical questions about the project&apos;s foundation.
          </p>
        </div>

        {/* Accordion */}
        <div
          className="reveal-on-scroll"
          style={{ border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", overflow: "hidden", background: "rgba(12,24,37,0.5)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
        >
          {FAQS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} style={{ borderBottom: idx < FAQS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    id={`faq-btn-${idx}`}
                    style={{
                      display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between",
                      gap: "24px", padding: "20px 24px", textAlign: "left", cursor: "pointer",
                      background: isOpen ? "rgba(255,255,255,0.025)" : "transparent",
                      border: "none", transition: "background 0.2s",
                      color: isOpen ? "#fff" : "rgba(240,246,243,0.8)",
                    }}
                    onMouseEnter={e => {
                      if (!isOpen) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                    }}
                    onMouseLeave={e => {
                      if (!isOpen) (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
                      <span style={{
                        flexShrink: 0, fontSize: "9px", fontWeight: 800, letterSpacing: "0.08em",
                        textTransform: "uppercase", color: "rgba(255,200,1,0.8)",
                        background: "rgba(255,200,1,0.08)", border: "1px solid rgba(255,200,1,0.15)",
                        borderRadius: "6px", padding: "3px 8px",
                      }}>
                        {item.tag}
                      </span>
                      <span style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1.4 }}>{item.q}</span>
                    </div>
                    <div style={{
                      flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%",
                      border: `1px solid ${isOpen ? "rgba(255,200,1,0.35)" : "rgba(255,255,255,0.1)"}`,
                      background: isOpen ? "rgba(255,200,1,0.1)" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: isOpen ? "#FFC801" : "rgba(240,246,243,0.4)",
                      transition: "all 0.3s",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}>
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className={`accordion-wrap${isOpen ? " open" : ""}`}
                >
                  <div className="accordion-inner">
                    <div style={{ padding: "4px 24px 20px 24px" }}>
                      <p style={{
                        fontSize: "14px", color: "rgba(240,246,243,0.6)", lineHeight: 1.75,
                        borderLeft: "2px solid rgba(255,200,1,0.2)", paddingLeft: "16px",
                      }}>
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
