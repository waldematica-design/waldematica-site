import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso dos sites e serviços do Waldemática.",
  alternates: { canonical: "/termos-de-uso/" },
};

const sections = [
  ["1. Aceitação", "Ao utilizar este site, seus conteúdos e funcionalidades, você concorda com estes Termos de Uso e com a Política de Privacidade aplicável."],
  ["2. Conteúdo educacional", "Os materiais do Waldemática têm finalidade educacional. Buscamos clareza e correção, mas resultados em provas, vestibulares, concursos ou cursos dependem de diversos fatores e não são garantidos."],
  ["3. Cursos e compras", "Condições comerciais, duração de acesso, preços, parcelamento, bônus e características de cada curso são aquelas apresentadas na oferta vigente. Quando o pagamento ocorre por plataforma externa, como a Hotmart, o checkout e a transação também ficam sujeitos aos termos dessa plataforma e à legislação de consumo aplicável."],
  ["4. Inteligência artificial", "O Agente IA pode gerar respostas automaticamente e pode cometer imprecisões. Informações relevantes devem ser conferidas antes de serem utilizadas em decisões importantes. O Agente IA não substitui atendimento humano, orientação profissional especializada nem as regras específicas de cada curso."],
  ["5. Uso adequado", "Você se compromete a não utilizar o site para atividades ilícitas, tentativas de invasão, abuso de automações, engenharia reversa indevida, violação de direitos autorais ou ações que prejudiquem a segurança e a disponibilidade dos serviços."],
  ["6. Propriedade intelectual", "Textos, aulas, listas, vídeos, marcas, identidade visual, materiais didáticos, códigos e demais conteúdos próprios do Waldemática são protegidos pela legislação aplicável. O acesso a um curso não transfere direitos de propriedade intelectual nem autoriza redistribuição não permitida."],
  ["7. Serviços de terceiros", "Algumas funcionalidades dependem de terceiros, como provedores de hospedagem, inteligência artificial, pagamento e plataformas de vídeo. Interrupções, limites ou alterações nesses serviços podem afetar temporariamente determinadas funcionalidades."],
  ["8. Disponibilidade e alterações", "O Waldemática pode corrigir, atualizar, substituir ou descontinuar funcionalidades, materiais e páginas quando necessário, preservando os direitos dos consumidores e as condições contratadas quando aplicável."],
  ["9. Privacidade", "O tratamento de dados pessoais relacionado ao site é descrito na Política de Privacidade do Waldemática."],
  ["10. Contato", "Dúvidas sobre estes termos podem ser enviadas para contato@waldematica.com.br."],
] as const;

export default function TermosDeUsoPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <Link href="/" className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">← Voltar ao Waldemática</Link>
        <header className="mt-8 border-b border-white/10 pb-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Regras de utilização</span>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Termos de Uso</h1>
          <p className="mt-4 text-sm text-slate-400">Última atualização: 7 de setembro de 2026</p>
        </header>
        <div className="mt-10 space-y-10 text-[16px] leading-8 text-slate-300">
          <p>Estes termos se aplicam ao site <strong className="text-white">waldematica.com.br</strong> e às funcionalidades nele disponibilizadas.</p>
          {sections.map(([title, text]) => (
            <section key={title}>
              <h2 className="mb-3 text-2xl font-bold text-white">{title}</h2>
              <p>{text}</p>
            </section>
          ))}
          <p>Para informações sobre dados pessoais, consulte a <Link className="text-cyan-300 underline underline-offset-4" href="/politica-de-privacidade/">Política de Privacidade</Link>.</p>
        </div>
      </div>
    </main>
  );
}
