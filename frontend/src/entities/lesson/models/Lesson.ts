export interface Section {
  name: string
  id: string
  course_id: string
}

export interface Lesson {
  name: string
  id: string
  description: string
  section_id: string
}
