import * as React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useCourses } from '../services'
import EditField from '../components/EditField'

const CourseHeading = () => {
  const {
    query: { courseId },
  } = useRouter()
  const { course, isEditMode } = useCourses()
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  const shortDescriptionRef = React.useRef<HTMLParagraphElement>(null)
  const languageRef = React.useRef<HTMLParagraphElement>(null)

  return (
    <CourseHeadingContainer className="bg-primary-black fc-white mb-30">
      <div className="container">
        <div className="info-65" id="course-info">
          <div className="mb-20 relative">
            <EditField fieldRef={titleRef} />
            <h1
              contentEditable={isEditMode}
              suppressContentEditableWarning
              className="fake-input parse-courses"
              title="name"
              ref={titleRef}
            >
              {courseId ? course.name : ''}
            </h1>
          </div>
          <div className="relative">
            <EditField fieldRef={shortDescriptionRef} />
            <p
              ref={shortDescriptionRef}
              className="mb-20 fake-input parse-courses"
              contentEditable={isEditMode}
              suppressContentEditableWarning
              title="short_description"
            >
              {courseId ? course.short_description : ''}
            </p>
          </div>
          <div>
            {isEditMode ? (
              <select
                name="language"
                defaultValue={courseId ? course.language || '' : ''}
                className="fake-input parse-courses"
              >
                <option value=""> - Select a language -</option>
                <option value="spanish">Spanish</option>
                <option value="english">English</option>
              </select>
            ) : (
              <div className="relative">
                <EditField fieldRef={languageRef} />
                <p ref={languageRef}>{course.language}</p>
              </div>
            )}
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

  @media screen and (max-width: 900px) {
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
