"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./commercial-v1.module.css";

type Benefit = "modules" | "videoLessons" | "enemTrack" | "tutor" | "basics" | "lists" | "enem" | "general" | "otherRevisions" | "commented" | "mockExams" | "secondPhase" | "enaTrack";
type PlanCode = "extensivo" | "semiextensivo" | "enem" | "profmat" | "profmat_completo" | "padawan_3" | "padawan_1";
type Plan = {
  code: PlanCode;
  title: string;
  badge: string;
  duration: string;
  price: number;
  lead: string;
  audience: string;
  image: string;
  color: "gold" | "teal" | "blue" | "green" | "emerald" | "amber" | "violet";
  features: string[];
  accessDetails: string;
  installment12: number;
  benefits: Benefit[];
};

// Dados de apresentação correspondentes ao catálogo vigente no checkout da Waldemática IA.
// Não controla permissões de acesso; o checkout/plataforma continuam sendo a fonte de autorização.
const plans: Plan[] = [
  {
    code: "extensivo", title: "Extensivo", badge: "MAIS COMPLETO", duration: "12 meses", price: 459, installment12: 46.71,
    lead: "Sua jornada completa, do primeiro conteúdo à reta final.",
    audience: "Para quem busca preparação ampla para ENEM e vestibulares, com mais tempo e todos os conteúdos especiais.",
    image: "/images/assinaturas/extensivo.png", color: "gold",
    features: ["Grade acadêmica completa", "Videoaulas, materiais e Tutor IA", "Resoluções, revisões e simulados", "Curso de Revisão da 2ª Fase — questões dissertativas"],
    accessDetails: "12 meses de acesso aos módulos de Matemática, vídeos, materiais, Tutor IA e coleções especiais, incluindo o Curso de Revisão da 2ª Fase com questões dissertativas.",
    benefits: ["modules", "videoLessons", "tutor", "basics", "lists", "enem", "general", "otherRevisions", "commented", "mockExams", "secondPhase"],
  },
  {
    code: "semiextensivo", title: "Semiextensivo", badge: "PREPARAÇÃO AMPLA", duration: "6 meses", price: 329, installment12: 33.48,
    lead: "Toda a Matemática. Seis meses de preparação.",
    audience: "Para quem quer a mesma grade acadêmica do Extensivo, com um período de acesso mais curto.",
    image: "/images/assinaturas/semiextensivo.png", color: "teal",
    features: ["Mesma grade do Extensivo", "Videoaulas, materiais e Tutor IA", "Resoluções das listas em vídeo", "Revisões para provas objetivas e simulados"],
    accessDetails: "6 meses com acesso à grade completa de Matemática, Tutor IA, resoluções das listas, revisões para provas objetivas e simulados.",
    benefits: ["modules", "videoLessons", "tutor", "basics", "lists", "enem", "general", "otherRevisions", "commented", "mockExams"],
  },
  {
    code: "enem", title: "Plano ENEM", badge: "FOCO NO ENEM", duration: "9 meses", price: 299, installment12: 30.43,
    lead: "Seu foco é o ENEM. Sua trilha também.",
    audience: "Para quem pretende prestar especificamente o ENEM, com seleção de módulos voltada a essa prova.",
    image: "/images/assinaturas/enem.png", color: "blue",
    features: ["Trilha específica do ENEM", "Videoaulas, PDFs e Tutor IA", "Resoluções das listas em vídeo", "Revisão ENEM e Revisão Geral Teórica"],
    accessDetails: "9 meses com trilha direcionada ao ENEM, Tutor IA, Matemática Básica, resoluções das listas, Revisão ENEM e Revisão Geral Teórica.",
    benefits: ["videoLessons", "tutor", "basics", "lists", "enem", "general", "enemTrack"],
  },
  {
    code: "profmat", title: "PROFMAT / ENA", badge: "PARA PROFESSORES", duration: "6 meses", price: 299, installment12: 30.43,
    lead: "Seu próximo passo no PROFMAT começa aqui.",
    audience: "Para quem vai prestar o ENA e busca uma trilha orientada aos conteúdos dessa seleção.",
    image: "/images/assinaturas/profmat-ena.png", color: "green",
    features: ["Trilha específica do ENA", "Videoaulas, materiais e Tutor IA", "Resoluções comentadas e das listas", "Simulados e revisão teórica"],
    accessDetails: "6 meses de acesso à trilha do ENA, materiais, Tutor IA, resoluções comentadas e das listas, simulados e revisão teórica.",
    benefits: ["videoLessons", "tutor", "basics", "lists", "general", "commented", "mockExams", "enaTrack"],
  },
  {
    code: "profmat_completo", title: "PROFMAT Completo", badge: "ALÉM DO EDITAL", duration: "9 meses", price: 349, installment12: 35.51,
    lead: "Mais Matemática. Mais repertório. Mais possibilidades.",
    audience: "Para professores que desejam uma formação matemática ampla, além do recorte específico do ENA.",
    image: "/images/assinaturas/profmat-completo.png", color: "emerald",
    features: ["Grade acadêmica completa", "Videoaulas, materiais e Tutor IA", "Resoluções das listas em vídeo", "Revisões e simulados especiais"],
    accessDetails: "9 meses com acesso à grade completa de Matemática, Tutor IA, resoluções das listas, revisões teóricas, simulados e conteúdos especiais de vestibulares.",
    benefits: ["modules", "videoLessons", "tutor", "basics", "lists", "enem", "general", "otherRevisions", "commented", "mockExams"],
  },
  {
    code: "padawan_3", title: "Padawan 3", badge: "3 MESES DE ACESSO", duration: "3 meses", price: 219, installment12: 22.29,
    lead: "Aprofunde os assuntos que mais importam agora.",
    audience: "Para estudar grandes áreas da Matemática sem contratar um período mais longo.",
    image: "/images/assinaturas/padawan-3.png", color: "amber",
    features: ["Grade de módulos disponível", "Videoaulas, PDFs e Tutor IA", "Resoluções das listas em vídeo", "Matemática Básica"],
    accessDetails: "Acesso aos módulos de Matemática, videoaulas, materiais em PDF, Tutor IA, Matemática Básica e resoluções das listas em vídeo pelo período contratado.",
    benefits: ["modules", "videoLessons", "tutor", "basics", "lists"],
  },
  {
    code: "padawan_1", title: "Padawan 1", badge: "1 MÊS DE ACESSO", duration: "1 mês", price: 99, installment12: 10.07,
    lead: "Um mês. Seu objetivo. Seu ritmo.",
    audience: "Para reforçar assuntos pontuais como Logaritmos, Porcentagem ou Análise Combinatória.",
    image: "/images/assinaturas/padawan-1.png", color: "violet",
    features: ["Grade de módulos disponível", "Videoaulas, PDFs e Tutor IA", "Resoluções das listas em vídeo", "Matemática Básica"],
    accessDetails: "Acesso aos módulos de Matemática, videoaulas, materiais em PDF, Tutor IA, Matemática Básica e resoluções das listas em vídeo pelo período contratado.",
    benefits: ["modules", "videoLessons", "tutor", "basics", "lists"],
  },
];

