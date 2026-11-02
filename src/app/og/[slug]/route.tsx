import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const dynamicParams = false;

const cards: Record<string, { eyebrow: string; title: string; subtitle: string }> = {
  home: {
    eyebrow: "MATEMÁTICA COM DIREÇÃO",
    title: "Prepare-se para seus objetivos",
    subtitle: "ENEM · Vestibulares · PROFMAT",
  },
  extensivo: {
    eyebrow: "12 MESES · WALDEMÁTICA IA",
    title: "Curso Extensivo de Matemática",
    subtitle: "Preparação completa para ENEM e vestibulares",
  },
  "curso-semiextensivo": {
    eyebrow: "6 MESES · WALDEMÁTICA IA",
    title: "Curso Semiextensivo de Matemática",
    subtitle: "Toda a Matemática, com estudo intensivo e orientação",
  },
  "plano-enem": {
    eyebrow: "9 MESES · WALDEMÁTICA IA",
    title: "Plano ENEM de Matemática",
    subtitle: "Aulas, prática, revisão e trilha direcionada",
  },
  "revisao-1a-fase": {
    eyebrow: "PROVAS OBJETIVAS",
    title: "Revisão 1ª Fase",
    subtitle: "Questões e revisões para vestibulares",
  },
  "revisao-2a-fase": {
    eyebrow: "PROVAS DISSERTATIVAS",
    title: "Revisão 2ª Fase",
    subtitle: "Mais de 200 questões · Treino de escrita matemática",
  },
  padawan: {
    eyebrow: "1 OU 3 MESES · WALDEMÁTICA IA",
    title: "Cursos Padawan",
    subtitle: "Reforço de Matemática nos assuntos que você precisa",
  },
  "curso-profmat": {
    eyebrow: "PROFMAT · ENA",
    title: "Matemática para o PROFMAT",
    subtitle: "Preparação organizada para o Exame Nacional de Acesso",
  },
};

export function generateStaticParams() {
  return Object.keys(cards).map((slug) => ({ slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const card = cards[slug];
  if (!card) return new Response("Not found", { status: 404 });

  // Ícone OFICIAL, com 512 px, já presente no próprio repositório.
  // Imagem gerada durante o build para os slugs estáticos.
  const base64 = await readFile(join(process.cwd(), "src", "app", "icon.png"), "base64");

  return new ImageResponse(
    <div style={{
      width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
      padding: "56px 66px", color: "#f8fbff",
      background: "linear-gradient(120deg,#071023 0%,#0b2551 56%,#064d76 100%)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${base64}`} width={105} height={105} alt="" style={{ borderRadius: 24 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 1 }}>WALDEMÁTICA</div>
          <div style={{ color: "#9bd7ee", fontSize: 21 }}>Matemática inteligente</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 21 }}>
        <div style={{ color: "#7ae3ff", fontSize: 22, fontWeight: 700, letterSpacing: 3 }}>{card.eyebrow}</div>
        <div style={{ fontSize: 61, fontWeight: 800, maxWidth: 1060, lineHeight: 1.08, letterSpacing: -1.6 }}>{card.title}</div>
        <div style={{ color: "#d4e8f8", fontSize: 28 }}>{card.subtitle}</div>
      </div>
      <div style={{ fontSize: 21, color: "#9ed1e9" }}>waldematica.com.br</div>
    </div>,
    {
      width: 1200,
      height: 630,
      headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" },
    }
  );
}
