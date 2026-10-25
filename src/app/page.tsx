import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CourseAdvisor from "./components/course-advisor";
import PageMotion from "./components/page-motion";
import SiteHeader from "./components/site-header";
import CommercialHero from "./components/commercial-hero";
import CommercialCatalog from "./components/commercial-catalog";
import PlatformTour from "./components/platform-tour";
import commercialStyles from "./components/commercial-v1.module.css";


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
    image: "/images/assinaturas/revisao-1a-fase.png",
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
    image: "/images/assinaturas/revisao-2a-fase.png",
    imageAlt: "Resolução dissertativa de Matemática escrita à mão com desenvolvimento e justificativas.",
    theme: "revisao2",
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
      <PageMotion />
      <SiteHeader
        ctaLabel="Comece gratuitamente"
        ctaHref="/cursos-gratis/"
      />

      {/* HERO COMERCIAL V1 */}
      <CommercialHero />

      {/* ORIENTADOR IA */}
      <CourseAdvisor />


      {/* SETE PLANOS E COMPARADOR DE BENEFÍCIOS */}
      <CommercialCatalog />

      {/* CURSOS AVULSOS DE REVISÃO — vendidos separadamente na Hotmart */}
      <section id="cursos-revisao" className="courses-section relative overflow-hidden">
        <div className="courses-grid-bg" />
        <div className="relative mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-24">
          <div className="course-group-heading scroll-mt-6">
            <div><span>04</span><h3>Cursos avulsos de revisão</h3></div>
            <p>Cursos separados da assinatura Waldemática IA, com pagamento pela Hotmart.</p>
          </div>
          <div className="revision-grid">
            {revisionCourses.map((course, index) => (
              <a
                key={course.title}
                href={course.href}
                data-wm-reveal
                data-wm-delay={index * 110}
                className={`revision-card course-theme-${course.theme}`}
                target={course.href.startsWith("http") ? "_blank" : undefined}
                rel={course.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className={`revision-card-media ${commercialStyles.revisionArtMedia}`}>
                  <Image
                    src={course.image}
                    alt={course.imageAlt}
                    width={1100}
                    height={720}
                    className="revision-card-image"
                  />
                  {/* A arte premium já contém títulos e benefícios: não sobrepor faixas. */}
                </div>
                <div className="revision-content">
                  <span className={commercialStyles.revisionPlanBadge}>{course.badge}</span>
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
                  <div className="revision-note"><span>!</span><p>{course.note}</p></div>
                  <div className="course-action">{course.action}<span>→</span></div>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-400">Os cursos avulsos acima são vendidos e acessados pela Hotmart e não concedem acesso à plataforma Waldemática IA. O Curso de Revisão da 2ª Fase incluído no Extensivo é oferecido na plataforma e não implica os serviços adicionais dos cursos avulsos.</p>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="method-section relative overflow-hidden">
        <div className="method-grid" />
        <div className="method-glow" />

        <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-[780px] text-center" data-wm-reveal>
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
                data-wm-reveal
                data-wm-delay={index * 75}
                className={`method-step ${index === 2 ? "method-step-highlight" : ""}`}
              >
                <div className="method-node">{icon}</div>
                <span className="method-step-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className="method-summary" data-wm-reveal>
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

      {/* V3: tour interativo com seis capturas reais da plataforma */}
      <PlatformTour />

      {/* PROFESSOR WAL */}
      <section className="teacher-section relative overflow-hidden">
        <div className="teacher-grid-bg" />
        <div className="teacher-light teacher-light-one" />
        <div className="teacher-light teacher-light-two" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-32">
          <div className="teacher-visual" data-wm-reveal>
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

          <div className="teacher-content" data-wm-reveal>
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
          <div className="mx-auto max-w-[820px] text-center" data-wm-reveal>
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
            {testimonials.map((testimonial, index) => (
              <a
                key={testimonial.name}
                href={testimonial.image}
                data-wm-reveal
                data-wm-delay={(index % 3) * 85}
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

          <div className="testimonials-summary" data-wm-reveal>
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
