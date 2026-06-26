/**
 * Triggers a staggered animation list using the native Web Animations API (WAAPI).
 * Completely GPU-accelerated and layout-isolated.
 *
 * @param elements Array of HTMLElements to animate
 * @param keyframes Keyframe configurations (e.g. opacity, transform)
 * @param options Base keyframe options (duration, easing, etc.)
 * @param staggerDelay Delay between each element in milliseconds
 */
export function animateStagger(
  elements: HTMLElement[],
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions = {},
  staggerDelay = 50
): Animation[] {
  if (!elements || elements.length === 0) return [];

  // Respect system reduced-motion parameters
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    // Instantly complete animations and place them in their final state
    return elements.map((el) => {
      const finalKeyframe = keyframes[keyframes.length - 1];
      Object.assign(el.style, finalKeyframe);
      return new Animation();
    });
  }

  const defaultOptions: KeyframeAnimationOptions = {
    duration: 400,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    fill: "both",
    ...options,
  };

  return elements.map((el, index) => {
    const delay = (options.delay as number || 0) + index * staggerDelay;
    const elementOptions = { ...defaultOptions, delay };

    // Fire native WAAPI trigger
    return el.animate(keyframes, elementOptions);
  });
}
