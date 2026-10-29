export const site = {
  name: 'Marcos Guerrero',
  linkedin: 'https://www.linkedin.com/in/marcos-guerrero-251183222/',
  github: 'https://github.com/MarcosG2',
  githubPortfolio: 'https://github.com/MarcosG2/mi-cv-react',
  cvPath: '/cv-marcos-guerrero.pdf',
  formspreeFormId:
    (import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined)?.trim() || 'xrppkvvd',
} as const
