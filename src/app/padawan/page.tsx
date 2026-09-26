import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./padawan.module.css";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "Padawan 1 e Padawan 3 | Reforço de Matemática",
  description:
    "Planos Padawan 1 e Padawan 3 para reforço de Matemática com acesso aos módulos do Semiextensivo, teoria, prática e Waldemática IA por 1 ou 3 meses.",
  alternates: {
    canonical: "/padawan/",
  },
  openGraph: {
    type: "website",
    url: "/padawan/",
    title: "Padawan 1 e Padawan 3 | Reforço de Matemática",
    description:
      "Escolha 1 ou 3 meses de acesso aos módulos do Semiextensivo com teoria, prática e Waldemática IA para reforçar conteúdos específicos de Matemática.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Padawan 1 e Padawan 3 | Reforço de Matemática",
    description:
      "Escolha 1 ou 3 meses de acesso aos módulos do Semiextensivo com teoria, prática e Waldemática IA para reforçar conteúdos específicos de Matemática.",
  },
};

const padawan1Url =
  "https://pay.hotmart.com/A39248741H?off=52uzidsx&checkoutMode=10&bid=1787746081105";

const padawan3Url =
  "https://pay.hotmart.com/A39248741H?off=dvprrf61&checkoutMode=10&bid=1787746079252";

const benefits = [
  {
    icon: "◎",
    title: "Acesso aos módulos",
    text: "Estude os conteúdos do Semiextensivo durante o período escolhido.",
  },
  {
    icon: "✦",
    title: "Waldemática IA",
    text: "Use o Tutor IA como apoio para dúvidas, explicações e continuidade dos estudos.",
  },
  {
    icon: "≡",
    title: "Teoria + prática",
    text: "Aulas objetivas combinadas com exercícios e materiais de apoio.",
  },
  {
    icon: "↗",
    title: "Escolha pelo tempo",
    text: "Use 1 mês para um reforço pontual ou 3 meses para estudar blocos maiores.",
  },
];

const useCases = [
  {
    title: "Assunto específico",
    examples: "Logaritmos, Probabilidade, Análise Combinatória...",
    plan: "Padawan 1",
  },
  {
    title: "Bloco maior de conteúdos",
    examples: "Geometria, Trigonometria, Álgebra...",
    plan: "Padawan 3",
  },
];

