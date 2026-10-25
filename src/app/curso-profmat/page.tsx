import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./profmat.module.css";
import SiteHeader from "../components/site-header";
import ProfmatCompare from "../components/profmat-compare";

export const metadata: Metadata = {
  title: "PROFMAT / ENA e PROFMAT Completo | Waldemática IA",
  description:
    "Compare PROFMAT / ENA (6 meses) e PROFMAT Completo (9 meses), com videoaulas, PDFs, exercícios, resoluções, simulados e Tutor IA.",
  alternates: {
    canonical: "/curso-profmat/",
  },
  openGraph: {
    type: "website",
    url: "/curso-profmat/",
    title: "PROFMAT / ENA e PROFMAT Completo | Waldemática IA",
    description:
      "Duas assinaturas Waldemática IA: trilha específica ENA ou grade completa de Matemática, com resoluções, simulados e Tutor IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROFMAT / ENA e PROFMAT Completo | Waldemática IA",
    description:
      "Duas assinaturas Waldemática IA: trilha específica ENA ou grade completa de Matemática, com resoluções, simulados e Tutor IA.",
  },
};

const checkoutUrl = "https://ia.waldematica.com.br/checkout/profmat";
const completeCheckoutUrl = "https://ia.waldematica.com.br/checkout/profmat-completo";

const benefits = [
  {
    icon: "◎",
    title: "Nivelamento + teoria",
    text: "A preparação parte dos pré-requisitos necessários e avança até os conteúdos exigidos no ENA.",
  },
  {
    icon: "✦",
    title: "Waldemática IA",
    text: "Tutor IA, acompanhamento de progresso e apoio inteligente ao longo da preparação.",
  },
  {
    icon: "≡",
    title: "Treinamento estratégico",
    text: "Listas de fixação e aprofundamento, com questões selecionadas no nível da prova.",
  },
  {
    icon: "↗",
    title: "Plano de estudos",
    text: "Organização da preparação para você avançar com direção até a data do exame.",
  },
];

const idealFor = [
  "Professores de Matemática que desejam ingressar no PROFMAT.",
  "Estudantes de Licenciatura em Matemática que querem se preparar para o ENA.",
  "Quem precisa revisar a Matemática do Ensino Médio em um nível elevado de profundidade.",
  "Quem quer estudar com método, exercícios selecionados e uma preparação organizada.",
];

const included = [
  "Aulas de nivelamento e teoria com foco nos conhecimentos exigidos no ENA.",
  "Exercícios de aplicação, fixação e aprofundamento.",
  "Questões em nível elevado de complexidade, com resolução orientada.",
  "Plano de estudos estruturado para organizar a preparação.",
  "Waldemática IA com Tutor IA e acompanhamento de progresso.",
  "Materiais em PDF para apoiar as aulas e listas de exercícios.",
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
      "P.A.",
      "P.G.",
      "Análise Combinatória",
      "Probabilidade",
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
    ],
  },
  {
    number: "05",
    title: "Geometria Espacial",
    icon: "◇",
    topics: [
      "Prismas",
      "Paralelepípedos",
      "Cubos",
      "Pirâmides",
      "Tetraedros",
      "Cilindros",
      "Cones",
      "Esferas",
      "Circunscrição e Inscrição de Sólidos",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Nivele",
    text: "Reforce os pré-requisitos necessários antes de avançar para os pontos mais exigentes.",
  },
  {
    number: "02",
    title: "Estude",
    text: "Construa a teoria com explicações diretas ao ponto e foco no que o ENA realmente exige.",
  },
  {
    number: "03",
    title: "Treine",
    text: "Resolva listas de fixação e aprofundamento com questões em nível elevado.",
  },
  {
    number: "04",
    title: "Avalie",
    text: "Acompanhe seu domínio dos conteúdos e identifique os pontos que ainda precisam de revisão.",
  },
  {
    number: "05",
    title: "Aprimore",
    text: "Use o plano de estudos e a Waldemática IA para continuar avançando com direção.",
  },
];

