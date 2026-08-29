import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./revisao-2a-fase.module.css";

export const metadata: Metadata = {
  title: "Revisão 2ª Fase de Matemática para Vestibulares",
  description:
    "Revisão de Matemática para 2ª fase com mais de 200 questões dissertativas, 9 listas, resoluções em vídeo, treino de escrita matemática e acompanhamento humano.",
  alternates: {
    canonical: "/revisao-2a-fase/",
  },
  openGraph: {
    type: "website",
    url: "/revisao-2a-fase/",
    title: "Revisão 2ª Fase de Matemática para Vestibulares",
    description:
      "Preparação para provas dissertativas com mais de 200 questões, resoluções detalhadas em vídeo, treino de escrita e acompanhamento humano nas primeiras listas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revisão 2ª Fase de Matemática para Vestibulares",
    description:
      "Preparação para provas dissertativas com mais de 200 questões, resoluções detalhadas em vídeo, treino de escrita e acompanhamento humano nas primeiras listas.",
  },
};

const checkoutUrl =
  "https://pay.hotmart.com/H39858673J?checkoutMode=10&bid=1787746084971";

const padawanUrl =
  "https://pay.hotmart.com/A39248741H?off=52uzidsx&checkoutMode=10&bid=1787746081105";

const benefits = [
  {
    icon: "✎",
    title: "Escrita matemática",
    text: "Treine não apenas a resposta final, mas também clareza, organização e objetividade da resolução.",
  },
  {
    icon: "◎",
    title: "Mais de 200 questões",
    text: "Questões dissertativas de diferentes vestibulares, todas com resolução detalhada em vídeo.",
  },
  {
    icon: "✦",
    title: "Acompanhamento humano",
    text: "Nas 5 primeiras listas, você envia suas resoluções para análise no grupo VIP individual.",
  },
  {
    icon: "↗",
    title: "Progressão de dificuldade",
    text: "A preparação começa pela escrita e avança até listas específicas de Unesp, Unicamp e Fuvest.",
  },
];

const idealFor = [
  "Quem passou para a 2ª fase e precisa desenvolver uma escrita matemática mais clara.",
  "Quem quer aprender o que vale a pena escrever e o que pode ser omitido em uma resolução.",
  "Quem precisa treinar questões dissertativas de vestibulares de alto nível.",
  "Quem quer comparar a própria resolução com uma solução detalhada e bem organizada.",
];

const firstLists = [
  "5 primeiras listas com campo de resposta para treino de escrita.",
  "As listas são impressas e resolvidas pelo aluno em casa.",
  "O aluno envia fotos das resoluções no grupo VIP individual.",
  "Professor Wal e Monitor Ryan analisam clareza, organização e objetividade.",
];

const advancedLists = [
  {
    number: "06",
    title: "Lista Geral",
    detail:
      "43 questões dissertativas de diferentes vestibulares, incluindo Fuvest, Unicamp, Unifesp, Unesp, PUC e outras provas.",
  },
  {
    number: "07",
    title: "UNESP",
    detail:
      "Uma lista específica para aprofundar o treino com questões dissertativas da Unesp.",
  },
  {
    number: "08",
    title: "UNICAMP",
    detail:
      "Questões discursivas da Unicamp para trabalhar raciocínio, argumentação e apresentação.",
  },
  {
    number: "09",
    title: "FUVEST",
    detail:
      "A preparação fecha com a lista mais exigente, voltada à prova que representa o maior nível de dificuldade do curso.",
  },
];

const included = [
  "Mais de 200 questões dissertativas.",
  "Resoluções detalhadas em vídeo.",
  "9 listas organizadas em progressão de dificuldade.",
  "5 primeiras listas com acompanhamento da escrita.",
  "Grupo VIP individual com Professor Wal, Monitor Ryan e aluno.",
  "Questões de Fuvest, Unicamp, Unesp, Unifesp, PUC e outros vestibulares.",
];

const testimonials = [
  {
    name: "Paula Gabriela",
    result: "Direito — São Francisco / USP",
    image: "/depoimentos/revisao-2a-fase/paula-gabriela.jpg",
  },
  {
    name: "Daniel Arouca",
    result: "Administração — FEA / USP",
    image: "/depoimentos/revisao-2a-fase/daniel-arouca.jpg",
  },
];