const benefitRows: { key: Benefit; label: string }[] = [
  { key: "modules", label: "Todos os assuntos da Matemática" },
  { key: "videoLessons", label: "Videoaulas e PDFs dos módulos autorizados" },
  { key: "enemTrack", label: "Trilha direcionada ao ENEM" },
  { key: "tutor", label: "Tutor IA e materiais da trilha contratada" },
  { key: "basics", label: "Coleção Matemática Básica" },
  { key: "lists", label: "Resoluções das listas em vídeo" },
  { key: "enem", label: "Revisão com questões do ENEM" },
  { key: "general", label: "Revisão Geral Teórica" },
  { key: "otherRevisions", label: "Revisão para provas objetivas" },
  { key: "commented", label: "Resoluções de vestibulares (Fuvest, Unicamp e outros)" },
  { key: "mockExams", label: "Simulados especiais" },
  { key: "secondPhase", label: "Curso de Revisão da 2ª Fase — questões dissertativas" },
  { key: "enaTrack", label: "Trilha específica do ENA" },
];

const groups = [
  { id: "preparacoes-principais", label: "ENEM e vestibulares", description: "Preparações com foco na sua prova e no tempo disponível.", codes: ["extensivo", "semiextensivo", "enem"] },
  { id: "preparacao-profmat", label: "Para professores", description: "PROFMAT / ENA: foco no exame ou estudo mais abrangente.", codes: ["profmat", "profmat_completo"] },
  { id: "planos-padawan", label: "Por assunto e duração", description: "Flexibilidade para estudar Matemática no seu ritmo.", codes: ["padawan_3", "padawan_1"] },
];

