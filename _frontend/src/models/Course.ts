export interface Course {
  name: string
  id: string
  description: string
  short_description: string
  language: 'english' | 'spanish'
  skill_level: 'advanced' | 'beginner'
  price: number
  user_id: string
  published: boolean
}
