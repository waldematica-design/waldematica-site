"use client";

import Image from "next/image";
import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type ApiResponse = {
  status?: string;
  reply?: string;
  visitorToken?: string;
  error?: string;
};

const API_URL =
  "https://wal-ai-agent.vercel.app/api/waldematica/chat";

const VISITOR_TOKEN_KEY =
  "waldematica_ai_visitor_token";

const initialMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Olá! 👋 Posso ajudar você a encontrar a preparação Waldemática mais adequada. Me conte qual prova você pretende fazer ou o que precisa melhorar em Matemática.",
};

const suggestions = [
  "Vou prestar vestibulares",
  "Quero me preparar para o ENEM",
  "Preciso melhorar assuntos específicos",
  "Quero me preparar para o PROFMAT",
];

function createId() {
  return `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}`;
}

function renderInlineMessage(text: string) {
  const tokenPattern =
    /(\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^)\s]+\)|https?:\/\/[^\s]+)/g;

  return text
    .split(tokenPattern)
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong
            key={`${part}-${index}`}
            className="font-semibold text-[#0f2740]"
          >
            {part.slice(2, -2)}
          </strong>
        );
      }

      const markdownLink = part.match(
        /^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/
      );

      if (markdownLink) {
        return (
          <a
            key={`${part}-${index}`}
            href={markdownLink[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#007c92] underline decoration-[#22b8cf]/50 underline-offset-2 transition hover:text-[#005f70]"
          >
            {markdownLink[1]}
          </a>
        );
      }

      if (/^https?:\/\//.test(part)) {
        const match = part.match(/^(.*?)([.,;!)]*)$/);
        const url = match?.[1] ?? part;
        const trailing = match?.[2] ?? "";

        return (
          <span key={`${part}-${index}`}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all font-semibold text-[#007c92] underline decoration-[#22b8cf]/50 underline-offset-2 transition hover:text-[#005f70]"
            >
              {url}
            </a>
            {trailing}
          </span>
        );
      }

      return part;
    });
}

function renderMessageContent(content: string) {
  const lines = content.split("\n");

  return lines.map((line, index) => (
    <span key={`${index}-${line.slice(0, 20)}`}>
      {renderInlineMessage(line)}
      {index < lines.length - 1 && <br />}
    </span>
  ));
}

