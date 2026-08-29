import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog de Matemática para ENEM, Vestibulares e PROFMAT",
  description:
    "Blog de Matemática com conteúdos para ENEM, vestibulares e PROFMAT: teoria, exercícios, estratégias de prova, curiosidades, funções, geometria, trigonometria e mais.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    type: "website",
    url: "/blog/",
    title: "Blog de Matemática para ENEM, Vestibulares e PROFMAT",
    description:
      "Conteúdos de Matemática para ENEM, vestibulares e PROFMAT com teoria, estratégias de prova, curiosidades, funções, geometria, trigonometria e outros temas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Matemática para ENEM, Vestibulares e PROFMAT",
    description:
      "Conteúdos de Matemática para ENEM, vestibulares e PROFMAT com teoria, estratégias de prova, curiosidades, funções, geometria, trigonometria e outros temas.",
  },
};

const featured = {
  title: "PA e PG no ENEM e Vestibulares: O Guia Completo e Avançado",
  excerpt:
    "Entenda as diferenças entre Progressão Aritmética e Progressão Geométrica, revise fórmulas essenciais e veja como o tema aparece nas provas.",
  href: "https://waldematica.com.br/pa-e-pg-no-enem/",
  image:
    "https://waldematica.com.br/wp-content/uploads/2026/08/pa-e-pg-no-enem-e-vestibulares-waldematica.jpg",
  category: "Álgebra",
  date: "15 ago 2026",
};

const articles = [
  {
    title: "Vestibular Unicamp 2027: O Que Muda na Prova de Matemática?",
    href: "https://waldematica.com.br/vestibular-unicamp-2027/",
    image:
      "https://waldematica.com.br/wp-content/uploads/2026/08/vestibular-unicamp-2027.jpg",
    category: "Unicamp",
    date: "08 ago 2026",
  },
  {
    title: "Constante de Kaprekar: o mistério do 6174 e a mágica do 1089",
    href: "https://waldematica.com.br/constante-de-kaprekar/",
    image:
      "https://waldematica.com.br/wp-content/uploads/2026/08/constante-de-kaprekar-6174-1089.jpg",
    category: "Curiosidades",
    date: "08 ago 2026",
  },
  {
    title: "Vértice da Parábola no ENEM: Máximo e Mínimo sem Confusão",
    href: "https://waldematica.com.br/vertice-da-parabola-no-enem/",
    image:
      "https://waldematica.com.br/wp-content/uploads/2026/08/vertice-da-parabola-no-enem.jpg",
    category: "Funções",
    date: "08 ago 2026",
  },
  {
    title: "Juros Simples e Juros Compostos: Guia Completo e Exercícios",
    href: "https://waldematica.com.br/juros-simples-e-juros-compostos/",
    image:
      "https://waldematica.com.br/wp-content/uploads/2026/08/juros-simples-e-juros-compostos.jpg",
    category: "ENEM",
    date: "08 ago 2026",
  },
  {
    title: "Estatística no ENEM: Média, Mediana, Moda e Gráficos",
    href: "https://waldematica.com.br/estatistica-no-enem/",
    image:
      "https://waldematica.com.br/wp-content/uploads/2026/08/estatistica-no-enem.jpg",
    category: "ENEM",
    date: "08 ago 2026",
  },
];

const categories = [
  "ENEM",
  "Álgebra",
  "Funções",
  "Geometria Plana",
  "Geometria Analítica",
  "Geometria Espacial",
  "Trigonometria",
  "Fuvest",
  "Unicamp",
  "PROFMAT",
  "IA na Educação",
  "Curiosidades da Matemática",
];

