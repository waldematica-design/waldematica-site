import Link from "next/link";

export function LegalFooter() {
  return (
    <>
      <section className="bg-[#020817] px-6 pt-8 lg:px-8">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-[#071827] via-[#061423] to-[#020817] p-6 shadow-2xl shadow-black/10 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">
              Desenvolvimento Web
            </p>

            <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
              Este site foi criado e desenvolvido por{" "}
              <a
                href="https://walbrasil.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 transition hover:text-cyan-200"
              >
                @walbrasil.dev
              </a>
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Tem um projeto em mente? Solicite um orçamento.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://walbrasil.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.035] px-5 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
            >
              Portfólio
            </a>

            <a
              href="https://wa.me/5517996802980"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-cyan-400 px-5 text-sm font-semibold text-[#02101c] transition hover:bg-cyan-300"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#020817] text-slate-400">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-6 py-7 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© 2026 Waldemática. Todos os direitos reservados.</span>

          <nav
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
            aria-label="Informações legais"
          >
            <Link
              className="transition hover:text-cyan-300"
              href="/politica-de-privacidade/"
            >
              Política de Privacidade
            </Link>

            <Link
              className="transition hover:text-cyan-300"
              href="/termos-de-uso/"
            >
              Termos de Uso
            </Link>

            <a
              className="transition hover:text-cyan-300"
              href="mailto:contato@waldematica.com.br"
            >
              Contato
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
