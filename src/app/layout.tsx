import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { constructMetadata, viewportConfig } from "@/config/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Viewport } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// Configure base metadata with our SEO foundation
export const metadata: Metadata = constructMetadata();
export const viewport: Viewport = viewportConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-oceanic-noir text-arctic-powder selection:bg-forsythia selection:text-oceanic-noir">
        {/* Skip-to-content Link for Screen Readers and Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-forsythia focus:text-oceanic-noir focus:font-semibold focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-nocturnal-expedition focus:ring-offset-2"
        >
          Skip to main content
        </a>

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <main
          id="main-content"
          className="flex-grow focus:outline-none"
          tabIndex={-1}
        >
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
