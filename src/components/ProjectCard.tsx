import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import type { Project } from '../data/projects'
import { skillIcons } from '../data/skills'
import { useLanguage } from '../i18n/useLanguage'
import { useLocalizedText } from '../hooks/useLocalizedText'

type Props = {
  project: Project
  layout?: 'showcase' | 'compact'
}

function StatusBadges({
  project,
  featuredLabel,
  statusLabel,
}: {
  project: Project
  featuredLabel: string
  statusLabel: string | null
}) {
  return (
    <>
      {project.featured ? (
        <span className="text-[10px] uppercase tracking-wider font-bold text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded">
          {featuredLabel}
        </span>
      ) : null}
      {statusLabel ? (
        <span className="text-[10px] uppercase tracking-wider font-bold text-amber-300/90 bg-amber-500/15 px-2 py-0.5 rounded">
          {statusLabel}
        </span>
      ) : null}
    </>
  )
}

export function ProjectCard({ project, layout = 'showcase' }: Props) {
  const { t } = useLanguage()
  const lt = useLocalizedText()

  const statusLabel =
    project.status === 'wip'
      ? t.projects.wip
      : project.status === 'planned'
        ? t.projects.planned
        : null

  const imageSrc = project.image

  const showcaseMediaClass =
    'w-full lg:w-[48%] shrink-0 aspect-[16/10] bg-slate-900/80 overflow-hidden border border-slate-700/80 rounded-lg'

  const projectImageClass = 'w-full h-full object-cover object-top'

  const media = (
    <div
      className={
        layout === 'compact'
          ? 'hidden sm:block sm:w-40 shrink-0 aspect-[4/3] bg-slate-900/80 rounded-lg overflow-hidden border border-slate-700/80'
          : showcaseMediaClass
      }
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          sizes={layout === 'compact' ? '160px' : '(min-width: 1024px) 46vw, 100vw'}
          width={project.imageWidth}
          height={project.imageHeight}
          alt={lt(project.title)}
          className={projectImageClass}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="text-[#64748b] text-xs px-3 text-center leading-snug">
          {t.projects.imagePlaceholder}
        </span>
      )}
    </div>
  )

  const links = (
    <div className="flex flex-wrap gap-4 mt-4">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 rounded-sm"
        >
          <FaExternalLinkAlt aria-hidden />
          {project.liveLinkLabel ? lt(project.liveLinkLabel) : t.projects.liveDemo}
        </a>
      ) : null}
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#7da3d4] hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 rounded-sm"
        >
          <FaGithub aria-hidden />
          {t.projects.sourceCode}
        </a>
      ) : null}
    </div>
  )

  const techList = (
    <ul className="flex flex-wrap gap-2 mt-3 list-none">
      {project.technologies.map((tech) => (
        <li key={tech}>
          <span className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-md">
            {skillIcons[tech]
              ? React.createElement(skillIcons[tech], {
                  className: 'text-sm',
                  'aria-hidden': true,
                })
              : null}
            {tech}
          </span>
        </li>
      ))}
    </ul>
  )

  if (layout === 'compact') {
    return (
      <article className="py-8 flex flex-col sm:flex-row gap-6 sm:gap-8 border-b border-slate-800 last:border-b-0">
        {media}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-slate-100">{lt(project.title)}</h3>
            <StatusBadges
              project={project}
              featuredLabel={t.projects.featured}
              statusLabel={statusLabel}
            />
          </div>
          <p className="type-caption text-sm">{lt(project.description)}</p>
          {techList}
          {links}
        </div>
      </article>
    )
  }

  return (
    <article className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-10 pb-12 border-b border-slate-800/80 last:border-b-0 last:pb-0">
      {media}
      <div className="flex flex-col justify-center min-w-0 flex-1 py-1">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-slate-50 text-balance leading-snug">
            {lt(project.title)}
          </h3>
          <StatusBadges
            project={project}
            featuredLabel={t.projects.featured}
            statusLabel={statusLabel}
          />
        </div>
        <p className="type-caption">{lt(project.description)}</p>
        {techList}
        {links}
      </div>
    </article>
  )
}
