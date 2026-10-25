import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./padawan.module.css";
import SiteHeader from "../components/site-header";
import PadawanCompare from "../components/padawan-compare";

export const metadata: Metadata = {
  title: "Padawan 1 e Padawan 3 | Reforço de Matemática",
  description:
    "Compare Padawan 1 (1 mês) e Padawan 3 (3 meses): grade completa de Matemática, aulas, PDFs, resoluções em vídeo e Tutor IA na Waldemática IA.",
  alternates: {
    canonical: "/padawan/",
  },
  openGraph: {
    type: "website",
    url: "/padawan/",
    title: "Padawan 1 e Padawan 3 | Reforço de Matemática",
    description:
      "Estude com o Padawan 1 ou Padawan 3: grade completa de Matemática, videoaulas, PDFs, listas, resoluções e Lia, seu Tutor IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Padawan 1 e Padawan 3 | Reforço de Matemática",
    description:
      "Estude com o Padawan 1 ou Padawan 3: grade completa de Matemática, videoaulas, PDFs, listas, resoluções e Lia, seu Tutor IA.",
  },
};

const padawan1Url =
  "https://ia.waldematica.com.br/checkout/padawan-1";

const padawan3Url =
  "https://ia.waldematica.com.br/checkout/padawan-3";

const benefits = [
  {
    icon: "◎",
    title: "Acesso aos módulos",
    text: "A grade de 62 módulos está disponível em ambos os planos; escolha o que quer estudar.",
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
      "Os dois incluem a mesma grade de 62 módulos, videoaulas, PDFs, listas, resoluções das listas em vídeo, Matemática Básica e Tutor IA. O Padawan 1 dá acesso por 1 mês; o Padawan 3, por 3 meses.",
  },
  {
    question: "Os dois planos incluem Waldemática IA?",
    answer:
      "Sim. Os dois planos incluem a Waldemática IA, a Lia (Tutor IA), o acompanhamento da trilha, os materiais dos módulos e as resoluções das listas em vídeo durante o prazo contratado.",
  },
  {
    question: "Tenho acesso a todos os assuntos da Matemática?",
    answer:
      "Sim. Os dois Padawans disponibilizam a grade completa de 62 módulos. Você pode escolher os assuntos que quer estudar durante o período contratado.",
  },
  {
    question: "O Padawan substitui o Extensivo ou o Semiextensivo?",
    answer:
      "Não necessariamente. O Padawan foi pensado principalmente para quem precisa de um reforço mais pontual ou por um período menor, sem contratar uma preparação mais longa.",
  },
  {
    question: "Quando o acesso é liberado?",
    answer:
      "O acesso começa após a confirmação do pagamento. A disponibilidade dos meios de pagamento e os prazos correspondentes são informados no checkout do Mercado Pago.",
  },
  {
    question: "Posso assistir às resoluções das listas de exercícios?",
    answer:
      "Sim. Os dois Padawans incluem as resoluções das listas em vídeo e a coleção Matemática Básica. As coleções especiais de simulados e revisões não fazem parte destes planos.",
  },
  {
    question: "Como funcionam os parcelamentos?",
    answer:
      "O preço à vista é R$ 99 no Padawan 1 e R$ 219 no Padawan 3. Como referência, o simulador do Mercado Pago mostra 12 parcelas de R$ 10,07 ou R$ 22,29, respectivamente, com taxas repassadas ao comprador. O valor final é confirmado no checkout.",
  },
  {
    question: "Existe garantia?",
    answer:
      "Sim. Você tem até 7 dias corridos após a compra para solicitar reembolso, conforme as condições aplicáveis.",
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
              Estude qualquer assunto da grade completa de Matemática com videoaulas,
              exercícios, resoluções e a Lia, seu Tutor IA. Escolha 1 ou 3 meses
              de acesso conforme seu objetivo.
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
              <span>✓ 62 módulos disponíveis</span>
              <span>✓ Resoluções das listas em vídeo</span>
              <span>✓ Lia, Tutor IA</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <PadawanCompare />
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
              <div className={`${styles.planVisualHeader} ${styles.planVisualHeaderOne}`}>
                <div>
                  <span className={styles.planVisualKicker}>FOCO EM ASSUNTOS ESPECÍFICOS</span>
                  <strong className={styles.planVisualName}>PADAWAN 1</strong>
                  <span className={styles.planVisualCaption}>Seu objetivo. Seu ritmo.</span>
                </div>
                <span className={styles.planMark} aria-hidden="true">01</span>
              </div>
              <div className={styles.planBody}>
                <div className={styles.planTop}>
                  <span className={styles.planBadge}>PADAWAN 1</span>
                  <span className={styles.planDuration}>1 MÊS DE ACESSO</span>
                </div>
                <h3>Para reforçar assuntos específicos.</h3>
                <p className={styles.planDescription}>Ideal para revisar tópicos pontuais com acesso à mesma grade de Matemática dos planos mais longos.</p>
                <div className={styles.planPrice}>
                  <small>SIMULAÇÃO EM 12 PARCELAS*</small>
                  <strong>12× de R$ 10,07</strong>
                  <span>R$ 99,00 à vista</span>
                </div>
                <div className={styles.planExamples}>
                  <span>IDEAL PARA</span>
                  <p>Logaritmos • Probabilidade • Análise Combinatória</p>
                </div>
                <div className={styles.offerHighlights}>
                  <span className={styles.offerHeading}>O QUE ESTÁ INCLUÍDO</span>
                  <ul className={styles.planList}>
                    <li>✓ Todos os assuntos da Matemática — 62 módulos</li>
                    <li>✓ Videoaulas, PDFs, exercícios e listas</li>
                    <li>✓ Resoluções das listas em vídeo</li>
                    <li>✓ Lia: Tutor IA e acompanhamento da trilha</li>
                    <li>✓ Matemática Básica e avaliações</li>
                  </ul>
                </div>
                <a href={padawan1Url} target="_blank" rel="noopener noreferrer" className={styles.planButton}
                  aria-label="Escolher Padawan 1: abrir checkout em nova aba">
                  Escolher Padawan 1 <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            <article id="padawan-3" className={`${styles.planCard} ${styles.planCardFeatured} ${styles.planCardThree}`}>
              <div className={`${styles.planVisualHeader} ${styles.planVisualHeaderThree}`}>
                <div>
                  <span className={styles.planVisualKicker}>MAIS TEMPO PARA APROFUNDAR</span>
                  <strong className={styles.planVisualName}>PADAWAN 3</strong>
                  <span className={styles.planVisualCaption}>Uma trilha de foco para avançar.</span>
                </div>
                <span className={styles.planMark} aria-hidden="true">03</span>
              </div>
              <div className={styles.planBody}>
                <div className={styles.planTop}>
                  <span className={styles.planBadge}>PADAWAN 3</span>
                  <span className={styles.planDuration}>3 MESES DE ACESSO</span>
                </div>
                <h3>Para estudar blocos maiores de Matemática.</h3>
                <p className={styles.planDescription}>Mais tempo para estudar setores inteiros, retomar pré-requisitos e praticar no seu ritmo.</p>
                <div className={styles.planPrice}>
                  <small>SIMULAÇÃO EM 12 PARCELAS*</small>
                  <strong>12× de R$ 22,29</strong>
                  <span>R$ 219,00 à vista</span>
                </div>
                <div className={styles.planExamples}>
                  <span>IDEAL PARA</span>
                  <p>Geometria • Trigonometria • Álgebra</p>
                </div>
                <div className={styles.offerHighlights}>
                  <span className={styles.offerHeading}>O QUE ESTÁ INCLUÍDO</span>
                  <ul className={styles.planList}>
                    <li>✓ Todos os assuntos da Matemática — 62 módulos</li>
                    <li>✓ Videoaulas, PDFs, exercícios e listas</li>
                    <li>✓ Resoluções das listas em vídeo</li>
                    <li>✓ Lia: Tutor IA e acompanhamento da trilha</li>
                    <li>✓ Matemática Básica e avaliações</li>
                  </ul>
                </div>
                <a href={padawan3Url} target="_blank" rel="noopener noreferrer" className={styles.planButton}
                  aria-label="Escolher Padawan 3: abrir checkout em nova aba">
                  Escolher Padawan 3 <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
          <p className={styles.plansNote}>* Valores de referência com taxas de parcelamento repassadas ao comprador. O Mercado Pago confirma as condições finais antes da compra. Coleções especiais de simulados e revisões não integram os Padawans.</p>
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
                  Os dois planos incluem a grade completa de Matemática, resoluções das listas e
                  a Waldemática IA. A diferença principal é o tempo de acesso.
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
                <strong>Pagamento seguro</strong>
                <span>checkout Mercado Pago</span>
              </div>

              <div>
                <strong>Compra única</strong>
                <span>sem renovação automática</span>
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
