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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}

        <Script
          src="https://wal-ai-agent.vercel.app/waldematica-ai-widget.js"
          strategy="afterInteractive"
          data-api-url="https://wal-ai-agent.vercel.app/api/waldematica/chat"
          data-title="Agente IA Waldemática"
          data-subtitle="Online"
          data-button-label="Fale com nossa IA"
        />
      </body>
    </html>
  );
}
