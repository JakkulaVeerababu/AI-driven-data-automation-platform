"use client";

import { useEffect, useRef } from "react";

/**
 * Custom hook to calculate cursor position offsets for parallax depth layers.
 * Directly mutates the reference element style to prevent React state re-renders.
 * Automatically deactivates when prefers-reduced-motion is active.
 *
 * @param factor Sensitivity multiplier (lower values mean slower parallax)
 */
export default function useMouseParallax<T extends HTMLElement>(factor = 0.015) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    // Respect system accessibility parameters
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const el = elementRef.current;
    if (!el) return;

    let activeFrameId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const deltaX = (e.clientX - centerX) * factor;
      const deltaY = (e.clientY - centerY) * factor;

      if (activeFrameId !== null) {
        cancelAnimationFrame(activeFrameId);
      }

      activeFrameId = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px, 0)`;
        activeFrameId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (activeFrameId !== null) {
        cancelAnimationFrame(activeFrameId);
      }
    };
  }, [factor]);

  return elementRef;
}
