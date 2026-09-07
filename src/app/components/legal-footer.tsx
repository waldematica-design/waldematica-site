import Link from "next/link";

export function LegalFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#020817] text-slate-400">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-6 py-7 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>© 2026 Waldemática. Todos os direitos reservados.</span>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Informações legais">
          <Link className="transition hover:text-cyan-300" href="/politica-de-privacidade/">
            Política de Privacidade
          </Link>
          <Link className="transition hover:text-cyan-300" href="/termos-de-uso/">
            Termos de Uso
          </Link>
          <a className="transition hover:text-cyan-300" href="mailto:contato@waldematica.com.br">
            Contato
          </a>
        </nav>
      </div>
    </footer>
  );
}
