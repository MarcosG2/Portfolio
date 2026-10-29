import { createContext } from 'react'
import { translations, type Locale } from './translations'

export type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (typeof translations)[Locale]
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
