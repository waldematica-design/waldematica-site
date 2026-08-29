import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FreeCoursePlayer from "./FreeCoursePlayer";
import styles from "./cursos-gratis.module.css";

export const metadata: Metadata = {
  title: "Cursos Grátis de Matemática | Álgebra, Geometria e Trigonometria",
  description:
    "Cursos gratuitos de Matemática com 3 módulos completos e 23 vídeos sobre Álgebra, Geometria Plana e Trigonometria, além de materiais gratuitos para estudar.",
  alternates: {
    canonical: "/cursos-gratis/",
  },
  openGraph: {
    type: "website",
    url: "/cursos-gratis/",
    title: "Cursos Grátis de Matemática | Álgebra, Geometria e Trigonometria",
    description:
      "Assista gratuitamente a 3 módulos completos do Waldemática, com 23 vídeos de Álgebra, Geometria Plana e Trigonometria e materiais para acompanhar os estudos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos Grátis de Matemática | Álgebra, Geometria e Trigonometria",
    description:
      "Assista gratuitamente a 3 módulos completos do Waldemática, com 23 vídeos de Álgebra, Geometria Plana e Trigonometria e materiais para acompanhar os estudos.",
  },
};

const modules = [
  {
    id: "algebra",
    code: "A1",
    eyebrow: "MÓDULO 1 DE ÁLGEBRA",
    title: "Produtos Notáveis e Fatoração",
    shortTitle: "Álgebra",
    description:
      "Construa uma base sólida em Álgebra com teoria, exercícios de aplicação e aprofundamento.",
    icon: "∑",
    materialUrl:
      "https://drive.google.com/drive/folders/1KeHln5Kipiyl12KYr0bFMtVnD_C8yRj6?usp=drive_link",
    videos: [
      {
        order: 1,
        lesson: 0,
        title: "Introdução ao Módulo 1 de Álgebra",
        category: "Introdução",
        videoId: "wdE9xFdpLIs",
      },
      {
        order: 2,
        lesson: 1,
        title: "Produtos Notáveis | Teoria",
        category: "Teoria",
        videoId: "2tIgFtcRSaY",
      },
      {
        order: 3,
        lesson: 1,
        title: "Produtos Notáveis | Exercícios de Aplicação",
        category: "Aplicação",
        videoId: "k6e2W1L3Xgk",
      },
      {
        order: 4,
        lesson: 1,
        title: "Produtos Notáveis | Aprofundamento",
        category: "Aprofundamento",
        videoId: "IlRg0KUMQKs",
      },
      {
        order: 5,
        lesson: 2,
        title: "Fatoração | Teoria",
        category: "Teoria",
        videoId: "8r5ol89ZiAU",
      },
      {
        order: 6,
        lesson: 2,
        title: "Fatoração | Exercícios de Aplicação",
        category: "Aplicação",
        videoId: "0uPQG1SA8SM",
      },
      {
        order: 7,
        lesson: 2,
        title: "Fatoração | Exercícios de Aprofundamento",
        category: "Aprofundamento",
        videoId: "Q48c7sB-xjU",
      },
    ],
  },
  {
    id: "geometria-plana",
    code: "GP1",
    eyebrow: "MÓDULO 1 DE GEOMETRIA PLANA",
    title: "Ângulos, Paralelismo e Triângulos",
    shortTitle: "Geometria Plana",
    description:
      "Entenda a lógica da Geometria Plana e avance por Ângulos, Paralelismo e Triângulos com teoria e prática.",
    icon: "△",
    materialUrl:
      "https://drive.google.com/drive/folders/1Uz3kCU27_5V_e_p9rt1zt1WtxB-SPX3e?usp=drive_link",
    videos: [
      {
        order: 1,
        lesson: 0,
        title: "Introdução ao Curso de Geometria Plana",
        category: "Introdução",
        videoId: "pe8TxqUzYy8",
      },
      {
        order: 2,
        lesson: 1,
        title: "Ângulos | Teoria - Nomenclatura e Teoremas",
        category: "Teoria",
        videoId: "Ml7J7IZk5aQ",
      },
      {
        order: 3,
        lesson: 1,
        title: "Ângulos | Exercícios de Aplicação",
        category: "Aplicação",
        videoId: "fU-PndXL6_k",
      },
      {
        order: 4,
        lesson: 1,
        title: "Ângulos | Exercícios de Aprofundamento",
        category: "Aprofundamento",
        videoId: "mbThz97Ff4g",
      },
      {
        order: 5,
        lesson: 2,
        title: "Paralelismo | Classificações e Teoremas",
        category: "Teoria",
        videoId: "MwvVcYNGv0M",
      },
      {
        order: 6,
        lesson: 2,
        title: "Paralelismo | Exercícios de Aplicação",
        category: "Aplicação",
        videoId: "W4uZryOVwI0",
      },
      {
        order: 7,
        lesson: 2,
        title: "Paralelismo | Aprofundamento",
        category: "Aprofundamento",
        videoId: "aJUxda_dwpg",
      },
      {
        order: 8,
        lesson: 3,
        title: "Triângulos | Teoria - Teoremas",
        category: "Teoria",
        videoId: "w6qZlO9beP8",
      },
      {
        order: 9,
        lesson: 3,
        title: "Triângulos | Nomenclatura",
        category: "Teoria",
        videoId: "T3dJGhlxuzo",
      },
      {
        order: 10,
        lesson: 3,
        title: "Triângulos | Exercícios de Aplicação",
        category: "Aplicação",
        videoId: "jq05p4bbbhc",
      },
      {
        order: 11,
        lesson: 3,
        title: "Triângulos | Exercícios de Aprofundamento",
        category: "Aprofundamento",
        videoId: "kPeT7s7LuuA",
      },
    ],
  },
  {
    id: "trigonometria",
    code: "T1",
    eyebrow: "MÓDULO 1 DE TRIGONOMETRIA",
    title: "Trigonometria no Triângulo Retângulo",
    shortTitle: "Trigonometria",
    description:
      "Aprenda razões trigonométricas com teoria, macetes, exercícios de aplicação e aprofundamento.",
    icon: "θ",
    materialUrl:
      "https://drive.google.com/drive/folders/1aQ0QGqH-ZiEY4YNWH4W1TuGfQUte3rQ0?usp=drive_link",
    videos: [
      {
        order: 1,
        lesson: 0,
        title: "Introdução à Trigonometria",
        category: "Introdução",
        videoId: "L2Yr3yLYXDI",
      },
      {
        order: 2,
        lesson: 1,
        title: "Trigonometria no Triângulo Retângulo | Teoria",
        category: "Teoria",
        videoId: "fEpyODX9iFM",
      },
      {
        order: 3,
        lesson: 1,
        title: "Trigonometria no Triângulo Retângulo | Macetes",
        category: "Macetes",
        videoId: "Ad1G23VkEwg",
      },
      {
        order: 4,
        lesson: 1,
        title: "Trigonometria no Triângulo Retângulo | Aplicação",
        category: "Aplicação",
        videoId: "tMT_VUMfuls",
      },
      {
        order: 5,
        lesson: 1,
        title: "Trigonometria no Triângulo Retângulo | Aprofundamento",
        category: "Aprofundamento",
        videoId: "MzJRbBfXOwI",
      },
    ],
  },
];

