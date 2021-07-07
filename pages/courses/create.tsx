import { CoursesProvider } from 'src/entities/course/services'
import CoursePage from 'src/views/CoursePage'

export default function CreateCoursePage() {
  return (
    <CoursesProvider>
      <CoursePage />
    </CoursesProvider>
  )
}
