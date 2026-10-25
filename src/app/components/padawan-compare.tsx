import styles from "./padawan-compare.module.css";

const plans = [
  {
    name: "Padawan 1",
    duration: "1 mês",
    price: "12× de R$ 10,07",
    cash: "R$ 99,00 à vista",
    href: "https://ia.waldematica.com.br/checkout/padawan-1",
    kind: "Para assuntos pontuais",
  },
  {
    name: "Padawan 3",
    duration: "3 meses",
    price: "12× de R$ 22,29",
    cash: "R$ 219,00 à vista",
    href: "https://ia.waldematica.com.br/checkout/padawan-3",
    kind: "Para blocos maiores",
  },
] as const;

const included = [
  "62 módulos de Matemática",
  "Videoaulas, PDFs e exercícios",
  "Listas e resoluções em vídeo",
  "Lia, seu Tutor IA",
  "Trilha, checkpoints e avaliações",
  "Coleção Matemática Básica",
] as const;

export default function PadawanCompare() {
  return (
    <section className={styles.panel} aria-labelledby="padawan-compare-heading">
      <div className={styles.topline}>
        <span>COMPARE AS DUAS ASSINATURAS</span>
        <span className={styles.topTag}>WALDEMÁTICA IA</span>
      </div>

      <h2 id="padawan-compare-heading">Escolha o seu Padawan</h2>
      <p className={styles.subtitle}>Os dois oferecem a mesma grade completa de Matemática. O que muda é o tempo para estudar.</p>

      <div className={styles.tableRegion} role="region" aria-label="Comparação de benefícios Padawan 1 e Padawan 3" tabIndex={0}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Incluído no seu plano</th>
              <th scope="col" className={styles.one}>Padawan 1 <span>1 mês</span></th>
              <th scope="col" className={styles.three}>Padawan 3 <span>3 meses</span></th>
            </tr>
          </thead>
          <tbody>
            {included.map((item) => (
              <tr key={item}>
                <th scope="row">{item}</th>
                <td><span className={styles.tick} aria-label="Incluído">✓</span></td>
                <td><span className={styles.tick} aria-label="Incluído">✓</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.priceGrid}>
        {plans.map((plan, i) => (
          <div key={plan.name} className={`${styles.priceCard} ${i === 0 ? styles.priceOne : styles.priceThree}`}>
            <div className={styles.planName}>
              <strong>{plan.name}</strong>
              <span>{plan.kind}</span>
            </div>
            <strong className={styles.price}>{plan.price}<sup>*</sup></strong>
            <span className={styles.cash}>{plan.cash}</span>
            <a href={plan.href} target="_blank" rel="noopener noreferrer" aria-label={`Escolher ${plan.name} — checkout em nova aba`}>
              Escolher {plan.name}<span aria-hidden="true">↗</span>
            </a>
          </div>
        ))}
      </div>
      <p className={styles.note}>* Parcelamento de referência com taxas repassadas ao comprador; o Mercado Pago confirma as condições finais antes da compra.</p>
    </section>
  );
}
