import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CourseAdvisor from "./components/course-advisor";
import SiteHeader from "./components/site-header";


export const metadata: Metadata = {
  title: "Cursos de Matemática para ENEM, Vestibulares e PROFMAT",
  description:
    "Cursos de Matemática com videoaulas, listas de exercícios, plano de estudos e apoio inteligente para ENEM, vestibulares e PROFMAT.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Waldemática | Cursos de Matemática para ENEM, Vestibulares e PROFMAT",
    description:
      "Cursos de Matemática com videoaulas, listas de exercícios, plano de estudos e apoio inteligente para ENEM, vestibulares e PROFMAT.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waldemática | Cursos de Matemática para ENEM, Vestibulares e PROFMAT",
    description:
      "Cursos de Matemática com videoaulas, listas de exercícios, plano de estudos e apoio inteligente para ENEM, vestibulares e PROFMAT.",
  },
};

const mainCourses = [
  {
    badge: "MAIS COMPLETO",
    title: "Extensivo",
    subtitle: "Preparação completa",
    description:
      "Para quem quer construir uma preparação ampla em Matemática para ENEM e vestibulares, seguindo uma trilha estruturada do início ao fim.",
    features: [
      "Trilha completa de Matemática",
      "Plano de estudos organizado",
      "Waldemática IA incluída",
      "Revisões ENEM e 1ª fases como bônus",
    ],
    href: "/extensivo/",
    action: "Conhecer o Extensivo",
    icon: "∑",
    image: "/images/cursos/extensivo-premium.png",
    imageAlt: "Estudante seguindo uma preparação completa de Matemática com plano de estudos, aulas e exercícios.",
    theme: "extensivo",
    featured: true,
  },
  {
    badge: "PREPARAÇÃO INTENSIVA",
    title: "Semiextensivo",
    subtitle: "Direto ao que mais importa",
    description:
      "Uma preparação mais compacta para quem precisa revisar e consolidar os conteúdos mais importantes de Matemática.",
    features: [
      "Conteúdos selecionados",
      "Plano de estudos estruturado",
      "Waldemática IA incluída",
      "Aulas e listas estratégicas",
    ],
    href: "/curso-semiextensivo/",
    action: "Conhecer o Semiextensivo",
    icon: "△",
    image: "/images/cursos/semiextensivo-premium.png",
    imageAlt: "Estudante em preparação intensiva de Matemática com revisão, exercícios e estudo focado.",
    theme: "semiextensivo",
    featured: false,
  },
  {
    badge: "PARA PROFESSORES",
    title: "PROFMAT / ENA",
    subtitle: "Preparação específica",
    description:
      "Curso direcionado ao Exame Nacional de Acesso ao PROFMAT, com conteúdos do edital, listas e uma preparação organizada.",
    features: [
      "Conteúdo voltado ao ENA",
      "Exercícios selecionados",
      "Plano de estudos estruturado",
      "Waldemática IA incluída",
    ],
    href: "/curso-profmat/",
    action: "Conhecer o PROFMAT",
    icon: "π",
    image: "/images/cursos/profmat-ena-premium.png",
    imageAlt: "Professor estudando Matemática avançada para preparação do ENA PROFMAT.",
    theme: "profmat",
    featured: false,
  },
];

