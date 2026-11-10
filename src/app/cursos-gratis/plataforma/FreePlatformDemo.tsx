"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { modules } from "../free-course-data";
import { curriculum } from "./curriculum";
import FreeDemoLibrary from "./FreeDemoLibrary";
import DemoLessonPlayer from "./DemoLessonPlayer";
import styles from "./free-platform.module.css";

type Section = "inicio" | "aulas" | "trilha" | "biblioteca" | "desempenho" | "tutor" | "suporte";

const navigation: { label: string; section: Section }[] = [
  { label: "Início", section: "inicio" },
  { label: "Minha Trilha", section: "trilha" },
  { label: "Biblioteca", section: "biblioteca" },
  { label: "Desempenho", section: "desempenho" },
  { label: "Tutor IA", section: "tutor" },
  { label: "Suporte", section: "suporte" },
];

const lockedFeatures = [
  { icon: "▤", title: "Folhas de Aula", text: "Teoria, exemplos e exercícios organizados por módulo." },
  { icon: "☷", title: "Listas Mínimas", text: "Exercícios essenciais para consolidar cada conteúdo." },
  { icon: "▣", title: "Listas Complementares", text: "Aprofundamento e preparação para provas." },
  { icon: "▥", title: "Resoluções e materiais extras", text: "Apoio pedagógico para estudar com autonomia." },
  { icon: "◈", title: "Biblioteca de vídeos", text: "Acervo completo, além dos três módulos de demonstração." },
  { icon: "✦", title: "Tutor IA e avaliações", text: "Orientações personalizadas e acompanhamento do domínio." },
];

const benefit = [
  { k: "Álgebra", code: "A1", subtitle: "Produtos Notáveis e Fatoração" },
  { k: "Geometria Plana", code: "GP1", subtitle: "Ângulos, Paralelismo e Triângulos" },
  { k: "Trigonometria", code: "T1", subtitle: "Triângulo Retângulo" },
];

