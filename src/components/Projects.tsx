import { myProjects } from '../data/projects'
import type { Project } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'
import { useLanguage } from '../i18n/useLanguage'
import { useLocalizedText } from '../hooks/useLocalizedText'

function projectStatusLabel(
  project: Project,
  labels: { wip: string; planned: string },
): string | null {
  if (project.status === 'wip') return labels.wip
  if (project.status === 'planned') return labels.planned
  return null
}

function ProjectIndex({ projects }: { projects: Project[] }) {
  const { t } = useLanguage()
  const lt = useLocalizedText()

  return (
    <nav className="project-index mb-14" aria-label={t.projects.indexLabel}>
      <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-3 mb-4 min-w-0">
        <p className="type-meta m-0">{t.projects.indexLabel}</p>
        <p className="type-meta m-0 text-[var(--color-meta)] max-w-full">{t.projects.indexHint}</p>
      </div>
      <ol className="project-index-grid list-none p-0 m-0">
        {projects.map((project, index) => {
          const status = projectStatusLabel(project, {
            wip: t.projects.wip,
            planned: t.projects.planned,
          })

          return (
            <li key={project.id}>
              <a
                href={`#${project.id}`}
                className="project-index-link focus-ring rounded-sm min-h-[2.75rem]"
              >
                <span className="project-index-order" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-[var(--color-ink)] tracking-tight">
                    {lt(project.title)}
                  </span>
                  <span className="block type-caption text-sm mt-1 line-clamp-2">
                    {lt(project.description)}
                  </span>
                </span>
                {status ? (
                  <span className="project-index-status">{status}</span>
                ) : (
                  <span className="project-index-status project-index-status-live">
                    {t.projects.statusLive}
                  </span>
                )}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export const Projects = () => {
  const { t } = useLanguage()

  const featured = myProjects.filter((p) => p.featured)
  const archive = myProjects.filter((p) => !p.featured)

  return (
    <section id="proyectos" className="section-block relative z-10 projects-section">
      <SectionHeading>{t.projects.title}</SectionHeading>
      <p className="type-caption text-prose section-intro max-w-[68ch]">{t.projects.intro}</p>

      <ProjectIndex projects={featured} />

      <div className="flex flex-col gap-20 lg:gap-24">
        {featured.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            layout="showcase"
            reverse={index % 2 === 1}
            lead={index === 0}
          />
        ))}
      </div>

      {archive.length > 0 ? (
        <div className="mt-20 pt-8 border-t border-[var(--color-line)]">
          <h3 className="type-meta mb-6">{t.projects.moreWork}</h3>
          {archive.map((project) => (
            <ProjectCard key={project.id} project={project} layout="compact" />
          ))}
        </div>
      ) : null}
    </section>
  )
}
