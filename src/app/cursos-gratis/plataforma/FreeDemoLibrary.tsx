"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./free-demo-library.module.css";

type CollectionTone =
  | "mint" | "lagoon" | "lilac" | "indigo" | "sand" | "sage"
  | "sky" | "iris" | "jade" | "slate" | "rose";

type Collection = {
  name: string;
  description: string;
  videos: number;
  folders?: number;
  tone: CollectionTone;
};

type IconName = "folder" | "lock" | "play" | "book" | "layers" | "video" | "arrow" | "sparkles" | "shield";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const content: Record<IconName, ReactNode> = {
    folder: <><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><path d="m3 12 4-3h12" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><path d="M12 14v3" /></>,
    play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4Z" /></>,
    book: <><path d="M12 21V7a4 4 0 0 0-4-4H3v15h5a4 4 0 0 1 4 3Z" /><path d="M12 21V7a4 4 0 0 1 4-4h5v15h-5a4 4 0 0 0-4 3Z" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
    video: <><rect x="2" y="5" width="15" height="14" rx="2" /><path d="m17 10 5-3v10l-5-3Z" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    sparkles: <><path d="m12 3 1.9 5.9L20 11l-6.1 2.1L12 19l-1.9-5.9L4 11l6.1-2.1Z" /><path d="m19 18 .6 1.4L21 20l-1.4.6L19 22l-.6-1.4L17 20l1.4-.6Z" /></>,
    shield: <><path d="m12 2 8 4v6c0 5-3.2 8.2-8 10-4.8-1.8-8-5-8-10V6Z" /><path d="m9 12 2 2 4-4" /></>,
  };

  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      {content[name]}
    </svg>
  );
}

// Catálogo ilustrativo baseado na Biblioteca real mostrada pelo professor em 10/11/2026.
// Estes dados são ESTÁTICOS. A página não consulta a base nem os endpoints da Waldemática IA.
const mainCollections: Collection[] = [
  { name: "Matemática Básica", description: "Fundamentos que sustentam sua evolução.", videos: 8, tone: "mint" },
  { name: "Resoluções Listas de Exercícios", description: "Acompanhe as soluções das suas listas.", folders: 59, videos: 676, tone: "lagoon" },
  { name: "Revisão com questões do ENEM", description: "Questões para consolidar o ENEM.", folders: 2, videos: 41, tone: "iris" },
  { name: "Revisão Geral Teórica", description: "Retome conceitos essenciais da teoria.", videos: 26, tone: "jade" },
];

const additionalCollections: Collection[] = [
  { name: "Resoluções Comentadas", description: "Entenda o caminho de cada resolução.", folders: 46, videos: 523, tone: "lilac" },
  { name: "Revisão 2ª. Fase", description: "Aprofundamento para provas discursivas.", folders: 10, videos: 205, tone: "indigo" },
  { name: "Revisão com questões da Fuvest", description: "Pratique questões da Fuvest.", videos: 16, tone: "sand" },
  { name: "Revisão com questões da UFU", description: "Questões selecionadas da UFU.", videos: 26, tone: "sage" },
  { name: "Revisão com questões da Unicamp", description: "Pratique com questões da Unicamp.", videos: 30, tone: "sky" },
  { name: "Revisões Militares", description: "Preparação com questões militares.", folders: 3, videos: 100, tone: "slate" },
  { name: "Simulados", description: "Coloque seus conhecimentos à prova.", folders: 10, videos: 125, tone: "rose" },
];

const catalogTotal = [...mainCollections, ...additionalCollections]
  .reduce((sum, item) => sum + item.videos, 0);

function CollectionCard({ item, onLocked }: { item: Collection; onLocked: (title: string) => void }) {
  return (
    <button
      type="button"
      className={`${styles.collectionCard} ${styles[`tone${item.tone[0].toUpperCase()}${item.tone.slice(1)}`]}`}
      onClick={() => onLocked(item.name)}
      aria-label={`Conhecer planos para acessar ${item.name}`}
    >
      <span className={styles.collectionTop}>
        <span className={styles.collectionGlyph}><Icon name="lock" size={21} /></span>
        <span className={styles.collectionTag}>EXCLUSIVO</span>
      </span>
      <strong className={styles.collectionTitle}>{item.name}</strong>
      <span className={styles.collectionDescription}>{item.description}</span>
      <span className={styles.collectionFooter}>
        <span className={styles.collectionMetrics}>
          {item.folders ? <span><Icon name="layers" size={14} /> {item.folders} pastas</span> : null}
          <span><Icon name="video" size={14} /> {item.videos} vídeos</span>
        </span>
        <span className={styles.collectionArrow} aria-hidden="true">↗</span>
      </span>
    </button>
  );
}

