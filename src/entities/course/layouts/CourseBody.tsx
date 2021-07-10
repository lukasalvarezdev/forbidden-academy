import * as React from 'react'
import { useRouter } from 'next/router'
import { useCourses } from '../services'
import Sections from 'src/entities/lesson/layouts/Sections'
import EditField from '../components/EditField'

const CourseBody = () => {
  const descriptionRef = React.useRef<HTMLParagraphElement>(null)
  const {
    query: { courseId },
  } = useRouter()
  const { course, isEditMode } = useCourses()

  return (
    <div className="container">
      <div className="info-65 mb-30 relative">
        <EditField fieldRef={descriptionRef} />
        <p
          contentEditable={isEditMode}
          suppressContentEditableWarning
          title="description"
          className="fake-input parse-courses"
          style={{
            lineHeight: 1.7,
            color: 'var(--primary-gray)',
            fontWeight: 300,
          }}
          ref={descriptionRef}
        >
          {courseId ? course.description : ''}
        </p>
      </div>

      <Sections />
    </div>
  )
}

export default CourseBody