const faqs = [
  {
    question: "Quantas questões existem na Revisão 2ª Fase?",
    answer:
      "São mais de 200 questões dissertativas, todas acompanhadas por resoluções detalhadas em vídeo.",
  },
  {
    question: "Como funciona a correção das primeiras listas?",
    answer:
      "Nas 5 primeiras listas, o aluno imprime o material, resolve as questões e envia fotos das respostas no grupo VIP individual formado por Professor Wal, Monitor Ryan e aluno. O objetivo é analisar e lapidar a escrita matemática.",
  },
  {
    question: "O curso inclui Waldemática IA?",
    answer:
      "Não. A Revisão 2ª Fase é uma preparação específica para questões dissertativas e tem como diferencial o acompanhamento humano nas primeiras listas.",
  },
  {
    question: "Qual é a melhor forma de usar as resoluções em vídeo?",
    answer:
      "O ideal é resolver cada questão antes de assistir ao vídeo. Depois, compare sua solução com a resolução apresentada, observando raciocínio, organização e forma de escrever.",
  },
  {
    question: "E se eu perceber que preciso reforçar a teoria de algum assunto?",
    answer:
      "Nesse caso, você pode complementar a preparação com o Padawan 1, que oferece acesso ao conteúdo teórico do Semiextensivo por 1 mês e inclui o Tutor IA.",
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

export default function RevisaoSegundaFasePage() {
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
            <span className={styles.eyebrow}>REVISÃO 2ª FASE</span>

            <h1>
              Aprenda a resolver — e a escrever —{" "}
              <span>do jeito que a banca espera.</span>
            </h1>

            <p className={styles.heroLead}>
              Mais de 200 questões dissertativas com resoluções detalhadas em
              vídeo, treino progressivo de escrita matemática e acompanhamento
              humano nas primeiras listas.
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
              <span>✓ Mais de 200 questões</span>
              <span>✓ Correção da escrita</span>
              <span>✓ 7 dias de garantia</span>
            </div>
          </div>

          {/* ANIMAÇÃO DA ESCRITA */}
          <div className={styles.writingVisual}>
            <div className={styles.paperGlow} />

            <div className={styles.answerSheet}>
              <div className={styles.paperTop}>
                <span>CAMPO DE RESPOSTA</span>
                <strong>Questão dissertativa</strong>
              </div>

              <div className={styles.paperQuestion}>
                Considere x² − 5x + 6 = 0. Determine suas raízes e justifique.
              </div>

              <div className={styles.writingArea}>
                <div className={`${styles.writingLine} ${styles.lineOne}`}>
                  x² − 5x + 6 = 0
                </div>
                <div className={`${styles.writingLine} ${styles.lineTwo}`}>
                  (x − 2)(x − 3) = 0
                </div>
                <div className={`${styles.writingLine} ${styles.lineThree}`}>
                  Portanto, x = 2 ou x = 3.
                </div>

              </div>

              <div className={styles.teacherNote}>
                <span>✓</span>
                <div>
                  <strong>Boa resolução.</strong>
                  <small>Clara, objetiva e com justificativa suficiente.</small>
                </div>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardOne}`}>
              <span>ESCRITA</span>
              <strong>Clareza + objetividade</strong>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardTwo}`}>
              <span>GRUPO VIP</span>
              <strong>Wal + Ryan + aluno</strong>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>2ª FASE NA PRÁTICA</span>

            <h2>
              Não basta chegar à resposta.{" "}
              <span>Você precisa saber apresentar a solução.</span>
            </h2>

            <p>
              A preparação trabalha raciocínio, organização e escrita para que
              sua resolução seja compreensível, objetiva e adequada ao nível de
              uma prova dissertativa.
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
            <span className={styles.eyebrow}>COMO FUNCIONA</span>

            <h2>
              Resolva primeiro.{" "}
              <span>Assista depois e compare.</span>
            </h2>

            <p>
              O objetivo é fazer você pensar e escrever antes de ver a solução.
              Depois, a resolução em vídeo vira uma ferramenta de comparação e
              aperfeiçoamento.
            </p>
          </div>

          <div className={styles.flowGrid}>
            <article className={styles.examCard}>
              <div className={styles.examCardTop}>
                <span className={styles.examNumber}>01</span>
                <span className={styles.examTag}>VOCÊ RESOLVE</span>
              </div>

              <h3>Faça a questão antes de assistir.</h3>

              <p>
                Leia, organize o raciocínio e escreva sua solução como se
                estivesse no dia da prova.
              </p>
            </article>

            <article className={styles.examCard}>
              <div className={styles.examCardTop}>
                <span className={styles.examNumber}>02</span>
                <span className={styles.examTag}>VOCÊ COMPARA</span>
              </div>

              <h3>Depois veja a resolução detalhada.</h3>

              <p>
                Compare estratégias, observe o que foi escrito e identifique
                como deixar sua própria resposta mais clara e eficiente.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* GRUPO VIP */}
      <section className={styles.strategySection}>
        <div className={styles.container}>
          <div className={styles.vipCard}>
            <div className={styles.vipIcon}>✎</div>

            <div>
              <span className={styles.strategyLabel}>5 PRIMEIRAS LISTAS</span>

              <h2>
                Sua escrita é analisada e lapidada no grupo VIP individual.
              </h2>

              <p>
                Você imprime as listas, resolve à mão e envia fotos das
                respostas. Professor Wal e Monitor Ryan comentam sua escrita,
                organização e objetividade para você evoluir antes das listas
                mais difíceis.
              </p>
            </div>

            <div className={styles.vipPeople}>
              <span>Professor Wal</span>
              <span>Monitor Ryan</span>
              <span>Aluno</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMEIRAS LISTAS */}
      <section className={styles.audienceSection}>
        <div className={styles.container}>
          <div className={styles.twoColumns}>
            <div>
              <span className={styles.eyebrow}>TREINO DE ESCRITA</span>

              <h2>
                As 5 primeiras listas preparam você para escrever melhor.
              </h2>

              <p className={styles.sectionText}>
                Elas começam com questões mais acessíveis — ainda em bom nível —
                para que o foco inicial esteja na qualidade da resolução e da
                comunicação matemática.
              </p>

              <div className={styles.audienceList}>
                {firstLists.map((item) => (
                  <div key={item}>
                    <span>✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.highlightPanel}>
              <span className={styles.panelLabel}>OBJETIVO</span>

              <h3>
                Chegar às listas avançadas já sabendo construir uma boa resposta.
              </h3>

              <p>
                Quando você termina essa primeira etapa, a ideia é que sua
                escrita esteja mais madura para enfrentar questões mais longas,
                complexas e exigentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LISTAS AVANÇADAS */}
      <section className={styles.listsSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>DA 6ª À 9ª LISTA</span>

            <h2>
              A dificuldade aumenta até chegar à{" "}
              <span>Fuvest.</span>
            </h2>

            <p>
              Depois do treino de escrita, a preparação avança para um volume
              maior de questões e provas específicas.
            </p>
          </div>

          <div className={styles.advancedGrid}>
            {advancedLists.map((item) => (
              <article key={item.number} className={styles.advancedCard}>
                <div className={styles.advancedTop}>
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                </div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className={styles.includedSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>O QUE VOCÊ RECEBE</span>

            <h2>
              Uma preparação completa para{" "}
              <span>questões dissertativas.</span>
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

      {/* PARA QUEM É */}
      <section className={styles.audienceSection}>
        <div className={styles.container}>
          <div className={styles.twoColumns}>
            <div>
              <span className={styles.eyebrow}>PARA QUEM É</span>

              <h2>
                Para quem precisa transformar raciocínio em uma boa resolução.
              </h2>

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
              <span className={styles.panelLabel}>MAIS DE 200 QUESTÕES</span>

              <h3>
                Treino suficiente para você enxergar padrões e amadurecer sua escrita.
              </h3>

              <p>
                As questões vêm de diferentes vestibulares e são acompanhadas
                por vídeos detalhados, com observações e dicas do que vale a
                pena revisar em cada assunto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PADAWAN */}
      <section className={styles.padawanSection}>
        <div className={styles.container}>
          <div className={styles.padawanCard}>
            <div>
              <span className={styles.eyebrow}>PRECISA REFORÇAR A TEORIA?</span>

              <h2>
                Use o Padawan 1 como complemento quando necessário.
              </h2>

              <p>
                Se durante a revisão você perceber dificuldade em algum assunto
                específico, pode complementar o estudo com 1 mês de acesso ao
                conteúdo teórico do Semiextensivo e ao Tutor IA.
              </p>
            </div>

            <a
              href={padawanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryPurchaseButton}
            >
              Conhecer o Padawan 1 <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS ESPECÍFICOS */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>EXPERIÊNCIAS DA 2ª FASE</span>

            <h2>
              Quem já passou por essa preparação{" "}
              <span>conta como foi.</span>
            </h2>
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
                  <strong>{testimonial.name}</strong>
                  <p>{testimonial.result}</p>

                  <span className={styles.testimonialAction}>
                    Ver depoimento completo <b>→</b>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COMPRA */}
      <section className={styles.purchaseSection}>
        <div className={styles.container}>
          <div className={styles.purchaseCard}>
            <div className={styles.purchaseTop}>
              <div>
                <span className={styles.eyebrow}>COMECE SUA PREPARAÇÃO</span>

                <h2>
                  Entre na Revisão 2ª Fase e comece a lapidar sua escrita.
                </h2>

                <p>
                  Mais de 200 questões, 9 listas, resoluções detalhadas e
                  acompanhamento humano nas primeiras etapas.
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
                <strong>Suporte humano</strong>
                <span>nas 5 primeiras listas</span>
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

          <span className={styles.eyebrow}>REVISÃO 2ª FASE</span>

          <h2>
            Pense bem. Resolva melhor. Escreva com clareza.
          </h2>

          <p>
            Prepare-se para transformar seu raciocínio em uma resolução que a banca consegue acompanhar.
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
