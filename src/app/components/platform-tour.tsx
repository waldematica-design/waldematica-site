"use client";

import { useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./platform-tour.module.css";

type TourTab = {
  id: string;
  label: string;
  icon: string;
  overline: string;
  headline: string;
  description: string;
  benefits: readonly [string, string, string];
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  color: string;
};

// Capturas reais da plataforma, anonimizadas para publicação no site comercial.
// Os dados e conteúdos exibidos nas telas variam conforme o aluno e o plano adquirido.
const tabs: readonly TourTab[] = [
  {
    id: "inicio", label: "Início", icon: "⌂", overline: "01 · VISÃO GERAL",
    headline: "Seus estudos começam com um próximo passo claro.",
    description: "Ao entrar, você vê seu progresso, a etapa atual e o que fazer depois — sem precisar procurar por onde continuar.",
    benefits: ["Próxima atividade em destaque", "Progresso do curso", "Acesso rápido ao Tutor IA"],
    image: "/images/plataforma/inicio.webp", imageAlt: "Tela inicial real da Waldemática IA com próximo checkpoint, progresso e atalho para o Tutor IA.",
    width: 1248, height: 1240, color: "#81e2ec",
  },
  {
    id: "biblioteca", label: "Biblioteca", icon: "▣", overline: "02 · CONTEÚDO ORGANIZADO",
    headline: "Aulas, materiais e resoluções no mesmo lugar.",
    description: "Uma biblioteca organizada com videoaulas, PDFs, resoluções das listas e coleções especiais — respeitando o que está incluído em sua assinatura.",
    benefits: ["Videoaulas por módulo", "Materiais e resoluções", "Coleções conforme o plano"],
    image: "/images/plataforma/biblioteca.webp", imageAlt: "Biblioteca real da Waldemática IA com videoaulas, materiais e coleções especiais.",
    width: 1257, height: 1145, color: "#9addc0",
  },
  {
    id: "tutor", label: "Tutor IA", icon: "✦", overline: "03 · AJUDA INTELIGENTE",
    headline: "Conheça a Lia, sua companheira de estudos.",
    description: "Converse naturalmente, peça dicas e entenda cada passo. A Lia pode considerar a sua trilha e seu progresso quando isso ajuda na explicação.",
    benefits: ["Ajuda com exercícios e fotos", "Explicações passo a passo", "Preferências personalizadas"],
    image: "/images/plataforma/tutor-ia.webp", imageAlt: "Tela real do Tutor IA Lia, com conversa matemática, campo de mensagem e painel de personalização.",
    width: 1242, height: 1130, color: "#c5b3ff",
  },
  {
    id: "trilha", label: "Minha Trilha", icon: "↗", overline: "04 · PLANEJAMENTO",
    headline: "Saiba o que estudar e acompanhe cada conquista.",
    description: "Visualize a sequência dos módulos, os pré-requisitos, os conteúdos concluídos e os próximos passos da preparação.",
    benefits: ["Sequência organizada", "Pré-requisitos identificados", "Módulos concluídos e futuros"],
    image: "/images/plataforma/minha-trilha.webp", imageAlt: "Minha Trilha de Estudos, com módulos em sequência e progresso acadêmico.",
    width: 1248, height: 1126, color: "#88d9f1",
  },
  {
    id: "desempenho", label: "Desempenho", icon: "▥", overline: "05 · EVOLUÇÃO",
    headline: "Seu progresso aparece em números.",
    description: "Acompanhe avaliações, resultados, módulos concluídos e questões que podem ser revisitadas para fortalecer o aprendizado.",
    benefits: ["Histórico de avaliações", "Indicadores de evolução", "Revisão das questões"],
    image: "/images/plataforma/desempenho.webp", imageAlt: "Painel de desempenho da Waldemática IA com avaliações, média de resultados e progresso.",
    width: 1239, height: 1115, color: "#eac2a6",
  },
  {
    id: "suporte", label: "Suporte", icon: "?", overline: "06 · TRANQUILIDADE",
    headline: "Uma equipe para ajudar quando você precisar.",
    description: "Encontre perguntas frequentes, orientações de acesso e canais de atendimento para resolver questões sobre o uso da plataforma.",
    benefits: ["Perguntas frequentes", "Ajuda com acesso e pagamento", "Atendimento da equipe"],
    image: "/images/plataforma/suporte.webp", imageAlt: "Central de Suporte da Waldemática IA com FAQ e canais de atendimento.",
    width: 1257, height: 1071, color: "#eac69b",
  },
];

export default function PlatformTour() {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const item = tabs[selected];

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % tabs.length; break;
      case "ArrowLeft": next = (index - 1 + tabs.length) % tabs.length; break;
      case "Home": next = 0; break;
      case "End": next = tabs.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setSelected(next);
    buttons.current[next]?.focus();
  }

  return (
    <section id="waldematica-ia" className={styles.section} aria-labelledby="tour-title">
      <div className={styles.gridGlow} aria-hidden="true" />
      <div className={styles.inner}>
        <header className={styles.heading}>
          <div className={styles.headingCopy}>
            <span className={styles.eyebrow}><span aria-hidden="true" className={styles.pulse} /> CONHEÇA A PLATAFORMA POR DENTRO</span>
            <h2 id="tour-title">Veja como é estudar na <span>Waldemática IA.</span></h2>
            <p>Muito além das videoaulas: uma plataforma com trilha organizada, biblioteca, acompanhamento do desempenho e Tutor IA para apoiar seus estudos.</p>
          </div>
          <div className={styles.authenticity}>
            <span className={styles.authenticityIcon} aria-hidden="true">✓</span>
            <div><strong>Imagens reais da plataforma</strong><span>Explore as seis áreas abaixo.</span></div>
          </div>
        </header>

        <div role="tablist" aria-label="Conheça as áreas da Waldemática IA" className={styles.tabs}>
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              id={`tour-tab-${tab.id}`}
              ref={(el) => { buttons.current[index] = el; }}
              type="button"
              role="tab"
              tabIndex={index === selected ? 0 : -1}
              aria-selected={selected === index}
              aria-controls="tour-panel"
              onClick={() => setSelected(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={`${styles.tab} ${selected === index ? styles.tabActive : ""}`}
            >
              <span aria-hidden="true" className={styles.tabIcon}>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div id="tour-panel" role="tabpanel" aria-labelledby={`tour-tab-${item.id}`} className={styles.display}>
          <div className={styles.description}>
            <span className={styles.slideCounter}>{item.overline}</span>
            <h3>{item.headline}</h3>
            <p>{item.description}</p>
            <ul className={styles.benefits}>
              {item.benefits.map((benefit) => <li key={benefit}><span aria-hidden="true">✓</span>{benefit}</li>)}
            </ul>
            <div className={styles.actions}>
              <Link href="#todos-os-cursos" className={styles.mainAction}>Escolher meu plano <span aria-hidden="true">↗</span></Link>
              <a href="https://ia.waldematica.com.br" className={styles.secondaryAction}>Já sou aluno? Entrar</a>
            </div>
            <div className={styles.navigation} aria-label="Navegação entre as telas">
              <span className={styles.navigationText}>TELA {String(selected + 1).padStart(2,"0")} / {String(tabs.length).padStart(2,"0")}</span>
              <button type="button" aria-label="Ver tela anterior" onClick={() => setSelected((current) => (current - 1 + tabs.length) % tabs.length)}>←</button>
              <button type="button" aria-label="Ver próxima tela" onClick={() => setSelected((current) => (current + 1) % tabs.length)}>→</button>
            </div>
          </div>

          <div className={styles.visual} style={{ "--tour-accent": item.color } as CSSProperties}>
            <div className={styles.device}>
              <div className={styles.deviceHeader}>
                <div className={styles.windowDots} aria-hidden="true"><i /><i /><i /></div>
                <div className={styles.deviceAddress}>ia.waldematica.com.br</div>
                <div className={styles.deviceLabel}><span /> DEMONSTRAÇÃO</div>
              </div>
              <a
                href={item.image}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imageLink}
                aria-label={`Ampliar captura real da área ${item.label} em outra aba`}
                title="Clique para ampliar esta tela"
              >
                <Image
                  key={item.image}
                  src={item.image}
                  alt={item.imageAlt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 980px) 100vw, 60vw"
                  className={styles.screenshot}
                  priority={false}
                />
                <span className={styles.zoomBadge}>⤢ &nbsp;Ampliar tela</span>
              </a>
              <div className={styles.deviceFooter}>
                <span>WALDEMÁTICA IA <b>•</b> {item.label.toUpperCase()}</span>
                <span>IMAGEM REAL</span>
              </div>
            </div>
            <p className={styles.disclaimer}>Captura demonstrativa com dados pessoais anonimizados. Telas, indicadores e conteúdos disponíveis variam conforme o aluno e o plano contratado.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
