"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{
        width: "30px", height: "30px", borderRadius: "8px",
        background: "linear-gradient(135deg, #FFC801 0%, #FF9932 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "14px", fontWeight: 800, color: "#07101A",
      }}>N</div>
      <span style={{ fontWeight: 700, fontSize: "15px", letterSpacing: "-0.02em", color: "#fff" }}>
        NEURAL<span style={{ color: "#FFC801" }}>.mesh</span>
      </span>
    </div>
  );
}

const NAV_LINKS = [
  { href: "#features", label: "Features",  id: "features" },
  { href: "#pricing",  label: "Plans",      id: "pricing"  },
  { href: "#faq",      label: "FAQ",        id: "faq"      },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < 130 && rect.bottom > 80) { setActiveId(id); break; }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nm-navbar${scrolled ? " scrolled" : ""}`} role="banner">
      <div className="nm-container">
        <div className="nm-navbar-inner">
          <Link href="/" aria-label="NEURAL.mesh Home" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main Navigation" className="md:flex hidden" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {NAV_LINKS.map(({ href, label, id }) => (
              <Link
                key={id}
                href={href}
                className={`nm-nav-link${activeId === id ? " active" : ""}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="nm-ctas md:flex" style={{ display: "flex" }}>
            <Link href="#pricing" style={{ textDecoration: "none" }}>
              <button className="nm-btn nm-btn-secondary nm-btn-sm">Pricing</button>
            </Link>
            <Link href="#cta" style={{ textDecoration: "none" }}>
              <button className="nm-btn nm-btn-primary nm-btn-sm">Get Started</button>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              style={{
                display: "none",
                width: "40px", height: "40px", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px", background: "rgba(255,255,255,0.04)",
                color: "#F0F6F3", cursor: "pointer", alignItems: "center", justifyContent: "center",
              }}
              className="hidden"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {isOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div id="mobile-nav" className={`nm-mobile-menu${isOpen ? " open" : ""}`} aria-hidden={!isOpen}>
        <div style={{ padding: "12px 24px 28px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {NAV_LINKS.map(({ href, label, id }) => (
            <Link
              key={id}
              href={href}
              onClick={() => setIsOpen(false)}
              style={{
                display: "block", padding: "12px", borderRadius: "8px",
                fontSize: "15px", fontWeight: 600, color: "rgba(240,246,243,0.8)",
                textDecoration: "none", transition: "color 0.2s",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {label}
            </Link>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "16px" }}>
            <Link href="#pricing" onClick={() => setIsOpen(false)} style={{ display: "block", textDecoration: "none" }}>
              <button className="nm-btn nm-btn-secondary" style={{ width: "100%", justifyContent: "center" }}>Pricing</button>
            </Link>
            <Link href="#cta" onClick={() => setIsOpen(false)} style={{ display: "block", textDecoration: "none" }}>
              <button className="nm-btn nm-btn-primary" style={{ width: "100%", justifyContent: "center" }}>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
