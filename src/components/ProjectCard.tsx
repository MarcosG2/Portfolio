import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import type { Project } from '../data/projects'
import { skillIcons } from '../data/skills'
import { useLanguage } from '../i18n/useLanguage'
import { useLocalizedText } from '../hooks/useLocalizedText'

type Props = {
  project: Project
  layout?: 'showcase' | 'compact'
  reverse?: boolean
  lead?: boolean
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
        <span className="text-xs font-medium text-[var(--color-signal)] bg-[color-mix(in_srgb,var(--color-signal)_18%,transparent)] px-2 py-0.5 rounded-sm">
          {featuredLabel}
        </span>
      ) : null}
      {statusLabel ? (
        <span className="text-xs font-medium text-[var(--color-ink-muted)] border border-[var(--color-line)] px-2 py-0.5 rounded-sm">
          {statusLabel}
        </span>
      ) : null}
    </>
  )
}

export function ProjectCard({ project, layout = 'showcase', reverse = false, lead = false }: Props) {
  const { t } = useLanguage()
  const lt = useLocalizedText()

  const statusLabel =
    project.status === 'wip'
      ? t.projects.wip
      : project.status === 'planned'
        ? t.projects.planned
        : project.status === 'live'
          ? null
          : null

  const imageSrc = project.image

  const showcaseMediaClass =
    'w-full shrink-0 aspect-[4/3] overflow-hidden rounded-lg border border-[var(--color-line)]'

  const projectImageClass = 'block w-full h-full object-cover object-bottom'

  const media = (
    <div
      className={
        layout === 'compact'
          ? 'hidden sm:block sm:w-44 shrink-0 aspect-[4/3] overflow-hidden rounded-sm border border-[var(--color-line)]'
          : showcaseMediaClass
      }
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          sizes={layout === 'compact' ? '176px' : '(min-width: 1024px) 46vw, 100vw'}
          width={project.imageWidth}
          height={project.imageHeight}
          alt={lt(project.title)}
          className={projectImageClass}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="text-[var(--color-meta)] text-xs px-3 text-center leading-snug flex items-center justify-center h-full">
          {t.projects.imagePlaceholder}
        </span>
      )}
    </div>
  )

  const links = (
    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="touch-link text-sm font-semibold text-[var(--color-signal)] interactive-accent focus-ring rounded-sm"
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
          className="touch-link text-sm font-medium text-[var(--color-ink-muted)] interactive-muted focus-ring rounded-sm"
        >
          <FaGithub aria-hidden />
          {t.projects.sourceCode}
        </a>
      ) : null}
    </div>
  )

  const techList = (
    <ul className="flex flex-wrap gap-2 mt-4 list-none">
      {project.technologies.map((tech) => (
        <li key={tech}>
          <span className="chip text-xs">
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

  const narrative = (
    <div className="mt-5 space-y-4">
      <div>
        <span className="case-label">{t.projects.problemLabel}</span>
        <p className="type-caption text-sm">{lt(project.problem)}</p>
      </div>
      <div>
        <span className="case-label">{t.projects.approachLabel}</span>
        <p className="type-caption text-sm">{lt(project.approach)}</p>
      </div>
    </div>
  )

  if (layout === 'compact') {
    return (
      <article
        id={project.id}
        className="py-8 flex flex-col sm:flex-row gap-6 sm:gap-8 border-b border-[var(--color-line)] last:border-b-0 scroll-mt-28 lg:scroll-mt-24"
      >
        {media}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-[var(--color-ink)] tracking-tight">
              {lt(project.title)}
            </h3>
            <StatusBadges
              project={project}
              featuredLabel={t.projects.featured}
              statusLabel={statusLabel}
            />
          </div>
          <p className="type-caption text-sm">{lt(project.description)}</p>
          {narrative}
          {techList}
          {links}
        </div>
      </article>
    )
  }

  return (
    <article
      id={project.id}
      className={`scroll-mt-28 lg:scroll-mt-24 flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-0 lg:items-start ${
        reverse ? 'lg:[&>*:first-child]:col-start-2 lg:[&>*:last-child]:col-start-1 lg:[&>*:last-child]:row-start-1' : ''
      }`}
    >
      {media}
      <div className="flex flex-col min-w-0 flex-1 lg:pt-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3
            className={`font-semibold text-[var(--color-ink)] text-balance leading-snug tracking-tight ${
              lead ? 'text-2xl sm:text-[1.65rem]' : 'text-xl sm:text-2xl'
            }`}
          >
            {lt(project.title)}
          </h3>
          <StatusBadges
            project={project}
            featuredLabel={t.projects.featured}
            statusLabel={statusLabel}
          />
        </div>
        <p className="type-lead text-[var(--color-ink-muted)] max-w-[58ch]">{lt(project.description)}</p>
        {narrative}
        {techList}
        {links}
      </div>
    </article>
  )
}
