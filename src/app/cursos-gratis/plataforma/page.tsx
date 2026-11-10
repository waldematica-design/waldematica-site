import type { Metadata } from "next";
import FreePlatformDemo from "./FreePlatformDemo";
import { Geist } from "next/font/google";
import "./demo-global.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Conheça a plataforma IA | Demonstração gratuita",
  description:
    "Conheça a experiência Waldemática IA e assista a 23 videoaulas gratuitas de Álgebra, Geometria Plana e Trigonometria.",
  robots: { index: false, follow: false },
};

export default function FreePlatformPage() {
  return (
    <div className={geistSans.className}>
      <FreePlatformDemo />
    </div>
  );
}
