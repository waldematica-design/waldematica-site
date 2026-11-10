"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { FreeCourseModule } from "../free-course-data";
import { modules } from "../free-course-data";
import styles from "./demo-lesson-player.module.css";

const VISIT_PROGRESS_KEY = "waldematica-free-demo-visit-progress-v1";
const VISIT_CHANGE_EVENT = "waldematica-free-demo-progress-change";

type Props = {
  courseModule: FreeCourseModule;
  selectedVideoId: string;
  onSelectVideo: (videoId: string) => void;
  onSelectModule: (moduleId: string) => void;
  onBack: () => void;
};

type CompletionMap = Record<string, string[]>;

function subscribeToProgress(onChange: () => void): () => void {
  window.addEventListener(VISIT_CHANGE_EVENT, onChange);
  return () => window.removeEventListener(VISIT_CHANGE_EVENT, onChange);
}

function readProgressSnapshot(): string {
  try {
    return window.sessionStorage.getItem(VISIT_PROGRESS_KEY) ?? "{}";
  } catch {
    return "{}";
  }
}

function readServerProgressSnapshot(): string {
  return "{}";
}

function parseVisitProgress(snapshot: string): CompletionMap {
  try {
    const data: unknown = JSON.parse(snapshot);
    if (!data || typeof data !== "object" || Array.isArray(data)) return {};
    const restored: CompletionMap = {};
    for (const courseModule of modules) {
      const list = (data as Record<string, unknown>)[courseModule.id];
      if (!Array.isArray(list)) continue;
      const validIds = new Set(courseModule.videos.map((video) => video.videoId));
      restored[courseModule.id] = list.filter(
        (value): value is string => typeof value === "string" && validIds.has(value),
      );
    }
    return restored;
  } catch {
    return {};
  }
}

function normalizeSearch(text: string): string {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
}

