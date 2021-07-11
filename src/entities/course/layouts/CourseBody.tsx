import * as React from 'react'
import { useRouter } from 'next/router'
import { useCourses } from '../services'
import Sections from 'src/entities/lesson/layouts/Sections'
import EditField from '../components/EditField'
import styled from 'styled-components'

const CourseBody = () => {
  const descriptionRef = React.useRef<HTMLParagraphElement>(null)
  const {
    query: { courseId },
  } = useRouter()
  const { course, isEditMode } = useCourses()

  return (
    <StyledCourseBody className="container">
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
    </StyledCourseBody>
  )
}

export default CourseBody

const StyledCourseBody = styled.div`
  @media screen and (max-width: 480px) {
    margin-top: 3rem;
  }
`
