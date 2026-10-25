import styles from "./plan-offer-panel.module.css";

/**
 * Matriz editorial dos benefícios de cada assinatura (site comercial).
 * Fonte: matriz comercial aprovada na Home V5 Waldemática, outubro/2026.
 * Não determina permissões: os acessos são validados pela Waldemática IA.
 * Dados de preço e de checkout não pertencem a este componente.
 */
export type OfferPlanCode =
  | "extensivo"
  | "semiextensivo"
  | "enem"
  | "padawan_1"
  | "padawan_3"
  | "profmat"
  | "profmat_completo";

type Group = { heading: string; items: readonly string[] };
type Highlight = { label: string; title: string; detail: string };
type PlanOffer = {
  name: string;
  duration: string;
  title: string;
  intro: string;
  groups: readonly Group[];
  highlight: Highlight;
  footnote?: string;
};

export const planOffers: Record<OfferPlanCode, PlanOffer> = {
  extensivo: {
    name: "Extensivo",
    duration: "12 meses",
    title: "Tudo o que o Extensivo inclui",
    intro: "Uma preparação completa, da base à reta final.",
    groups: [
      {
        heading: "Formação completa",
        items: [
          "Todos os assuntos da Matemática — 62 módulos",
          "Trilha estruturada, checkpoints e avaliações",
          "Videoaulas, PDFs, exercícios e listas",
        ],
      },
      {
        heading: "Plataforma e resoluções",
        items: [
          "Lia: Tutor IA com apoio aos estudos",
          "Resoluções das listas em vídeo",
          "Resoluções comentadas de vestibulares",
          "Matemática Básica e Revisão Geral Teórica",
        ],
      },
      {
        heading: "Preparação para as provas",
        items: [
          "Simulados especiais",
          "Revisão ENEM e revisão para provas objetivas",
        ],
      },
    ],
    highlight: {
      label: "BÔNUS INCLUÍDO",
      title: "Curso completo de Revisão da 2ª Fase",
      detail: "Questões dissertativas com resoluções e aprofundamento.",
    },
  },
  semiextensivo: {
    name: "Semiextensivo",
    duration: "6 meses",
    title: "Tudo o que o Semiextensivo inclui",
    intro: "Toda a Matemática em um período de acesso mais curto.",
    groups: [
      {
        heading: "Formação completa",
        items: [
          "Todos os assuntos da Matemática — 62 módulos",
          "Trilha estruturada, checkpoints e avaliações",
          "Videoaulas, PDFs, exercícios e listas",
        ],
      },
      {
        heading: "Plataforma e resoluções",
        items: [
          "Lia: Tutor IA com apoio aos estudos",
          "Resoluções das listas em vídeo",
          "Resoluções comentadas de vestibulares",
          "Matemática Básica e Revisão Geral Teórica",
        ],
      },
      {
        heading: "Preparação para as provas",
        items: [
          "Simulados especiais",
          "Revisão ENEM e revisão para provas objetivas",
        ],
      },
    ],
    highlight: {
      label: "DIFERENCIAL",
      title: "Mesma grade de Matemática do Extensivo",
      detail: "Seis meses para organizar sua preparação. Não inclui o Curso de Revisão da 2ª Fase.",
    },
  },
  enem: {
    name: "Plano ENEM",
    duration: "9 meses",
    title: "Tudo o que o Plano ENEM inclui",
    intro: "Uma trilha direcionada para a prova de Matemática do ENEM.",
    groups: [
      {
        heading: "Estudo direcionado",
        items: [
          "Trilha específica de Matemática para o ENEM",
          "Videoaulas, PDFs, exercícios e listas",
          "Checkpoints, avaliações e acompanhamento",
        ],
      },
      {
        heading: "Plataforma e resoluções",
        items: [
          "Lia: Tutor IA com apoio aos estudos",
          "Resoluções das listas em vídeo",
          "Matemática Básica",
        ],
      },
      {
        heading: "Revisões incluídas",
        items: [
          "Revisão com questões do ENEM",
          "Revisão Geral Teórica",
        ],
      },
    ],
    highlight: {
      label: "FOCO NO SEU OBJETIVO",
      title: "Preparação específica para o ENEM",
      detail: "Conteúdos organizados para essa prova. A coleção separada de simulados especiais não integra o plano.",
    },
  },
  padawan_3: {
    name: "Padawan 3",
    duration: "3 meses",
    title: "Tudo o que o Padawan 3 inclui",
    intro: "Três meses para concentrar seus estudos nos assuntos desejados.",
    groups: [
      {
        heading: "Conteúdos e prática",
        items: [
          "Grade completa de Matemática disponível",
          "Videoaulas, PDFs, exercícios e listas",
          "Checkpoints e avaliações da sua trilha",
        ],
      },
      {
        heading: "Plataforma e suporte",
        items: [
          "Lia: Tutor IA com apoio aos estudos",
          "Resoluções das listas em vídeo",
          "Coleção Matemática Básica",
        ],
      },
    ],
    highlight: {
      label: "IDEAL PARA REVISÃO PONTUAL",
      title: "Estude vários assuntos com foco",
      detail: "Não inclui coleções especiais de simulados e cursos de revisão.",
    },
  },
  padawan_1: {
    name: "Padawan 1",
    duration: "1 mês",
    title: "Tudo o que o Padawan 1 inclui",
    intro: "Um mês de acesso para estudar ou revisar assuntos específicos.",
    groups: [
      {
        heading: "Conteúdos e prática",
        items: [
          "Grade completa de Matemática disponível",
          "Videoaulas, PDFs, exercícios e listas",
          "Checkpoints e avaliações da sua trilha",
        ],
      },
      {
        heading: "Plataforma e suporte",
        items: [
          "Lia: Tutor IA com apoio aos estudos",
          "Resoluções das listas em vídeo",
          "Coleção Matemática Básica",
        ],
      },
    ],
    highlight: {
      label: "ESTUDO PONTUAL",
      title: "Acesse o conteúdo de que precisa",
      detail: "Não inclui coleções especiais de simulados e cursos de revisão.",
    },
  },
  profmat: {
    name: "PROFMAT / ENA",
    duration: "6 meses",
    title: "Tudo o que o PROFMAT / ENA inclui",
    intro: "Preparação direcionada ao Exame Nacional de Acesso.",
    groups: [
      {
        heading: "Trilha e prática",
        items: [
          "Trilha específica do PROFMAT / ENA",
          "Videoaulas, PDFs, exercícios e listas",
          "Checkpoints e avaliações da trilha",
        ],
      },
      {
        heading: "Plataforma e resoluções",
        items: [
          "Lia: Tutor IA com apoio aos estudos",
          "Resoluções das listas em vídeo",
          "Resoluções comentadas de questões",
          "Matemática Básica e Revisão Geral Teórica",
        ],
      },
      {
        heading: "Treinamento para a prova",
        items: ["Simulados especiais"],
      },
    ],
    highlight: {
      label: "FOCO NO ENA",
      title: "Trilha orientada ao ingresso no PROFMAT",
      detail: "Preparação específica para o exame, com seus pré-requisitos.",
    },
  },
  profmat_completo: {
    name: "PROFMAT Completo",
    duration: "9 meses",
    title: "Tudo o que o PROFMAT Completo inclui",
    intro: "Formação matemática abrangente com recursos para sua preparação.",
    groups: [
      {
        heading: "Formação completa",
        items: [
          "Todos os assuntos da Matemática — 62 módulos",
          "Trilha, checkpoints e avaliações",
          "Videoaulas, PDFs, exercícios e listas",
        ],
      },
      {
        heading: "Plataforma e resoluções",
        items: [
          "Lia: Tutor IA com apoio aos estudos",
          "Resoluções das listas em vídeo",
          "Resoluções comentadas de vestibulares",
          "Matemática Básica e Revisão Geral Teórica",
        ],
      },
      {
        heading: "Preparação complementar",
        items: ["Simulados especiais", "Revisões para provas objetivas"],
      },
    ],
    highlight: {
      label: "GRADE AMPLIADA",
      title: "Mais assuntos para aprofundar seus estudos",
      detail: "Não inclui o Curso de Revisão da 2ª Fase.",
    },
  },
};

