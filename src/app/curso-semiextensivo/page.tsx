import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./semiextensivo.module.css";
import SiteHeader from "../components/site-header";
import PlanOfferPanel from "../components/plan-offer-panel";

export const metadata: Metadata = {
  title: "Curso Semiextensivo de Matemática para ENEM e Vestibulares",
  description:
    "Semiextensivo Waldemática IA: 6 meses de acesso aos 62 módulos, videoaulas, PDFs, resoluções das listas, simulados, revisões e Tutor IA.",
  alternates: {
    canonical: "/curso-semiextensivo/",
  },
  openGraph: {
    type: "website",
    url: "/curso-semiextensivo/",
    title: "Curso Semiextensivo de Matemática para ENEM e Vestibulares",
    description:
      "A mesma grade completa de Matemática do Extensivo, com seis meses de acesso, Tutor IA, simulados, resoluções e revisões.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso Semiextensivo de Matemática para ENEM e Vestibulares",
    description:
      "A mesma grade completa de Matemática do Extensivo, com seis meses de acesso, Tutor IA, simulados, resoluções e revisões.",
  },
};

const checkoutUrl =
  "https://ia.waldematica.com.br/checkout/semiextensivo";

const benefits = [
  {
    icon: "◎",
    title: "Grade acadêmica completa",
    text: "Os mesmos 62 módulos do Extensivo, em seis meses para organizar sua preparação.",
  },
  {
    icon: "✦",
    title: "Waldemática IA",
    text: "Tutor IA, acompanhamento de progresso e apoio inteligente durante a jornada.",
  },
  {
    icon: "≡",
    title: "Aulas, listas e resoluções",
    text: "Videoaulas, PDFs, exercícios e resoluções das listas em vídeo para acompanhar o raciocínio.",
  },
  {
    icon: "↗",
    title: "Plano estruturado",
    text: "Você estuda com uma sequência organizada, sem precisar decidir sozinho o próximo passo.",
  },
];

const idealFor = [
  "Quem quer estudar todos os assuntos da Matemática e dispõe de seis meses de acesso.",
  "Quem busca preparação ampla para ENEM e vestibulares com uma trilha organizada.",
  "Quem deseja aulas, listas, resoluções em vídeo, simulados e revisões no mesmo plano.",
  "Quem valoriza o acompanhamento de desempenho e o apoio da Lia, o Tutor IA.",
];

const included = [
  "A mesma grade acadêmica completa do Extensivo, com 62 módulos de Matemática.",
  "Videoaulas, materiais em PDF, exercícios de aplicação e listas selecionadas.",
  "Resoluções das listas em vídeo e resoluções comentadas de vestibulares.",
  "Trilha organizada, checkpoints, avaliações e acompanhamento do progresso.",
  "Lia, Tutor IA da Waldemática, para apoiar os estudos.",
  "Matemática Básica, Revisão Geral Teórica e revisão para provas objetivas.",
  "Simulados especiais para praticar antes das provas.",
];