const testimonials = [
  {
    name: "Robson Rodrigues",
    result: "Aprovado na ESFCEx — Formação de Oficiais",
    image: "/depoimentos/robson-rodrigues.jpg",
  },
  {
    name: "Wagner Antides Pina",
    result: "Aprovado na UFU — Medicina",
    image: "/depoimentos/wagner-pina.jpg",
  },
  {
    name: "Felipe Chaguri",
    result: "Engenharia de Automação — Unicamp",
    image: "/depoimentos/felipe-chaguri.jpg",
  },
];

const faqs = [
  { question: "Qual é a diferença entre PROFMAT / ENA e PROFMAT Completo?", answer: "O PROFMAT / ENA tem uma trilha específica para o Exame Nacional de Acesso e acesso por seis meses. O PROFMAT Completo dá acesso à grade completa de 62 módulos de Matemática por nove meses e inclui revisões complementares para provas objetivas." },
  { question: "Ambos incluem Waldemática IA e a Lia?", answer: "Sim. Nos dois planos você encontra videoaulas, PDFs, listas, resoluções em vídeo, avaliações e a Lia, Tutor IA da plataforma." },
  { question: "Quais são os preços dos dois planos?", answer: "O PROFMAT / ENA custa R$ 299,00 à vista, com simulação de 12× R$ 30,43. O PROFMAT Completo custa R$ 349,00 à vista, com simulação de 12× R$ 35,51. Em ambos os casos, as taxas de parcelamento são repassadas ao comprador e o Mercado Pago confirma as condições finais." },
  { question: "Há simulados e resoluções comentadas nos dois planos?", answer: "Sim. As duas assinaturas incluem simulados especiais, resoluções das listas em vídeo e resoluções comentadas, conforme a organização da Biblioteca." },
  { question: "O PROFMAT Completo dá acesso à mesma grade do Extensivo?", answer: "Sim. O PROFMAT Completo oferece a grade completa de 62 módulos de Matemática, com nove meses de acesso. Não inclui o Curso de Revisão da 2ª Fase." },
  { question: "A trilha ENA exige Cálculo de nível superior?", answer: "A preparação específica para o ENA trabalha a Matemática do Ensino Médio e os pré-requisitos relevantes em nível elevado de aprofundamento, conforme a proposta do curso." },
  { question: "Como recebo o acesso após a compra?", answer: "Após a confirmação do pagamento, as orientações para acessar a Waldemática IA e definir sua senha são enviadas ao e-mail informado na matrícula. A confirmação depende do meio de pagamento." },
  { question: "É renovação automática? Existe reembolso?", answer: "A compra concede o período indicado no plano, sem renovação automática. Você pode solicitar reembolso em até sete dias corridos após a compra, conforme as condições aplicáveis." },
];

