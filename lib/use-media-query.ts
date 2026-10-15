import { useCallback, useSyncExternalStore } from "react";

/**
 * Live result of a CSS media query. Returns false on the server.
 * @param query - The media query, e.g. "(prefers-reduced-motion: reduce)"
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
