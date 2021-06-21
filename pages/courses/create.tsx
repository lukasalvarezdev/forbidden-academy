import CoursesProvider from 'src/entities/course/store/context'
import CoursePage from 'src/entities/course/views/CoursePage'

export default function CreateCoursePage() {
  return (
    <CoursesProvider>
      <CoursePage />
    </CoursesProvider>
  )
}
