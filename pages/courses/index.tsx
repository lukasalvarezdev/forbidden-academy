import Header from 'src/layouts/Header'
import CourseCard from 'src/entities/course/ui/CourseCard'

// TODO: SEARCH PAGE HERE
export default function CoursesListPage() {
  return (
    <>
      <Header />

      <div
        className="container d-g"
        style={{
          gridGap: '30px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          padding: '30px 0',
        }}
      >
        {Array.from(Array(13)).map((_, index) => (
          <CourseCard course={courseExample} key={index} />
        ))}
      </div>
    </>
  )
}

const courseExample = {
  name: 'The complete guide NodeJS course ',
  description:
    'In this learning journey, you will find out how to be more digital and how to digitize your current skills.',
  author: 'Lukas Alvarez',
  rating: 4,
  id: '12334',
  price: 122,
}
