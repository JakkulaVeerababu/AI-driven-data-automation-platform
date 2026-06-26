"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../shared/Logo";
import Button from "../shared/Button";
import Container from "../shared/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["features", "pricing", "faq"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top < 120 && top > -el.offsetHeight + 120) {
            setActiveSection(id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features",  id: "features" },
    { href: "#pricing",  label: "Plans",      id: "pricing"  },
    { href: "#faq",      label: "FAQ",        id: "faq"      },
  ];

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-oceanic-noir/85 backdrop-blur-xl shadow-premium-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div style={{ display: "flex", height: "72px", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link
            href="/"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-lg shrink-0"
            aria-label="NEURAL.mesh Home"
          >
            <Logo />
          </Link>

          {/* Desktop Nav — using inline styles to guarantee spacing in Tailwind v4 */}
          <nav
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "4px" }}
            aria-label="Main Navigation"
          >
            {navLinks.map(({ href, label, id }) => (
              <Link
                key={id}
                href={href}
                style={{ position: "relative", display: "inline-flex", alignItems: "center", padding: "6px 14px", borderRadius: "8px", fontSize: "14px", fontWeight: 500, textDecoration: "none", transition: "all 0.2s", color: activeSection === id ? "#F1F6F4" : "rgba(241,246,244,0.65)", background: activeSection === id ? "rgba(255,255,255,0.05)" : "transparent" }}
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia group"
              >
                {label}
                <span
                  style={{
                    position: "absolute",
                    bottom: "4px",
                    left: "14px",
                    right: "14px",
                    height: "1.5px",
                    borderRadius: "999px",
                    background: "#FFC801",
                    transformOrigin: "left",
                    transform: activeSection === id ? "scaleX(1)" : "scaleX(0)",
                    opacity: activeSection === id ? 1 : 0,
                    transition: "transform 0.25s, opacity 0.25s",
                  }}
                  className="group-hover:!scale-x-100 group-hover:!opacity-100"
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "12px" }}
          >
            <Link
              href="#pricing"
              style={{ display: "inline-flex" }}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-xl"
            >
              <Button variant="secondary" size="sm">Pricing</Button>
            </Link>
            <Link
              href="#cta"
              style={{ display: "inline-flex" }}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-xl"
            >
              <Button variant="primary" size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-arctic-powder hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia md:hidden transition-colors"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "border-b border-white/8 bg-oceanic-noir/95 backdrop-blur-2xl"
            : ""
        }`}
        style={{ maxHeight: isOpen ? "400px" : "0px" }}
        aria-hidden={!isOpen}
      >
        <nav
          style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "12px 24px 24px" }}
          aria-label="Mobile Navigation"
        >
          {navLinks.map(({ href, label, id }) => (
            <Link
              key={id}
              href={href}
              onClick={() => setIsOpen(false)}
              style={{ display: "block", fontSize: "15px", fontWeight: 600, color: "rgba(241,246,244,0.85)", padding: "12px", borderRadius: "8px", borderBottom: "1px solid rgba(255,255,255,0.05)", textDecoration: "none", transition: "color 0.2s" }}
              className="hover:text-white hover:bg-white/5"
            >
              {label}
            </Link>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "16px" }}>
            <Link href="#pricing" onClick={() => setIsOpen(false)} style={{ display: "block" }}>
              <Button variant="secondary" size="md" fullWidth>Pricing</Button>
            </Link>
            <Link href="#cta" onClick={() => setIsOpen(false)} style={{ display: "block" }}>
              <Button variant="primary" size="md" fullWidth>Get Started</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