export default function CursosGratisPage() {
  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand}>
            <Image
              src="/logo-waldematica.png"
              alt="Waldemática"
              width={52}
              height={52}
              priority
            />

            <div>
              <strong>Waldemática</strong>
              <span>Matemática Inteligente</span>
            </div>
          </Link>

          <nav className={styles.nav}>
            <Link href="/#todos-os-cursos">Cursos</Link>
            <Link href="/curso-profmat/">PROFMAT</Link>
            <Link href="/cursos-gratis/">Conteúdos Gratuitos</Link>
            <Link href="/blog/">Blog</Link>
          </nav>

          <div className={styles.headerActions}>
            <Link href="https://ia.waldematica.com.br" className={styles.login}>
              Entrar
            </Link>

            <a href="#aulas" className={styles.headerCta}>
              Começar gratuitamente
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.gridBg} />
        <div className={styles.heroGlowLeft} />
        <div className={styles.heroGlowRight} />

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>CURSOS GRATUITOS</span>

            <h1>
              Experimente o Waldemática{" "}
              <span>antes de escolher seu curso.</span>
            </h1>

            <p className={styles.heroLead}>
              Assista gratuitamente aos primeiros módulos de Álgebra,
              Geometria Plana e Trigonometria. São aulas reais do curso, com
              teoria, aplicação e aprofundamento.
            </p>

            <div className={styles.heroActions}>
              <a href="#aulas" className={styles.primaryButton}>
                Assistir às aulas <span>→</span>
              </a>

              <Link href="/#todos-os-cursos" className={styles.secondaryButton}>
                Conhecer os cursos
              </Link>
            </div>

            <div className={styles.heroChecks}>
              <span>✓ 3 módulos completos</span>
              <span>✓ 23 vídeos</span>
              <span>✓ Materiais gratuitos</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualGlow} />

            <div className={`${styles.visualOrbit} ${styles.visualOrbitOne}`}>
              <span className={`${styles.orbitNode} ${styles.orbitNodeOne}`} />
              <span className={`${styles.orbitNode} ${styles.orbitNodeTwo}`} />
            </div>

            <div className={`${styles.visualOrbit} ${styles.visualOrbitTwo}`}>
              <span className={`${styles.orbitNode} ${styles.orbitNodeThree}`} />
              <span className={`${styles.orbitNode} ${styles.orbitNodeFour}`} />
            </div>

            <div className={styles.productCore}>
              <div className={styles.logoPulseOne} />
              <div className={styles.logoPulseTwo} />

              <Image
                src="/logo-waldematica.png"
                alt="Waldemática"
                width={300}
                height={300}
                className={styles.productLogo}
              />

              <div className={styles.productCaption}>
                <span className={styles.productLabel}>TEST-DRIVE</span>
                <strong>3 módulos gratuitos</strong>
                <p>Álgebra • Geometria • Trigonometria</p>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardOne}`}>
              <span>23 VÍDEOS</span>
              <strong>Aulas reais do curso</strong>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardTwo}`}>
              <span>MATERIAIS</span>
              <strong>Arquivos para estudar</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ESCOLHA DOS MÓDULOS */}
      <section className={styles.modulesSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>ESCOLHA POR ONDE COMEÇAR</span>

            <h2>
              Três portas de entrada.{" "}
              <span>O mesmo método Waldemática.</span>
            </h2>

            <p>
              Você pode começar por qualquer módulo. Depois, troque de área sem
              sair desta página.
            </p>
          </div>

          <div className={styles.moduleCards}>
            {modules.map((module) => (
              <a
                key={module.id}
                href={`#aulas`}
                className={styles.moduleCard}
              >
                <div className={styles.moduleCardTop}>
                  <div className={styles.moduleIcon}>{module.icon}</div>
                  <span>{module.code}</span>
                </div>

                <h3>{module.shortTitle}</h3>
                <strong>{module.title}</strong>
                <p>{module.description}</p>

                <span className={styles.moduleCardAction}>
                  {module.videos.length} vídeos <b>→</b>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PLAYER */}
      <section id="aulas" className={styles.playerSection}>
        <div className={styles.playerGlow} />

        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>SUA ÁREA DE AULAS GRATUITAS</span>

            <h2>
              Escolha o módulo, selecione a aula e{" "}
              <span>comece a estudar.</span>
            </h2>
          </div>

          <FreeCoursePlayer modules={modules} />
        </div>
      </section>

      {/* O QUE VOCÊ ENCONTRA */}
      <section className={styles.methodSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>UM PEDAÇO REAL DO CURSO</span>

            <h2>
              Não é uma aula promocional.{" "}
              <span>É o começo da preparação.</span>
            </h2>
          </div>

          <div className={styles.methodGrid}>
            <article>
              <span>01</span>
              <h3>Teoria</h3>
              <p>
                Explicações organizadas para construir a base necessária antes
                dos exercícios.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Aplicação</h3>
              <p>
                Exercícios para transformar o conteúdo estudado em domínio
                prático.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Aprofundamento</h3>
              <p>
                Questões mais exigentes para consolidar o raciocínio e avançar
                além do básico.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTINUAR */}
      <section className={styles.continueSection}>
        <div className={styles.container}>
          <div className={styles.continueCard}>
            <div>
              <span className={styles.eyebrow}>GOSTOU DO MÉTODO?</span>

              <h2>
                Continue estudando com uma preparação completa.
              </h2>

              <p>
                Depois dos módulos gratuitos, você pode seguir com o Extensivo
                ou escolher uma preparação mais compacta no Semiextensivo.
              </p>
            </div>

            <div className={styles.continueActions}>
              <Link href="/extensivo/" className={styles.primaryButton}>
                Conhecer o Extensivo <span>→</span>
              </Link>

              <Link
                href="/curso-semiextensivo/"
                className={styles.continueSecondary}
              >
                Ver Semiextensivo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.finalCta}>
        <div className={styles.finalGlow} />

        <div className={styles.finalCtaInner}>
          <Image
            src="/logo-waldematica.png"
            alt="Waldemática"
            width={74}
            height={74}
          />

          <span className={styles.eyebrow}>CURSOS GRATUITOS</span>

          <h2>
            Escolha um módulo e comece agora.
          </h2>

          <p>
            Sem custo e com acesso às aulas e materiais dos três módulos.
          </p>

          <a href="#aulas" className={styles.finalButton}>
            Assistir gratuitamente <span>→</span>
          </a>

          <Link href="/" className={styles.backHome}>
            ← Voltar para a página inicial
          </Link>
        </div>
      </section>
    </main>
  );
}
