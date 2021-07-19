import * as React from 'react'
import { useCourses } from '../services'
import styled from 'styled-components'
import SectionsList from 'src/entities/lesson/components/SectionsList'

const CourseBody = () => {
  const { course } = useCourses()

  return (
    <StyledCourseBody className="container">
      <div className="info-65 mb-30 relative">
        <p
          className="fake-input parse-courses"
          style={{
            lineHeight: 1.7,
            color: 'var(--primary-gray)',
            fontWeight: 300,
          }}
        >
          {course.description}
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

  @media screen and (max-width: 1200px) {
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
