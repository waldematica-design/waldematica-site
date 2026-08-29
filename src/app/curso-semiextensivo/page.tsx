import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./semiextensivo.module.css";

export const metadata: Metadata = {
  title: "Curso Semiextensivo de Matemática para ENEM e Vestibulares",
  description:
    "Curso Semiextensivo de Matemática para ENEM e vestibulares com preparação intensiva, conteúdos selecionados, prática orientada, avaliações, plano estruturado e Waldemática IA.",
  alternates: {
    canonical: "/curso-semiextensivo/",
  },
  openGraph: {
    type: "website",
    url: "/curso-semiextensivo/",
    title: "Curso Semiextensivo de Matemática para ENEM e Vestibulares",
    description:
      "Preparação intensiva em Matemática para ENEM e vestibulares com conteúdos selecionados, prática orientada, plano estruturado e Waldemática IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso Semiextensivo de Matemática para ENEM e Vestibulares",
    description:
      "Preparação intensiva em Matemática para ENEM e vestibulares com conteúdos selecionados, prática orientada, plano estruturado e Waldemática IA.",
  },
};

const checkoutUrl =
  "https://pay.hotmart.com/A39248741H?off=b5i5zjgi&checkoutMode=10&bid=1787746077386";

const benefits = [
  {
    icon: "◎",
    title: "Conteúdo selecionado",
    text: "Uma preparação mais compacta, concentrada nos assuntos mais importantes para sua evolução.",
  },
  {
    icon: "✦",
    title: "Waldemática IA",
    text: "Tutor IA, acompanhamento de progresso e apoio inteligente durante a jornada.",
  },
  {
    icon: "≡",
    title: "Aulas + prática",
    text: "Explicações objetivas combinadas com exercícios e listas estratégicas.",
  },
  {
    icon: "↗",
    title: "Plano estruturado",
    text: "Você estuda com uma sequência organizada, sem precisar decidir sozinho o próximo passo.",
  },
];

const idealFor = [
  "Quem precisa revisar e consolidar os conteúdos mais importantes de Matemática.",
  "Quem quer uma preparação mais compacta e intensa do que o Extensivo.",
  "Quem busca ENEM e vestibulares com aulas objetivas e prática estratégica.",
  "Quem quer combinar organização, exercícios, avaliações e acompanhamento inteligente.",
];

const included = [
  "Aulas de Matemática organizadas em uma preparação mais compacta.",
  "Exercícios de aplicação e listas selecionadas.",
  "Avaliações para acompanhar o domínio dos conteúdos.",
  "Waldemática IA com Tutor IA e acompanhamento de progresso.",
  "Plano de estudos estruturado para orientar sua preparação.",
  "Acesso aos módulos selecionados do Semiextensivo.",
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
      "Funções Exponencial e Logarítmicas",
      "Inequações",
      "P.A.",
      "P.G.",
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
      "Soma e Diferença de Arcos",
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
      "Desigualdades",
      "Estudo das Cônicas",
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
  {
    question: "O Semiextensivo inclui a Waldemática IA?",
    answer:
      "Sim. O Semiextensivo inclui acesso à Waldemática IA, com Tutor IA, acompanhamento de progresso e organização dos estudos.",
  },
  {
    question: "Qual é a diferença entre Extensivo e Semiextensivo?",
    answer:
      "O Extensivo é a preparação mais ampla e completa. O Semiextensivo é mais compacto e intensivo, com uma seleção menor de conteúdos para quem precisa avançar em menos tempo.",
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
  {
    question: "Como funciona a renovação?",
    answer:
      "Para renovar, é necessário adquirir o curso novamente. Caso queira um desconto de renovação, entre em contato pelo WhatsApp e solicite o cupom diretamente ao Professor Wal.",
  },
];

export default function SemiextensivoPage() {
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
              Quero o Semiextensivo
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
            <span className={styles.eyebrow}>SEMISEMIEXTENSIVO DE MATEMÁTICA</span>

            <h1>
              Uma preparação mais compacta para você{" "}
              <span>avançar com intensidade.</span>
            </h1>

            <p className={styles.heroLead}>
              Estude Matemática para ENEM e vestibulares com uma preparação
              mais compacta, prática orientada, avaliações e o apoio da
              Waldemática IA ao longo da sua jornada.
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
              <span>✓ Preparação intensiva</span>
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
                <span className={styles.productLabel}>SEMIEXTENSIVO</span>
                <strong>Preparação intensiva</strong>
                <p>ENEM • Vestibulares • Preparação intensiva</p>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardOne}`}>
              <span>PLANO DE ESTUDOS</span>
              <strong>Saiba o que estudar</strong>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardTwo}`}>
              <span>WALDEMÁTICA IA</span>
              <strong>Tutor + progresso</strong>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>UMA PREPARAÇÃO MAIS COMPACTA</span>
            <h2>
              Mais do que assistir aulas.{" "}
              <span>Você segue um caminho.</span>
            </h2>
            <p>
              O Semiextensivo foi pensado para quem precisa revisar e consolidar
              conteúdos importantes de Matemática em uma preparação mais enxuta e organizada.
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
                O Semiextensivo é indicado para quem precisa revisar e consolidar os conteúdos mais importantes em uma preparação mais compacta, sem abrir mão de organização e prática.
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
                <span>preparação compacta e estruturada para orientar seus estudos</span>
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
              Uma seleção estratégica de Matemática para{" "}
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

      {/* BÔNUS */}
      <section className={styles.bonusSection}>
        <div className={styles.container}>
          <div className={styles.bonusCard}>
            <div className={styles.bonusIcon}>+</div>

            <div>
              <span className={styles.bonusLabel}>BÔNUS DO SEMIEXTENSIVO</span>

              <h2>
                Uma preparação mais enxuta para ganhar ritmo.
              </h2>

              <p>
                O Semiextensivo concentra uma seleção estratégica de conteúdos para quem precisa revisar, consolidar e avançar com mais intensidade na preparação.
              </p>
            </div>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bonusButton}
            >
              Quero o Semiextensivo <span>→</span>
            </a>
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
                  Acesso à preparação intensiva, Waldemática IA e plano de estudos estruturado.
                </p>
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

          <span className={styles.eyebrow}>SEMISEMIEXTENSIVO WALDEMÁTICA</span>

          <h2>
            Matemática com método, prática e direção.
          </h2>

          <p>
            Comece agora sua preparação intensiva para ENEM e vestibulares.
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
