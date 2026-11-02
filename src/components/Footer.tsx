import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useLanguage } from '../i18n/useLanguage'
import { site } from '../data/site'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const linkClass =
    'touch-link inline-flex items-center gap-2 text-[var(--color-ink-muted)] interactive-muted focus-ring rounded-sm'

  return (
    <footer className="border-t border-[var(--color-line)] pt-10 pb-6 mt-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="text-sm text-[var(--color-ink-muted)]">
          © {year} {site.name}. {t.footer.rights}
        </p>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <FaLinkedin aria-hidden />
            LinkedIn
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <FaGithub aria-hidden />
            GitHub
          </a>
          <a href={site.githubPortfolio} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {t.footer.source}
          </a>
        </nav>
      </div>
      <p className="type-meta mt-6 normal-case tracking-normal font-normal">{t.footer.builtWith}</p>
    </footer>
  )
}
