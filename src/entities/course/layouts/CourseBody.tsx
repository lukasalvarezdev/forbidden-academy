import { useCourses } from '../services'
import Sections from './Sections'

const CourseBody = () => {
  const { course } = useCourses()

  return (
    <div className="container">
      <div className="info-65 mb-30">
        <p
          contentEditable={true}
          suppressContentEditableWarning={true}
          title="description"
          className="fake-input"
          defaultValue={course?.description}
          style={{
            lineHeight: 1.7,
            color: 'var(--primary-gray)',
            fontWeight: 300,
          }}
        >
          {course?.description}
        </p>
      </div>

      <Sections />
    </div>
  )
}

export default CourseBody
