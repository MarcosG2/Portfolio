import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { LanguageContext } from './context'
import { translations, type Locale } from './translations'

const STORAGE_KEY = 'portfolio-locale'

function readStoredLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'es' || stored === 'en') return stored
  const browser = navigator.language.toLowerCase()
  return browser.startsWith('es') ? 'es' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale())

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title =
      locale === 'es'
        ? 'Marcos Guerrero | Desarrollador Full-Stack'
        : 'Marcos Guerrero | Full-Stack Developer'
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale, setLocale],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}
