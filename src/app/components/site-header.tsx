import Image from "next/image";
import Link from "next/link";
import styles from "./site-header.module.css";

type SiteHeaderProps = {
  ctaLabel: string;
  ctaHref: string;
  variant?: "blue" | "wine";
};

const BLOG_URL = "https://blog.waldematica.com.br";
const BLOG_SIGNUP_URL = "https://blog.waldematica.com.br/criar-conta/";

export default function SiteHeader({
  ctaLabel,
  ctaHref,
  variant = "blue",
}: SiteHeaderProps) {
  const ctaExternal = /^https?:\/\//.test(ctaHref);

  return (
    <header
      className={`${styles.header} ${
        variant === "wine" ? styles.wine : styles.blue
      }`}
    >
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Waldemática - Início"
        >
          <Image
            src="/logo-waldematica.png"
            alt="Waldemática"
            width={54}
            height={54}
            priority
            className={styles.logo}
          />

          <div className={styles.brandText}>
            <strong>Waldemática</strong>
            <span>Matemática Inteligente</span>
          </div>
        </Link>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          <div className={styles.navPill}>
            <Link href="/#todos-os-cursos">Cursos</Link>
            <Link href="/curso-profmat/">PROFMAT</Link>
            <Link href="/cursos-gratis/">Conteúdos Gratuitos</Link>

            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
        </nav>

        <div className={styles.actions}>
          <a
            href={BLOG_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.blogLead}
          >
            Participe do Blog
          </a>

          {ctaExternal ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.productCta}
            >
              {ctaLabel}
            </a>
          ) : (
            <Link href={ctaHref} className={styles.productCta}>
              {ctaLabel}
            </Link>
          )}

          <details className={styles.mobileMenu}>
            <summary aria-label="Abrir menu">
              <span className={styles.menuIcon} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </summary>

            <div className={styles.mobilePanel}>
              <Link href="/#todos-os-cursos">Cursos</Link>
              <Link href="/curso-profmat/">PROFMAT</Link>
              <Link href="/cursos-gratis/">Conteúdos Gratuitos</Link>

              <a
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>

              <div className={styles.mobileDivider} />

              <a
                href={BLOG_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileBlogLead}
              >
                Participe do Blog
              </a>

              {ctaExternal ? (
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileProductCta}
                >
                  {ctaLabel}
                </a>
              ) : (
                <Link href={ctaHref} className={styles.mobileProductCta}>
                  {ctaLabel}
                </Link>
              )}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
