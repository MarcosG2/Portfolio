import { useLanguage } from '../i18n/useLanguage'
import type { Locale } from '../i18n/translations'

type Props = {
  locale: Locale
  active: boolean
  onClick: () => void
}

function LangButton({ locale, active, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="lang-btn focus-ring touch-target px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide"
      aria-pressed={active}
    >
      {locale}
    </button>
  )
}

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div
      className="flex items-center gap-1 border border-[var(--color-line)] rounded-md p-0.5 bg-[var(--color-surface)]"
      role="group"
      aria-label="Language"
    >
      <LangButton locale="es" active={locale === 'es'} onClick={() => setLocale('es')} />
      <LangButton locale="en" active={locale === 'en'} onClick={() => setLocale('en')} />
    </div>
  )
}
