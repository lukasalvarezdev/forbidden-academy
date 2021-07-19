import { CoursesProvider } from 'src/entities/course/services'
import ManageCourse from 'src/views/ManageCourse'
import Header from 'src/layouts/Header'

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

export async function getServerSideProps() {
  return {
    props: {},
  }
}
