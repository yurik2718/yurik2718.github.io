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
    title: 'iron-concept',
    description: 'Open-source SCADA & industrial automation platform. Rust edge agent, Phoenix LiveView HMI, TimescaleDB historian, NATS unified namespace. Rails-grade developer experience for factories and integrators.',
    url: 'https://github.com/yurik2718/iron-concept',
    icon: 'arrow-right',
    status: 'active',
    kind: 'oss',
    stack: ['Rust', 'Phoenix LiveView', 'TimescaleDB', 'NATS'],
    progress: 15,
    position: 1,
  },
  {
    title: 'industrialprofi',
    description: 'Career roadmap platform for industrial automation specialists. Standards-based learning paths (ГОСТ/НАКС). Vanilla Rails 8 + Hotwire, zero build step.',
    url: 'https://github.com/yurik2718/industrialprofi',
    icon: 'arrow-right',
    status: 'active',
    kind: 'oss',
    stack: ['Ruby on Rails 8', 'Hotwire', 'SQLite'],
    progress: 40,
    position: 2,
  },
  {
    title: 'spaceforedu-app',
    description: 'Case-management web app for international students navigating document homologation (equivalency recognition) in Spain.',
    url: 'https://github.com/yurik2718/spaceforedu-app',
    icon: 'arrow-right',
    status: 'active',
    kind: 'oss',
    stack: ['Ruby on Rails', 'PostgreSQL'],
    progress: 60,
    position: 3,
  },
  {
    title: 'heartwood',
    description: 'Open-source platform for building and preserving family trees. DHH and Basecamp style — no JavaScript frameworks, just Rails doing what it does best.',
    url: 'https://github.com/yurik2718/heartwood',
    icon: 'arrow-right',
    status: 'active',
    kind: 'oss',
    stack: ['Ruby on Rails', 'Hotwire'],
    progress: 25,
    position: 4,
  },
  {
    title: 'fieldnotes',
    description: 'Personal site & digital garden. Rails 8.1, Ruby 4, SQLite with Solid Queue / Solid Cache / Solid Cable. Self-hosted via Kamal 2. No Redis, no PaaS, no third-party requests.',
    url: 'https://github.com/yurik2718/fieldnotes',
    icon: 'arrow-right',
    status: 'active',
    kind: 'oss',
    stack: ['Ruby on Rails 8.1', 'Ruby 4', 'SQLite', 'Solid Queue', 'Kamal 2'],
    progress: 55,
    position: 5,
  },
  {
    title: 'Gazprom Configurator',
    description: 'Industrial automation tool built during my time at Gazprom. Converts sensor configurations from Excel to OMX format for Alpha.DevStudio, with validation and HMI mnemonic diagram generation.',
    url: 'https://github.com/Fr0stFree/Gazprom-YurikConfigurator',
    icon: 'arrow-right',
    status: 'completed',
    kind: 'business',
    stack: ['Python', 'PySimpleGUI', 'Alpha.DevStudio'],
    progress: 100,
    position: 6,
    finishedOn: '2023-12-01',
  },
]
