export interface Course {
  title: string
  description: string
  short_description: string
  skill_level: 'beginner' | 'intermediate' | 'advanced'
  language: 'spanish' | 'english'
  tags: string[]
  what_you_will_learn: string[]
  lessons: number
  price: number
  id: string
  author: {
    name: string
    id: string
  }
}
