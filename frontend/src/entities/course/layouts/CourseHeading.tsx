import * as React from 'react'
import { useCourses } from '../services'
import styled from 'styled-components'

const CourseHeading = () => {
  const { course } = useCourses()

  return (
    <CourseHeadingContainer className="bg-primary-black fc-white mb-30">
      <div className="container">
        <div className="info-65" id="course-info">
          <div className="mb-20 relative">
            <h1 className="fake-input parse-courses">{course.name}</h1>
          </div>
          <div className="relative">
            <p className="mb-20 fake-input parse-courses">{course.short_description}</p>
          </div>
          <div>
            <div className="relative">
              <p>{course.language}</p>
            </div>
          </div>
        </div>
      </div>
    </CourseHeadingContainer>
  )
}

export default CourseHeading

const CourseHeadingContainer = styled.div`
  padding: 4rem 0;

  .fake-input {
    color: white;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
  }

  select {
    font-size: 1.4rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    outline: none;

    option {
      background-color: var(--primary-black);
    }
  }

  @media screen and (max-width: 1200px) {
    background-color: transparent;
    color: var(--primary-black);
    margin: 3rem auto;
    padding: 0;

    .fake-input {
      color: var(--primary-black);
    }

    h1 {
      font-size: 2rem;
    }

    select option {
      background-color: white;
    }
  }
`
