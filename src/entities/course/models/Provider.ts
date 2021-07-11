import { Course } from './Course'

export interface CourseProvider {
  course: Course
  updateCourse: (rewrites: Partial<Course>) => Promise<void>
  isEditMode: boolean
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
  courseFormRef: React.RefObject<HTMLFormElement>
  role: 'user' | 'admin'
}
