import Link from "next/link";
import styles from "./course-menu.module.css";

type Mode = "desktop" | "mobile";

type CourseLink = {
  label: string;
  href: string;
  detail: string;
};

// O menu aponta para as páginas individuais que já existem.
// Planos com uma página conjunta usam âncoras para cada assinatura.
// Planos ainda sem página detalhada direcionam ao card da home.
const groups: { title: string; courses: CourseLink[] }[] = [
  {
    title: "ENEM e vestibulares",
    courses: [
      { label: "Extensivo", href: "/extensivo/", detail: "12 meses · Formação completa" },
      { label: "Semiextensivo", href: "/curso-semiextensivo/", detail: "6 meses · Formação completa" },
      { label: "Plano ENEM", href: "/plano-enem/", detail: "9 meses · Foco no ENEM" },
    ],
  },
  {
    title: "Estude no seu ritmo",
    courses: [
      { label: "Padawan 3", href: "/padawan/#padawan-3", detail: "3 meses · Estudos direcionados" },
      { label: "Padawan 1", href: "/padawan/#padawan-1", detail: "1 mês · Assuntos específicos" },
    ],
  },
  {
    title: "Para professores",
    courses: [
      { label: "PROFMAT / ENA", href: "/curso-profmat/", detail: "6 meses · Preparação para o ENA" },
      { label: "PROFMAT Completo", href: "/#plano-profmat_completo", detail: "9 meses · Conteúdo ampliado" },
    ],
  },
];

export default function CourseMenu({ mode }: { mode: Mode }) {
  return (
    <details className={`${styles.menu} ${mode === "desktop" ? styles.desktop : styles.mobile}`}>
      <summary className={styles.trigger}>
        Cursos
        <svg
          className={styles.chevron}
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="m4 6 4 4 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <div className={styles.panel}>
        {groups.map((group) => (
          <div key={group.title} className={styles.group}>
            <p className={styles.groupTitle}>{group.title}</p>
            {group.courses.map((course) => (
              <Link key={course.label} href={course.href} className={styles.course}>
                <span className={styles.courseName}>{course.label}</span>
                <span className={styles.courseDetail}>{course.detail}</span>
              </Link>
            ))}
          </div>
        ))}
        <Link className={styles.allPlans} href="/#todos-os-cursos">
          Ver todos os planos <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </details>
  );
}
