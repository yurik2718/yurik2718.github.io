export interface SkillCategory {
  label: string
  skills: string[]
}

export interface SkillSection {
  title: string
  categories: SkillCategory[]
}

export const skillSections: SkillSection[] = [
  {
    title: 'Software Engineering',
    categories: [
      { label: 'Backend',    skills: ['Ruby', 'Ruby on Rails', 'Solid Queue'] },
      { label: 'Frontend',   skills: ['Hotwire', 'Stimulus', 'React', 'TypeScript', 'Inertia.js', 'Tailwind CSS'] },
      { label: 'Database',   skills: ['PostgreSQL', 'SQLite'] },
      { label: 'DevOps',     skills: ['Docker', 'Git', 'Linux', 'Kamal', 'Astra Linux'] },
      { label: 'Testing',    skills: ['RSpec', 'Minitest', 'Capybara'] },
      { label: 'Exploring',  skills: ['Rust'] },
    ],
  },
  {
    title: 'Industrial Automation',
    categories: [
      { label: 'Languages',   skills: ['Structured Text', 'Function Block Diagram'] },
      { label: 'Platforms',   skills: ['CODESYS', 'Beremiz PLC', 'Unimod', 'Weintek EasyBuilder'] },
      { label: 'Protocols',   skills: ['Modbus TCP/RTU', 'OPC UA'] },
      { label: 'Networking',  skills: ['TCP/IP', 'Ethernet', 'RS-485 / RS-232'] },
      { label: 'HMI / SCADA', skills: ['MasterSCADA 4D', 'Alpha Platform', 'Weintek HMI'] },
    ],
  },
]
