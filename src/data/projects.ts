export type ProjectStatus = 'live' | 'wip' | 'planned'

export interface Project {
  id: string
  title: { es: string; en: string }
  description: { es: string; en: string }
  problem: { es: string; en: string }
  approach: { es: string; en: string }
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  liveLinkLabel?: { es: string; en: string }
  image?: string
  imageWidth?: number
  imageHeight?: number
  featured?: boolean
  status: ProjectStatus
}

export const myProjects: Project[] = [
  {
    id: 'football-league',
    title: {
      es: 'ProLeague',
      en: 'ProLeague',
    },
    description: {
      es: 'App full stack para fixture, tabla y playoffs de ligas de fútbol.',
      en: 'Full-stack app for fixtures, standings, and playoffs in football leagues.',
    },
    problem: {
      es: 'Fixture y cruces de playoffs en planillas: errores de fecha y equipos mal emparejados.',
      en: 'Fixtures and playoff pairings in spreadsheets: wrong dates and mismatched teams.',
    },
    approach: {
      es: 'Vue 3 y TypeScript en el cliente; motor de fixture y reglas de playoffs en el dominio; Postgres en Aiven; hosting en Render; Playwright E2E en alta de torneo y cierre de fecha.',
      en: 'Vue 3 and TypeScript on the client; fixture engine and playoff rules in the domain layer; Postgres on Aiven; Render hosting; Playwright E2E for tournament setup and match-week closeout.',
    },
    technologies: ['Vue 3', 'TypeScript', 'Render', 'Aiven'],
    githubUrl: 'https://github.com/MarcosG2/LigaFutbol',
    image: '/projects/ligaWeb.png',
    imageWidth: 769,
    imageHeight: 1024,
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
      es: 'SPA para cargar gastos, etiquetarlos por categoría y filtrar por periodo.',
      en: 'SPA to record expenses, tag them by category, and filter by period.',
    },
    problem: {
      es: 'Gastos repartidos en notas y extractos: no hay totales por categoría ni histórico consultable.',
      en: 'Spending scattered across notes and statements: no category totals or queryable history.',
    },
    approach: {
      es: 'React y TypeScript; Supabase Auth y tablas por usuario; formularios de alta y edición primero; agregaciones en SQL antes de gráficos.',
      en: 'React and TypeScript; Supabase Auth and per-user tables; create and edit forms first; SQL aggregations before charts.',
    },
    technologies: ['React', 'TypeScript', 'Supabase'],
    githubUrl: 'https://github.com/MarcosG2/Gestor-gastos-app',
    image: '/projects/GestorWeb.png',
    imageWidth: 769,
    imageHeight: 1024,
    status: 'wip',
    featured: true,
  },
  {
    id: 'puestify',
    title: {
      es: 'Puestify POS',
      en: 'Puestify POS',
    },
    description: {
      es: 'Contribución full stack en POS comercial en producción: ventas, stock y caja.',
      en: 'Full-stack contribution to a live retail POS: sales, stock, and checkout.',
    },
    problem: {
      es: 'Caja, inventario y precios deben funcionar en el local aunque falle la red.',
      en: 'Checkout, inventory, and pricing must work in-store when the network drops.',
    },
    approach: {
      es: 'Vue 3 en terminal de venta; API Node/Express; IndexedDB para persistir operaciones offline y sincronizar al volver la conexión. Mantenimiento y features junto al desarrollador principal.',
      en: 'Vue 3 on the sales terminal; Node/Express API; IndexedDB to persist offline operations and sync when connectivity returns. Maintenance and features alongside the lead developer.',
    },
    technologies: ['Vue 3', 'Node.js', 'Express', 'IndexedDB'],
    liveUrl: 'https://puestify.com/',
    liveLinkLabel: { es: 'Visitar web', en: 'Visit website' },
    image: '/projects/PuestifyWeb.jpg',
    imageWidth: 769,
    imageHeight: 1024,
    status: 'live',
    featured: true,
  },
]
