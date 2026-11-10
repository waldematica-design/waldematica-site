import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Geist } from "next/font/google";
import FreePlatformDemo from "./FreePlatformDemo";
import { FREE_COURSE_COOKIE, hasValidFreeCourseAccess } from "../free-course-access";
import "./demo-global.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
});

// Precisa ser renderizada por solicitação: o acesso é conferido no servidor.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Conheça a plataforma IA | Demonstração gratuita",
  description:
    "Conheça a experiência Waldemática IA e assista a 23 videoaulas gratuitas de Álgebra, Geometria Plana e Trigonometria.",
  robots: { index: false, follow: false },
};

export default async function FreePlatformPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(FREE_COURSE_COOKIE)?.value;

  if (!hasValidFreeCourseAccess(accessToken)) {
    redirect("/cursos-gratis/?cadastro=necessario#aulas");
  }

  return (
    <div className={geistSans.className}>
      <FreePlatformDemo />
    </div>
  );
}
