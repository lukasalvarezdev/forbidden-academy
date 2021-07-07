import { useRouter } from 'next/router'
import { useCourses } from '../services'
import Sections from 'src/entities/lesson/layouts/Sections'

const CourseBody = () => {
  const {
    query: { courseId },
  } = useRouter()
  const { course } = useCourses()

  return (
    <div className="container">
      <div className="info-65 mb-30">
        <p
          contentEditable
          suppressContentEditableWarning
          title="description"
          className="fake-input parse-courses"
          style={{
            lineHeight: 1.7,
            color: 'var(--primary-gray)',
            fontWeight: 300,
          }}
        >
          {courseId ? course?.description : ''}
        </p>
      </div>

      <Sections />
    </div>
  )
}

export default CourseBody
