import styles from "./profmat-compare.module.css";

const plans = {
  ena: {
    title: "PROFMAT / ENA",
    duration: "6 meses",
    installment: "12× R$ 30,43",
    cash: "R$ 299,00",
    href: "https://ia.waldematica.com.br/checkout/profmat",
  },
  complete: {
    title: "PROFMAT Completo",
    duration: "9 meses",
    installment: "12× R$ 35,51",
    cash: "R$ 349,00",
    href: "https://ia.waldematica.com.br/checkout/profmat-completo",
  },
} as const;

const rows = [
  { label: "Trilha direcionada ao ENA", ena: true, complete: false },
  { label: "Grade completa: 62 módulos", ena: false, complete: true },
  { label: "Videoaulas, PDFs e exercícios", ena: true, complete: true },
  { label: "Resoluções das listas em vídeo", ena: true, complete: true },
  { label: "Resoluções comentadas", ena: true, complete: true },
  { label: "Lia, Tutor IA", ena: true, complete: true },
  { label: "Trilha, avaliações e progresso", ena: true, complete: true },
  { label: "Matemática Básica e revisão teórica", ena: true, complete: true },
  { label: "Simulados especiais", ena: true, complete: true },
  { label: "Revisões para provas objetivas", ena: false, complete: true },
] as const;

function Cell({ enabled }: { enabled: boolean }) {
  return enabled ? (
    <span className={styles.yes} aria-label="Incluído">✓ <span>Incluído</span></span>
  ) : (
    <span className={styles.no} aria-label="Não incluído">—</span>
  );
}

export default function ProfmatCompare() {
  return (
    <section className={styles.panel} id="comparar-profmat" aria-labelledby="comparison-profmat-heading">
      <div className={styles.topline}>
        <span className={styles.eyebrow}>DUAS FORMAS DE PREPARAÇÃO</span>
        <span className={styles.info}>Compare e escolha</span>
      </div>
      <h2 id="comparison-profmat-heading">Qual PROFMAT combina com seu objetivo?</h2>
      <p className={styles.lead}>Ambos oferecem a Waldemática IA. A diferença está principalmente na trilha e na amplitude da grade.</p>
      <div className={styles.scroll} role="region" aria-label="Tabela comparativa PROFMAT / ENA e PROFMAT Completo" tabIndex={0}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Benefícios</th>
              <th scope="col"><span className={styles.planTitle}>PROFMAT / ENA</span><span className={styles.period}>6 meses</span></th>
              <th scope="col"><span className={styles.planTitle}>PROFMAT Completo</span><span className={styles.period}>9 meses</span></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td><Cell enabled={row.ena} /></td>
                <td><Cell enabled={row.complete} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.priceGrid}>
        {([plans.ena, plans.complete] as const).map((plan) => (
          <div className={styles.priceCard} key={plan.title}>
            <div className={styles.priceTitle}>{plan.title}<span>{plan.duration}</span></div>
            <strong>{plan.installment}<sup>*</sup></strong>
            <small>{plan.cash} à vista</small>
            <a href={plan.href} target="_blank" rel="noopener noreferrer" aria-label={`Contratar ${plan.title}, abre em nova aba`}>
              Escolher {plan.title === "PROFMAT / ENA" ? "ENA" : "Completo"} <span aria-hidden="true">↗</span>
            </a>
          </div>
        ))}
      </div>
      <p className={styles.note}>* Simulação em 12 parcelas, com taxas repassadas ao comprador. O Mercado Pago confirma as opções e os valores finais antes da compra.</p>
    </section>
  );
}
