export interface BackgroundEntry {
  id: string
  period: { start: string; end?: string }
  /** When set, shown instead of "start — end/present". */
  periodLabel?: { es: string; en: string }
  title: { es: string; en: string }
  description: { es: string; en: string }
}

export const backgroundEntries: BackgroundEntry[] = [
  {
    id: 'freelance-infra',
    period: { start: '2023' },
    title: {
      es: 'Desarrollo freelance e infraestructura',
      en: 'Freelance development & infrastructure',
    },
    description: {
      es: 'Trabajo con clientes reales a través de Workana y SoyFreelance: sistemas de gestión, PWAs y sitios a medida. Despliego en la nube (Render, bases gestionadas) y aplico buenas prácticas de arquitectura aprendidas en la universidad.',
      en: 'Real client work via Workana and SoyFreelance: management systems, PWAs, and custom sites. Cloud deployment (Render, managed databases) with architecture practices from my degree.',
    },
  },
  {
    id: 'unse-degree',
    period: { start: '2022' },
    periodLabel: {
      es: 'Actualmente en curso',
      en: 'Currently in progress',
    },
    title: {
      es: 'Licenciatura en Sistemas de Información (UNSE)',
      en: 'B.S. in Information Systems (UNSE)',
    },
    description: {
      es: 'Formación en ingeniería de software, bases de datos y redes. Integro lo aprendido en clase con proyectos freelance y personales full-stack.',
      en: 'Coursework in software engineering, databases, and networks. I connect classroom learning with freelance and personal full-stack projects.',
    },
  },
]