export default function BlogPage() {
  return (
    <main className={styles.page}>
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
            <Link href="/cursos-gratis/" className={styles.headerCta}>
              Comece gratuitamente
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.gridBg} />
        <div className={styles.heroGlow} />

        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>BLOG WALDEMÁTICA</span>

          <h1>
            Matemática para entender, praticar{" "}
            <span>e levar para a prova.</span>
          </h1>

          <p>
            Guias, estratégias, curiosidades e conteúdos de Matemática para
            ENEM, vestibulares, PROFMAT e para quem simplesmente quer aprender
            melhor.
          </p>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <a
            href={featured.href}
            className={styles.featuredCard}
          >
            <div className={styles.featuredImage}>
              <img src={featured.image} alt={featured.title} />
              <div className={styles.imageShade} />
            </div>

            <div className={styles.featuredContent}>
              <div className={styles.articleMeta}>
                <span>{featured.category}</span>
                <small>{featured.date}</small>
              </div>

              <span className={styles.featuredLabel}>ARTIGO EM DESTAQUE</span>

              <h2>{featured.title}</h2>

              <p>{featured.excerpt}</p>

              <strong className={styles.readMore}>
                Ler artigo completo <b>→</b>
              </strong>
            </div>
          </a>
        </div>
      </section>

      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>EXPLORE POR ASSUNTO</span>
              <h2>Encontre o conteúdo que você precisa.</h2>
            </div>

            <p>
              O Blog Waldemática reúne dezenas de artigos organizados por
              temas, provas e áreas da Matemática.
            </p>
          </div>

          <div className={styles.categoryCloud}>
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.latestSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>CONTEÚDOS RECENTES</span>
              <h2>Continue estudando pelo Blog.</h2>
            </div>

            <p>
              Teoria, estratégia e aplicações explicadas de forma direta e
              visual.
            </p>
          </div>

          <div className={styles.articleGrid}>
            {articles.map((article) => (
              <a
                key={article.href}
                href={article.href}
                className={styles.articleCard}
              >
                <div className={styles.articleImage}>
                  <img src={article.image} alt={article.title} />
                </div>

                <div className={styles.articleBody}>
                  <div className={styles.articleMeta}>
                    <span>{article.category}</span>
                    <small>{article.date}</small>
                  </div>

                  <h3>{article.title}</h3>

                  <div className={styles.cardBottom}>
                    <span>Continuar lendo</span>
                    <b>→</b>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className={styles.archiveStrip}>
            <div>
              <span className={styles.eyebrow}>ARQUIVO WALDEMÁTICA</span>
              <h3>Mais de 50 artigos publicados e o acervo continua crescendo.</h3>
              <p>
                Os artigos antigos continuam disponíveis nos mesmos endereços,
                preservando o histórico e a estrutura de SEO do Blog.
              </p>
            </div>

            <a
              href="https://waldematica.com.br/blog/"
              className={styles.archiveButton}
            >
              Ver todo o acervo <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.studySection}>
        <div className={styles.container}>
          <div className={styles.studyCard}>
            <div>
              <span className={styles.eyebrow}>DA LEITURA PARA A PRÁTICA</span>

              <h2>Quer estudar com aulas, exercícios e uma sequência organizada?</h2>

              <p>
                Experimente gratuitamente os primeiros módulos do Waldemática
                ou conheça as preparações completas.
              </p>
            </div>

            <div className={styles.studyActions}>
              <Link href="/cursos-gratis/" className={styles.primaryButton}>
                Cursos gratuitos <span>→</span>
              </Link>

              <Link href="/#todos-os-cursos" className={styles.secondaryButton}>
                Conhecer os cursos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Link href="/" className={styles.footerBrand}>
            <Image
              src="/logo-waldematica.png"
              alt="Waldemática"
              width={54}
              height={54}
            />
            <div>
              <strong>Waldemática</strong>
              <span>Matemática Inteligente</span>
            </div>
          </Link>

          <p>Conteúdo, preparação e tecnologia a serviço da Matemática.</p>

          <Link href="/" className={styles.backHome}>
            ← Página inicial
          </Link>
        </div>
      </footer>
    </main>
  );
}