export default function CourseAdvisor() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    initialMessage,
  ]);

  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [visitorToken, setVisitorToken] = useState("");
  const messagesViewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const storedToken = window.localStorage.getItem(
        VISITOR_TOKEN_KEY
      );

      if (storedToken) {
        setVisitorToken(storedToken);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const viewport = messagesViewportRef.current;

    if (!viewport) {
      return;
    }

    viewport.scrollTo({
      top: viewport.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, sending]);

  async function sendMessage(messageText?: string) {
    const text = (messageText ?? input).trim();

    if (!text || sending) {
      return;
    }

    const userMessage: ChatMessage = {
      id: createId(),
      role: "user",
      content: text,
    };

    setMessages((current) => [
      ...current,
      userMessage,
    ]);

    setInput("");
    setSending(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          visitorToken:
            visitorToken || undefined,
        }),
      });

      const data = (await response.json()) as ApiResponse;

      if (!response.ok || data.status !== "ok" || !data.reply) {
        throw new Error(
          data.error ||
            "Não foi possível receber a resposta."
        );
      }

      if (data.visitorToken) {
        setVisitorToken(data.visitorToken);

        window.localStorage.setItem(
          VISITOR_TOKEN_KEY,
          data.visitorToken
        );
      }

      const assistantMessage: ChatMessage = {
        id: createId(),
        role: "assistant",
        content: data.reply,
      };

      setMessages((current) => [
        ...current,
        assistantMessage,
      ]);
    } catch (error) {
      console.error(
        "Erro no orientador de cursos:",
        error
      );

      setMessages((current) => [
        ...current,
        {
          id: createId(),
          role: "assistant",
          content:
            "Não consegui responder agora. Tente novamente em alguns instantes.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    void sendMessage();
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      void sendMessage();
    }
  }

  return (
    <section
      id="orientador-ia"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#030a18]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-blue-700/15 blur-[120px]" />
        <div className="absolute bottom-[-15rem] right-[-10rem] h-[38rem] w-[38rem] rounded-full bg-cyan-500/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-6 py-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 text-sm font-semibold text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
            AGENTE IA WALDEMÁTICA
          </div>

          <h2 className="mt-6 max-w-[540px] text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl">
            Qual preparação faz{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              sentido para você?
            </span>
          </h2>

          <p className="mt-6 max-w-[550px] text-base leading-7 text-slate-300 sm:text-lg">
            Não precisa comparar todos os cursos sozinho.
            Conte ao agente sua prova, quanto tempo você
            tem e onde sente mais dificuldade. Ele analisa
            as opções e explica qual preparação combina
            melhor com o seu momento.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {[
              [
                "01",
                "Sua prova",
                "ENEM, vestibulares, provas objetivas, dissertativas ou PROFMAT.",
              ],
              [
                "02",
                "Seu tempo",
                "Preparação longa, intensiva ou reta final.",
              ],
              [
                "03",
                "Suas dificuldades",
                "Preparação completa ou assuntos específicos.",
              ],
              [
                "04",
                "Seu melhor caminho",
                "O agente compara os cursos antes de recomendar.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                data-wm-reveal
                data-wm-delay={(Number(number) - 1) * 85}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"
              >
                <div className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.07] text-xs font-bold text-cyan-200">
                    {number}
                  </span>

                  <div>
                    <h3 className="font-semibold text-white">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-[520px] text-sm leading-6 text-slate-500">
            A recomendação considera adequação ao aluno,
            não o preço do curso.
          </p>
        </div>

        <div className="relative min-w-0">
          {/* Mascote animado acima do painel, sem bloquear a conversa */}
          <div className="wm-advisor-greeter" aria-hidden="true">
            <div className="wm-advisor-greeter-bubble">
              <span className="wm-advisor-greeter-greeting">Olá! 👋</span>
              <span>Vamos encontrar seu curso?</span>
            </div>
            <div className="wm-advisor-robot">
              <svg viewBox="0 0 160 160" role="presentation" focusable="false" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="wm-robot-shell" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#defaff" />
                    <stop offset="0.55" stopColor="#80d6f5" />
                    <stop offset="1" stopColor="#3189c4" />
                  </linearGradient>
                  <linearGradient id="wm-robot-face" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#04172c" />
                    <stop offset="1" stopColor="#082d51" />
                  </linearGradient>
                  <linearGradient id="wm-robot-body" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#8fe8f7" />
                    <stop offset="1" stopColor="#1465a3" />
                  </linearGradient>
                </defs>
                <ellipse cx="79" cy="148" rx="43" ry="7" fill="#22d3ee" opacity=".17" />
                <path d="M80 36V19" fill="none" stroke="#a5ecff" strokeWidth="6" strokeLinecap="round" />
                <circle className="wm-advisor-robot-antenna" cx="80" cy="16" r="7" fill="#22e5e2" />
                <path d="M54 91h53c9 0 16 7 16 16v18c0 10-8 18-18 18H56c-10 0-18-8-18-18v-18c0-9 7-16 16-16Z" fill="url(#wm-robot-body)" stroke="#bdfaff" strokeWidth="3" />
                {/* W oficial enviado pelo Wal, vetorizado sem fundo nem borda circular. */}
                <svg
                  className="wm-advisor-robot-mark"
                  x="60"
                  y="106"
                  width="40"
                  height="24"
                  viewBox="0 0 1434 844"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M0 106L113 106L371 709L315 843Z"
                    fill="#073B78"
                    stroke="#063655"
                    strokeWidth="35"
                    strokeLinejoin="round"
                    paintOrder="stroke"
                  />
                  <path
                    d="M1433 0L1388 105L1050 106L742 827L524 317L431 316L386 211L592 211L743 559L982 0Z"
                    fill="#073B78"
                    stroke="#063655"
                    strokeWidth="35"
                    strokeLinejoin="round"
                    paintOrder="stroke"
                  />
                </svg>
                <path d="M50 141v6M110 141v6" stroke="#80d9f3" strokeWidth="8" strokeLinecap="round" />
                <path d="M39 103 26 119" stroke="#4faee0" strokeWidth="10" strokeLinecap="round" />
                <circle cx="25" cy="121" r="8" fill="#a4f3fa" stroke="#1e75a9" strokeWidth="2" />
                <g className="wm-advisor-robot-wave">
                  <path d="M120 105 135 81" stroke="#359bd4" strokeWidth="11" strokeLinecap="round" />
                  <path d="M129 66v-15M136 64l5-15M143 69l12-11M145 77l13-3" stroke="#d2faff" strokeWidth="5" strokeLinecap="round" />
                  <path d="M125 79c-4-8-1-17 7-20 6-3 12 0 15 5l1 15c0 12-7 17-15 17s-12-7-8-17Z" fill="url(#wm-robot-shell)" stroke="#6ecdea" strokeWidth="2" />
                </g>
                <rect x="22" y="34" width="116" height="64" rx="28" fill="url(#wm-robot-shell)" stroke="#d6fcff" strokeWidth="3" />
                <rect x="31" y="42" width="98" height="47" rx="21" fill="url(#wm-robot-face)" />
                <g className="wm-advisor-robot-eyes" fill="#55f1f2">
                  <rect x="52" y="55" width="11" height="15" rx="5.5" />
                  <rect x="97" y="55" width="11" height="15" rx="5.5" />
                </g>
                <path d="M68 74q12 9 24 0" fill="none" stroke="#6cf5ee" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M41 48q25-17 62-8" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity=".35" />
                <rect x="14" y="56" width="10" height="18" rx="5" fill="#329ad6" />
                <rect x="136" y="56" width="10" height="18" rx="5" fill="#329ad6" />
              </svg>
            </div>
          </div>
          <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-br from-blue-500/15 via-transparent to-cyan-400/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-cyan-200/15 bg-[#071121]/95 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-white/[0.08] bg-gradient-to-r from-[#0a2f78] via-[#0b46a5] to-[#086e94] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-[0_0_24px_rgba(34,211,238,0.18)]">
                  <Image
                    src="/logo-waldematica.png"
                    alt="Waldemática"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div>
                  <div className="font-semibold text-white">
                    Agente IA Waldemática
                  </div>

                  <div className="mt-0.5 flex items-center gap-1.5 text-xs text-cyan-100/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Orientador de cursos
                  </div>
                </div>
              </div>

              <div className="hidden rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/70 sm:block">
                IA + dados oficiais
              </div>
            </div>

            <div className="flex h-[560px] min-h-0 flex-col sm:h-[600px] lg:h-[620px]">
              <div
                ref={messagesViewportRef}
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-[#dce6ee] px-4 py-5 sm:px-6"
              >
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={
                          message.role === "user"
                            ? "max-w-[86%] rounded-2xl rounded-br-md bg-gradient-to-r from-[#9de8f2] to-[#67d7ea] px-4 py-3 text-sm font-medium leading-6 text-[#073642] shadow-[0_12px_30px_rgba(14,165,233,0.12)]"
                            : "max-w-[90%] whitespace-pre-wrap rounded-2xl rounded-bl-md border border-[#c9d6e2] bg-[#f7fafc] px-4 py-3 text-sm leading-6 text-[#17324d] shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
                        }
                      >
                        {renderMessageContent(message.content)}
                      </div>
                    </div>
                  ))}

                  {sending && (
                    <div className="flex justify-start">
                      <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-[#c9d6e2] bg-[#f7fafc] px-4 py-3.5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                        <span className="text-xs font-medium text-[#577089]">
                          Pensando
                        </span>
                        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                        <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400 [animation-delay:150ms]" />
                        <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400 [animation-delay:300ms]" />
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {messages.length === 1 && (
                <div className="border-t border-slate-300/80 bg-[#e7eef4] px-4 py-4 sm:px-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                    Você pode começar por aqui
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        disabled={sending}
                        onClick={() =>
                          void sendMessage(suggestion)
                        }
                        className="rounded-full border border-slate-300 bg-white/85 px-3.5 py-2 text-left text-xs font-semibold text-slate-700 shadow-sm transition hover:border-cyan-500/40 hover:bg-cyan-50 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="border-t border-slate-300/80 bg-[#dce6ee] p-4 sm:p-5"
              >
                <div className="flex items-end gap-3 rounded-2xl border border-slate-300 bg-[#f6f9fb] p-2 shadow-[0_8px_28px_rgba(15,23,42,0.08)] transition focus-within:border-cyan-500/45 focus-within:bg-white">
                  <textarea
                    value={input}
                    onChange={(event) =>
                      setInput(event.target.value)
                    }
                    onKeyDown={handleKeyDown}
                    rows={1}
                    disabled={sending}
                    placeholder="Conte seu objetivo..."
                    className="max-h-32 min-h-[44px] flex-1 resize-none bg-transparent px-3 py-3 text-sm leading-5 text-slate-900 outline-none placeholder:text-slate-500 disabled:opacity-60"
                  />

                  <button
                    type="submit"
                    disabled={!input.trim() || sending}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 text-lg font-bold text-[#06202a] shadow-[0_10px_30px_rgba(14,165,233,0.18)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
                    aria-label="Enviar mensagem"
                  >
                    ↑
                  </button>
                </div>

                <p className="mt-2 text-center text-[11px] leading-5 text-slate-500">
                  Orientação baseada nas informações oficiais
                  dos cursos Waldemática.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}