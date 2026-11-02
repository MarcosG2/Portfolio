import { useEffect, useState } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { LanguageToggle } from './LanguageToggle'
import { useLanguage } from '../i18n/useLanguage'
import { useActiveSection } from '../hooks/useActiveSection'

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

  const navLinkClass = 'site-header-nav-link focus-ring touch-link'

  const closeMenu = () => setOpen(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="site-header">
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4"
        aria-label={t.nav.mainNav}
      >
        <a href="#inicio" className="site-header-logo focus-ring touch-target" onClick={closeMenu}>
          MG
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ id, hash, labelKey }) => (
            <li key={id}>
              <a
                href={hash}
                className={navLinkClass}
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
            className="site-header-menu-btn flex md:hidden icon-btn focus-ring touch-target"
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
        <div id="mobile-nav" className="mobile-nav-panel md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map(({ id, hash, labelKey }) => (
              <li key={id}>
                <a
                  href={hash}
                  className={navLinkClass}
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
