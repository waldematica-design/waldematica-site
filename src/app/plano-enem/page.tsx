import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import PlanOfferPanel from "../components/plan-offer-panel";
import styles from "./plano-enem.module.css";

export const metadata: Metadata = {
  title: "Plano ENEM | Matemática para o ENEM com Tutor IA — Waldemática",
  description:
    "Plano ENEM Waldemática IA: 9 meses de acesso, trilha específica de Matemática, videoaulas, PDFs, resoluções das listas em vídeo, Revisão ENEM, Revisão Geral Teórica e Tutor IA.",
  alternates: { canonical: "/plano-enem/" },
  openGraph: {
    type: "website",
    url: "/plano-enem/",
    title: "Plano ENEM — Prepare sua Matemática com a Waldemática IA",
    description:
      "Uma trilha direcionada à Matemática do ENEM, com aulas, prática, resoluções e acompanhamento inteligente por 9 meses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plano ENEM | Waldemática IA",
    description: "9 meses de preparação focada no ENEM com videoaulas, resoluções das listas e Tutor IA.",
  },
};

const checkoutUrl = "https://ia.waldematica.com.br/checkout/enem";

const differentials = [
  {
    symbol: "01",
    title: "Uma trilha para o ENEM",
    text: "Os conteúdos são organizados para quem quer se preparar especificamente para a Matemática do ENEM, com sequência e acompanhamento.",
  },
  {
    symbol: "02",
    title: "Prática com resoluções",
    text: "Além das aulas e listas de exercícios, você pode consultar as resoluções das listas em vídeo para entender o raciocínio.",
  },
  {
    symbol: "03",
    title: "Lia, seu Tutor IA",
    text: "Peça explicações, tire dúvidas e receba ajuda para estudar. A Lia pode considerar o contexto da sua trilha.",
  },
  {
    symbol: "04",
    title: "Acompanhe sua evolução",
    text: "Veja os módulos concluídos, seus resultados nas avaliações e a próxima etapa da preparação.",
  },
];

const studySteps = [
  { number: "01", title: "Organize", text: "Veja sua trilha e descubra qual é o próximo conteúdo." },
  { number: "02", title: "Aprenda", text: "Estude com videoaulas e materiais de apoio em PDF." },
  { number: "03", title: "Pratique", text: "Resolva exercícios e consulte as resoluções das listas em vídeo." },
  { number: "04", title: "Revise", text: "Retome assuntos com a Revisão ENEM e a Revisão Geral Teórica." },
  { number: "05", title: "Evolua", text: "Acompanhe seu progresso e conte com a Lia durante a jornada." },
];

const frequentlyAsked = [
  {
    question: "O Plano ENEM dá acesso à Waldemática IA?",
    answer:
      "Sim. Você tem 9 meses de acesso à plataforma, com sua trilha de Matemática para o ENEM, videoaulas, PDFs, listas, avaliações, acompanhamento do progresso e a Lia, seu Tutor IA.",
  },
  {
    question: "Posso assistir às resoluções das listas de exercícios?",
    answer:
      "Sim. As Resoluções das Listas de Exercícios em vídeo estão incluídas no Plano ENEM. Elas ficam disponíveis na Biblioteca da plataforma, de acordo com a organização do conteúdo.",
  },
  {
    question: "Quais revisões estão incluídas?",
    answer:
      "O plano inclui Revisão com questões do ENEM, Revisão Geral Teórica e Matemática Básica, além dos materiais previstos na trilha contratada.",
  },
  {
    question: "O Plano ENEM inclui todos os 62 módulos e os simulados especiais?",
    answer:
      "Não. Este é um plano com trilha específica para o ENEM. Não oferece a grade acadêmica completa de 62 módulos nem a coleção separada de simulados especiais. Para uma preparação mais ampla, veja o Extensivo ou o Semiextensivo.",
  },
  {
    question: "Como funciona o parcelamento?",
    answer:
      "O valor à vista é R$ 299,00. No simulador do Mercado Pago, com a taxa de parcelamento repassada ao comprador, o valor para 12 parcelas foi de 12× R$ 30,43. As condições finais e possíveis outras quantidades de parcelas são confirmadas no checkout antes do pagamento.",
  },
  {
    question: "É uma assinatura mensal com renovação automática?",
    answer:
      "Não. É uma compra única que concede 9 meses de acesso. Não há cobrança automática mensal nem renovação automática do plano.",
  },
  {
    question: "Como recebo meu acesso após a compra?",
    answer:
      "Depois da confirmação do pagamento, as orientações para acessar a Waldemática IA e definir sua senha são enviadas ao e-mail informado na matrícula. A confirmação pode variar conforme o meio de pagamento.",
  },
  {
    question: "Existe prazo para solicitar reembolso?",
    answer: "Sim. Você pode solicitar reembolso em até 7 dias corridos após a compra, conforme as condições aplicáveis.",
  },
];

