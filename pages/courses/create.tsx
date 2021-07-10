import { CoursesProvider } from 'src/entities/course/services'
import CoursePage from 'src/views/CoursePage'
import Header from 'src/layouts/Header'

export default function CreateCoursePage() {
  return (
    <>
      <Header />
      <CoursesProvider role="admin">
        <CoursePage />
      </CoursesProvider>
    </>
  )
}