function Icon({ name, size = 16 }: { name: "chevron-left" | "chevron-right" | "check" | "play" | "search" | "list" | "close"; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  switch (name) {
    case "chevron-left": return <svg {...common}><path d="m15 18-6-6 6-6" /></svg>;
    case "chevron-right": return <svg {...common}><path d="m9 18 6-6-6-6" /></svg>;
    case "check": return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
    case "play": return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4z" /></svg>;
    case "search": return <svg {...common}><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></svg>;
    case "list": return <svg {...common}><path d="M4 6h13M4 12h13M4 18h9" /><path d="m17 16 3 2-3 2" /></svg>;
    case "close": return <svg {...common}><path d="M6 6l12 12M18 6 6 18" /></svg>;
  }
}

export default function DemoLessonPlayer({ courseModule, selectedVideoId, onSelectVideo, onSelectModule, onBack }: Props) {
  const snapshot = useSyncExternalStore(subscribeToProgress, readProgressSnapshot, readServerProgressSnapshot);
  const completion = useMemo(() => parseVisitProgress(snapshot), [snapshot]);
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Nenhum dado é enviado a servidores. O progresso dura apenas esta sessão do navegador.
  const selectedIndex = Math.max(0, courseModule.videos.findIndex((video) => video.videoId === selectedVideoId));
  const currentVideo = courseModule.videos[selectedIndex];
  const selectedComplete = (completion[courseModule.id] ?? []).includes(currentVideo.videoId);
  const completedCount = courseModule.videos.filter((video) => (completion[courseModule.id] ?? []).includes(video.videoId)).length;
  const percentage = Math.round(100 * completedCount / courseModule.videos.length);

  const filteredVideos = useMemo(() => {
    const normalized = normalizeSearch(query.trim());
    return courseModule.videos.map((video, index) => ({ ...video, index })).filter((video) =>
      !normalized || normalizeSearch(`${video.index + 1} ${video.title} ${video.category} ${video.lesson}`).includes(normalized),
    );
  }, [courseModule, query]);

  useEffect(() => {
    if (query.trim() || !scrollRef.current || !selectedRef.current) return;
    const scroll = scrollRef.current;
    const containerRect = scroll.getBoundingClientRect();
    const itemRect = selectedRef.current.getBoundingClientRect();
    if (itemRect.top < containerRect.top || itemRect.bottom > containerRect.bottom) {
      scroll.scrollTop += itemRect.top - containerRect.top - 12;
    }
  }, [selectedVideoId, courseModule.id, query]);

  function selectVideo(videoId: string) {
    onSelectVideo(videoId);
    setNotice("");
  }

  function toggleCompleted() {
    const currentIds = completion[courseModule.id] ?? [];
    const shouldComplete = !currentIds.includes(currentVideo.videoId);
    const nextIds = shouldComplete
      ? [...currentIds, currentVideo.videoId]
      : currentIds.filter((id) => id !== currentVideo.videoId);
    const nextCompletion = { ...completion, [courseModule.id]: nextIds };
    try {
      window.sessionStorage.setItem(VISIT_PROGRESS_KEY, JSON.stringify(nextCompletion));
      window.dispatchEvent(new Event(VISIT_CHANGE_EVENT));
    } catch {
      // Sem acesso ao armazenamento, não há persistência da marcação.
      setNotice("Não foi possível registrar a conclusão neste navegador.");
      return;
    }
    setNotice(shouldComplete ? "Aula marcada como concluída nesta demonstração." : "Marcação de conclusão desfeita.");
    if (shouldComplete && selectedIndex < courseModule.videos.length - 1) {
      onSelectVideo(courseModule.videos[selectedIndex + 1].videoId);
    }
  }

  return (
    <section className={styles.lessonArea} aria-label="Videoaulas gratuitas da Waldemática IA">
      <div className={styles.topNavigation}>
        <button type="button" onClick={onBack} className={styles.backButton}>← Voltar para Minha Trilha</button>
        <div className={styles.moduleSwitch}>
          <label htmlFor="free-demo-module-selector">Trocar módulo:</label>
          <select id="free-demo-module-selector" value={courseModule.id} onChange={(event) => { setQuery(""); setNotice(""); onSelectModule(event.target.value); }}>
            {modules.map((item) => <option key={item.id} value={item.id}>{item.code} · {item.shortTitle}</option>)}
          </select>
        </div>
      </div>

      <div className={styles.layout}>
        <section className={styles.playerCard} aria-label="Player do módulo gratuito">
          <div className={styles.playerMeta}>
            <span>{courseModule.code} · Aula {selectedIndex + 1} de {courseModule.videos.length}</span>
            <span className={styles.category}>{currentVideo.category}</span>
          </div>
          <h1 className={styles.lessonTitle}>{currentVideo.title}</h1>
          <p className={styles.moduleSubtitle}>{courseModule.title}</p>
          <div className={styles.videoFrame}>
            <iframe
              key={currentVideo.videoId}
              src={`https://www.youtube-nocookie.com/embed/${currentVideo.videoId}?rel=0&playsinline=1`}
              title={currentVideo.title}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className={styles.playerControls}>
            <button type="button" className={styles.previousButton} disabled={selectedIndex === 0} onClick={() => selectVideo(courseModule.videos[selectedIndex - 1].videoId)}><Icon name="chevron-left" /> Anterior</button>
            <button type="button" className={selectedComplete ? styles.completedButton : styles.completeButton} onClick={toggleCompleted}><Icon name="check" /> {selectedComplete ? "Aula concluída" : "Concluir aula"}</button>
            <button type="button" className={styles.nextButton} disabled={selectedIndex === courseModule.videos.length - 1} onClick={() => selectVideo(courseModule.videos[selectedIndex + 1].videoId)}>Próxima <Icon name="chevron-right" /></button>
          </div>
          {notice && <p className={styles.notice} role="status">{notice}</p>}
          <div className={styles.aboutLesson}>
            <h2>Sobre esta aula</h2>
            <p>Use os controles do YouTube para ajustar velocidade, legendas, qualidade, volume e tela cheia. Na demonstração, a conclusão é marcada apenas nesta sessão do navegador, sem registro na sua conta ou na plataforma de assinantes.</p>
          </div>
        </section>

        <div className={styles.playlistPane}>
          <aside className={styles.playlist} aria-label={`Playlist do módulo ${courseModule.code}`}>
            <div className={styles.playlistHeader}>
              <div className={styles.playlistHeading}>
                <div>
                  <span className={styles.playlistEyebrow}><Icon name="list" /> MINHA TRILHA</span>
                  <h2>Sua playlist</h2>
                </div>
                <span className={styles.lessonCount}>{courseModule.videos.length} aulas</span>
              </div>
              <div className={styles.progressStats}>
                <span><Icon name="play" size={15} /> Aula {selectedIndex + 1} de {courseModule.videos.length}</span>
                <strong>{completedCount} concluídas · {percentage}%</strong>
              </div>
              <div className={styles.progressTrack} role="progressbar" aria-label="Progresso nesta visita gratuita" aria-valuemin={0} aria-valuemax={courseModule.videos.length} aria-valuenow={completedCount}>
                <div style={{ width: `${percentage}%` }} />
              </div>
              <p>Progresso temporário, apenas nesta visita gratuita.</p>
            </div>

            <div className={styles.searchArea}>
              <div className={styles.searchBox}>
                <Icon name="search" />
                <input ref={searchRef} type="search" value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Buscar aula na playlist" placeholder="Buscar por título ou número..." />
                {query && <button type="button" onClick={() => { setQuery(""); searchRef.current?.focus(); }} aria-label="Limpar busca"><Icon name="close" size={14} /></button>}
              </div>
              <p aria-live="polite">{query.trim() ? `${filteredVideos.length} resultado(s)` : "Selecione uma aula para assistir"}</p>
            </div>

            <div className={styles.lessonList} ref={scrollRef}>
              {filteredVideos.length === 0 ? <div className={styles.noResults}>
                <Icon name="search" size={25} />
                <strong>Nenhuma aula encontrada</strong>
                <button type="button" onClick={() => setQuery("")}>Mostrar todas</button>
              </div> : filteredVideos.map((video) => {
                const isActive = video.videoId === currentVideo.videoId;
                const isComplete = (completion[courseModule.id] ?? []).includes(video.videoId);
                return (
                  <button type="button" key={video.videoId} ref={isActive ? selectedRef : undefined} className={`${styles.lessonItem} ${isActive ? styles.lessonItemActive : ""}`} onClick={() => selectVideo(video.videoId)} aria-current={isActive ? "true" : undefined}>
                    <span className={styles.lessonNumber}>{isActive ? <Icon name="play" size={22} /> : String(video.index + 1).padStart(2, "0")}</span>
                    <span className={styles.lessonCopy}>
                      <strong>{video.title}</strong>
                      <small>Aula {video.lesson} · {video.category}</small>
                      {isComplete && <span className={styles.completedTag}><Icon name="check" size={11} /> Concluída</span>}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className={styles.playlistFooter}><span>Progresso da visita gratuita</span><span className={styles.demoBadge}>DEMONSTRAÇÃO</span></div>
          </aside>
        </div>
      </div>
    </section>
  );
}
