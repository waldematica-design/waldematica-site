import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./profmat.module.css";

export const metadata: Metadata = {
  title: "Curso PROFMAT / ENA | Preparação em Matemática",
  description:
    "Curso de preparação para o ENA do PROFMAT com Matemática do Ensino Médio em alto nível, teoria, exercícios, materiais em PDF, plano de estudos e Waldemática IA.",
  alternates: {
    canonical: "/curso-profmat/",
  },
  openGraph: {
    type: "website",
    url: "/curso-profmat/",
    title: "Curso PROFMAT / ENA | Preparação em Matemática",
    description:
      "Preparação específica para o ENA do PROFMAT com teoria de Matemática do Ensino Médio em alto nível, exercícios selecionados, plano de estudos e Waldemática IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso PROFMAT / ENA | Preparação em Matemática",
    description:
      "Preparação específica para o ENA do PROFMAT com teoria de Matemática do Ensino Médio em alto nível, exercícios selecionados, plano de estudos e Waldemática IA.",
  },
};

const checkoutUrl =
  "https://pay.hotmart.com/A39248741H?off=tqsrzbn2&checkoutMode=10&bid=1787746086877";

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
  {
    question: "O curso PROFMAT inclui a Waldemática IA?",
    answer:
      "Sim. A preparação inclui acesso à Waldemática IA, com Tutor IA, acompanhamento de progresso e apoio durante os estudos.",
  },
  {
    question: "Preciso estudar Cálculo ou Matemática de nível superior?",
    answer:
      "Não. A preparação é focada na Matemática do Ensino Médio exigida no ENA, trabalhada em um nível elevado de profundidade e complexidade.",
  },
  {
    question: "Como é cada módulo do curso?",
    answer:
      "Os módulos combinam aulas teóricas, exercícios de aplicação e exercícios de aprofundamento. Depois das aulas, o aluno avança para listas de fixação organizadas por grau de dificuldade.",
  },
  {
    question: "Tem material em PDF?",
    answer:
      "Sim. As listas de exercícios e materiais de apoio ficam disponíveis em PDF para acompanhar as aulas e a resolução dos conteúdos.",
  },
  {
    question: "Quanto tempo leva para o acesso ser liberado?",
    answer:
      "Pagamentos por cartão de crédito, Pix e transferência têm liberação no mesmo instante. Boletos podem levar até 2 dias úteis.",
  },
  {
    question: "Os vídeos são muito longos?",
    answer:
      "As aulas são objetivas e, sempre que possível, divididas em vídeos menores. Alguns conteúdos mais densos podem exigir aulas um pouco mais longas.",
  },
  {
    question: "Em quanto tempo posso fazer o curso?",
    answer:
      "O tempo depende do seu nível atual e da sua disponibilidade. O plano de estudos organiza a preparação de acordo com o período disponível até a prova.",
  },
];

export default function ProfmatPage() {
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
              Quero o PROFMAT
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
            <span className={styles.eyebrow}>CURSO PROFMAT / ENA</span>

            <h1>
              Uma preparação completa para você{" "}
              <span>chegar mais preparado ao ENA.</span>
            </h1>

            <p className={styles.heroLead}>
              Prepare-se para o Exame Nacional de Acesso ao PROFMAT com teoria de Matemática do Ensino Médio em alto nível, exercícios selecionados, plano de estudos e o apoio da Waldemática IA.
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
              <span>✓ Waldemática IA incluída</span>
              <span>✓ Plano de estudos estruturado</span>
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
                <span className={styles.productLabel}>PROFMAT / ENA</span>
                <strong>Preparação específica</strong>
                <p>ENA • PROFMAT • Matemática</p>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardOne}`}>
              <span>PLANO DE ESTUDOS</span>
              <strong>Organização até a prova</strong>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardTwo}`}>
              <span>WALDEMÁTICA IA</span>
              <strong>Tutor + progresso</strong>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardThree}`}>
              <span>FOCO NO ENA</span>
              <strong>Teoria + aprofundamento</strong>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>MUITO MAIS QUE O EDITAL</span>
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
              <span className={styles.eyebrow}>PARA QUEM É O PROFMAT / ENA</span>

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
            <span className={styles.eyebrow}>O QUE VOCÊ RECEBE</span>

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
            <span className={styles.eyebrow}>O QUE VOCÊ VAI ESTUDAR</span>

            <h2>
              Os conhecimentos de Matemática exigidos no{" "}
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

      {/* BÔNUS */}
      <section className={styles.bonusSection}>
        <div className={styles.container}>
          <div className={styles.bonusCard}>
            <div className={styles.bonusIcon}>+</div>

            <div>
              <span className={styles.bonusLabel}>BÔNUS DO PROFMAT / ENA</span>

              <h2>
                Teoria, treino e plano de estudos em uma mesma preparação.
              </h2>

              <p>
                O curso combina nivelamento, teoria, exercícios de fixação, aprofundamento e organização dos estudos para desenvolver o domínio exigido no ENA.
              </p>
            </div>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bonusButton}
            >
              Quero o PROFMAT <span>→</span>
            </a>
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

      {/* GARANTIA E COMPRA */}
      <section className={styles.purchaseSection}>
        <div className={styles.container}>
          <div className={styles.purchaseCard}>
            <div className={styles.purchaseTop}>
              <div>
                <span className={styles.eyebrow}>COMECE SUA PREPARAÇÃO</span>

                <h2>
                  Comece sua preparação para o ENA com direção.
                </h2>

                <p>
                  Acesso à preparação para o PROFMAT, Waldemática IA e plano de estudos estruturado.
                </p>
              </div>

              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.purchaseButton}
              >
                Quero o PROFMAT <span>→</span>
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
                <strong>Renovação</strong>
                <span>cupom de desconto via WhatsApp</span>
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

          <span className={styles.eyebrow}>PROFMAT / ENA WALDEMÁTICA</span>

          <h2>
            Matemática em alto nível, com método e direção.
          </h2>

          <p>
            Comece agora sua preparação para o Exame Nacional de Acesso ao PROFMAT.
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