// Slugs de URLs da plataforma (hifens) são diferentes dos códigos internos do produto (underscores).
// Rotas auditadas no projeto waldematica-ia; não montar checkout automaticamente pelo plan_code.
const CHECKOUT_PATHS: Record<PlanCode, string> = {
  extensivo: "extensivo",
  semiextensivo: "semiextensivo",
  enem: "enem",
  profmat: "profmat",
  profmat_completo: "profmat-completo",
  padawan_3: "padawan-3",
  padawan_1: "padawan-1",
};
const checkout = (code: PlanCode) => `https://ia.waldematica.com.br/checkout/${CHECKOUT_PATHS[code]}`;
const currency = (value: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
// Valor ilustrado nas simulações individuais do Mercado Pago fornecidas pelo titular (12x, com repasse das taxas).

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className={`${styles.planCard} ${styles[plan.color]}`} id={`plano-${plan.code}`}>
      <a className={styles.planMedia} href={plan.image} target="_blank" rel="noopener noreferrer" aria-label={`Abrir a arte completa do plano ${plan.title} em outra aba`} title={`Ampliar imagem de ${plan.title}`}>
        <Image src={plan.image} alt={`Arte do ${plan.title}, com ${plan.duration} de acesso. ${plan.lead}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" className={styles.planPhoto} />
      </a>
      <div className={styles.planContent}>
        <div className={styles.planTitleRow}>
          <div><span className={styles.planTextBadge}>{plan.badge}</span><h4>{plan.title}</h4></div>
          <span className={styles.planTerm}>{plan.duration}</span>
        </div>
        <p className={styles.planLead}>{plan.lead}</p>
        <div className={styles.priceBlock}>
          <span className={styles.priceEyebrow}>PARCELAMENTO NO CARTÃO*</span>
          <p className={styles.installment}><small>12× de</small> {currency(plan.installment12)}</p>
          <p className={styles.cashPrice}>Valor à vista: <strong>{currency(plan.price)}</strong></p>
        </div>
        <p className={styles.planAudience}>{plan.audience}</p>
        <ul className={styles.features}>{plan.features.map((f) => <li key={f}><span aria-hidden="true">✓</span>{f}</li>)}</ul>
        <details className={styles.details}>
          <summary>Ver todos os detalhes <span aria-hidden="true">⌄</span></summary>
          <div className={styles.detailsBody}>
            <strong>Para quem é</strong><p>{plan.audience}</p>
            <strong>O que você recebe</strong><p>{plan.accessDetails}</p>
            <p>Acesso pelo período contratado. Os conteúdos disponíveis dependem do plano adquirido.</p>
          </div>
        </details>
        <div className={styles.cardActions}>
          <a className={styles.chooseButton} href={checkout(plan.code)} target="_blank" rel="noopener noreferrer" aria-label={`Escolher ${plan.title} (abre em nova aba)`}>Escolher {plan.title} <span aria-hidden="true">↗</span></a>
          <a className={styles.compareButton} href="#comparar-planos">Comparar</a>
        </div>
      </div>
    </article>
  );
}

export default function CommercialCatalog() {
  const [compareGroup, setCompareGroup] = useState<"vestibulares" | "profmat">("vestibulares");
  const selected = compareGroup === "vestibulares"
    ? plans.filter((p) => ["extensivo", "semiextensivo", "enem", "padawan_3", "padawan_1"].includes(p.code))
    : plans.filter((p) => ["profmat", "profmat_completo"].includes(p.code));
  const relevantRows = compareGroup === "vestibulares"
    ? benefitRows.filter((r) => r.key !== "enaTrack")
    : benefitRows.filter((r) => !["enemTrack", "enaTrack"].includes(r.key));

  return (
    <section id="todos-os-cursos" className={styles.catalog} aria-labelledby="catalog-heading">
      <div className={styles.catalogInner}>
        <header className={styles.catalogHead}>
          <span className={styles.eyebrow}><span className={styles.statusDot} /> PLANOS WALDEMÁTICA IA</span>
          <h2 id="catalog-heading">Um plano para cada objetivo.<br/><span>A mesma dedicação ao seu aprendizado.</span></h2>
          <p>Sete opções, benefícios claros e compra única. Explore as preparações e compare antes de decidir.</p>
          <div className={styles.catalogShortcuts}>
            <a href="#preparacoes-principais">ENEM e vestibulares</a>
            <a href="#preparacao-profmat">PROFMAT</a>
            <a href="#planos-padawan">Padawan</a>
            <a href="#comparar-planos">Comparar todos ↗</a>
          </div>
        </header>
        {groups.map((group, groupIndex) => (
          <div key={group.id} id={group.id} className={styles.group}>
            <div className={styles.groupHeading}><div><span>0{groupIndex + 1}</span><h3>{group.label}</h3></div><p>{group.description}</p></div>
            <div className={styles.plansGrid}>{group.codes.map((code) => <PlanCard key={code} plan={plans.find((p) => p.code === code)!} />)}</div>
          </div>
        ))}

        <p className={styles.paymentDisclaimer}>*Valores de referência do simulador do Mercado Pago para cartão de crédito em 12 vezes, com taxas de parcelamento repassadas ao comprador. O valor definitivo e as condições do pagamento são confirmados no checkout. Compra única, sem cobrança recorrente automática.</p>

        <div id="comparar-planos" className={styles.comparePanel}>
          <div className={styles.compareIntro}>
            <span className={styles.eyebrow}>ESCOLHA COM SEGURANÇA</span>
            <h2>Compare os planos. <span>Decida com clareza.</span></h2>
            <p>Veja lado a lado o tempo de acesso e os conteúdos realmente incluídos em cada opção.</p>
          </div>
          <div className={styles.compareTabs} aria-label="Grupo de planos para comparar">
            <button type="button" aria-pressed={compareGroup === "vestibulares"} onClick={() => setCompareGroup("vestibulares")}>ENEM, vestibulares e Padawan</button>
            <button type="button" aria-pressed={compareGroup === "profmat"} onClick={() => setCompareGroup("profmat")}>PROFMAT</button>
          </div>
          <p className={styles.swipeHint}>No celular, deslize a tabela para os lados para ver todos os planos.</p>
          <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Comparação de planos; role para os lados em telas pequenas">
            <table className={styles.compareTable}>
              <thead><tr><th scope="col">Benefícios</th>{selected.map((plan) => <th key={plan.code} scope="col"><span>{plan.title}</span><small>{plan.duration}</small></th>)}</tr></thead>
              <tbody>
                <tr><th scope="row">Investimento único</th>{selected.map((plan) => <td key={plan.code}><strong>{currency(plan.price)}</strong></td>)}</tr>
                {relevantRows.map((row) => (
                  <tr key={row.key}><th scope="row">{row.label}</th>{selected.map((plan) => <td key={plan.code}>{plan.benefits.includes(row.key) ? <span className={styles.yes} aria-label="Incluído">✓</span> : <span className={styles.no} aria-label="Não incluído">—</span>}</td>)}</tr>
                ))}
              </tbody>
              <tfoot><tr><th scope="row">Próximo passo</th>{selected.map((plan) => <td key={plan.code}><a href={checkout(plan.code)} target="_blank" rel="noopener noreferrer" aria-label={`Escolher ${plan.title} (abre em nova aba)`}>Escolher <span className={styles.srOnly}>{plan.title}</span> ↗</a></td>)}</tr></tfoot>
            </table>
          </div>
          <p className={styles.compareNote}>✓ Incluído · — Não incluído. As coleções especiais variam conforme a assinatura. O Extensivo inclui o Curso de Revisão da 2ª Fase com questões dissertativas.</p>
          <a href="#orientador-ia" className={styles.advisorPrompt}>Ainda em dúvida? <strong>Converse com o orientador IA antes de comprar.</strong> <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
