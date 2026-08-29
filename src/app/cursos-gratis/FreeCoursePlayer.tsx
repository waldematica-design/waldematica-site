"use client";

import { useMemo, useState } from "react";
import styles from "./cursos-gratis.module.css";

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

export default function FreeCoursePlayer({ modules }: Props) {
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id);
  const [activeVideoId, setActiveVideoId] = useState(modules[0].videos[0].videoId);

  const activeModule = useMemo(
    () => modules.find((module) => module.id === activeModuleId) ?? modules[0],
    [activeModuleId, modules]
  );

  const activeVideo = useMemo(
    () =>
      activeModule.videos.find((video) => video.videoId === activeVideoId) ??
      activeModule.videos[0],
    [activeModule, activeVideoId]
  );

  function changeModule(module: CourseModule) {
    setActiveModuleId(module.id);
    setActiveVideoId(module.videos[0].videoId);
  }

  const activeIndex = activeModule.videos.findIndex(
    (video) => video.videoId === activeVideo.videoId
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
