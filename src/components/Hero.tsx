import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDownTray } from 'react-icons/hi2'
import { useLanguage } from '../i18n/useLanguage'
import { site } from '../data/site'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="section-block min-h-[80vh] flex flex-col justify-center">
      <div className="hero-enter max-w-3xl">
        <h1 className="type-display">
          {site.name}
          <span className="type-role block mt-3 text-[var(--color-signal)] font-semibold">{t.hero.role}</span>
        </h1>

        <p className="type-lead text-prose mt-8 text-[var(--color-ink-muted)]">{t.hero.bio}</p>

        <div className="flex flex-wrap gap-3 mt-10">
          <a href="#proyectos" className="btn-primary focus-ring">
            {t.hero.viewProjects}
          </a>
          <a href={site.cvPath} download className="btn-secondary focus-ring">
            <HiArrowDownTray className="text-lg" aria-hidden />
            {t.hero.downloadCv}
          </a>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 text-sm font-medium">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-link text-[var(--color-ink-muted)] interactive-accent focus-ring rounded-sm"
          >
            <FaLinkedin className="text-base" aria-hidden />
            {t.hero.linkedin}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-link text-[var(--color-ink-muted)] interactive-accent focus-ring rounded-sm"
          >
            <FaGithub className="text-base" aria-hidden />
            {t.hero.github}
          </a>
        </div>
      </div>
    </section>
  )
}
