import type { Metadata } from "next";
import Script from "next/script";
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
