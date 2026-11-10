"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useSyncExternalStore } from "react";
import gateStyles from "./FreeCourseGate.module.css";

// Mantém a interface esperada pela página pública atual.
// As 23 videoaulas continuam no catálogo já existente da demonstração.
type Props = {
  modules: { videos: unknown[] }[];
};

type UtmData = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
};

const ACCESS_STORAGE_KEY = "waldematica-free-course-access-v1";
const ACCESS_CHANGE_EVENT = "waldematica-free-course-access-change";
const DEMO_URL = "/cursos-gratis/plataforma/";

function readUtmData(): UtmData {
  const params = new URLSearchParams(window.location.search);

  return {
    utmSource: params.get("utm_source") ?? "",
    utmMedium: params.get("utm_medium") ?? "",
    utmCampaign: params.get("utm_campaign") ?? "",
  };
}

function subscribeToStoredAccess(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(ACCESS_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(ACCESS_CHANGE_EVENT, onStoreChange);
  };
}

function getStoredAccessSnapshot() {
  if (typeof window === "undefined") return false;

  try {
    return localStorage.getItem(ACCESS_STORAGE_KEY) === "granted";
  } catch {
    return false;
  }
}

function getStoredAccessServerSnapshot() {
  return false;
}

export default function FreeCoursePlayer({ modules }: Props) {
  const router = useRouter();
  const storedAccessGranted = useSyncExternalStore(
    subscribeToStoredAccess,
    getStoredAccessSnapshot,
    getStoredAccessServerSnapshot,
  );
  const [sessionAccessGranted, setSessionAccessGranted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [emailConsent, setEmailConsent] = useState(false);
  const [whatsappConsent, setWhatsappConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const accessGranted = storedAccessGranted || sessionAccessGranted;
  const videoCount = modules.reduce((count, course) => count + course.videos.length, 0);

  async function handleAccess(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    setErrorMessage("");

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanWhatsapp = whatsapp.trim();

    if (cleanName.length < 2) {
      setErrorMessage("Digite seu nome para liberar as aulas.");
      return;
    }

    if (!cleanEmail || !cleanEmail.includes("@")) {
      setErrorMessage("Digite um e-mail válido para liberar as aulas.");
      return;
    }

    setLoading(true);

    try {
      const utm = readUtmData();
      const response = await fetch("/api/leads/free-course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          whatsapp: cleanWhatsapp,
          emailMarketingConsent: emailConsent,
          whatsappMarketingConsent: Boolean(cleanWhatsapp) && whatsappConsent,
          website,
          pagePath: window.location.pathname,
          ...utm,
        }),
      });

      if (!response.ok) {
        throw new Error("lead_capture_failed");
      }

      // O lead foi recebido pela API existente. Guardamos apenas uma indicação
      // local para não pedir o formulário novamente no mesmo navegador.
      try {
        localStorage.setItem(ACCESS_STORAGE_KEY, "granted");
        window.dispatchEvent(new Event(ACCESS_CHANGE_EVENT));
      } catch {
        // Se o navegador bloquear o storage, ainda liberamos a sessão atual.
      }

      setSessionAccessGranted(true);
      router.push(DEMO_URL);
    } catch {
      setErrorMessage(
        "Não foi possível liberar seu acesso agora. Confira sua conexão e tente novamente.",
      );
      setLoading(false);
    }
  }

  if (accessGranted) {
    return (
      <div className={gateStyles.gate}>
        <div className={gateStyles.copy}>
          <span className={gateStyles.eyebrow}>ACESSO GRATUITO LIBERADO</span>
          <h3>Conheça a Waldemática IA por dentro.</h3>
          <p>
            Explore o ambiente de demonstração e assista às {videoCount} videoaulas
            gratuitas de Álgebra, Geometria Plana e Trigonometria.
          </p>
          <div className={gateStyles.benefits}>
            <span>✓ Aulas gratuitas</span>
            <span>✓ Sem criar conta na Waldemática IA</span>
          </div>
        </div>
        <div className={gateStyles.form}>
          <Link href={DEMO_URL} className={gateStyles.submit}>
            Entrar na plataforma gratuita <span>→</span>
          </Link>
          <p className={gateStyles.privacy}>
            Os recursos premium são apenas demonstrativos e requerem assinatura.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={gateStyles.gate}>
      <div className={gateStyles.gateGlow} />

      <div className={gateStyles.copy}>
        <span className={gateStyles.eyebrow}>ACESSO GRATUITO</span>
        <h3>Libere os 3 módulos em poucos segundos.</h3>
        <p>
          Informe seu nome e e-mail para conhecer a Waldemática IA por dentro
          e assistir às {videoCount} videoaulas gratuitas de Álgebra, Geometria
          Plana e Trigonometria.
        </p>
        <div className={gateStyles.benefits}>
          <span>✓ Liberação imediata</span>
          <span>✓ Sem cartão de crédito</span>
          <span>✓ WhatsApp opcional</span>
        </div>
      </div>

      <form className={gateStyles.form} onSubmit={handleAccess}>
        <div className={gateStyles.field}>
          <label htmlFor="free-course-name">Seu nome</label>
          <input
            id="free-course-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={80}
            placeholder="Como podemos chamar você?"
            required
          />
        </div>
        <div className={gateStyles.field}>
          <label htmlFor="free-course-email">Seu melhor e-mail</label>
          <input
            id="free-course-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            maxLength={254}
            placeholder="voce@exemplo.com"
            required
          />
        </div>
        <div className={gateStyles.field}>
          <label htmlFor="free-course-whatsapp">
            WhatsApp <span>opcional</span>
          </label>
          <input
            id="free-course-whatsapp"
            type="tel"
            autoComplete="tel"
            value={whatsapp}
            onChange={(event) => {
              setWhatsapp(event.target.value);
              if (!event.target.value.trim()) setWhatsappConsent(false);
            }}
            maxLength={30}
            placeholder="(19) 99999-9999"
          />
        </div>
        <div className={gateStyles.honeypot} aria-hidden="true">
          <label htmlFor="free-course-website">Website</label>
          <input
            id="free-course-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </div>
        <label className={gateStyles.checkRow}>
          <input
            type="checkbox"
            checked={emailConsent}
            onChange={(event) => setEmailConsent(event.target.checked)}
          />
          <span>Quero receber novidades, aulas e ofertas da Waldemática por e-mail.</span>
        </label>
        {whatsapp.trim() ? (
          <label className={gateStyles.checkRow}>
            <input
              type="checkbox"
              checked={whatsappConsent}
              onChange={(event) => setWhatsappConsent(event.target.checked)}
            />
            <span>Autorizo contato da Waldemática pelo WhatsApp.</span>
          </label>
        ) : null}
        {errorMessage ? (
          <p className={gateStyles.error} role="alert">
            {errorMessage}
          </p>
        ) : null}
        <button className={gateStyles.submit} type="submit" disabled={loading}>
          {loading ? "Liberando acesso..." : "Liberar minhas aulas grátis"}
          {!loading ? <span>→</span> : null}
        </button>
        <p className={gateStyles.privacy}>
          Seus dados são usados para liberar o conteúdo. Mensagens promocionais
          só serão enviadas se você autorizar acima. Consulte nossa{" "}
          <Link href="/politica-de-privacidade/">Política de Privacidade</Link>.
        </p>
      </form>
    </div>
  );
}
