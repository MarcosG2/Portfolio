import { backgroundEntries } from '../data/experience'
import { SectionHeading } from './SectionHeading'
import { useLanguage } from '../i18n/useLanguage'
import { useLocalizedText } from '../hooks/useLocalizedText'

export function Experience() {
  const { t } = useLanguage()
  const lt = useLocalizedText()

  return (
    <section id="experiencia" className="section-block z-10">
      <SectionHeading>{t.experience.title}</SectionHeading>
      <p className="type-caption -mt-10 mb-10 max-w-[70ch]">{t.experience.intro}</p>

      <ol className="relative border-l-2 border-slate-700/90 ml-0.5 space-y-10 list-none">
        {backgroundEntries.map((entry) => (
          <li key={entry.id} className="relative pl-8 sm:pl-10">
            <span
              className="absolute left-0 top-1.5 size-3 -translate-x-1/2 rounded-full bg-blue-500 ring-4 ring-[#0f172a]"
              aria-hidden
            />
            <p className="text-sm font-semibold tabular-nums tracking-normal text-[var(--color-copy-muted)]">
              {entry.periodLabel ? (
                <span>{lt(entry.periodLabel)}</span>
              ) : (
                <time dateTime={entry.period.start}>
                  {entry.period.start}
                  {' — '}
                  {entry.period.end ?? t.status.present}
                </time>
              )}
            </p>
            <h3 className="text-slate-50 font-semibold text-lg mt-2 leading-snug text-balance">
              {lt(entry.title)}
            </h3>
            <p className="type-caption mt-3">{lt(entry.description)}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
