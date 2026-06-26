"use client";

import { useState } from "react";
import ScrollReveal from "../shared/ScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
  tag?: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What is the primary tech stack for this battle submission?",
    answer: "The project is architected with Next.js (App Router), TypeScript, and Tailwind CSS v4. We use native CSS and CSS variables for theming, transitions, and accessibility compliance — avoiding heavy animation or widget packages entirely.",
    tag: "Architecture",
  },
  {
    question: "How does the pricing switcher calculate AI node pricing?",
    answer: "The pricing switcher uses our usePricingState hook, which retrieves currency rates (USD, INR, EUR) and applies a 20% discount on annual billing tiers. A multi-dimensional configuration matrix prevents layout shift and isolates renders to only the targeted price text nodes.",
    tag: "Pricing",
  },
  {
    question: "What accessibility measures have been integrated?",
    answer: "We support visible keyboard focus indicators via focus-visible rings, a screen-reader-only skip link to bypass navigation, semantic landmarks for easy page parsing, and complete prefers-reduced-motion queries to suppress all animations for affected users.",
    tag: "A11y",
  },
  {
    question: "How are the SVG telemetry widgets and assets loaded?",
    answer: "All SVG telemetry maps and system icons are stored locally in public/assets/svg/ to prevent third-party fetch bottlenecks. This guarantees page-load speeds remain fully optimized for Lighthouse audits.",
    tag: "Performance",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-28 bg-oceanic-noir relative overflow-hidden border-t border-mystic-mint/8"
      aria-labelledby="faq-title"
    >
      {/* Glow blobs */}
      <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-glow-radial filter blur-[100px] pointer-events-none opacity-40" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-glow-saffron filter blur-[90px] pointer-events-none opacity-25" aria-hidden="true" />

      <div className="container-custom max-w-3xl flex flex-col gap-16 relative z-10">

        {/* Section header */}
        <ScrollReveal>
          <div className="flex flex-col gap-4 text-center">
            <span className="inline-block text-3xs font-extrabold uppercase tracking-[0.2em] text-forsythia/80 bg-forsythia/8 border border-forsythia/15 rounded-full px-4 py-1.5 w-fit mx-auto">
              Frequently Asked Questions
            </span>
            <h2
              id="faq-title"
              className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight"
            >
              System & Architecture FAQ
            </h2>
            <p className="max-w-xl mx-auto text-sm text-arctic-powder/55 leading-relaxed">
              Quick, precise responses to essential technical questions about the project&apos;s foundation.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion items */}
        <ScrollReveal delay={60}>
          <div
            className="flex flex-col divide-y divide-mystic-mint/8 border border-mystic-mint/8 rounded-2xl overflow-hidden bg-oceanic-noir/50 backdrop-blur-sm"
            role="presentation"
          >
            {FAQ_DATA.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index}>
                  <h3>
                    <button
                      onClick={() => toggleItem(index)}
                      type="button"
                      className={`flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:ring-inset ${
                        isOpen
                          ? "bg-white/[0.03] text-white"
                          : "text-arctic-powder/80 hover:bg-white/[0.025] hover:text-white"
                      }`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-btn-${index}`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {item.tag && (
                          <span className="shrink-0 text-3xs font-extrabold uppercase tracking-wider text-forsythia/70 bg-forsythia/8 border border-forsythia/15 rounded-md px-2 py-0.5 hidden sm:block">
                            {item.tag}
                          </span>
                        )}
                        <span className="text-sm font-semibold leading-snug">{item.question}</span>
                      </div>

                      <span
                        className={`shrink-0 flex items-center justify-center h-6 w-6 rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-forsythia/40 bg-forsythia/10 text-forsythia rotate-180"
                            : "border-white/10 text-arctic-powder/40"
                        }`}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  {/* Accordion Content — grid-row technique, no max-height hack */}
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className={`accordion-content ${isOpen ? "open" : ""}`}
                  >
                    <div className="accordion-inner">
                      <div className="px-6 pb-5 pt-1">
                        <p className="text-sm text-arctic-powder/65 leading-relaxed border-l-2 border-forsythia/25 pl-4">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
