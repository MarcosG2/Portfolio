import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDownTray } from 'react-icons/hi2'
import { useLanguage } from '../i18n/useLanguage'
import { site } from '../data/site'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="section-block min-h-[80vh] flex flex-col justify-center">
      <div className="hero-enter max-w-3xl">
        <h1 className="type-display text-white">
          {site.name}
          <span className="type-role block mt-3 text-[#a2c4fd] font-semibold">{t.hero.role}</span>
        </h1>

        <p className="type-lead text-prose mt-8 text-[#87aada]">{t.hero.bio}</p>

        <div className="flex flex-wrap gap-3 mt-10">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-5 py-2.5 rounded-md shadow-[0_4px_24px_-4px_rgba(37,99,235,0.55)] transition-[background-color,box-shadow] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href={site.cvPath}
            download
            className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-100 font-medium text-sm px-5 py-2.5 rounded-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            <HiArrowDownTray className="text-lg" aria-hidden />
            {t.hero.downloadCv}
          </a>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 text-sm font-medium">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-copy-muted)] hover:text-blue-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 rounded-sm"
          >
            <FaLinkedin className="text-base" aria-hidden />
            {t.hero.linkedin}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-copy-muted)] hover:text-slate-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 rounded-sm"
          >
            <FaGithub className="text-base" aria-hidden />
            {t.hero.github}
          </a>
        </div>
      </div>
    </section>
  )
}
