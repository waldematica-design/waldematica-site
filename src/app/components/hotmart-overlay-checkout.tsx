"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type OverlayElements = {
  attach: (selector: string) => void;
};

type CheckoutElements = {
  init: (
    mode: "overlayCheckout",
    options: { off: string },
  ) => OverlayElements;
};

declare global {
  interface Window {
    checkoutElements?: CheckoutElements;
    __waldematicaHotmartScriptPromise?: Promise<void>;
  }
}

type CheckoutConfig = {
  pathname: string;
  offerCode: string;
  checkoutHrefPrefix: string;
  triggerId: string;
};

const HOTMART_SCRIPT_ID = "waldematica-hotmart-checkout-elements";
const HOTMART_SCRIPT_SRC =
  "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";

const checkoutConfigs: CheckoutConfig[] = [
  {
    pathname: "/extensivo",
    offerCode: "wozd889t",
    checkoutHrefPrefix: "https://pay.hotmart.com/Q38822618K",
    triggerId: "hotmart-overlay-extensivo-trigger",
  },
];

function loadHotmartScript() {
  if (window.checkoutElements) {
    return Promise.resolve();
  }

  if (window.__waldematicaHotmartScriptPromise) {
    return window.__waldematicaHotmartScriptPromise;
  }

  window.__waldematicaHotmartScriptPromise = new Promise<void>(
    (resolve, reject) => {
      const existingScript = document.getElementById(
        HOTMART_SCRIPT_ID,
      ) as HTMLScriptElement | null;

      if (existingScript) {
        existingScript.addEventListener("load", () => resolve(), {
          once: true,
        });
        existingScript.addEventListener(
          "error",
          () => reject(new Error("hotmart_script_failed")),
          { once: true },
        );
        return;
      }

      const script = document.createElement("script");
      script.id = HOTMART_SCRIPT_ID;
      script.src = HOTMART_SCRIPT_SRC;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("hotmart_script_failed"));
      document.head.appendChild(script);
    },
  );

  return window.__waldematicaHotmartScriptPromise;
}

export function HotmartOverlayCheckout() {
  const pathname = usePathname();
  const overlayReadyRef = useRef(false);

  const config = checkoutConfigs.find(
    (item) =>
      pathname === item.pathname || pathname === `${item.pathname}/`,
  );

  useEffect(() => {
    overlayReadyRef.current = false;

    if (!config) {
      return;
    }

    let cancelled = false;
    const trigger = document.getElementById(
      config.triggerId,
    ) as HTMLButtonElement | null;

    const openOverlayFromCheckoutLink = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;

      if (
        !anchor ||
        !anchor.href.startsWith(config.checkoutHrefPrefix) ||
        !overlayReadyRef.current ||
        !trigger
      ) {
        return;
      }

      event.preventDefault();
      trigger.click();
    };

    document.addEventListener("click", openOverlayFromCheckoutLink, true);

    loadHotmartScript()
      .then(() => {
        if (cancelled || !trigger || !window.checkoutElements) {
          return;
        }

        const elements = window.checkoutElements.init("overlayCheckout", {
          off: config.offerCode,
        });

        elements.attach(`#${config.triggerId}`);
        overlayReadyRef.current = true;
      })
      .catch(() => {
        // Fallback intencional: os links originais continuam abrindo o checkout.
        overlayReadyRef.current = false;
      });

    return () => {
      cancelled = true;
      overlayReadyRef.current = false;
      document.removeEventListener(
        "click",
        openOverlayFromCheckoutLink,
        true,
      );
    };
  }, [config]);

  if (!config) {
    return null;
  }

  return (
    <button
      id={config.triggerId}
      type="button"
      aria-hidden="true"
      tabIndex={-1}
      hidden
    />
  );
}
