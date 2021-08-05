import { CoursesProvider } from 'src/entities/course/services'
import Header from 'src/components/Header'
import ManageCourse from 'src/entities/course/views/ManageCourse'

export default function ManageCoursePage() {
  return (
    <>
      <Header />
      <CoursesProvider role="admin">
        <ManageCourse />
      </CoursesProvider>
    </>
  )
}
