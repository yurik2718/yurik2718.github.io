export interface Build {
  title: string
  description: string
  url?: string
  icon: string
  logo?: string
  cover?: string
  status: 'active' | 'soon' | 'paused' | 'completed' | 'archived'
  kind: 'business' | 'oss' | 'media' | 'community'
  progress: number
  position: number
  stack?: string[]
  startedOn?: string
  finishedOn?: string
}

export const kindLabel: Record<string, string> = {
  business: 'business',
  oss: 'open source',
  media: 'media',
  community: 'community',
}

export const builds: Build[] = [
  {
    title: 'industrialPROFI.com',
    description: 'Industrial equipment and professional tooling platform. Full-cycle product catalog, procurement automation, and dealer network management.',
    url: 'https://industrialprofi.com',
    icon: 'arrow-right',
    status: 'active',
    kind: 'business',
    stack: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Docker'],
    progress: 75,
    position: 1,
    startedOn: '2025-06-01',
  },
  {
    title: 'Fieldnotes',
    description: 'Personal publishing platform. Essays, travel photography, reading log, project documentation. Built with Astro 6 and a cinematic dark aesthetic.',
    url: 'https://github.com/YurikOnRails/yurikonrails.github.io',
    icon: 'arrow-right',
    status: 'active',
    kind: 'oss',
    stack: ['Astro', 'Tailwind CSS', 'TypeScript', 'MapLibre'],
    progress: 40,
    position: 2,
    startedOn: '2026-03-01',
  },
  {
    title: 'Iron Concept',
    description: 'Concept landing page for an industrial equipment brand. Clean, modern design built with HTML, CSS, and JavaScript.',
    url: 'https://github.com/YurikOnRails/iron-concept',
    icon: 'arrow-right',
    status: 'active',
    kind: 'oss',
    stack: ['HTML', 'CSS', 'JavaScript'],
    progress: 7,
    position: 3,
  },
]
