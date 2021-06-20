export interface Course {
  name: string
  description: string
  short_description: string
  skill_level: 'beginner' | 'intermediate' | 'advanced'
  language: 'spanish' | 'english'
  tags: string[]
  what_you_will_learn: string[]
  lessons: number
  total_hours: number
  price: number
  thumnail_url: string
  id: string | number
  posted_time: string
  last_modified_time: string
  author: {
    name: string
    id: string | number
  }
}