/** Apresentação compartilhada: aplicar nas outras páginas após aprovação visual. */
export default function PlanOfferPanel({ planCode }: { planCode: OfferPlanCode }) {
  const offer = planOffers[planCode];

  return (
    <aside className={styles.panel} aria-label={`Conteúdo da assinatura ${offer.name}`}>
      <div className={styles.panelGlow} aria-hidden="true" />
      <div className={styles.topline}>
        <span className={styles.kicker}><span aria-hidden="true">✦</span> SUA ASSINATURA INCLUI</span>
        <span className={styles.duration}>{offer.duration}</span>
      </div>
      <div className={styles.intro}>
        <h2>{offer.title}</h2>
        <p>{offer.intro}</p>
      </div>
      <div className={styles.groups}>
        {offer.groups.map((group) => (
          <section className={styles.group} key={group.heading} aria-label={group.heading}>
            <h3>{group.heading}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <span className={styles.check} aria-hidden="true">✓</span>
                  <span className={styles.itemText}>{item}</span>
                  <span className={styles.included} aria-label="Incluído">Incluído</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className={styles.highlight}>
        <div className={styles.highlightIcon} aria-hidden="true">✦</div>
        <div className={styles.highlightContent}>
          <div className={styles.highlightEyebrow}>{offer.highlight.label}</div>
          <strong>{offer.highlight.title}</strong>
          <p>{offer.highlight.detail}</p>
        </div>
      </div>
      {offer.footnote ? <p className={styles.footnote}>{offer.footnote}</p> : null}
    </aside>
  );
}
