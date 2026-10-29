import { useLanguage } from '../i18n/useLanguage'
import type { Locale } from '../i18n/translations'

type LocalizedText = { es: string; en: string }

export function useLocalizedText() {
  const { locale } = useLanguage()
  return (text: LocalizedText) => text[locale as Locale]
}