const courseTopics = [
  {
    number: "01",
    title: "Álgebra",
    icon: "∑",
    topics: [
      "Produtos Notáveis e Fatoração",
      "Potenciação e Radiciação",
      "Razão e Proporção",
      "Porcentagem e Juros",
      "Teoria dos Conjuntos",
      "Conjuntos Numéricos",
      "M.M.C. e M.D.C.",
      "Conceito inicial de Funções",
      "Função do 1º Grau",
      "Função do 2º Grau",
      "Inequações",
      "Função Modular",
      "Função Composta",
      "Função Inversa",
      "Função Exponencial",
      "Função Logarítmica",
      "P.A.",
      "P.G.",
      "Matrizes",
      "Determinantes",
      "Sistemas Lineares",
      "Fatorial e Binômio de Newton",
      "Análise Combinatória",
      "Probabilidade",
      "Números Complexos",
      "Polinômios",
      "Estatística Básica",
    ],
  },
  {
    number: "02",
    title: "Geometria Plana",
    icon: "△",
    topics: [
      "Ângulos",
      "Paralelismo",
      "Triângulos",
      "Pontos Notáveis de um Triângulo",
      "Quadriláteros Notáveis",
      "Ângulos na Circunferência",
      "Polígonos Convexos e Regulares",
      "Teorema de Tales",
      "Semelhança de Triângulos",
      "Relações Métricas no Triângulo Retângulo",
      "Relações Métricas na Circunferência",
      "Áreas Elementares",
      "Áreas Circulares",
    ],
  },
  {
    number: "03",
    title: "Trigonometria",
    icon: "θ",
    topics: [
      "Razões Trigonométricas no Triângulo Retângulo",
      "Identidades Trigonométricas",
      "Medidas de Arcos e Ângulos",
      "Circunferência Trigonométrica",
      "Lei dos Senos",
      "Lei dos Cossenos",
      "Soma e Diferença de Arcos",
      "Arco Duplo",
      "Equações e Inequações Trigonométricas",
      "Funções Trigonométricas",
    ],
  },
  {
    number: "04",
    title: "Geometria Analítica",
    icon: "⌖",
    topics: [
      "Introdução à Geometria Analítica",
      "Distância entre 2 pontos e Ponto Médio",
      "Condição de Alinhamento de 3 pontos",
      "Área dos Polígonos",
      "Estudo da Reta",
      "Estudo da Circunferência",
      "Posições Relativas",
      "Distância de Ponto à Reta",
      "Desigualdades e Inequações",
      "Estudo da Elipse",
      "Estudo da Parábola",
      "Estudo da Hipérbole",
    ],
  },
  {
    number: "05",
    title: "Geometria Espacial",
    icon: "◇",
    topics: [
      "Geometria de Posição",
      "Estudo dos Poliedros",
      "Prismas",
      "Paralelepípedos",
      "Cubos",
      "Pirâmides",
      "Tetraedros",
      "Cilindros",
      "Cones",
      "Esferas",
      "Estudo dos Troncos",
      "Circunscrição e Inscrição de Sólidos",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Aprenda",
    text: "Estude a teoria necessária com explicações objetivas e organizadas.",
  },
  {
    number: "02",
    title: "Pratique",
    text: "Resolva exercícios para transformar conteúdo em domínio real.",
  },
  {
    number: "03",
    title: "Consolide",
    text: "Avance pelas listas selecionadas e fortaleça os pontos essenciais.",
  },
  {
    number: "04",
    title: "Avalie",
    text: "Verifique seu desempenho e identifique o que merece mais atenção.",
  },
  {
    number: "05",
    title: "Evolua",
    text: "Use seu progresso e o apoio da plataforma para continuar avançando.",
  },
];

const testimonials = [
  {
    name: "Felipe Chaguri",
    result: "Engenharia de Automação — Unicamp",
    image: "/depoimentos/felipe-chaguri.jpg",
  },
  {
    name: "Carla Xavier",
    result: "Odontologia — Unicamp",
    image: "/depoimentos/carla-xavier.jpg",
  },
  {
    name: "Arthur R. Teixeira",
    result: "Engenharia Mecânica — Politécnica / USP",
    image: "/depoimentos/arthur-teixeira.jpg",
  },
];

const faqs = [
  { question: "O Semiextensivo inclui os mesmos assuntos do Extensivo?", answer: "Sim. Ambos disponibilizam a mesma grade de 62 módulos de Matemática. A diferença principal é o período de acesso e as coleções especiais: o Semiextensivo tem seis meses e não inclui o Curso de Revisão da 2ª Fase." },
  { question: "Quais materiais e resoluções estão incluídos?", answer: "Videoaulas, PDFs, exercícios, listas e resoluções das listas em vídeo. O plano também inclui resoluções comentadas de vestibulares, revisões e simulados especiais." },
  { question: "O Semiextensivo inclui a Lia, o Tutor IA?", answer: "Sim. A Waldemática IA acompanha a trilha, o progresso e disponibiliza a Lia para ajudar com dúvidas e exercícios." },
  { question: "Qual é o preço e o prazo de acesso?", answer: "São seis meses de acesso, por R$ 329,00 à vista. A simulação do Mercado Pago para doze parcelas, com taxas repassadas ao comprador, é de 12× R$ 33,48. As condições definitivas são exibidas no checkout." },
  { question: "Quais revisões estão incluídas?", answer: "Inclui revisão com questões do ENEM, Revisão Geral Teórica e revisões para provas objetivas. O Curso de Revisão da 2ª Fase, com questões dissertativas, é exclusivo do Extensivo entre esses dois planos." },
  { question: "A compra é mensal ou tem renovação automática?", answer: "É uma compra única com seis meses de acesso, sem renovação automática. Para renovar, basta realizar uma nova contratação." },
  { question: "Como recebo o acesso após o pagamento?", answer: "Após a confirmação do pagamento, as orientações de acesso e de criação de senha são enviadas ao e-mail informado na matrícula. O prazo depende do meio de pagamento." },
  { question: "Posso pedir reembolso?", answer: "Sim. O prazo para solicitar reembolso é de sete dias corridos após a compra, conforme as condições aplicáveis." },
];

export default function SemiextensivoPage() {
  return (
    <main className={styles.page}>
      <SiteHeader
        ctaLabel="Quero o Semiextensivo"
        ctaHref={checkoutUrl}
      />

      {/* HERO — texto e preço à esquerda; oferta real à direita */}
      <section className={styles.hero} aria-labelledby="semiextensivo-title">
        <div className={styles.gridBg} />
        <div className={styles.heroGlowLeft} />
        <div className={styles.heroGlowRight} />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>SEMIEXTENSIVO · WALDEMÁTICA IA · 6 MESES</span>
            <h1 id="semiextensivo-title">Toda a Matemática. <span>Seis meses para avançar.</span></h1>
            <p className={styles.heroLead}>
              A mesma grade de 62 módulos do Extensivo, com videoaulas, prática,
              resoluções, simulados, revisões e a Lia acompanhando sua evolução.
              Uma preparação completa em um período de acesso mais curto.
            </p>
            <div className={styles.heroOffer}>
              <div>
                <span className={styles.heroOfferLabel}>SIMULAÇÃO DE PARCELAMENTO*</span>
                <strong>12× de R$ 33,48</strong>
                <small>R$ 329,00 à vista</small>
              </div>
              <span className={styles.heroOfferTag}>6 meses de acesso</span>
            </div>
            <p className={styles.commercialNote}>
              * Taxas de parcelamento repassadas ao comprador. As condições finais são confirmadas no Mercado Pago.
            </p>
            <div className={styles.heroActions}>
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                Quero o Semiextensivo <span aria-hidden="true">↗</span>
              </a>
              <a href="#como-funciona" className={styles.secondaryButton}>Ver como funciona</a>
            </div>
            <div className={styles.heroChecks}>
              <span>✓ Mesma grade do Extensivo</span>
              <span>✓ Resoluções e simulados incluídos</span>
              <span>✓ Tutor IA</span>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <PlanOfferPanel planCode="semiextensivo" />
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>A MESMA GRADE EM SEIS MESES</span>
            <h2>
              Mais do que assistir aulas.{" "}
              <span>Você segue um caminho.</span>
            </h2>
            <p>
              O Semiextensivo oferece a mesma grade de 62 módulos do Extensivo, com seis meses de acesso e organização para quem busca uma preparação abrangente.
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

      {/* PARA QUEM É */}
      <section className={styles.audienceSection}>
        <div className={styles.container}>
          <div className={styles.twoColumns}>
            <div>
              <span className={styles.eyebrow}>PARA QUEM É O SEMIEXTENSIVO</span>

              <h2>
                Para quem precisa avançar com mais foco.
              </h2>

              <p className={styles.sectionText}>
                O Semiextensivo é indicado para quem quer acesso a toda a grade acadêmica de Matemática e pretende organizar seus estudos durante seis meses.
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
              <span className={styles.panelLabel}>A DIFERENÇA</span>

              <h3>
                Conteúdo sozinho não organiza uma preparação.
              </h3>

              <p>
                No Semiextensivo, aulas, prática, avaliações e acompanhamento fazem
                parte de uma mesma jornada. A ideia é simples: você precisa
                entender o conteúdo, praticar e saber qual é o próximo passo.
              </p>

              <div className={styles.panelStat}>
                <strong>1</strong>
                <span>grade completa estruturada para orientar seus estudos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUÍDO */}
      <section className={styles.includedSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>O QUE VOCÊ RECEBE</span>

            <h2>
              Tudo conectado em uma{" "}
              <span>preparação intensiva.</span>
            </h2>
          </div>

          <div className={styles.includedLayout}>
            <div className={styles.includedList}>
              {included.map((item, index) => (
                <div key={item} className={styles.includedItem}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className={styles.aiPanel}>
              <div className={styles.aiPanelHeader}>
                <Image
                  src="/logo-waldematica.png"
                  alt=""
                  width={42}
                  height={42}
                />

                <div>
                  <span>INCLUÍDA NO SEMIEXTENSIVO</span>
                  <strong>Waldemática IA</strong>
                </div>
              </div>

              <p>
                A plataforma acompanha sua preparação e reúne o Tutor IA,
                organização da trilha e progresso de estudos em um único
                ambiente.
              </p>

              <div className={styles.aiMiniCards}>
                <div>
                  <span>✦</span>
                  <strong>Tutor IA</strong>
                  <small>apoio durante os estudos</small>
                </div>

                <div>
                  <span>◎</span>
                  <strong>Trilha</strong>
                  <small>organização do caminho</small>
                </div>

                <div>
                  <span>↗</span>
                  <strong>Progresso</strong>
                  <small>acompanhe sua evolução</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CONTEÚDOS DO SEMIEXTENSIVO */}
      <section className={styles.topicsSection}>
        <div className={styles.topicsGlow} />

        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>O QUE VOCÊ VAI ESTUDAR</span>

            <h2>
              Todos os assuntos da Matemática para{" "}
              <span>ENEM e vestibulares.</span>
            </h2>

            <p>
              Os conteúdos do Semiextensivo estão organizados por grandes áreas.
              Abra cada bloco para visualizar os assuntos trabalhados ao longo
              da preparação.
            </p>
          </div>

          <div className={styles.topicsGrid}>
            {courseTopics.map((area, index) => (
              <details
                key={area.title}
                className={`${styles.topicCard} ${
                  index === 0 ? styles.topicCardFeatured : ""
                }`}
              >
                <summary className={styles.topicSummary}>
                  <div className={styles.topicHeading}>
                    <div className={styles.topicIcon}>{area.icon}</div>

                    <div>
                      <span>{area.number}</span>
                      <h3>{area.title}</h3>
                    </div>
                  </div>

                  <div className={styles.topicMeta}>
                    <span>{area.topics.length} assuntos</span>
                    <b>+</b>
                  </div>
                </summary>

                <div className={styles.topicContent}>
                  <div className={styles.topicList}>
                    {area.topics.map((topic) => (
                      <div key={topic} className={styles.topicItem}>
                        <span>✓</span>
                        <p>{topic}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className={styles.topicsFootnote}>
            <span>✦</span>
            <p>
              A organização da preparação orienta a sequência de estudos para que
              esses conteúdos não apareçam como uma lista solta de assuntos.
            </p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className={styles.methodSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>COMO FUNCIONA</span>

            <h2>
              Um processo simples para{" "}
              <span>estudar com consistência.</span>
            </h2>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <article key={step.number} className={styles.stepCard}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>RESULTADOS REAIS</span>

            <h2>
              Quem estudou,{" "}
              <span>recomenda.</span>
            </h2>

            <p>
              Alguns alunos que passaram pelo Waldemática e compartilharam
              suas experiências de preparação.
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <a
                key={testimonial.name}
                href={testimonial.image}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.testimonialCard}
              >
                <div className={styles.testimonialImageWrap}>
                  <Image
                    src={testimonial.image}
                    alt={`Depoimento de ${testimonial.name}`}
                    width={900}
                    height={1100}
                    className={styles.testimonialImage}
                  />

                  <div className={styles.testimonialImageShade} />

                  <div className={styles.testimonialBadge}>
                    <span>✓</span>
                    Depoimento real
                  </div>
                </div>

                <div className={styles.testimonialContent}>
                  <span className={styles.quoteMark}>“</span>

                  <div>
                    <strong>{testimonial.name}</strong>
                    <p>{testimonial.result}</p>
                  </div>

                  <span className={styles.testimonialAction}>
                    Ver depoimento completo <b>→</b>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA E COMPRA */}
      <section className={styles.purchaseSection}>
        <div className={styles.container}>
          <div className={styles.purchaseCard}>
            <div className={styles.purchaseTop}>
              <div>
                <span className={styles.eyebrow}>COMECE SUA PREPARAÇÃO</span>

                <h2>
                  Entre no Semiextensivo e avance com mais foco.
                </h2>

                <p>
                  Acesso aos 62 módulos de Matemática, resoluções, simulados, revisões e Tutor IA.
                </p>

                <div className={styles.purchasePrice}>
                  <span>SIMULAÇÃO DE PARCELAMENTO*</span>
                  <strong>12× de R$ 33,48*</strong>
                  <small>ou R$ 329,00 à vista</small>
                </div>
              </div>

              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.purchaseButton}
              >
                Quero o Semiextensivo <span>→</span>
              </a>
            </div>

            <div className={styles.purchaseFacts}>
              <div>
                <strong>7 dias</strong>
                <span>para solicitar reembolso</span>
              </div>

              <div>
                <strong>Acesso imediato</strong>
                <span>após confirmação do pagamento</span>
              </div>

              <div>
                <strong>Pagamento</strong>
                <span>condições no Mercado Pago</span>
              </div>

              <div>
                <strong>Renovação</strong>
                <span>nova contratação, sem cobrança automática</span>
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

          <span className={styles.eyebrow}>SEMIEXTENSIVO WALDEMÁTICA</span>

          <h2>
            Avance com foco, prática e direção.
          </h2>

          <p>
            Estude todos os assuntos da Matemática com seis meses de acesso e Tutor IA.
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
