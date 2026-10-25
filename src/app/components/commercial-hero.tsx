import Image from "next/image";
import Link from "next/link";
import styles from "./commercial-v1.module.css";

const choices = [
  { label: "ENEM e vestibulares", description: "Prepare-se com o plano certo", href: "#preparacoes-principais", icon: "∑", tone: "blue" },
  { label: "PROFMAT / ENA", description: "Preparação para professores", href: "#preparacao-profmat", icon: "π", tone: "green" },
  { label: "Assuntos específicos", description: "Estude com Padawan 1 ou 3", href: "#planos-padawan", icon: "◈", tone: "violet" },
  { label: "Revisões de provas", description: "Cursos avulsos de 1ª e 2ª fases", href: "#cursos-revisao", icon: "✎", tone: "orange" },
] as const;

export default function CommercialHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}><span className={styles.statusDot} /> MATEMÁTICA PARA CADA OBJETIVO</span>
          <h1 id="home-hero-title">
            A preparação certa para a <span>prova que você quer conquistar.</span>
          </h1>
          <p className={styles.heroDescription}>
            ENEM, vestibulares, PROFMAT ou estudos por assunto: encontre sua preparação
            com videoaulas, materiais, uma trilha organizada e o apoio da Waldemática IA.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryAction} href="#comparar-planos">Ver planos e comparar <span aria-hidden="true">↗</span></Link>
            <Link className={styles.secondaryAction} href="#orientador-ia">Descobrir meu plano com IA <span aria-hidden="true">✦</span></Link>
          </div>
          <div className={styles.trustRow}>
            <span><b>✓</b> Professor desde 2001</span>
            <span><b>✓</b> Videoaulas e exercícios</span>
            <span><b>✓</b> Tutor IA</span>
          </div>
          <p className={styles.heroFootnote}>Quer conhecer o método primeiro? <Link href="/cursos-gratis/">Explore os conteúdos gratuitos ↗</Link></p>
        </div>

        <aside className={styles.choicePanel} aria-label="Escolha sua preparação">
          <div className={styles.choiceHeading}>
            <div className={styles.choiceBrand}><Image src="/logo-waldematica.png" alt="" width={44} height={44} /></div>
            <div><span>SEU PRÓXIMO PASSO COMEÇA AQUI</span><h2>Qual é o seu objetivo?</h2></div>
          </div>
          <div className={styles.choiceGrid}>
            {choices.map((item) => (
              <Link key={item.label} href={item.href} className={`${styles.choice} ${styles[item.tone]}`}>
                <span className={styles.choiceTop}><span className={styles.choiceIcon}>{item.icon}</span><span aria-hidden="true">↗</span></span>
                <span className={styles.choiceText}><strong>{item.label}</strong><small>{item.description}</small></span>
              </Link>
            ))}
          </div>
          <Link href="#comparar-planos" className={styles.choiceBottom}>Não sabe qual escolher? <strong>Compare os benefícios</strong><span aria-hidden="true">→</span></Link>
        </aside>
      </div>
    </section>
  );
}