export default function FreeDemoLibrary({ onLocked, onWatchVideos }: {
  onLocked: (title: string) => void;
  onWatchVideos: () => void;
}) {
  return (
    <div className={styles.library}>
      <section className={styles.hero} aria-label="Apresentação da Biblioteca Waldemática">
        <div className={styles.heroBody}>
          <p className={styles.overline}><span className={styles.dot} /> SUA BIBLIOTECA WALDEMÁTICA</p>
          <h1>Biblioteca de Conteúdos <span role="img" aria-label="livros">📚</span></h1>
          <p>Videoaulas, materiais, resoluções e vídeos especiais para você estudar Matemática com mais profundidade e no seu ritmo. Nesta demonstração, somente os três módulos gratuitos podem ser assistidos.</p>
          <Link href="/extensivo/" className={styles.heroPlanLink}>Acesso de demonstração <span>Conhecer planos ↗</span></Link>
        </div>
        <span className={styles.heroArt} aria-hidden="true" />
      </section>

      <section className={styles.quickSection} aria-labelledby="demo-lib-quick-title">
        <div className={styles.quickHeading}><p className={styles.overline}>COMECE POR AQUI</p><h2 id="demo-lib-quick-title">Seu espaço de estudos</h2></div>
        <div className={styles.quickGrid}>
          <button type="button" className={`${styles.quickCard} ${styles.quickPrimary}`} onClick={onWatchVideos}>
            <span className={styles.quickIcon}><Icon name="play" size={24} /></span>
            <span className={styles.quickCopy}><small>01 · AULAS</small><strong>Videoaulas da sua trilha</strong><span>23 aulas gratuitas em três módulos de Matemática.</span></span>
            <span className={styles.quickArrow} aria-hidden="true">↗</span>
          </button>
          <button type="button" className={`${styles.quickCard} ${styles.quickSecondary}`} onClick={() => onLocked("Materiais e resoluções")}>
            <span className={styles.quickIcon}><Icon name="book" size={24} /></span>
            <span className={styles.quickCopy}><small>02 · MATERIAL DE APOIO</small><strong>Materiais e resoluções</strong><span>Folhas de aula, exercícios e arquivos PDF por módulo.</span></span>
            <span className={styles.quickArrow} aria-hidden="true">↗</span>
          </button>
          <button type="button" className={`${styles.quickCard} ${styles.quickTertiary}`} onClick={() => onLocked("Vídeos especiais")}>
            <span className={styles.quickIcon}><Icon name="folder" size={24} /></span>
            <span className={styles.quickCopy}><small>03 · REVISÃO E PRÁTICA</small><strong>Vídeos especiais</strong><span>Resoluções, revisões e simulados. Cada coleção depende do plano.</span></span>
            <span className={styles.quickArrow} aria-hidden="true">↗</span>
          </button>
        </div>
      </section>

      <section className={styles.collections} aria-labelledby="demo-lib-collections-title">
        <div className={styles.collectionsHeader}>
          <div><p className={styles.overline}>EXPLORE SUA BIBLIOTECA</p><h2 id="demo-lib-collections-title">Coleções especiais<span>.</span></h2><p>Resoluções, revisões e simulados para diferentes momentos da sua preparação.</p></div>
          <div className={styles.collectionCounter}><strong>{catalogTotal.toLocaleString("pt-BR")}</strong><span>vídeos no catálogo*</span></div>
        </div>

        <div className={styles.group}>
          <div className={styles.groupHeader}><h3><span className={styles.dot} /> Coleções da plataforma</h3><small>{mainCollections.length} coleções</small></div>
          <p className={styles.groupHint}>Conheça as coleções que aparecem na Biblioteca do aluno assinante.</p>
          <div className={styles.collectionGrid}>{mainCollections.map((item) => <CollectionCard key={item.name} item={item} onLocked={onLocked} />)}</div>
        </div>
        <div className={styles.group}>
          <div className={styles.groupHeader}><h3><span className={styles.sparkles}><Icon name="sparkles" size={16} /></span> Mais possibilidades para você</h3><small>{additionalCollections.length} coleções</small></div>
          <p className={styles.groupHint}>Outras coleções para ampliar sua preparação, conforme o plano contratado.</p>
          <div className={styles.collectionGrid}>{additionalCollections.map((item) => <CollectionCard key={item.name} item={item} onLocked={onLocked} />)}</div>
        </div>
        <p className={styles.footnote}>* Quantidades ilustrativas do catálogo mostrado em novembro de 2026. A disponibilidade depende do plano contratado. Nenhum conteúdo exclusivo é acessível nesta demonstração.</p>
      </section>

      <aside className={styles.upsell}>
        <span className={styles.upsellIcon}><Icon name="shield" size={25}/></span>
        <div><p className={styles.overline}>DESBLOQUEIE A EXPERIÊNCIA COMPLETA</p><h2>Seu próximo passo começa aqui.</h2><p>Continue com as aulas, resoluções, biblioteca e Tutor IA de acordo com o plano escolhido.</p></div>
        <Link href="/extensivo/">Conhecer o Extensivo ↗</Link>
      </aside>
    </div>
  );
}
