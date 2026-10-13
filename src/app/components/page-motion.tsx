"use client";

import { useEffect } from "react";

/** Reveals the page sections when they enter the viewport, once per element. */
export default function PageMotion() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-wm-reveal]"),
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          element.classList.add("wm-reveal-visible");
          observer.unobserve(element);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => {
      const requestedDelay = Number(element.dataset.wmDelay ?? 0);
      const delay = Number.isFinite(requestedDelay)
        ? Math.min(500, Math.max(0, requestedDelay))
        : 0;
      element.style.setProperty("--wm-reveal-delay", `${delay}ms`);
      element.classList.add("wm-reveal-pending");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