const revisionCourses = [
  {
    badge: "QUESTÕES OBJETIVAS",
    title: "Revisão 1ª Fase",
    description:
      "Treino focado em questões de múltipla escolha, com revisões teóricas rápidas realizadas durante a própria resolução.",
    features: [
      "Questões típicas de vestibulares",
      "Revisão teórica durante a resolução",
      "Ideal para a reta final",
      "Pode ser combinada com Padawan 1 ou 3",
    ],
    note: "Não inclui Waldemática IA",
    href: "/revisao-1a-fase/",
    action: "Conhecer a Revisão 1ª Fase",
    icon: "A",
    image: "/images/cursos/revisao-1a-fase-premium.png",
    imageAlt: "Prova objetiva de Matemática com cartão-resposta, cronômetro e questões de vestibular.",
    theme: "revisao1",
  },
  {
    badge: "PROVAS DISSERTATIVAS",
    title: "Revisão 2ª Fase",
    description:
      "Preparação para provas dissertativas com foco não apenas na resposta correta, mas na construção de uma resolução clara, organizada e objetiva.",
    features: [
      "Questões discursivas",
      "Treino de escrita matemática",
      "Listas específicas de 2ª fase",
      "Grupo VIP no WhatsApp",
    ],
    note:
      "Não inclui Waldemática IA. Nas 5 primeiras listas, suas resoluções podem ser enviadas por foto para análise do professor e monitor.",
    href: "/revisao-2a-fase/",
    action: "Conhecer a Revisão 2ª Fase",
    icon: "✎",
    image: "/images/cursos/revisao-2a-fase-premium.png",
    imageAlt: "Resolução dissertativa de Matemática escrita à mão com desenvolvimento e justificativas.",
    theme: "revisao2",
  },
];

const padawanPlans = [
  {
    badge: "3 MESES DE ACESSO",
    title: "Padawan 3",
    description:
      "Para quem quer estudar setores inteiros da Matemática usando os módulos do Semiextensivo.",
    examples:
      "Exemplos: Geometria Plana completa, Trigonometria ou outro grande bloco de conteúdos.",
    features: [
      "3 meses de acesso",
      "Todos os módulos do Semiextensivo",
      "Escolha os setores que deseja estudar",
      "Waldemática IA incluída",
    ],
    href: "/padawan/",
    action: "Conhecer o Padawan 3",
    icon: "03",
    image: "/images/cursos/padawan-3-premium.png",
    imageAlt: "Plano de estudos de Matemática organizado em três meses para estudo por setores.",
    theme: "padawan3",
  },
  {
    badge: "1 MÊS DE ACESSO",
    title: "Padawan 1",
    description:
      "Para quem deseja estudar assuntos isolados e específicos sem contratar uma preparação mais longa.",
    examples:
      "Exemplos: Logaritmos, Análise Combinatória, Probabilidade ou outro assunto específico.",
    features: [
      "1 mês de acesso",
      "Todos os módulos do Semiextensivo",
      "Ideal para assuntos isolados",
      "Waldemática IA incluída",
    ],
    href: "/padawan/",
    action: "Conhecer o Padawan 1",
    icon: "01",
    image: "/images/cursos/padawan-1-premium.png",
    imageAlt: "Estudante revisando um assunto específico de Matemática em um plano curto de um mês.",
    theme: "padawan1",
  },
];

