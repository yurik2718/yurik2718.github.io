export interface Profile {
  name: string
  bio: string
  avatar: string
  location: string
  email?: string
  social: {
    github?: string
    twitter?: string
    telegram?: string
  }
}

export const profile: Profile = {
  name: 'Andrey Yurik',
  bio: 'Ruby on Rails engineer with a background in industrial automation. Building reliable backend software. Learning Rust.',
  avatar: '/avatar.jpg',
  location: '',
  social: {
    github: 'https://github.com/yurik2718',
    telegram: 'https://t.me/industrialprofi',
  },
}
