export interface TimelineEntry {
  /** Displayed on the left, e.g. "2022 — 2023" or "2019". Keep it short. */
  year: string
  /** Organization or school name. */
  title: string
  /** Role, degree or specialty. */
  role: string
  /** Optional one-line summary: what you did / result / what you learned. */
  detail?: string
  /** Optional link (company site, certificate, etc.). */
  url?: string
}

export interface TimelineGroup {
  /** Section label shown above the group, e.g. "Experience". */
  label: string
  entries: TimelineEntry[]
}

// ─────────────────────────────────────────────────────────────
// Order: newest → oldest within each group.
// ⚠️ VERIFY THE YEARS marked /* confirm */ before you deploy.
// ─────────────────────────────────────────────────────────────
export const background: TimelineGroup[] = [
  {
    label: 'Experience',
    entries: [
      {
        year: '2024 — Now',
        title: 'Independent',
        role: 'Ruby on Rails Developer',
        detail: 'Custom backend and full-stack web apps for clients — Rails, Hotwire, React, Inertia.js, TypeScript, PostgreSQL, Kamal 2, RSpec, Minitest, Capybara.',
      },
      {
        year: '2023 — 2024',
        title: 'Komita Inform',
        role: 'Lead Developer',
        detail: 'Led architecture and delivery of production automation systems in Urengoy — MasterSCADA 4D and Beremiz PLC.',
      },
      {
        year: '2021 — 2023',
        title: 'Gazprom Automation',
        role: 'Automation Engineer',
        detail: 'Control systems for industrial facilities — PLC/SCADA, sensor configuration and HMI tooling.',
      },
    ],
  },
  {
    label: 'Education',
    entries: [
      {
        year: '2015 — 2021',
        title: 'MIREA — Russian Technological University',
        role: "M.S. & B.S. — Automation of Technological Processes",
        detail: 'Industrial control systems: PLC programming and SCADA.',
      },
    ],
  },
]
