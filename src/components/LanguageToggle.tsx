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
      className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
        active
          ? 'bg-blue-600/30 text-blue-300'
          : 'text-slate-400 hover:text-slate-200'
      }`}
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
      className="flex items-center gap-1 border border-slate-700 rounded-md p-0.5"
      role="group"
      aria-label="Language"
    >
      <LangButton locale="es" active={locale === 'es'} onClick={() => setLocale('es')} />
      <LangButton locale="en" active={locale === 'en'} onClick={() => setLocale('en')} />
    </div>
  )
}
