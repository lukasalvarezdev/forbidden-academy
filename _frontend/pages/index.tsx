import Header from '@/components/Header'
import CourseCard from '@/entities/course/components/CourseCard'
import { coursesAPI, Course } from '@/entities/course/services'

export const HomePage = ({ courses }: { courses: Course[] }) => {
  return (
    <div>
      <Header />

      <div
        className="container d-g"
        style={{
          gridGap: '30px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          padding: '30px 0',
        }}
      >
        {courses.map(course => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </div>
  )
}

export default HomePage

export async function getServerSideProps() {
  const [courses] = await coursesAPI.getAllCourses()

  return {
    props: { courses },
  }
}
