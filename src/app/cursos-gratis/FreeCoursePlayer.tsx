"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import gateStyles from "./FreeCourseGate.module.css";
import styles from "./cursos-gratis.module.css";

const ACCESS_STORAGE_KEY = "waldematica-free-course-access-v1";

type Video = {
  order: number;
  lesson: number;
  title: string;
  category: string;
  videoId: string;
};

type CourseModule = {
  id: string;
  code: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  materialUrl: string;
  videos: Video[];
};

type Props = {
  modules: CourseModule[];
};

type UtmData = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
};

function readUtmData(): UtmData {
  if (typeof window === "undefined") {
    return { utmSource: "", utmMedium: "", utmCampaign: "" };
  }

  const params = new URLSearchParams(window.location.search);

  return {
    utmSource: params.get("utm_source") ?? "",
    utmMedium: params.get("utm_medium") ?? "",
    utmCampaign: params.get("utm_campaign") ?? "",
  };
}

export default function FreeCoursePlayer({ modules }: Props) {
  const [accessGranted, setAccessGranted] = useState<boolean | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [emailConsent, setEmailConsent] = useState(false);
  const [whatsappConsent, setWhatsappConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    try {
      setAccessGranted(localStorage.getItem(ACCESS_STORAGE_KEY) === "granted");
    } catch {
      setAccessGranted(false);
    }
  }, []);

  async function handleAccess(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
        headers: {
          "Content-Type": "application/json",
        },
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

      try {
        localStorage.setItem(ACCESS_STORAGE_KEY, "granted");
      } catch {
        // Se o navegador bloquear storage, o acesso desta sessão continua funcionando.
      }

      setAccessGranted(true);
    } catch {
      setErrorMessage(
        "Não foi possível liberar seu acesso agora. Confira sua conexão e tente novamente.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (accessGranted === null) {
    return (
      <div className={gateStyles.loadingCard} aria-live="polite">
        Preparando sua área gratuita...
      </div>
    );
  }

  if (!accessGranted) {
    return (
      <div className={gateStyles.gate}>
        <div className={gateStyles.gateGlow} />

        <div className={gateStyles.copy}>
          <span className={gateStyles.eyebrow}>ACESSO GRATUITO</span>
          <h3>Libere os 3 módulos em poucos segundos.</h3>
          <p>
            Informe seu nome e e-mail para acessar agora as 23 aulas e os
            materiais de Álgebra, Geometria Plana e Trigonometria.
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
                if (!event.target.value.trim()) {
                  setWhatsappConsent(false);
                }
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
            <span>
              Quero receber novidades, aulas e ofertas da Waldemática por e-mail.
            </span>
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

  return <CoursePlayer modules={modules} />;
}

function CoursePlayer({ modules }: Props) {
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id);
  const [activeVideoId, setActiveVideoId] = useState(modules[0].videos[0].videoId);

  const activeModule = useMemo(
    () => modules.find((module) => module.id === activeModuleId) ?? modules[0],
    [activeModuleId, modules],
  );

  const activeVideo = useMemo(
    () =>
      activeModule.videos.find((video) => video.videoId === activeVideoId) ??
      activeModule.videos[0],
    [activeModule, activeVideoId],
  );

  function changeModule(module: CourseModule) {
    setActiveModuleId(module.id);
    setActiveVideoId(module.videos[0].videoId);
  }

  const activeIndex = activeModule.videos.findIndex(
    (video) => video.videoId === activeVideo.videoId,
  );

  const previousVideo =
    activeIndex > 0 ? activeModule.videos[activeIndex - 1] : null;

  const nextVideo =
    activeIndex < activeModule.videos.length - 1
      ? activeModule.videos[activeIndex + 1]
      : null;

  return (
    <div className={styles.studyRoom}>
      <div className={styles.moduleTabs}>
        {modules.map((module) => (
          <button
            key={module.id}
            type="button"
            onClick={() => changeModule(module)}
            className={`${styles.moduleTab} ${
              activeModule.id === module.id ? styles.moduleTabActive : ""
            }`}
          >
            <span>{module.icon}</span>

            <div>
              <strong>{module.shortTitle}</strong>
              <small>{module.videos.length} vídeos</small>
            </div>
          </button>
        ))}
      </div>

      <div className={styles.studyRoomTop}>
        <div>
          <span className={styles.roomEyebrow}>{activeModule.eyebrow}</span>
          <h3>{activeModule.title}</h3>
          <p>{activeModule.description}</p>
        </div>

        <a
          href={activeModule.materialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.materialButton}
        >
          <span>↓</span>
          Baixar materiais do módulo
        </a>
      </div>

      <div className={styles.playerLayout}>
        <div className={styles.videoArea}>
          <div className={styles.videoFrame}>
            <iframe
              key={activeVideo.videoId}
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?rel=0&modestbranding=1`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className={styles.videoInfo}>
            <div>
              <span className={styles.categoryBadge}>{activeVideo.category}</span>
              <small>
                Aula {activeVideo.lesson} • {activeIndex + 1} de{" "}
                {activeModule.videos.length}
              </small>
            </div>

            <h4>{activeVideo.title}</h4>

            <div className={styles.videoNavigation}>
              <button
                type="button"
                disabled={!previousVideo}
                onClick={() =>
                  previousVideo && setActiveVideoId(previousVideo.videoId)
                }
              >
                ← Aula anterior
              </button>

              <button
                type="button"
                disabled={!nextVideo}
                onClick={() => nextVideo && setActiveVideoId(nextVideo.videoId)}
              >
                Próxima aula →
              </button>
            </div>
          </div>
        </div>

        <aside className={styles.playlist}>
          <div className={styles.playlistHeader}>
            <div>
              <span>PLAYLIST</span>
              <strong>{activeModule.shortTitle}</strong>
            </div>

            <small>
              {activeIndex + 1}/{activeModule.videos.length}
            </small>
          </div>

          <div className={styles.playlistItems}>
            {activeModule.videos.map((video, index) => (
              <button
                key={video.videoId}
                type="button"
                onClick={() => setActiveVideoId(video.videoId)}
                className={`${styles.playlistItem} ${
                  activeVideo.videoId === video.videoId
                    ? styles.playlistItemActive
                    : ""
                }`}
              >
                <span className={styles.playlistNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <small>{video.category}</small>
                  <strong>{video.title}</strong>
                </div>

                <span className={styles.playIcon}>
                  {activeVideo.videoId === video.videoId ? "▶" : "›"}
                </span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