const faqs = [
  {
    question: "Qual é a diferença entre Padawan 1 e Padawan 3?",
    answer:
      "A diferença principal é o tempo de acesso. O Padawan 1 oferece 1 mês e é indicado para reforços pontuais. O Padawan 3 oferece 3 meses e é mais adequado para estudar blocos maiores de conteúdos.",
  },
  {
    question: "Os dois planos incluem Waldemática IA?",
    answer:
      "Sim. Tanto o Padawan 1 quanto o Padawan 3 incluem acesso à Waldemática IA durante o período contratado.",
  },
  {
    question: "Tenho acesso a todos os módulos do Semiextensivo?",
    answer:
      "Sim. Durante o período do plano escolhido, você tem acesso aos módulos do Semiextensivo e pode direcionar o estudo para os conteúdos que precisa reforçar.",
  },
  {
    question: "O Padawan substitui o Extensivo ou o Semiextensivo?",
    answer:
      "Não necessariamente. O Padawan foi pensado principalmente para quem precisa de um reforço mais pontual ou por um período menor, sem contratar uma preparação mais longa.",
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

export default function PadawanPage() {
  return (
    <main className={styles.page}>
      <SiteHeader
        ctaLabel="Escolher meu Padawan"
        ctaHref="#planos"
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.gridBg} />
        <div className={styles.heroGlowLeft} />
        <div className={styles.heroGlowRight} />

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>PLANOS PADAWAN</span>

            <h1>
              Reforce exatamente o que precisa,{" "}
              <span>pelo tempo que fizer sentido.</span>
            </h1>

            <p className={styles.heroLead}>
              Acesse os módulos do Semiextensivo por 1 ou 3 meses e use a
              Waldemática IA como apoio para revisar, aprofundar e avançar nos
              conteúdos que mais precisam de atenção.
            </p>

            <div className={styles.heroActions}>
              <a href="#planos" className={styles.primaryButton}>
                Comparar os planos <span>→</span>
              </a>

              <a href="#como-escolher" className={styles.secondaryButton}>
                Qual é melhor para mim?
              </a>
            </div>

            <div className={styles.heroChecks}>
              <span>✓ Módulos do Semiextensivo</span>
              <span>✓ Waldemática IA incluída</span>
              <span>✓ 7 dias de garantia</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualGlow} />
            <div className={styles.heroVisualRingOne} />
            <div className={styles.heroVisualRingTwo} />

            <div className={styles.heroPlansStage}>
              <div className={`${styles.heroPlanCard} ${styles.heroPlanCardThree}`}>
                <Image
                  src="/images/cursos/padawan-3-premium.png"
                  alt="Plano Padawan 3 para estudar blocos maiores de Matemática ao longo de três meses."
                  width={900}
                  height={900}
                  className={styles.heroPlanImage}
                  priority
                />
                <div className={styles.heroPlanShade} />
                <span className={styles.heroPlanPill}>PADAWAN 3 • 3 MESES</span>
              </div>

              <div className={`${styles.heroPlanCard} ${styles.heroPlanCardOne}`}>
                <Image
                  src="/images/cursos/padawan-1-premium.png"
                  alt="Plano Padawan 1 para reforçar assuntos específicos de Matemática durante um mês."
                  width={900}
                  height={900}
                  className={styles.heroPlanImage}
                />
                <div className={styles.heroPlanShade} />
                <span className={styles.heroPlanPill}>PADAWAN 1 • 1 MÊS</span>
              </div>

              <div className={`${styles.floatingCard} ${styles.floatingCardOne}`}>
                <span>ESCOLHA PELO OBJETIVO</span>
                <strong>Assunto isolado ou bloco completo</strong>
              </div>

              <div className={`${styles.floatingCard} ${styles.floatingCardTwo}`}>
                <span>INCLUÍDO</span>
                <strong>Waldemática IA nos dois planos</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>REFORÇO COM LIBERDADE</span>

            <h2>
              Você escolhe o tempo.{" "}
              <span>O conteúdo fica à sua disposição.</span>
            </h2>

            <p>
              O Padawan é indicado para quem não precisa de uma preparação longa,
              mas quer acessar conteúdos teóricos, exercícios e apoio inteligente
              por um período específico.
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

      {/* PLANOS */}
      <section id="planos" className={styles.plansSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>ESCOLHA SEU PLANO</span>

            <h2>
              Um mês para o pontual.{" "}
              <span>Três meses para ir além.</span>
            </h2>
          </div>

          <div className={styles.plansGrid}>
            <article id="padawan-1" className={`${styles.planCard} ${styles.planCardOne}`}>
              <div className={styles.planImageWrap}>
                <Image
                  src="/images/cursos/padawan-1-premium.png"
                  alt="Estudante revisando um assunto específico de Matemática para o Padawan 1."
                  width={1000}
                  height={720}
                  className={styles.planImage}
                />
                <div className={styles.planImageShade} />
                <span className={styles.planImageBadge}>1 MÊS DE ACESSO</span>
              </div>

              <div className={styles.planBody}>
                <div className={styles.planTop}>
                  <span className={styles.planBadge}>PADAWAN 1</span>
                  <span className={styles.planDuration}>REFORÇO PONTUAL</span>
                </div>

                <h3>Para reforçar assuntos específicos.</h3>

                <p>
                  Ideal quando você já sabe exatamente onde precisa melhorar e
                  quer concentrar o estudo em conteúdos pontuais.
                </p>

                <div className={styles.planPrice}>
                  <strong>R$ 99</strong>
                  <span>à vista</span>
                </div>

                <div className={styles.planExamples}>
                  <span>IDEAL PARA</span>
                  <p>Logaritmos • Probabilidade • Análise Combinatória</p>
                </div>

                <ul className={styles.planList}>
                  <li>✓ Acesso aos módulos do Semiextensivo</li>
                  <li>✓ Waldemática IA incluída</li>
                  <li>✓ Teoria + prática</li>
                  <li>✓ 1 mês de acesso</li>
                </ul>

                <a
                  href={padawan1Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.planButton}
                >
                  Quero o Padawan 1 <span>→</span>
                </a>
              </div>
            </article>

            <article
              id="padawan-3"
              className={`${styles.planCard} ${styles.planCardFeatured} ${styles.planCardThree}`}
            >
              <div className={styles.featuredGlow} />

              <div className={styles.planImageWrap}>
                <Image
                  src="/images/cursos/padawan-3-premium.png"
                  alt="Plano de estudo por blocos maiores de Matemática para o Padawan 3."
                  width={1000}
                  height={720}
                  className={styles.planImage}
                />
                <div className={styles.planImageShade} />
                <span className={styles.planImageBadge}>3 MESES DE ACESSO</span>
              </div>

              <div className={styles.planBody}>
                <div className={styles.planTop}>
                  <span className={styles.planBadge}>PADAWAN 3</span>
                  <span className={styles.planDuration}>MAIS TEMPO</span>
                </div>

                <h3>Para estudar setores inteiros.</h3>

                <p>
                  Indicado quando o reforço envolve um setor inteiro da Matemática
                  e você precisa de mais tempo para construir domínio.
                </p>

                <div className={styles.planPrice}>
                  <strong>3x de R$ 78,15</strong>
                  <span>ou R$ 219 à vista</span>
                </div>

                <div className={styles.planExamples}>
                  <span>IDEAL PARA</span>
                  <p>Geometria • Trigonometria • Álgebra</p>
                </div>

                <ul className={styles.planList}>
                  <li>✓ Acesso aos módulos do Semiextensivo</li>
                  <li>✓ Waldemática IA incluída</li>
                  <li>✓ Teoria + prática</li>
                  <li>✓ 3 meses de acesso</li>
                </ul>

                <a
                  href={padawan3Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.planButton}
                >
                  Quero o Padawan 3 <span>→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* COMO ESCOLHER */}
      <section id="como-escolher" className={styles.choiceSection}>
        <div className={styles.container}>
          <div className={styles.twoColumns}>
            <div>
              <span className={styles.eyebrow}>COMO ESCOLHER</span>

              <h2>
                Pense no tamanho do reforço que você precisa.
              </h2>

              <p className={styles.sectionText}>
                Os dois planos dão acesso ao mesmo universo de conteúdos. O que
                muda é o tempo disponível para estudar.
              </p>

              <div className={styles.choiceList}>
                {useCases.map((item) => (
                  <div key={item.title}>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.examples}</span>
                    </div>
                    <b>{item.plan}</b>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.highlightPanel}>
              <span className={styles.panelLabel}>REGRA SIMPLES</span>

              <h3>
                Quanto maior o bloco de conteúdos, mais sentido faz ter 3 meses.
              </h3>

              <p>
                Para um assunto isolado, um mês pode ser suficiente. Para
                Geometria, Trigonometria ou uma revisão mais ampla, o Padawan 3
                oferece espaço para estudar sem correr.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WALDEMÁTICA IA */}
      <section className={styles.aiSection}>
        <div className={styles.container}>
          <div className={styles.aiLayout}>
            <div>
              <span className={styles.eyebrow}>INCLUÍDA NOS DOIS PLANOS</span>

              <h2>
                Waldemática IA acompanha o seu reforço.
              </h2>

              <p>
                Use o Tutor IA para tirar dúvidas, pedir explicações, revisar
                conceitos e continuar estudando com apoio durante o período do
                plano escolhido.
              </p>
            </div>

            <div className={styles.aiPanel}>
              <div className={styles.aiPanelHeader}>
                <Image
                  src="/logo-waldematica.png"
                  alt=""
                  width={46}
                  height={46}
                />

                <div>
                  <span>WALDEMÁTICA IA</span>
                  <strong>Apoio inteligente durante o estudo</strong>
                </div>
              </div>

              <div className={styles.aiMiniCards}>
                <div>
                  <span>✦</span>
                  <strong>Tutor IA</strong>
                  <small>ajuda nas dúvidas</small>
                </div>

                <div>
                  <span>◎</span>
                  <strong>Conteúdo</strong>
                  <small>apoio nos módulos</small>
                </div>

                <div>
                  <span>↗</span>
                  <strong>Continuidade</strong>
                  <small>estude com direção</small>
                </div>
              </div>
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
                <span className={styles.eyebrow}>ESCOLHA PELO SEU MOMENTO</span>

                <h2>
                  Padawan 1 ou Padawan 3: o conteúdo é seu. O tempo, você escolhe.
                </h2>

                <p>
                  Os dois planos incluem acesso aos módulos do Semiextensivo e
                  à Waldemática IA.
                </p>
              </div>

              <a href="#planos" className={styles.purchaseButton}>
                Comparar planos <span>→</span>
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
                <strong>Waldemática IA</strong>
                <span>incluída nos dois planos</span>
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
            <h2>Antes de escolher.</h2>
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

          <span className={styles.eyebrow}>PLANOS PADAWAN</span>

          <h2>
            Escolha o tempo certo para o tamanho do seu reforço.
          </h2>

          <p>
            Escolha entre 1 ou 3 meses e concentre seu estudo no que realmente importa agora.
          </p>

          <a href="#planos" className={styles.finalButton}>
            Escolher meu plano <span>→</span>
          </a>

          <Link href="/" className={styles.backHome}>
            ← Voltar para a página inicial
          </Link>
        </div>
      </section>
    </main>
  );
}
