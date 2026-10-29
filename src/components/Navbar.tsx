import { useState } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { LanguageToggle } from './LanguageToggle'
import { useLanguage } from '../i18n/useLanguage'
import { useActiveSection, type SectionId } from '../hooks/useActiveSection'

const links = [
  { id: 'inicio' as const, hash: '#inicio', labelKey: 'home' as const },
  { id: 'habilidades' as const, hash: '#habilidades', labelKey: 'skills' as const },
  { id: 'experiencia' as const, hash: '#experiencia', labelKey: 'experience' as const },
  { id: 'proyectos' as const, hash: '#proyectos', labelKey: 'projects' as const },
  { id: 'contacto' as const, hash: '#contacto', labelKey: 'contact' as const },
]

export function Navbar() {
  const { t } = useLanguage()
  const active = useActiveSection()
  const [open, setOpen] = useState(false)

  const linkClass = (id: SectionId) =>
    `transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 rounded-sm ${
      active === id ? 'text-blue-400' : 'text-slate-300 hover:text-blue-400'
    }`

  const closeMenu = () => setOpen(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-sm border-b border-slate-800/90">
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4"
        aria-label={t.nav.mainNav}
      >
        <a
          href="#inicio"
          className="text-sm font-semibold text-slate-100 tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 rounded-sm"
          onClick={closeMenu}
        >
          MG
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(({ id, hash, labelKey }) => (
            <li key={id}>
              <a
                href={hash}
                className={linkClass(id)}
                aria-current={active === id ? 'page' : undefined}
              >
                {t.nav[labelKey]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            type="button"
            className="md:hidden p-2 text-slate-200 rounded-md hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t.nav.closeMenu : t.nav.openMenu}</span>
            {open ? <HiXMark className="text-xl" aria-hidden /> : <HiBars3 className="text-xl" aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-md px-6 py-4"
        >
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {links.map(({ id, hash, labelKey }) => (
              <li key={id}>
                <a
                  href={hash}
                  className={linkClass(id)}
                  aria-current={active === id ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {t.nav[labelKey]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
