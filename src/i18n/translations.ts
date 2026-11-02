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
      bio: 'Desarrollador Full-Stack enfocado en construir aplicaciones web eficientes, escalables y orientadas a producto. Especializado en el ecosistema JavaScript/TypeScript (React, Node.js, Express) y arquitectura de datos (PostgreSQL, Supabase, MySQL).',
      stackLabel: 'Stack',
      focusLabel: 'Enfoque',
      focusLine: 'Sistemas operativos: POS, torneos y finanzas personales.',
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
        'Proyectos propios y encargos freelance desde 2022 (Workana, SoyFreelance). Cubro frontend, backend y puesta en producción en Render y servicios cloud.',
    },
    projects: {
      title: 'Proyectos',
      intro:
        'Tres productos con dominios distintos. Abajo: problema de negocio, stack elegido y cómo se implementó.',
      indexLabel: 'Índice',
      indexHint: 'Saltar al caso',
      moreWork: 'Más trabajo',
      problemLabel: 'Problema',
      approachLabel: 'Enfoque',
      liveDemo: 'Demo en vivo',
      sourceCode: 'Código',
      wip: 'En desarrollo',
      planned: 'Próximamente',
      statusLive: 'En producción',
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
      builtWith: 'Hecho con React + Vite',
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
      bio: 'Full-Stack developer focused on building efficient, scalable, product-oriented web applications. Specialized in the JavaScript/TypeScript ecosystem (React, Node.js, Express) and data architecture (PostgreSQL, Supabase, MySQL).',
      stackLabel: 'Stack',
      focusLabel: 'Focus',
      focusLine: 'Operational systems: POS, tournaments, and personal finance.',
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
        'Personal projects and freelance work since 2022 (Workana, SoyFreelance). I cover frontend, backend, and production deployment on Render and cloud services.',
    },
    projects: {
      title: 'Projects',
      intro:
        'Three products in different domains. Each block lists the business problem, the stack, and how it was built.',
      indexLabel: 'Index',
      indexHint: 'Jump to case',
      moreWork: 'More work',
      problemLabel: 'Problem',
      approachLabel: 'Approach',
      liveDemo: 'Live demo',
      sourceCode: 'Source',
      wip: 'Work in progress',
      planned: 'Coming soon',
      statusLive: 'In production',
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
      builtWith: 'Built with React + Vite',
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
