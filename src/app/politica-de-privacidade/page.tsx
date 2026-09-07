import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade e proteção de dados do Waldemática.",
  alternates: { canonical: "/politica-de-privacidade/" },
};

const sections = [
  {
    title: "1. Quem é o responsável pelo tratamento",
    body: (
      <p>
        O Waldemática é responsável pelo tratamento dos dados pessoais relacionados a este site e aos serviços educacionais aqui apresentados. Para assuntos de privacidade, o canal de contato é <a className="text-cyan-300 underline underline-offset-4" href="mailto:contato@waldematica.com.br">contato@waldematica.com.br</a>.
      </p>
    ),
  },
  {
    title: "2. Quais dados podem ser tratados",
    body: (
      <div className="space-y-3">
        <p>Dependendo da forma de uso do site, podem ser tratados dados como nome, e-mail, telefone, conteúdo de mensagens enviadas ao Agente IA, informações técnicas de acesso e dados fornecidos voluntariamente ao solicitar atendimento ou informações sobre cursos.</p>
        <p>Quando a compra é realizada em plataforma externa, como a Hotmart, dados de pagamento e checkout são tratados diretamente por essa plataforma conforme as regras e políticas próprias dela.</p>
      </div>
    ),
  },
  {
    title: "3. Para que usamos os dados",
    body: (
      <p>Os dados podem ser utilizados para responder solicitações, prestar atendimento, apresentar cursos, operar funcionalidades do site e do Agente IA, manter segurança e estabilidade, prevenir abuso, cumprir obrigações legais e melhorar a experiência dos serviços.</p>
    ),
  },
  {
    title: "4. Agente IA e provedores de tecnologia",
    body: (
      <p>Mensagens enviadas ao Agente IA podem ser processadas por infraestrutura própria e por provedores de inteligência artificial e hospedagem, como OpenAI e Vercel, na medida necessária para gerar respostas e manter o serviço. Evite inserir informações sensíveis ou desnecessárias nas conversas.</p>
    ),
  },
  {
    title: "5. Compartilhamento e transferência internacional",
    body: (
      <p>Dados podem ser compartilhados com provedores de hospedagem, inteligência artificial, atendimento, pagamento e outros serviços tecnológicos estritamente necessários à operação. Não vendemos dados pessoais. Alguns fornecedores podem operar infraestrutura fora do Brasil, o que pode envolver transferência internacional de dados conforme as hipóteses e salvaguardas previstas na legislação aplicável.</p>
    ),
  },
  {
    title: "6. Cookies e armazenamento local",
    body: (
      <p>Este site utiliza apenas recursos técnicos e funcionais necessários à navegação e às funcionalidades atualmente disponibilizadas. Não há, neste momento, carregamento direto de ferramentas de publicidade comportamental ou analytics que exijam consentimento prévio. Caso isso mude, esta política e o mecanismo de escolha do usuário serão atualizados.</p>
    ),
  },
  {
    title: "7. Retenção e segurança",
    body: (
      <p>Os dados são mantidos pelo tempo necessário para cumprir as finalidades informadas, atender obrigações legais, preservar registros essenciais e proteger direitos. Adotamos medidas técnicas e organizacionais compatíveis com o porte e a natureza dos serviços para reduzir riscos de acesso, perda, alteração ou divulgação indevida.</p>
    ),
  },
  {
    title: "8. Crianças e adolescentes",
    body: (
      <p>Por se tratar de um serviço educacional, pode haver uso por adolescentes. O tratamento de dados de crianças e adolescentes deve observar o melhor interesse e as exigências específicas da LGPD. Quando a legislação exigir autorização de responsável, ela deverá ser obtida de forma adequada.</p>
    ),
  },
  {
    title: "9. Seus direitos",
    body: (
      <p>Nos termos da LGPD, o titular pode solicitar, conforme aplicável, confirmação de tratamento, acesso, correção, informação sobre compartilhamentos, anonimização, bloqueio ou eliminação, portabilidade, revogação de consentimento, oposição e revisão de decisões automatizadas. Solicitações podem ser enviadas para o canal de privacidade informado nesta página.</p>
    ),
  },
  {
    title: "10. Alterações desta política",
    body: (
      <p>Esta política pode ser atualizada para refletir mudanças nos serviços, fornecedores ou exigências legais. A versão vigente permanecerá disponível nesta página.</p>
    ),
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <Link href="/" className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">← Voltar ao Waldemática</Link>
        <header className="mt-8 border-b border-white/10 pb-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Privacidade e LGPD</span>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Política de Privacidade</h1>
          <p className="mt-4 text-sm text-slate-400">Última atualização: 7 de setembro de 2026</p>
        </header>
        <div className="mt-10 space-y-10 text-[16px] leading-8 text-slate-300">
          <p>Esta política explica, de forma clara, como o Waldemática trata dados pessoais relacionados ao site <strong className="text-white">waldematica.com.br</strong>.</p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-2xl font-bold text-white">{section.title}</h2>
              {section.body}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