export default function FreePlatformDemo() {
  const [section, setSection] = useState<Section>("inicio");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedModuleId, setSelectedModuleId] = useState(modules[0].id);
  const [selectedVideoId, setSelectedVideoId] = useState(modules[0].videos[0].videoId);
  const [lockedFeature, setLockedFeature] = useState<string | null>(null);

  const selectedModule = useMemo(() =>
    modules.find((module) => module.id === selectedModuleId) ?? modules[0],
    [selectedModuleId]
  );

  useEffect(() => {
    if (!lockedFeature) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLockedFeature(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [lockedFeature]);

  function goTo(nextSection: Section) {
    setSection(nextSection);
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openModule(moduleId: string) {
    const courseModule = modules.find((item) => item.id === moduleId);
    if (!courseModule) return;
    setSelectedModuleId(courseModule.id);
    setSelectedVideoId(courseModule.videos[0].videoId);
    goTo("aulas");
  }

  return (
    <div data-wd-free-demo="true" className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <button type="button" className={styles.logo} onClick={() => goTo("inicio")} aria-label="Ir ao início da demonstração">
            <Image src="/logo-waldematica.png" width={48} height={48} alt="" priority />
            <span>Waldemática <b>IA</b><small>AMBIENTE DE DEMONSTRAÇÃO</small></span>
          </button>
          <nav className={styles.desktopNav} aria-label="Menu da plataforma">
            {navigation.map((item) => (
              <button key={item.section} type="button" onClick={() => goTo(item.section)}
                className={section === item.section || (section === "aulas" && item.section === "inicio") ? styles.navActive : ""}>
                {item.label}
              </button>
            ))}
          </nav>
          <div className={styles.headerRight}>
            <span className={styles.demoTag}>Acesso gratuito</span>
            <Link href="https://ia.waldematica.com.br/auth/login" className={styles.studentLink}>Já sou aluno</Link>
            <button type="button" className={styles.mobileMenuButton} onClick={() => setMobileMenu(!mobileMenu)}
              aria-label={mobileMenu ? "Fechar menu" : "Abrir menu"} aria-expanded={mobileMenu}>
              {mobileMenu ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {mobileMenu && <nav className={styles.mobileNav} aria-label="Menu da plataforma no celular">
          {navigation.map((item) => <button key={item.section} type="button" onClick={() => goTo(item.section)}>{item.label}</button>)}
        </nav>}
      </header>

      <main className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.previewStrip}>
            <span>VISITA GRATUITA À WALDEMÁTICA IA</span>
            <p>Você está conhecendo a plataforma, sem criar uma conta ou contratar uma assinatura.</p>
            <Link href="/extensivo/">Conhecer planos <span aria-hidden="true">↗</span></Link>
          </div>

          {section === "inicio" && <>
            <section className={styles.hero}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>SEU PRÓXIMO PASSO NA MATEMÁTICA</p>
                <h1>Bem-vindo à <span>Waldemática IA.</span></h1>
                <p>Explore como funciona a área do aluno. Assista gratuitamente aos três módulos iniciais e descubra os recursos da preparação completa.</p>
                <div className={styles.actions}>
                  <button type="button" className={styles.primaryButton} onClick={() => openModule("algebra")}>Começar pelas aulas gratuitas <span>→</span></button>
                  <button type="button" className={styles.outlineButton} onClick={() => goTo("trilha")}>Explorar a trilha</button>
                </div>
              </div>
              <div className={styles.heroArt} aria-hidden="true"><span>∑</span><span>△</span><span>θ</span></div>
            </section>

            <section className={styles.stats} aria-label="Resumo da demonstração">
              <article className={`${styles.stat} ${styles.statPeach}`}><span>▶</span><p>Módulos com vídeos grátis</p><strong>3</strong><small>Álgebra, Geometria e Trigonometria</small></article>
              <article className={`${styles.stat} ${styles.statLilac}`}><span>▤</span><p>Videoaulas gratuitas</p><strong>23</strong><small>Aulas reais do Extensivo</small></article>
              <article className={`${styles.stat} ${styles.statMint}`}><span>◇</span><p>Etapas da trilha completa</p><strong>62</strong><small>Conheça a organização do curso</small></article>
            </section>

            <section className={styles.featuresGrid}>
              <div className={`${styles.panel} ${styles.panelAqua}`}>
                <span className={styles.eyebrow}>COMECE A ESTUDAR</span>
                <h2>Três módulos liberados</h2>
                <p>Escolha sua área e entre no ambiente de aulas. A navegação e os vídeos funcionam de verdade.</p>
                <div className={styles.freeModules}>
                  {benefit.map((item, idx) => <button type="button" key={item.code} onClick={() => openModule(modules[idx].id)}>
                    <span className={styles.freeModuleCode}>{item.code}</span><span><strong>{item.k}</strong><small>{item.subtitle}</small></span><span aria-hidden="true">→</span>
                  </button>)}
                </div>
              </div>
              <div className={`${styles.panel} ${styles.panelGold}`}>
                <span className={styles.eyebrow}>RECURSO DA ASSINATURA</span>
                <h2>Seu Tutor IA</h2>
                <p>Com uma assinatura, você pode contar com um tutor que conhece seus módulos, ajuda a resolver dúvidas e orienta seus estudos.</p>
                <span className={styles.lockedStatus}>♧ Disponível para assinantes</span>
                <button type="button" className={styles.goldButton} onClick={() => goTo("tutor")}>Conhecer o Tutor IA <span>→</span></button>
              </div>
            </section>

            <div className={styles.miniSectionHead}><div><span className={styles.eyebrow}>DESCUBRA O QUE ESTÁ INCLUÍDO</span><h2>Uma plataforma para muito mais do que assistir a vídeos</h2></div></div>
            <section className={styles.tasterGrid}>
              {lockedFeatures.slice(0, 4).map((item) => <button className={styles.tasterCard} type="button" key={item.title} onClick={() => setLockedFeature(item.title)}>
                <span className={styles.cardIcon}>{item.icon}</span><strong>{item.title}</strong><small>{item.text}</small><span className={styles.smallLock}>🔒 Assinatura necessária</span>
              </button>)}
            </section>
          </>}

          {section === "aulas" && <>
            <DemoLessonPlayer
              courseModule={selectedModule}
              selectedVideoId={selectedVideoId}
              onSelectVideo={setSelectedVideoId}
              onSelectModule={openModule}
              onBack={() => goTo("trilha")}
            />
            <section className={styles.upsellInline}><div><strong>Gostou das aulas? Continue com a preparação completa.</strong><p>Desbloqueie os demais módulos, bibliotecas, avaliações e o Tutor IA.</p></div><Link href="/extensivo/">Conhecer o Extensivo →</Link></section>
          </>}

          {section === "trilha" && <>
            <section className={styles.pageHero}><p className={styles.eyebrow}>ORGANIZAÇÃO DO EXTENSIVO</p><h1>Minha Trilha <span className={styles.grayTag}>Prévia</span></h1><p>Veja como os estudos são organizados. Os 62 itens aparecem na ordem pedagógica oficial, mas esta visita não registra progresso.</p></section>
            <div className={styles.trailSummary}><div><strong>3</strong><span>módulos com vídeos gratuitos</span></div><div><strong>59</strong><span>etapas bloqueadas na demonstração</span></div><div><strong>0</strong><span>avaliações realizadas nesta visita</span></div></div>
            <section className={styles.trailCard}><div className={styles.trailCardHead}><div><p className={styles.eyebrow}>TRILHA COMPLETA</p><h2>Conheça o caminho da Matemática</h2></div><span>62 etapas</span></div>
              <div className={styles.trailList}>{curriculum.map((item) => <div key={item.id} className={`${styles.trailItem} ${item.free ? styles.trailFree : ""}`}>
                <span className={styles.sequence}>{String(item.order).padStart(2, "0")}</span><div className={styles.trailItemInfo}><span>{item.area} · {item.code}</span><strong>{item.title}</strong></div>
                {item.free ? <button type="button" onClick={() => openModule(item.code === "A1" ? "algebra" : item.code === "GP1" ? "geometria-plana" : "trigonometria")}>▶ Assistir</button>
                  : <button type="button" className={styles.lockPill} onClick={() => setLockedFeature(`${item.code} — ${item.title}`)}>🔒 Bloqueado</button>}
              </div>)}</div>
            </section>
          </>}

          {section === "biblioteca" && (
            <FreeDemoLibrary
              onLocked={setLockedFeature}
              onWatchVideos={() => openModule("algebra")}
            />
          )}

          {section === "desempenho" && <LockedScreen eyebrow="ACOMPANHAMENTO PERSONALIZADO" title="Desempenho" description="O aluno assinante acompanha resultados de avaliações, habilidades dominadas e pontos que precisam de revisão. Como esta é uma visita sem conta, não exibimos notas nem progresso fictícios." onExplore={() => setLockedFeature("Painel de desempenho e avaliações")} />}
          {section === "tutor" && <LockedScreen eyebrow="INTELIGÊNCIA ARTIFICIAL PARA APRENDER" title="Tutor IA" description="Na plataforma completa, o Tutor IA ajuda com dúvidas, questões e conteúdos do curso. Esta prévia não faz chamadas de IA nem consome créditos ou dados de aluno." onExplore={() => setLockedFeature("Tutor IA personalizado")} />}
          {section === "suporte" && <LockedScreen eyebrow="ACOMPANHAMENTO AO LONGO DA PREPARAÇÃO" title="Suporte" description="A área reservada centraliza os recursos e orientações de atendimento aos alunos. Você pode conhecer os planos ou entrar em contato pelos canais públicos do site." onExplore={() => setLockedFeature("Área de suporte ao aluno")} />}

          <footer className={styles.footer}><span>Waldemática IA · Demonstração sem cadastro na plataforma</span><div><Link href="/cursos-gratis/">Cursos Grátis</Link><Link href="/extensivo/">Planos</Link><Link href="/politica-de-privacidade/">Privacidade</Link></div></footer>
        </div>
      </main>

      {lockedFeature && <div className={styles.modalBackdrop} onMouseDown={(event) => { if (event.target === event.currentTarget) setLockedFeature(null); }}>
        <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="premium-modal-title">
          <button type="button" className={styles.modalClose} onClick={() => setLockedFeature(null)} aria-label="Fechar">✕</button>
          <span className={styles.modalIcon}>🔒</span><p className={styles.eyebrow}>CONTEÚDO PREMIUM</p><h2 id="premium-modal-title">{lockedFeature}</h2>
          <p>Este recurso faz parte da Waldemática IA para assinantes. Na sua visita gratuita, você pode assistir aos vídeos de A1, GP1 e T1.</p>
          <div className={styles.modalActions}><Link href="/extensivo/">Conhecer o Extensivo →</Link><Link href="/padawan/">Ver planos Padawan</Link></div>
          <button type="button" className={styles.backToFree} onClick={() => {setLockedFeature(null); openModule("algebra");}}>Continuar com as aulas grátis</button>
        </div>
      </div>}
    </div>
  );
}

function LockedScreen({ eyebrow, title, description, onExplore }: {
  eyebrow: string; title: string; description: string; onExplore: () => void;
}) {
  return <><section className={styles.pageHero}><p className={styles.eyebrow}>{eyebrow}</p><h1>{title} <span className={styles.grayTag}>Prévia</span></h1><p>{description}</p></section>
    <section className={styles.lockedCenter}><span className={styles.lockedBigIcon}>🔒</span><h2>Disponível na plataforma completa</h2><p>Experimente agora as aulas gratuitas. Para usar esta funcionalidade com seus próprios dados, escolha um plano Waldemática IA.</p>
      <div className={styles.actions}><button type="button" className={styles.primaryButton} onClick={onExplore}>Ver opções de acesso →</button><Link className={styles.outlineButton} href="/extensivo/">Conhecer o Extensivo</Link></div>
    </section></>;
}
