import type { Metadata } from "next";
import Script from "next/script";
import { LegalFooter } from "./components/legal-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://waldematica.com.br"),

  title: {
    default: "Waldemática | Matemática para ENEM, Vestibulares e PROFMAT",
    template: "%s | Waldemática",
  },

  description:
    "Cursos de Matemática para ENEM, vestibulares e PROFMAT com metodologia, prática orientada e acompanhamento inteligente.",

  applicationName: "Waldemática",
  creator: "Professor Wal",
  publisher: "Waldemática",
  category: "Educação",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Waldemática",
    title: "Waldemática | Matemática para ENEM, Vestibulares e PROFMAT",
    description:
      "Cursos de Matemática para ENEM, vestibulares e PROFMAT com metodologia, prática orientada e acompanhamento inteligente.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Waldemática | Matemática para ENEM, Vestibulares e PROFMAT",
    description:
      "Cursos de Matemática para ENEM, vestibulares e PROFMAT com metodologia, prática orientada e acompanhamento inteligente.",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const checkoutLinksScript = `
(() => {
  const directCheckouts = {
    Q38822618K: "https://pay.hotmart.com/Q38822618K",
    C39761618J: "https://pay.hotmart.com/C39761618J",
    H39858673J: "https://pay.hotmart.com/H39858673J",
  };

  const offerCheckouts = {
    b5i5zjgi: "https://pay.hotmart.com/A39248741H?off=b5i5zjgi&checkoutMode=10",
    dvprrf61: "https://pay.hotmart.com/A39248741H?off=dvprrf61&checkoutMode=10",
    "52uzidsx": "https://pay.hotmart.com/A39248741H?off=52uzidsx&checkoutMode=10",
    tqsrzbn2: "https://pay.hotmart.com/A39248741H?off=tqsrzbn2&checkoutMode=10",
  };

  const rewriteCheckoutLinks = () => {
    document.querySelectorAll('a[href*="pay.hotmart.com"]').forEach((link) => {
      const href = link.getAttribute("href");

      if (!href) {
        return;
      }

      try {
        const url = new URL(href, window.location.origin);
        const productCode = url.pathname.split("/").filter(Boolean).pop();

        if (productCode && directCheckouts[productCode]) {
          link.setAttribute("href", directCheckouts[productCode]);
          return;
        }

        if (productCode === "A39248741H") {
          const offer = url.searchParams.get("off");

          if (offer && offerCheckouts[offer]) {
            link.setAttribute("href", offerCheckouts[offer]);
          }
        }
      } catch {
        // Mantém o link original caso ele não seja uma URL válida.
      }
    });
  };

  const observer = new MutationObserver(rewriteCheckoutLinks);

  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", rewriteCheckoutLinks, {
      once: true,
    });
  } else {
    rewriteCheckoutLinks();
  }
})();
`;

const agentBrandScript = `
(() => {
  const logoUrl = "https://wal-ai-agent.vercel.app/waldematica-ai-logo.png";

  const applyAgentBrand = () => {
    const launcher = document.querySelector(".wm-ai-launcher");

    if (!launcher) {
      return;
    }

    const isOpen = launcher.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      return;
    }

    const icon = launcher.querySelector(".wm-ai-launcher-icon");

    if (icon && !icon.querySelector("img")) {
      icon.textContent = "";

      const image = document.createElement("img");
      image.src = logoUrl;
      image.alt = "";
      image.setAttribute("aria-hidden", "true");
      image.draggable = false;
      image.style.width = "27px";
      image.style.height = "27px";
      image.style.display = "block";
      image.style.objectFit = "contain";
      image.style.borderRadius = "50%";

      icon.appendChild(image);
    }
  };

  const observer = new MutationObserver(applyAgentBrand);

  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["aria-expanded"],
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyAgentBrand, { once: true });
  } else {
    applyAgentBrand();
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <LegalFooter />

        <script dangerouslySetInnerHTML={{ __html: checkoutLinksScript }} />
        <script dangerouslySetInnerHTML={{ __html: agentBrandScript }} />

        <Script
          src="https://wal-ai-agent.vercel.app/waldematica-ai-widget.js"
          strategy="afterInteractive"
          data-api-url="https://wal-ai-agent.vercel.app/api/waldematica/chat"
          data-title="Agente IA Waldemática"
          data-subtitle="Online"
          data-button-label="Agente IA Waldemática"
        />
      </body>
    </html>
  );
}