const testimonials = [
  {
    name: "Ana Carolina Simões",
    context: "Direito — São Francisco / USP",
    image: "/depoimentos/ana-carolina.jpg",
  },
  {
    name: "Arthur R. Teixeira",
    context: "Engenharia Mecânica — Politécnica / USP",
    image: "/depoimentos/arthur-teixeira.jpg",
  },
  {
    name: "Carla Xavier",
    context: "Odontologia — Unicamp",
    image: "/depoimentos/carla-xavier.jpg",
  },
  {
    name: "Felipe Chaguri",
    context: "Engenharia de Automação — Unicamp",
    image: "/depoimentos/felipe-chaguri.jpg",
  },
  {
    name: "Wagner Antides Pina",
    context: "Medicina",
    image: "/depoimentos/wagner-pina.jpg",
  },
  {
    name: "Robson Rodrigues",
    context: "Professor de Matemática",
    image: "/depoimentos/robson-rodrigues.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020817] text-white">
      <SiteHeader
        ctaLabel="Comece gratuitamente"
        ctaHref="/cursos-gratis/"
      />

      {/* HERO */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-18rem] top-[-12rem] h-[42rem] w-[42rem] rounded-full bg-blue-700/20 blur-[120px]" />
          <div className="absolute right-[-12rem] top-[2rem] h-[38rem] w-[38rem] rounded-full bg-cyan-500/12 blur-[130px]" />
          <div className="hero-grid absolute inset-0 opacity-30" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-[1280px] items-center gap-10 px-6 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-10">
          <div className="relative z-10 max-w-[760px]">
            <div className="hero-campaign-badge">
              <span className="hero-campaign-dot" />
              RETA FINAL DOS VESTIBULARES
            </div>

            <h1 className="max-w-[760px] text-[46px] font-semibold leading-[1.03] tracking-[-0.045em] sm:text-[58px] lg:text-[68px]">
              Prepare sua Matemática para a{" "}
              <span className="gradient-text">prova que está chegando.</span>
            </h1>

            <p className="mt-7 max-w-[670px] text-lg leading-8 text-slate-300 sm:text-xl">
              Revise os conteúdos mais importantes, pratique questões de
              vestibulares e chegue às provas objetivas com mais estratégia e
              segurança.
            </p>

            <div className="hero-offer">
              <div>
                <span className="hero-offer-eyebrow">
                  REVISÃO 1ª FASE — PROVAS OBJETIVAS
                </span>
                <strong className="hero-offer-price">
                  12x de R$ 25,75*
                </strong>
                <span className="hero-offer-cash">
                  ou R$ 249 à vista
                </span>
              </div>

              <span className="hero-offer-note">
                Preparação focada para a reta final
              </span>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/revisao-1a-fase/"
                className="inline-flex h-13 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-7 text-[15px] font-semibold text-white shadow-[0_15px_50px_rgba(14,165,233,0.22)] transition hover:-translate-y-0.5"
              >
                Conhecer Revisão 1ª Fase
                <span className="ml-2 text-xl">→</span>
              </Link>

              <Link
                href="#orientador-ia"
                className="inline-flex h-13 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] px-7 text-[15px] font-semibold text-slate-100 transition hover:border-cyan-300/25 hover:bg-cyan-300/[0.05]"
              >
                Descobrir meu curso com IA
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="check">✓</span>
                Provas objetivas
              </div>

              <div className="flex items-center gap-2">
                <span className="check">✓</span>
                Revisão + resolução
              </div>

              <div className="flex items-center gap-2">
                <span className="check">✓</span>
                Reta final dos vestibulares
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[640px] items-center justify-center lg:flex">
            <div className="ecosystem-glow" />

            <div className="orbit orbit-outer">
              <span className="orbit-node orbit-node-cyan" />
              <span className="orbit-node orbit-node-blue" />
            </div>

            <div className="orbit orbit-inner">
              <span className="orbit-node orbit-node-small" />
              <span className="orbit-node orbit-node-bright" />
            </div>

            <div className="connection connection-left" />
            <div className="connection connection-right" />
            <div className="connection connection-bottom" />

            <div className="benefit-card benefit-card-tutor">
              <div className="benefit-icon">A</div>
              <div>
                <span className="benefit-label">PROVAS OBJETIVAS</span>
                <strong>Questões típicas de vestibulares</strong>
                <p>Treino voltado ao formato das primeiras fases.</p>
              </div>
            </div>

            <div className="benefit-card benefit-card-plan">
              <div className="benefit-icon">↻</div>
              <div>
                <span className="benefit-label">REVISÃO ESTRATÉGICA</span>
                <strong>Teoria retomada na resolução</strong>
                <p>Revise conceitos enquanto pratica questões.</p>
              </div>
            </div>

            <div className="benefit-card benefit-card-practice">
              <div className="benefit-icon">✓</div>
              <div>
                <span className="benefit-label">RETA FINAL</span>
                <strong>Foco no que importa agora</strong>
                <p>Preparação objetiva para o momento da prova.</p>
              </div>
            </div>

            <div className="logo-core">
              <div className="logo-pulse logo-pulse-one" />
              <div className="logo-pulse logo-pulse-two" />
              <div className="logo-core-ring" />

              <Image
                src="/logo-waldematica.png"
                alt="Waldemática"
                width={340}
                height={340}
                className="relative z-10 h-[300px] w-[300px] object-contain drop-shadow-[0_0_55px_rgba(34,211,238,0.32)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ORIENTADOR IA */}
      <CourseAdvisor />


      {/* CURSOS */}
      <section id="todos-os-cursos" className="courses-section relative overflow-hidden">
        <div className="courses-grid-bg" />

        <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-[800px] text-center">
            <span className="section-eyebrow">ESCOLHA SUA PREPARAÇÃO</span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Encontre o curso que faz sentido{" "}
              <span className="gradient-text">para o seu momento.</span>
            </h2>
          </div>

          <div className="course-group-heading">
            <div>
              <span>01</span>
              <h3>Preparações principais</h3>
            </div>
            <p>Para quem quer estudar seguindo uma trilha organizada.</p>
          </div>

          <div className="main-course-grid">
            {mainCourses.map((course) => (
              <Link
                key={course.title}
                href={course.href}
                className={`course-card course-theme-${course.theme} ${
                  course.featured ? "course-card-featured" : ""
                }`}
              >
                <div className="course-card-media">
                  <Image
                    src={course.image}
                    alt={course.imageAlt}
                    width={1000}
                    height={720}
                    className="course-card-image"
                  />
                  <div className="course-card-media-shade" />
                  <span className="course-card-media-label">{course.badge}</span>
                </div>

                <div className="course-card-body">
                  <div className="course-card-top">
                    <div className="course-card-icon">{course.icon}</div>
                    <span className="course-subtitle">{course.subtitle}</span>
                  </div>

                  <h3>{course.title}</h3>
                  <p className="course-description">{course.description}</p>

                  <div className="course-features">
                    {course.features.map((feature) => (
                      <span key={feature}><i>✓</i>{feature}</span>
                    ))}
                  </div>

                  <div className="course-action">
                    {course.action}<span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="course-group-heading course-group-heading-spaced">
            <div>
              <span>02</span>
              <h3>Cursos de revisão</h3>
            </div>
            <p>Preparações focadas em prova, sem uma trilha longa de conteúdos.</p>
          </div>

          <div className="revision-grid">
            {revisionCourses.map((course) => (
              <a
                key={course.title}
                href={course.href}
                className={`revision-card course-theme-${course.theme}`}
                target={course.href.startsWith("http") ? "_blank" : undefined}
                rel={course.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className="revision-card-media">
                  <Image
                    src={course.image}
                    alt={course.imageAlt}
                    width={1100}
                    height={720}
                    className="revision-card-image"
                  />
                  <div className="revision-card-media-shade" />
                  <span className="revision-card-media-label">{course.badge}</span>
                </div>

                <div className="revision-content">
                  <div className="revision-title-row">
                    <div className="revision-icon">{course.icon}</div>
                    <h3>{course.title}</h3>
                  </div>

                  <p>{course.description}</p>

                  <div className="revision-features">
                    {course.features.map((feature) => (
                      <span key={feature}><i>✓</i>{feature}</span>
                    ))}
                  </div>

                  <div className="revision-note">
                    <span>!</span>
                    <p>{course.note}</p>
                  </div>

                  <div className="course-action">
                    {course.action}<span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="course-group-heading course-group-heading-spaced">
            <div>
              <span>03</span>
              <h3>Planos Padawan</h3>
            </div>
            <p>Flexibilidade para estudar exatamente o que você precisa agora.</p>
          </div>

          <div className="padawan-grid">
            {padawanPlans.map((plan) => (
              <Link
                key={plan.title}
                href={plan.href}
                className={`padawan-card course-theme-${plan.theme}`}
              >
                <div className="padawan-card-media">
                  <Image
                    src={plan.image}
                    alt={plan.imageAlt}
                    width={1000}
                    height={760}
                    className="padawan-card-image"
                  />
                  <div className="padawan-card-media-shade" />
                  <div className="padawan-number">{plan.icon}</div>
                </div>

                <div className="padawan-card-content">
                  <span className="course-badge">{plan.badge}</span>
                  <h3>{plan.title}</h3>
                  <p>{plan.description}</p>

                  <div className="padawan-example">
                    <span>IDEAL PARA</span>
                    <p>{plan.examples}</p>
                  </div>

                  <div className="course-features">
                    {plan.features.map((feature) => (
                      <span key={feature}><i>✓</i>{feature}</span>
                    ))}
                  </div>

                  <div className="course-action">
                    {plan.action}<span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="purchase-info">
            <div className="purchase-info-item">
              <strong>7 dias</strong>
              <span>para solicitar reembolso</span>
            </div>

            <div className="purchase-divider" />

            <div className="purchase-info-item">
              <strong>Acesso imediato</strong>
              <span>cartão, Pix e transferência</span>
            </div>

            <div className="purchase-divider" />

            <div className="purchase-info-item">
              <strong>Até 2 dias úteis</strong>
              <span>para pagamentos por boleto</span>
            </div>

            <div className="purchase-divider" />

            <div className="purchase-info-item">
              <strong>Renovação com desconto</strong>
              <span>solicite seu cupom pelo WhatsApp</span>
            </div>
          </div>
        </div>
      </section>


      {/* MÉTODO */}
      <section className="method-section relative overflow-hidden">
        <div className="method-grid" />
        <div className="method-glow" />

        <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-[780px] text-center">
            <span className="section-eyebrow">MAIS DO QUE VIDEOAULAS</span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Um método para você{" "}
              <span className="gradient-text">evoluir de verdade.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-base leading-7 text-slate-400 sm:text-lg">
              O Waldemática organiza o estudo em etapas claras. Você aprende,
              pratica, testa o que sabe e avança com mais segurança.
            </p>
          </div>

          <div className="method-flow mt-20">
            <div className="method-line">
              <div className="method-energy" />
            </div>

            {[
              ["▶", "01", "Aulas", "Explicações diretas ao ponto, organizadas para construir compreensão sem perder tempo."],
              ["✎", "02", "Prática", "Exercícios de aplicação para transformar conteúdo em domínio real da Matemática."],
              ["≡", "03", "Listas", "Listas selecionadas e exercícios típicos para consolidar cada assunto com estratégia."],
              ["✓", "04", "Avaliação", "Verifique seu desempenho, identifique dificuldades e saiba o que precisa revisar."],
              ["↗", "05", "Evolução", "O progresso orienta os próximos passos para você continuar avançando com direção."],
            ].map(([icon, number, title, text], index) => (
              <div
                key={title}
                className={`method-step ${index === 2 ? "method-step-highlight" : ""}`}
              >
                <div className="method-node">{icon}</div>
                <span className="method-step-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className="method-summary">
            <div className="method-summary-icon">✦</div>

            <div>
              <span className="method-summary-label">ESTUDO COM DIREÇÃO</span>
              <h3>Você não precisa decidir sozinho o que estudar depois.</h3>
              <p>
                O plano de estudos, seu progresso e o Tutor IA ajudam a manter
                sua preparação organizada ao longo do caminho.
              </p>
            </div>

            <Link href="#waldematica-ia" className="method-summary-action">
              Conheça a Waldemática IA <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WALDEMÁTICA IA */}
      <section id="waldematica-ia" className="ai-section relative overflow-hidden">
        <div className="ai-bg-grid" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-16 px-6 py-24 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-32">
          <div className="relative z-10">
            <span className="section-eyebrow">
              MATEMÁTICA + INTELIGÊNCIA ARTIFICIAL
            </span>

            <h2 className="mt-5 max-w-[570px] text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Uma plataforma que entende{" "}
              <span className="gradient-text">onde você está.</span>
            </h2>

            <p className="mt-6 max-w-[580px] text-base leading-7 text-slate-300 sm:text-lg">
              A Waldemática IA conecta seu plano de estudos, seu progresso e um
              Tutor IA para tornar sua preparação mais organizada,
              personalizada e inteligente.
            </p>

            <div className="ai-benefits mt-9">
              <div className="ai-benefit">
                <div className="ai-benefit-icon">✦</div>
                <div>
                  <h3>Tutor IA</h3>
                  <p>Converse, tire dúvidas e receba apoio durante seus estudos.</p>
                </div>
              </div>

              <div className="ai-benefit">
                <div className="ai-benefit-icon">◎</div>
                <div>
                  <h3>Plano de estudos personalizado</h3>
                  <p>Uma trilha organizada de acordo com seu objetivo e sua rotina.</p>
                </div>
              </div>

              <div className="ai-benefit">
                <div className="ai-benefit-icon">↗</div>
                <div>
                  <h3>Progresso acompanhado</h3>
                  <p>
                    Visualize sua evolução e saiba com clareza qual é o próximo passo.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="https://ia.waldematica.com.br" className="ai-primary-action">
                Entrar na Waldemática IA <span>→</span>
              </Link>

              <Link href="#todos-os-cursos" className="ai-secondary-action">
                Ver os cursos
              </Link>
            </div>
          </div>

          <div className="ai-showcase">
            <div className="ai-halo" />

            <div className="ai-device">
              <div className="ai-device-header">
                <div className="ai-device-brand">
                  <Image
                    src="/logo-waldematica.png"
                    alt=""
                    width={30}
                    height={30}
                    className="h-[28px] w-[28px]"
                  />

                  <div>
                    <strong>Waldemática IA</strong>
                    <span>Ambiente inteligente de estudos</span>
                  </div>
                </div>

                <div className="ai-device-status">
                  <span className="ai-status-dot" />
                  PLATAFORMA ATIVA
                </div>
              </div>

              <div className="ai-device-body">
                <div className="ai-screen-frame">
                  <Image
                    src="/waldematica-ia-dashboard-dark.png"
                    alt="Dashboard atual da Waldemática IA"
                    width={1400}
                    height={788}
                    className="ai-dashboard-image"
                  />
                  <div className="ai-screen-overlay" />
                </div>

                <div className="ai-insight-bar">
                  <div className="ai-insight">
                    <span>PRÓXIMO PASSO</span>
                    <strong>Continue sua trilha</strong>
                  </div>

                  <div className="ai-insight">
                    <span>ACOMPANHAMENTO</span>
                    <strong>Progresso em tempo real</strong>
                  </div>

                  <div className="ai-insight">
                    <span>SUPORTE</span>
                    <strong>Tutor IA disponível</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="ai-floating-card ai-floating-tutor">
              <div className="ai-floating-icon">✦</div>
              <div>
                <span>TUTOR IA</span>
                <strong>Ajuda quando você precisa</strong>
              </div>
            </div>

            <div className="ai-floating-card ai-floating-progress">
              <div className="ai-progress-ring"><span>72%</span></div>
              <div>
                <span>SEU PROGRESSO</span>
                <strong>Continue avançando</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSOR WAL */}
      <section className="teacher-section relative overflow-hidden">
        <div className="teacher-grid-bg" />
        <div className="teacher-light teacher-light-one" />
        <div className="teacher-light teacher-light-two" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-32">
          <div className="teacher-visual">
            <div className="teacher-orbit teacher-orbit-one" />
            <div className="teacher-orbit teacher-orbit-two" />
            <div className="teacher-photo-glow" />

            <div className="teacher-photo-wrap">
              <Image
                src="/professor-wal.png"
                alt="Professor Wal"
                width={820}
                height={1024}
                className="teacher-photo"
              />
            </div>

            <div className="teacher-floating-card teacher-floating-years">
              <span>DESDE</span>
              <strong>2001</strong>
              <p>ensinando Matemática</p>
            </div>

            <div className="teacher-floating-card teacher-floating-ufscar">
              <span>FORMAÇÃO</span>
              <strong>UFSCar</strong>
              <p>Licenciatura em Matemática</p>
            </div>
          </div>

          <div className="teacher-content">
            <span className="section-eyebrow">QUEM ESTÁ POR TRÁS DO MÉTODO</span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Experiência de sala de aula.{" "}
              <span className="gradient-text">Tecnologia a serviço do ensino.</span>
            </h2>

            <p className="teacher-lead">
              Sou o Professor Wal e ensino Matemática desde 2001. Ao longo dessa
              trajetória, trabalhei com alunos de diferentes perfis, níveis de
              preparação e objetivos.
            </p>

            <p className="teacher-text">
              Minha experiência passa pelo Ensino Médio, cursinhos, ENEM,
              vestibulares tradicionais e vestibulares militares. Também ajudo
              professores que querem aprofundar seus conhecimentos em Matemática
              e aprimorar sua preparação.
            </p>

            <p className="teacher-text">
              O Waldemática nasceu dessa experiência: unir explicações claras,
              prática bem escolhida, organização de estudos e tecnologia para
              tornar o aprendizado mais eficiente sem perder aquilo que mais
              importa — a qualidade do ensino.
            </p>

            <div className="teacher-badges">
              <div className="teacher-badge">
                <span>Desde 2001</span>
                <small>experiência ensinando Matemática</small>
              </div>

              <div className="teacher-badge">
                <span>UFSCar</span>
                <small>formação em Matemática</small>
              </div>

              <div className="teacher-badge">
                <span>ENEM • Vestibulares • Professores</span>
                <small>experiência com diferentes perfis de preparação</small>
              </div>
            </div>

            <div className="teacher-signature">
              <span>Professor Wal</span>
              <small>Fundador do Waldemática</small>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="testimonials-section relative overflow-hidden">
        <div className="testimonials-grid-bg" />
        <div className="testimonials-light testimonials-light-left" />
        <div className="testimonials-light testimonials-light-right" />

        <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-[820px] text-center">
            <span className="section-eyebrow">HISTÓRIAS REAIS</span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Quem estudou com o Waldemática{" "}
              <span className="gradient-text">conta melhor do que a gente.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-base leading-7 text-slate-400 sm:text-lg">
              Alunos e professores com objetivos diferentes, mas com algo em
              comum: uma preparação mais clara, organizada e estratégica.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <a
                key={testimonial.name}
                href={testimonial.image}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-card"
              >
                <div className="testimonial-image-wrap">
                  <Image
                    src={testimonial.image}
                    alt={`Depoimento de ${testimonial.name}`}
                    width={900}
                    height={1200}
                    className="testimonial-image"
                  />

                  <div className="testimonial-image-overlay" />

                  <span className="testimonial-open">
                    Ver depoimento completo
                    <strong>↗</strong>
                  </span>
                </div>

                <div className="testimonial-meta">
                  <div>
                    <span className="testimonial-label">DEPOIMENTO REAL</span>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.context}</p>
                  </div>

                  <div className="testimonial-check">✓</div>
                </div>
              </a>
            ))}
          </div>

          <div className="testimonials-summary">
            <div className="testimonials-summary-icon">“</div>

            <div>
              <span>RESULTADOS QUE VÃO ALÉM DA APROVAÇÃO</span>
              <h3>
                Clareza para aprender, estratégia para estudar e confiança para
                enfrentar a prova.
              </h3>
            </div>

            <Link href="#todos-os-cursos" className="testimonials-summary-action">
              Encontrar minha preparação
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
