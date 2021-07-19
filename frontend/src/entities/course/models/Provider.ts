import { Course } from './Course'

export interface CourseProvider {
  course: Course
  updateCourse: (rewrites: Partial<Course>) => Promise<void>
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
  courseFormRef: React.RefObject<HTMLFormElement>
  role: 'user' | 'admin'
}
