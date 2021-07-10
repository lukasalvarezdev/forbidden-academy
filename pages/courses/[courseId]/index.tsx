import { CoursesProvider } from 'src/entities/course/services'
import CourseView from 'src/views/CoursePage'
import Header from 'src/layouts/Header'

export default function CoursePage() {
  return (
    <>
      <Header />
      <CoursesProvider role="admin">
        <CourseView />
      </CoursesProvider>
    </>
  )
}
