import { mySkills } from '../data/skills'
import { SectionHeading } from './SectionHeading'
import { useLanguage } from '../i18n/useLanguage'

export const Skills = () => {
  const { t } = useLanguage()

  return (
    <section id="habilidades" className="section-block z-10 overflow-visible">
      <SectionHeading className="pb-1">{t.skills.title}</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mySkills.map((skillGroup) => (
          <div key={skillGroup.category}>
            <h3 className="type-lead font-semibold text-slate-100 mb-3 flex items-center gap-2">
              <skillGroup.icon className="text-xl text-blue-500" aria-hidden />
              {skillGroup.category}
            </h3>

            <ul className="flex flex-wrap gap-2 pl-1 list-none">
              {skillGroup.items.map((item) => (
                <li key={item.name}>
                  <span className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-medium px-3 py-1.5 rounded-md">
                    <item.icon className="text-base" aria-hidden />
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
