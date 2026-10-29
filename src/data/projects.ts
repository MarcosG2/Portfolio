export type ProjectStatus = 'live' | 'wip' | 'planned'

export interface Project {
  id: string
  title: { es: string; en: string }
  description: { es: string; en: string }
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  liveLinkLabel?: { es: string; en: string }
  image?: string
  featured?: boolean
  status: ProjectStatus
}

export const myProjects: Project[] = [
  {
    id: 'football-league',
    title: {
      es: 'Liga de fútbol',
      en: 'Football league app',
    },
    description: {
      es: 'Aplicación full-stack para gestionar torneos. Incluye automatización de fixture, manejo de fases de playoffs y testing end-to-end con Playwright.',
      en: 'Full-stack app to run tournaments: automated fixtures, playoff stages, and end-to-end testing with Playwright.',
    },
    technologies: ['Vue 3', 'TypeScript', 'Render', 'Aiven'],
    githubUrl: 'https://github.com/MarcosG2/LigaFutbol',
    image: '/projects/football-league.png',
    status: 'wip',
    featured: true,
  },
  {
    id: 'expense-manager',
    title: {
      es: 'Gestor de gastos',
      en: 'Expense manager',
    },
    description: {
      es: 'Herramienta para registrar y categorizar gastos personales. Funcionalidades core listas; puliendo UX y reportes.',
      en: 'Tool to track and categorize personal expenses. Core features done; refining UX and reporting.',
    },
    technologies: ['React', 'TypeScript', 'Supabase'],
    githubUrl: 'https://github.com/MarcosG2/Gestor-gastos-app',
    image: '/projects/expense-manager.svg',
    status: 'wip',
    featured: true,
  },
  {
    id: 'puestify',
    title: {
      es: 'Puestify - Sistema POS',
      en: 'Puestify — POS system',
    },
    description: {
      es: 'Colaboración técnica en un sistema POS y de gestión comercial en producción. Contribuyo con mejoras, mantenimiento y ajustes específicos en el código full-stack trabajando en conjunto con el desarrollador principal.',
      en: 'Technical collaboration on a production POS and commercial management system. I contribute improvements, maintenance, and targeted full-stack work alongside the lead developer.',
    },
    technologies: ['Vue 3', 'Node.js', 'Express', 'IndexedDB'],
    liveUrl: 'https://puestify.com/',
    liveLinkLabel: { es: 'Visitar web', en: 'Visit website' },
    image: '/projects/puestify.png',
    status: 'live',
    featured: true,
  },
]
