import CoursesProvider from 'src/entities/course/store/context'
import CourseView from 'src/views/CoursePage'

export default function CoursePage() {
  return (
    <CoursesProvider>
      <CourseView />
    </CoursesProvider>
  )
}
