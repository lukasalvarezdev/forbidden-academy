import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useCourses } from '../services'

const CourseHeading = () => {
  const {
    query: { courseId },
  } = useRouter()
  const { course, isEditMode } = useCourses()

  return (
    <header className="bg-primary-black fc-white mb-30">
      <CourseHeadingContainer className="container">
        <div className="info-65" id="course-info">
          <div className="mb-20">
            <h1
              contentEditable={isEditMode}
              suppressContentEditableWarning
              className="fake-input parse-courses"
              title="name"
            >
              {courseId ? course.name : ''}
            </h1>
          </div>
          <div>
            <p
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
              <p>{course.language}</p>
            )}
          </div>
        </div>
      </CourseHeadingContainer>
    </header>
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
`
