export type Locale = 'es' | 'en'

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      skills: 'Habilidades',
      experience: 'Trayectoria',
      projects: 'Proyectos',
      contact: 'Contacto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      mainNav: 'Navegación principal',
    },
    hero: {
      role: 'Desarrollador Full-Stack',
      bio: 'Desarrollador Full Stack especializado en React en el frontend y Node.js con Express en el backend. Construyo aplicaciones web modernas, escalables y bien estructuradas, con foco en código limpio y soluciones de punta a punta.',
      viewProjects: 'Ver proyectos',
      downloadCv: 'Descargar CV',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    skills: {
      title: 'Habilidades técnicas',
    },
    experience: {
      title: 'Trayectoria',
      intro:
        'Estudiante de la Licenciatura en Sistemas de Información (UNSE) y Desarrollador Full-Stack independiente. Diseño y construyo soluciones web a medida, sistemas de gestión y PWAs, combinando bases académicas sólidas con experiencia práctica en el mercado freelance.',
    },
    projects: {
      title: 'Proyectos',
      moreWork: 'Más trabajo',
      featured: 'Destacado',
      liveDemo: 'Demo en vivo',
      sourceCode: 'Código',
      wip: 'En desarrollo',
      planned: 'Próximamente',
      imagePlaceholder: 'Captura próximamente',
    },
    contact: {
      title: 'Contacto',
      heading: 'Trabajemos juntos',
      body: 'Estoy abierto a nuevas oportunidades profesionales. Si buscas un perfil Full-Stack, tienes una idea de proyecto o quieres conectar sobre tecnología, escríbeme. Responderé lo antes posible.',
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      success: 'Mensaje enviado. ¡Gracias!',
      error: 'No se pudo enviar. Intenta de nuevo o escríbeme por email.',
      mailtoFallback:
        'Configura VITE_FORMSPREE_FORM_ID o contáctame directamente:',
    },
    footer: {
      builtWith: 'Hecho con React y Vite',
      source: 'Código fuente',
      rights: 'Todos los derechos reservados.',
    },
    a11y: {
      skipToContent: 'Saltar al contenido',
    },
    status: {
      present: 'Actualidad',
    },
  },
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      experience: 'Background',
      projects: 'Projects',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      mainNav: 'Main navigation',
    },
    hero: {
      role: 'Full-Stack Developer',
      bio: 'Full Stack developer focused on React on the frontend and Node.js with Express on the backend. I build modern, scalable web apps with clean code and end-to-end solutions.',
      viewProjects: 'View projects',
      downloadCv: 'Download CV',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    skills: {
      title: 'Technical skills',
    },
    experience: {
      title: 'Background',
      intro:
        'Information Systems undergraduate at UNSE and independent Full-Stack developer. I design and build custom web solutions, management systems, and PWAs, combining strong academic foundations with hands-on freelance experience.',
    },
    projects: {
      title: 'Projects',
      moreWork: 'More work',
      featured: 'Featured',
      liveDemo: 'Live demo',
      sourceCode: 'Source',
      wip: 'Work in progress',
      planned: 'Coming soon',
      imagePlaceholder: 'Screenshot coming soon',
    },
    contact: {
      title: 'Contact',
      heading: "Let's work together",
      body: "I'm open to new professional opportunities. Whether you need a Full-Stack developer, have a project idea, or want to connect about tech, reach out. I'll reply as soon as I can.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      success: 'Message sent. Thank you!',
      error: 'Could not send. Try again or email me directly.',
      mailtoFallback: 'Set VITE_FORMSPREE_FORM_ID or contact me directly:',
    },
    footer: {
      builtWith: 'Built with React & Vite',
      source: 'Source code',
      rights: 'All rights reserved.',
    },
    a11y: {
      skipToContent: 'Skip to content',
    },
    status: {
      present: 'Present',
    },
  },
} as const

export type TranslationKeys = typeof translations.es
