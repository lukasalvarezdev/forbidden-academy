import * as React from 'react'
import { useRouter } from 'next/router'
import { useCourses } from '../services'
import EditField from '../components/EditField'
import styled from 'styled-components'
import SectionsList from 'src/entities/lesson/components/SectionsList'

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

      <div className="sections-list p-20 info-65 border-radius">
        <SectionsList />
      </div>
    </StyledCourseBody>
  )
}

export default CourseBody

const StyledCourseBody = styled.div`
  .sections-list {
    background-color: var(--medium-blue);
  }

  @media screen and (max-width: 480px) {
    margin-top: 3rem;

    .sections-list {
      background-color: transparent;
      padding: 0;

      .section-info {
        border-radius: 4px;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.158);

        h3 {
          font-size: 16px;
        }
      }

      .lessons > div {
        border-radius: 4px;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.158);

        h4 {
          font-size: 14px;
        }
      }
    }
  }
`
