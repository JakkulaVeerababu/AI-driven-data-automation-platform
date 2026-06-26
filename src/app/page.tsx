import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";

const Features = dynamic(() => import("@/components/sections/Features"), { ssr: true });
const Pricing = dynamic(() => import("@/components/sections/Pricing"), { ssr: true });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: true });
const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: true });

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://neuralmesh.io/#organization",
        "name": "NEURAL.mesh",
        "url": "https://neuralmesh.io",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://neuralmesh.io/#logo",
          "url": "https://neuralmesh.io/assets/svg/cube-16-solid.svg",
          "caption": "NEURAL.mesh Logo"
        },
        "image": {
          "@id": "https://neuralmesh.io/#logo"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://neuralmesh.io/#software",
        "name": "NEURAL.mesh AI Platform",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Deploy, orchestrate, and execute autonomous AI data automation pipelines inside isolated kernel sandboxes with sub-millisecond telemetry.",
        "publisher": {
          "@id": "https://neuralmesh.io/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://neuralmesh.io/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the primary tech stack for this battle submission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The project is architected with Next.js (App Router), TypeScript, and Tailwind CSS. We use native CSS and CSS variables for theming, transitions, and accessibility compliance, avoiding heavy animation or widget packages."
            }
          },
          {
            "@type": "Question",
            "name": "How does the pricing switcher calculate AI node pricing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The pricing switcher uses our usePricingState hook, which retrieves currency rates (USD, INR, EUR) and applies a 20% discount on annual billing tiers. Multi-dimensional configs prevent layout shift and isolate renders."
            }
          },
          {
            "@type": "Question",
            "name": "What accessibility measures have been integrated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We support visible keyboard focus indicators via focus-visible rings, a screen-reader-only skip link to bypass navigation, semantic landmarks for easy page parsing, and complete prefers-reduced-motion queries to suppress animations."
            }
          },
          {
            "@type": "Question",
            "name": "How are the SVG telemetry widgets and assets loaded?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All SVG telemetry maps and system icons are stored locally in public/assets/svg/ to prevent third-party fetch bottlenecks. This guarantees page-load speeds are optimized for Lighthouse."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Structured data injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Brand Showcase & Native Video */}
      <Hero />

      {/* Social Trust, Stats, Company Logos & Testimonials */}
      <SocialProof />

      {/* Visual Bento Grid Features Scaffold */}
      <Features />

      {/* Subscription Pricing Cards Scaffold */}
      <Pricing />

      {/* Accessibility Compliant FAQ Accordion */}
      <FAQ />

      {/* Premium Conversion Zone */}
      <CTA />
    </>
  );
}
