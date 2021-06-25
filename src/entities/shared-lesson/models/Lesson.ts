export interface Lesson {
  name: string
  id: string
  description: string
  questions: Question[]
  announcements: Announcement[]
  posted_time: string
  last_modified_time: string
  section: string
}

export type Question = {
  question: {
    id: string
    body: string
    author: string
    posted_time: string
  }
  answer: {
    id: string
    body: string
    author: string
    posted_time: string
  }
}

export type Announcement = {
  title: string
  body: string
  posted_time: string
}
