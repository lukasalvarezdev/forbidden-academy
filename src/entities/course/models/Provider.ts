import { Course } from './Course'

export interface CourseProvider {
  course: Course
  updateCourse: (rewrites: Partial<Course>) => Promise<void>
}
