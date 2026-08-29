import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./revisao-1a-fase.module.css";

export const metadata: Metadata = {
  title: "Revisão 1ª Fase de Matemática para Unicamp e Fuvest",
  description:
    "Revisão de Matemática para 1ª fase com questões objetivas da Unicamp e Fuvest, revisões teóricas, dicas, macetes, simulados e estratégia de prova.",
  alternates: {
    canonical: "/revisao-1a-fase/",
  },
  openGraph: {
    type: "website",
    url: "/revisao-1a-fase/",
    title: "Revisão 1ª Fase de Matemática para Unicamp e Fuvest",
    description:
      "Treino de Matemática para provas objetivas com questões da Unicamp e Fuvest, revisões teóricas, dicas, macetes e simulados.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revisão 1ª Fase de Matemática para Unicamp e Fuvest",
    description:
      "Treino de Matemática para provas objetivas com questões da Unicamp e Fuvest, revisões teóricas, dicas, macetes e simulados.",
  },
};

const checkoutUrl =
  "https://pay.hotmart.com/C39761618J?off=jfwrxwky&checkoutMode=10&bid=1787746084129";

const benefits = [
  {
    icon: "◎",
    title: "Questões por assunto",
    text: "As resoluções são organizadas por temas para transformar cada bloco em uma revisão prática e direcionada.",
  },
  {
    icon: "≡",
    title: "Revisão teórica na prática",
    text: "A teoria aparece dentro das resoluções, exatamente quando ela é necessária para compreender a questão.",
  },
  {
    icon: "✦",
    title: "Dicas e macetes",
    text: "Estratégias para ganhar velocidade, reconhecer padrões e resolver melhor questões objetivas.",
  },
  {
    icon: "↗",
    title: "Simulados",
    text: "Treino com simulados de Unicamp e Fuvest, além de material complementar de outras provas.",
  },
];

const idealFor = [
  "Quem já estudou os conteúdos e precisa revisar para provas de 1ª fase.",
  "Quem quer treinar questões objetivas em nível elevado.",
  "Quem precisa ganhar agilidade, leitura de prova e estratégia de resolução.",
  "Quem busca preparação para Unicamp, Fuvest e outros vestibulares com questões teste.",
];

const unicampTopics = [
  "Resoluções de questões da Unicamp a partir de 2011.",
  "Vídeos organizados por assunto.",
  "Revisões teóricas intercaladas antes e durante as resoluções.",
  "Treino dos temas que mais aparecem na prova.",
];

const fuvestTopics = [
  "Resoluções de questões da Fuvest a partir de 2003.",
  "Grande volume de questões objetivas.",
  "Dicas e macetes para provas teste.",
  "Estratégias de resolução para ganhar eficiência e segurança.",
];

const included = [
  "Resoluções comentadas de questões da Unicamp.",
  "Resoluções comentadas de questões da Fuvest.",
  "Revisões teóricas inseridas dentro das resoluções.",
  "Dicas, atalhos e macetes para questões objetivas.",
  "Simulados de Unicamp e Fuvest.",
  "Algumas resoluções complementares da Unesp.",
];

const faqs = [
  {
    question: "A revisão serve apenas para Unicamp e Fuvest?",
    answer:
      "Não. O foco principal do curso está em Unicamp e Fuvest, mas o treinamento é útil para qualquer vestibular de 1ª fase com questões objetivas, especialmente provas de nível semelhante.",
  },
  {
    question: "O curso é só resolução de exercícios?",
    answer:
      "Não. As resoluções são acompanhadas por revisões teóricas sempre que necessário, de modo que o aluno revise o conteúdo enquanto aprende a aplicá-lo em questões reais.",
  },
  {
    question: "O curso inclui Waldemática IA?",
    answer:
      "Não. A Revisão 1ª Fase é uma preparação focada em questões objetivas, revisão teórica e estratégia de prova, sem uma trilha estruturada na Waldemática IA.",
  },
  {
    question: "Tem simulados?",
    answer:
      "Sim. O curso inclui simulados de Unicamp e Fuvest, além de materiais complementares de outras provas.",
  },
  {
    question: "Quando o acesso é liberado?",
    answer:
      "Pagamentos por cartão de crédito, Pix e transferência têm liberação no mesmo instante. Boletos podem levar até 2 dias úteis.",
  },
  {
    question: "Existe garantia?",
    answer:
      "Sim. Você tem 7 dias corridos para solicitar o reembolso.",
  },
];

