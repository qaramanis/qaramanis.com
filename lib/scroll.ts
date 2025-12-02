/**
 * Smoothly scrolls to the top of the page
 * @param duration - Animation duration in milliseconds (default: 800)
 */
export function scrollToTop(duration: number = 800): void {
  if (typeof window === "undefined") return;

  const start = window.scrollY;
  const startTime = performance.now();

  function animation(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (easeInOutCubic)
    const easing = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start * (1 - easing));

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

/**
 * Scrolls to a specific element
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (default: 0)
 */
export function scrollToElement(elementId: string, offset: number = 0): void {
  if (typeof window === "undefined") return;

  const element = document.getElementById(elementId);
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}

/**
 * Scrolls to a specific Y position
 * @param position - The Y position to scroll to
 */
export function scrollToPosition(position: number): void {
  if (typeof window === "undefined") return;

  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}
