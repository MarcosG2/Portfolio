import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useLanguage } from '../i18n/useLanguage'
import { site } from '../data/site'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const linkClass =
    'inline-flex items-center gap-2 text-[var(--color-copy-muted)] hover:text-slate-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 rounded-sm'

  return (
    <footer className="border-t border-slate-800/90 pt-10 pb-6 mt-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="text-sm text-[var(--color-copy-muted)]">
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
          <a
            href={site.githubPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {t.footer.source}
          </a>
        </nav>
      </div>
      <p className="type-meta mt-6 normal-case tracking-normal font-normal text-[var(--color-meta)]">
        {t.footer.builtWith}
      </p>
    </footer>
  )
}