export default function RevisaoPrimeiraFasePage() {
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

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.headerCta}
            >
              Quero a Revisão
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
            <span className={styles.eyebrow}>REVISÃO 1ª FASE</span>

            <h1>
              Revisão de Matemática com{" "}
              <span>questões, estratégia e prática real.</span>
            </h1>

            <p className={styles.heroLead}>
              Prepare-se para provas objetivas com resoluções comentadas,
              revisões teóricas, dicas e macetes usando principalmente questões
              de Unicamp e Fuvest.
            </p>

            <div className={styles.heroActions}>
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                Quero começar agora <span>→</span>
              </a>

              <a href="#como-funciona" className={styles.secondaryButton}>
                Ver como funciona
              </a>
            </div>

            <div className={styles.heroChecks}>
              <span>✓ Foco em questões objetivas</span>
              <span>✓ Dicas e macetes</span>
              <span>✓ 7 dias de garantia</span>
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
                <span className={styles.productLabel}>REVISÃO 1ª FASE</span>
                <strong>Questões objetivas</strong>
                <p>Unicamp • Fuvest • Vestibulares</p>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardOne}`}>
              <span>UNICAMP</span>
              <strong>Questões por assunto</strong>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardTwo}`}>
              <span>FUVEST</span>
              <strong>Estratégia de prova</strong>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardThree}`}>
              <span>PROVA TESTE</span>
              <strong>Dicas + macetes</strong>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>REVISÃO NA PRÁTICA</span>

            <h2>
              Você não revisa só a teoria.{" "}
              <span>Você aprende a resolver prova.</span>
            </h2>

            <p>
              O curso usa questões reais para revisar os conteúdos e,
              ao mesmo tempo, desenvolver leitura, velocidade e estratégia.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <article key={benefit.title} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className={styles.flowSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>COMO A REVISÃO FUNCIONA</span>

            <h2>
              Primeiro você revisa por assunto.{" "}
              <span>Depois ganha ritmo de prova.</span>
            </h2>
          </div>

          <div className={styles.flowGrid}>
            <article className={styles.examCard}>
              <div className={styles.examCardTop}>
                <span className={styles.examNumber}>01</span>
                <span className={styles.examTag}>UNICAMP</span>
              </div>

              <h3>Questões organizadas por assunto.</h3>

              <p>
                A revisão começa com resoluções de questões da Unicamp a partir
                de 2011. Os vídeos são separados por temas e intercalam revisão
                teórica com aplicação em questões reais.
              </p>

              <div className={styles.examList}>
                {unicampTopics.map((item) => (
                  <span key={item}>
                    <i>✓</i>
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className={styles.examCard}>
              <div className={styles.examCardTop}>
                <span className={styles.examNumber}>02</span>
                <span className={styles.examTag}>FUVEST</span>
              </div>

              <h3>Treino intenso para prova objetiva.</h3>

              <p>
                Depois dos principais assuntos trabalhados com a Unicamp, a
                preparação avança para resoluções da Fuvest a partir de 2003,
                com grande volume de questões e foco em estratégia.
              </p>

              <div className={styles.examList}>
                {fuvestTopics.map((item) => (
                  <span key={item}>
                    <i>✓</i>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* DICAS E MACETES */}
      <section className={styles.strategySection}>
        <div className={styles.container}>
          <div className={styles.strategyCard}>
            <div className={styles.strategyIcon}>✦</div>

            <div>
              <span className={styles.strategyLabel}>DICAS E MACETES</span>

              <h2>
                Aprenda a reconhecer caminhos mais rápidos para questões teste.
              </h2>

              <p>
                Ao longo das resoluções, você encontra estratégias, observações,
                atalhos e formas mais eficientes de atacar questões objetivas —
                sempre com foco em prova.
              </p>
            </div>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.strategyButton}
            >
              Quero treinar para a 1ª fase <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className={styles.audienceSection}>
        <div className={styles.container}>
          <div className={styles.twoColumns}>
            <div>
              <span className={styles.eyebrow}>PARA QUEM É</span>

              <h2>
                Para quem precisa transformar conteúdo em desempenho de prova.
              </h2>

              <p className={styles.sectionText}>
                A Revisão 1ª Fase foi pensada para quem já passou pelos
                conteúdos e agora precisa revisar, treinar e ganhar eficiência
                em questões objetivas.
              </p>

              <div className={styles.audienceList}>
                {idealFor.map((item) => (
                  <div key={item}>
                    <span>✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.highlightPanel}>
              <span className={styles.panelLabel}>NÃO É SÓ UNICAMP E FUVEST</span>

              <h3>O treino serve para qualquer vestibular objetivo de nível semelhante.</h3>

              <p>
                Unicamp e Fuvest são as principais referências do curso, mas as
                estratégias desenvolvidas ajudam em outras provas de 1ª fase,
                especialmente quando o vestibular exige boa leitura, técnica e
                domínio de Matemática.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className={styles.includedSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>O QUE VOCÊ RECEBE</span>

            <h2>
              Uma revisão focada em{" "}
              <span>questões de verdade.</span>
            </h2>
          </div>

          <div className={styles.includedGrid}>
            {included.map((item, index) => (
              <div key={item} className={styles.includedItem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIMULADOS */}
      <section className={styles.simulationSection}>
        <div className={styles.container}>
          <div className={styles.simulationCard}>
            <div>
              <span className={styles.eyebrow}>SIMULADOS</span>

              <h2>Treine o conteúdo em formato de prova.</h2>

              <p>
                O curso também inclui simulados da Unicamp e da Fuvest para
                você testar o desempenho em uma situação mais próxima da prova
                real, além de algumas resoluções complementares da Unesp.
              </p>
            </div>

            <div className={styles.simulationTags}>
              <span>UNICAMP</span>
              <span>FUVEST</span>
              <span>UNESP</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMPRA */}
      <section className={styles.purchaseSection}>
        <div className={styles.container}>
          <div className={styles.purchaseCard}>
            <div className={styles.purchaseTop}>
              <div>
                <span className={styles.eyebrow}>COMECE SUA REVISÃO</span>

                <h2>
                  Entre na Revisão 1ª Fase e comece a treinar com questões.
                </h2>

                <p>
                  Resoluções, revisões teóricas, dicas, macetes e simulados em
                  uma preparação focada em provas objetivas.
                </p>
              </div>

              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.purchaseButton}
              >
                Quero a Revisão <span>→</span>
              </a>
            </div>

            <div className={styles.purchaseFacts}>
              <div>
                <strong>7 dias</strong>
                <span>para solicitar reembolso</span>
              </div>

              <div>
                <strong>Acesso imediato</strong>
                <span>cartão, Pix e transferência</span>
              </div>

              <div>
                <strong>Até 2 dias úteis</strong>
                <span>para boleto</span>
              </div>

              <div>
                <strong>Foco</strong>
                <span>questões objetivas e estratégia de prova</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqHeading}>
            <span className={styles.eyebrow}>DÚVIDAS FREQUENTES</span>
            <h2>Antes de começar.</h2>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary>
                  {faq.question}
                  <span>+</span>
                </summary>

                <p>{faq.answer}</p>
              </details>
            ))}
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

          <span className={styles.eyebrow}>REVISÃO 1ª FASE</span>

          <h2>
            Treine questões. Revise teoria. Ganhe estratégia.
          </h2>

          <p>
            Prepare-se para provas objetivas com prática real de vestibular.
          </p>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.finalButton}
          >
            Começar agora <span>→</span>
          </a>

          <Link href="/" className={styles.backHome}>
            ← Voltar para a página inicial
          </Link>
        </div>
      </section>
    </main>
  );
}
