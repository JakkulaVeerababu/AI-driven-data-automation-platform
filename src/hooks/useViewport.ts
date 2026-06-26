"use client";

import { useState, useEffect } from "react";

/**
 * Throttled viewport width hook to check if screen width matches mobile layout breakpoint.
 * Uses requestAnimationFrame to prevent layout thrashing and performance degradation on drag resizes.
 *
 * @param mobileBreakpoint Breakpoint threshold in pixels (defaults to 1024px)
 */
export default function useViewport(mobileBreakpoint = 1024) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkViewport = () => {
      const match = window.innerWidth < mobileBreakpoint;
      setIsMobile((prev) => (prev === match ? prev : match));
    };

    // Initial check on mount
    checkViewport();

    // Throttled resize listener using requestAnimationFrame
    let activeFrameId: number | null = null;
    
    const handleResize = () => {
      if (activeFrameId !== null) {
        window.cancelAnimationFrame(activeFrameId);
      }
      activeFrameId = window.requestAnimationFrame(() => {
        checkViewport();
        activeFrameId = null;
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      if (activeFrameId !== null) {
        window.cancelAnimationFrame(activeFrameId);
      }
    };
  }, [mobileBreakpoint]);

  // Fallback to false during server-side pre-rendering to prevent Next.js hydration exceptions
  return isMobile !== null ? isMobile : false;
}