export default function PlanoEnemPage() {
  return (
    <main className={styles.page}>
      <SiteHeader ctaLabel="Quero o Plano ENEM" ctaHref={checkoutUrl} />

      <section className={styles.hero} aria-labelledby="enem-title">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>PLANO ENEM · WALDEMÁTICA IA · 9 MESES</span>
            <h1 id="enem-title">Sua preparação para a <span>Matemática do ENEM</span> começa com direção.</h1>
            <p className={styles.heroLead}>
              Uma trilha pensada para o ENEM, com videoaulas, prática, resoluções das listas,
              revisões e a Lia, seu Tutor IA, para apoiar você durante os estudos.
            </p>
            <div className={styles.priceCard} aria-label="Investimento no Plano ENEM">
              <div>
                <span className={styles.miniLabel}>SIMULAÇÃO DE PARCELAMENTO*</span>
                <strong>12× de R$ 30,43</strong>
                <small>R$ 299,00 à vista</small>
              </div>
              <span className={styles.duration}>9 meses de acesso</span>
            </div>
            <p className={styles.disclaimer}>
              * Parcelamento simulado com taxas repassadas ao comprador; o Mercado Pago confirma as condições finais.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.buttonPrimary} href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Quero o Plano ENEM <span aria-hidden="true">↗</span>
              </a>
              <a className={styles.buttonSecondary} href="#como-funciona">Conhecer o método</a>
            </div>
            <div className={styles.quickFacts}>
              <span>✓ Trilha direcionada ao ENEM</span>
              <span>✓ Resoluções das listas incluídas</span>
              <span>✓ Tutor IA</span>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <PlanOfferPanel planCode="enem" />
          </div>
        </div>
      </section>

      <section className={styles.differentialsSection} aria-labelledby="enem-advantages">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>POR QUE ESCOLHER O PLANO ENEM</span>
            <h2 id="enem-advantages">Mais do que conteúdos: <span>um caminho para estudar.</span></h2>
            <p>Quem se prepara para o ENEM precisa de foco, prática e clareza sobre o que estudar em seguida.</p>
          </div>
          <div className={styles.differentialsGrid}>
            {differentials.map((item) => (
              <article className={styles.differentialCard} key={item.symbol}>
                <span className={styles.cardNumber}>{item.symbol}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.studySection} id="como-funciona" aria-labelledby="enem-how">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>COMO FUNCIONA</span>
            <h2 id="enem-how">Uma preparação organizada, <span>do primeiro estudo à revisão.</span></h2>
            <p>Você pode estudar na plataforma seguindo uma sequência clara e acompanhando seu progresso.</p>
          </div>
          <div className={styles.stepGrid}>
            {studySteps.map((step) => (
              <article className={styles.step} key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.studyCta}>
            <div>
              <strong>O foco é a Matemática do ENEM.</strong>
              <p>Materiais, resoluções e revisões organizados em um plano de nove meses.</p>
            </div>
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">Começar minha preparação ↗</a>
          </div>
        </div>
      </section>

      <section className={styles.platformSection} aria-labelledby="enem-platform">
        <div className={styles.container}>
          <div className={styles.platformTitle}>
            <span className={styles.eyebrow}>A PLATAFORMA POR DENTRO</span>
            <h2 id="enem-platform">Organização para estudar. <span>Lia para ajudar.</span></h2>
            <p>Veja telas reais da Waldemática IA. A trilha e as coleções disponíveis variam conforme a assinatura.</p>
          </div>
          <div className={styles.platformGrid}>
            <article className={styles.platformCard}>
              <div className={styles.imageFrame}>
                <Image src="/images/plataforma/minha-trilha.webp" alt="Demonstração da trilha de estudos na Waldemática IA, com módulos organizados e indicador de progresso." width={1248} height={1126} sizes="(max-width: 780px) 100vw, 46vw" />
              </div>
              <div className={styles.platformCardBody}>
                <span>01 · MINHA TRILHA</span>
                <h3>Saiba o que estudar agora.</h3>
                <p>Consulte módulos, atividades e a próxima etapa da sua preparação.</p>
              </div>
            </article>
            <article className={styles.platformCard}>
              <div className={styles.imageFrame}>
                <Image src="/images/plataforma/tutor-ia.webp" alt="Demonstração do Tutor IA Lia na Waldemática, com conversa e preferências de ajuda." width={1242} height={1130} sizes="(max-width: 780px) 100vw, 46vw" />
              </div>
              <div className={styles.platformCardBody}>
                <span>02 · TUTOR IA</span>
                <h3>Uma ajuda quando você precisa.</h3>
                <p>A Lia pode explicar conteúdos, ajudar nos exercícios e considerar sua trilha.</p>
              </div>
            </article>
          </div>
          <Link className={styles.platformLink} href="/#waldematica-ia">Explore o tour completo da plataforma <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className={styles.faqSection} aria-labelledby="enem-faq">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>ANTES DE COMEÇAR</span>
            <h2 id="enem-faq">Dúvidas frequentes sobre <span>o Plano ENEM.</span></h2>
          </div>
          <div className={styles.faqList}>
            {frequentlyAsked.map((faq) => (
              <details key={faq.question} className={styles.faq}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalSection} aria-labelledby="enem-final">
        <div className={styles.container}>
          <div className={styles.finalCard}>
            <span className={styles.eyebrow}>SEU PRÓXIMO PASSO</span>
            <h2 id="enem-final">Prepare sua Matemática para o ENEM <span>com foco e acompanhamento.</span></h2>
            <p>Nove meses de acesso à trilha ENEM, materiais, resoluções das listas e Tutor IA.</p>
            <div className={styles.finalPrice}>
              <strong>12× de R$ 30,43*</strong><small>ou R$ 299,00 à vista</small>
            </div>
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className={styles.buttonPrimary}>Quero estudar para o ENEM <span aria-hidden="true">↗</span></a>
            <p className={styles.finalFinePrint}>* Simulação com taxas repassadas ao comprador. O checkout confirma as condições. Compra única, sem renovação automática.</p>
            <Link className={styles.homeBack} href="/">← Voltar para todos os planos</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
