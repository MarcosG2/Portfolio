import { useEffect, useState } from 'react'

const sectionIds = ['inicio', 'habilidades', 'experiencia', 'proyectos', 'contacto'] as const

export type SectionId = (typeof sectionIds)[number]

/** Matches fixed navbar + breathing room (see .section-block scroll-margin). */
const SCROLL_OFFSET_PX = 112

/** When the last section is shorter than the viewport, max scroll never passes its top. */
const BOTTOM_SNAP_PX = 64

function sectionFromHash(): SectionId | null {
  const id = window.location.hash.replace('#', '')
  return sectionIds.includes(id as SectionId) ? (id as SectionId) : null
}

function sectionDocumentTop(el: HTMLElement): number {
  return window.scrollY + el.getBoundingClientRect().top
}

function resolveActiveSection(): SectionId {
  if (window.scrollY < 24) {
    return 'inicio'
  }

  const scrollBottom = window.scrollY + window.innerHeight
  const pageBottom = document.documentElement.scrollHeight
  if (pageBottom - scrollBottom <= BOTTOM_SNAP_PX) {
    return sectionIds[sectionIds.length - 1]
  }

  const scrollPosition = window.scrollY + SCROLL_OFFSET_PX
  let current: SectionId = 'inicio'

  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (!el) continue
    if (sectionDocumentTop(el) <= scrollPosition) {
      current = id
    }
  }

  return current
}

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>(() => sectionFromHash() ?? 'inicio')

  useEffect(() => {
    let frame = 0

    const sync = () => {
      frame = 0
      setActive(resolveActiveSection())
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(sync)
    }

    const onHashChange = () => {
      const fromHash = sectionFromHash()
      if (fromHash) setActive(fromHash)
      requestAnimationFrame(sync)
    }

    const onNavClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href')?.slice(1)
      if (id && sectionIds.includes(id as SectionId)) {
        setActive(id as SectionId)
      }
    }

    sync()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('resize', onScroll, { passive: true })
    document.addEventListener('click', onNavClick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('resize', onScroll)
      document.removeEventListener('click', onNavClick)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return active
}
