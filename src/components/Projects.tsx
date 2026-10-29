import { myProjects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'
import { useLanguage } from '../i18n/useLanguage'

export const Projects = () => {
  const { t } = useLanguage()

  const featured = myProjects.filter((p) => p.featured)
  const archive = myProjects.filter((p) => !p.featured)

  return (
    <section id="proyectos" className="section-block relative z-10">
      <SectionHeading>{t.projects.title}</SectionHeading>

      <div className="flex flex-col">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} layout="showcase" />
        ))}
      </div>

      {archive.length > 0 ? (
        <div className="mt-16 pt-4">
          <h3 className="type-meta mb-2">{t.projects.moreWork}</h3>
          {archive.map((project) => (
            <ProjectCard key={project.id} project={project} layout="compact" />
          ))}
        </div>
      ) : null}
    </section>
  )
}
