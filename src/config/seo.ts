import { Metadata } from "next";

export const siteConfig = {
  name: "NEURAL.mesh — Autonomous AI Data Automation & Workflow Telemetry",
  shortName: "NEURAL.mesh",
  description: "Deploy, orchestrate, and execute autonomous AI data automation pipelines inside isolated kernel sandboxes with sub-millisecond telemetry.",
  url: "https://neuralmesh.io", // Production landing page URL
  ogImage: "/assets/svg/cube-16-solid.svg", // Logo placeholder
  twitterHandle: "@neuralmesh_labs",
  themeColor: "#172B36", // Oceanic Noir
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.shortName}`,
    },
    description,
    applicationName: siteConfig.shortName,
    authors: [{ name: "Neural Mesh Engineering Labs", url: siteConfig.url }],
    generator: "Next.js",
    keywords: [
      "AI data automation",
      "autonomous AI workflows",
      "AI sandbox nodes",
      "execution telemetry",
      "isolated AI agent sandboxes",
      "WCAG accessibility SaaS",
      "neural workflow mesh"
    ],
    creator: "Neural Mesh Core Engineers",
    publisher: "NEURAL.mesh Inc.",
    category: "technology",
    
    // Canonical link mapping
    alternates: {
      canonical: "./",
    },

    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.shortName,
      images: [
        {
          url: image,
          width: 512,
          height: 512,
          alt: "NEURAL.mesh branding logo representation",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: siteConfig.twitterHandle,
    },

    icons: {
      icon: icons,
      shortcut: icons,
      apple: icons,
    },

    metadataBase: new URL(siteConfig.url),

    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
export const viewportConfig = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};
