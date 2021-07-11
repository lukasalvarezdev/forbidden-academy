import { CoursesProvider } from 'src/entities/course/services'
import dynamic from 'next/dynamic'
const CourseView = dynamic(() => import('src/views/CoursePage'), {
  ssr: false,
})
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

export async function getServerSideProps() {
  return {
    props: {},
  }
}