export default function ProfmatPage() {
  return (
    <main className={styles.page}>
      <SiteHeader
        ctaLabel="Escolher PROFMAT"
        ctaHref="#comparar-profmat"
      />

      {/* HERO — duas assinaturas PROFMAT apresentadas lado a lado */}
      <section className={styles.hero} aria-labelledby="profmat-title">
        <div className={styles.gridBg} />
        <div className={styles.heroGlowLeft} />
        <div className={styles.heroGlowRight} />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>PROFMAT · WALDEMÁTICA IA</span>
            <h1 id="profmat-title">Sua preparação para o PROFMAT, <span>no plano certo para você.</span></h1>
            <p className={styles.heroLead}>
              Escolha entre a trilha específica para o ENA, com seis meses de acesso,
              e o PROFMAT Completo, com nove meses e todos os 62 módulos de Matemática.
              Os dois incluem a Lia, aulas, materiais, resoluções e simulados.
            </p>
            <div className={styles.planSummary}>
              <div className={styles.summaryItem}>
                <span>PROFMAT / ENA · 6 MESES</span>
                <strong>12× R$ 30,43<sup>*</sup></strong>
                <small>R$ 299,00 à vista</small>
              </div>
              <div className={`${styles.summaryItem} ${styles.summaryComplete}`}>
                <span>PROFMAT COMPLETO · 9 MESES</span>
                <strong>12× R$ 35,51<sup>*</sup></strong>
                <small>R$ 349,00 à vista</small>
              </div>
            </div>
            <p className={styles.commercialNote}>
              * Simulação com taxas repassadas ao comprador. Confira as opções e as condições finais no Mercado Pago.
            </p>
            <div className={styles.heroActions}>
              <a href={checkoutUrl} className={styles.primaryButton} target="_blank" rel="noopener noreferrer">
                Quero o PROFMAT / ENA <span aria-hidden="true">↗</span>
              </a>
              <a href={completeCheckoutUrl} className={styles.secondaryButton} target="_blank" rel="noopener noreferrer">
                Quero o PROFMAT Completo ↗
              </a>
            </div>
            <div className={styles.heroChecks}>
              <span>✓ Tutor IA incluído nos dois</span>
              <span>✓ Resoluções das listas em vídeo</span>
              <span>✓ Simulados especiais</span>
            </div>
          </div>
          <div className={styles.heroVisual}><ProfmatCompare /></div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>PREPARAÇÃO ESPECÍFICA PARA O ENA</span>
            <h2>
              Muito mais que estudar o edital.{" "}
              <span>Você constrói domínio de Matemática.</span>
            </h2>
            <p>
              O ENA exige domínio da Matemática do Ensino Médio em um nível elevado de profundidade. A preparação organiza esse caminho desde os pré-requisitos até questões mais exigentes.
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
              <span className={styles.eyebrow}>PARA QUEM É A TRILHA PROFMAT / ENA</span>

              <h2>
                Para professores e futuros professores que querem se preparar com método.
              </h2>

              <p className={styles.sectionText}>
                O curso foi pensado para professores de Matemática e estudantes de Licenciatura que desejam uma preparação específica para o ENA, com teoria, prática e organização de estudos.
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
                O ENA exige profundidade, não Matemática de nível superior.
              </h3>

              <p>
                A prova cobra Matemática do Ensino Médio em alto nível de complexidade. Por isso, a preparação começa pelos pré-requisitos e avança até questões mais elaboradas.
              </p>

              <div className={styles.panelStat}>
                <strong>1</strong>
                <span>preparação específica para orientar seus estudos até o ENA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUÍDO */}
      <section className={styles.includedSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>NA TRILHA DIRECIONADA AO ENA</span>

            <h2>
              Tudo conectado em uma{" "}
              <span>preparação específica.</span>
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
                  <span>INCLUÍDA NO PROFMAT / ENA</span>
                  <strong>Waldemática IA</strong>
                </div>
              </div>

              <p>
                A plataforma acompanha sua preparação e reúne o Tutor IA, organização dos estudos e progresso em um único ambiente.
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


      {/* CONTEÚDOS DO PROFMAT / ENA */}
      <section className={styles.topicsSection}>
        <div className={styles.topicsGlow} />

        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>CONTEÚDOS DA TRILHA ENA</span>

            <h2>
              Assuntos trabalhados na trilha para o{" "}
              <span>ENA do PROFMAT.</span>
            </h2>

            <p>
              Os conteúdos estão organizados por grandes áreas e partem dos pré-requisitos necessários para a compreensão dos tópicos exigidos no exame.
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
              A preparação organiza os conteúdos em uma sequência de estudos, conectando base teórica, treino e aprofundamento.
            </p>
          </div>
        </div>
      </section>

      {/* PROFMAT COMPLETO — também apresentado nesta página */}
      <section className={styles.completeSection} aria-labelledby="profmat-completo-title">
        <div className={styles.container}>
          <div className={styles.completeCard}>
            <div>
              <span className={styles.eyebrow}>PROFMAT COMPLETO · 9 MESES</span>
              <h2 id="profmat-completo-title">Mais tempo e a <span>grade completa de Matemática.</span></h2>
              <p>
                O PROFMAT Completo dá acesso aos 62 módulos da Waldemática, com videoaulas,
                PDFs, exercícios, resoluções das listas, avaliações, Lia e uma Biblioteca
                ampliada de simulados e revisões para provas objetivas.
              </p>
              <div className={styles.completeFacts}>
                <span>✓ Grade completa de 62 módulos</span>
                <span>✓ Resoluções e simulados</span>
                <span>✓ Revisões para provas objetivas</span>
                <span>✓ Nove meses de acesso</span>
              </div>
            </div>
            <div className={styles.completeSide}>
              <span>PROFMAT COMPLETO</span>
              <strong>12× de R$ 35,51*</strong>
              <small>R$ 349,00 à vista</small>
              <a href={completeCheckoutUrl} target="_blank" rel="noopener noreferrer">Escolher PROFMAT Completo ↗</a>
              <em>* Simulação com taxas repassadas ao comprador.</em>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className={styles.methodSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>COMO FUNCIONA</span>

            <h2>
              Um processo organizado para{" "}
              <span>chegar ao ENA mais preparado.</span>
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
            <span className={styles.eyebrow}>HISTÓRIAS REAIS</span>

            <h2>
              Quem estudou com o Waldemática,{" "}
              <span>compartilha a experiência.</span>
            </h2>

            <p>
              Experiências reais de alunos que estudaram Matemática com o Waldemática em diferentes objetivos.
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

      {/* ESCOLHA DOS PLANOS — duas opções reais de matrícula */}
      <section className={styles.purchaseSection} aria-labelledby="profmat-purchase-title">
        <div className={styles.container}>
          <div className={styles.purchaseCard}>
            <div className={styles.purchaseTop}>
              <div>
                <span className={styles.eyebrow}>ESCOLHA SUA PREPARAÇÃO</span>
                <h2 id="profmat-purchase-title">Dois caminhos, a mesma estrutura de apoio.</h2>
                <p>Ambos incluem a Waldemática IA. Compare a trilha, o prazo e os recursos antes de contratar.</p>
              </div>
              <a href="#comparar-profmat" className={styles.purchaseButton}>Comparar benefícios ↑</a>
            </div>
            <div className={styles.purchaseOffers}>
              <div>
                <span>PROFMAT / ENA · 6 MESES</span>
                <strong>12× R$ 30,43*</strong><small>R$ 299,00 à vista</small>
                <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">Escolher PROFMAT / ENA ↗</a>
              </div>
              <div>
                <span>PROFMAT COMPLETO · 9 MESES</span>
                <strong>12× R$ 35,51*</strong><small>R$ 349,00 à vista</small>
                <a href={completeCheckoutUrl} target="_blank" rel="noopener noreferrer">Escolher PROFMAT Completo ↗</a>
              </div>
            </div>
            <p className={styles.purchaseFootnote}>* Parcelamento simulado com taxas repassadas ao comprador. Pagamento pelo Mercado Pago; preços definitivos confirmados no checkout. Compra única, sem renovação automática.</p>
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

          <span className={styles.eyebrow}>PROFMAT · DOIS PLANOS NA WALDEMÁTICA IA</span>

          <h2>
            Prepare-se para o ENA ou amplie sua formação em Matemática.
          </h2>

          <p>
            Escolha a trilha ENA de 6 meses ou o PROFMAT Completo de 9 meses.
          </p>

          <a href="#comparar-profmat" className={styles.finalButton}>
            Comparar os dois planos <span>↑</span>
          </a>

          <Link href="/" className={styles.backHome}>
            ← Voltar para a página inicial
          </Link>
        </div>
      </section>
    </main>
  );
}
