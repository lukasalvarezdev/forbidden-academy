import { useCourses, useEditableInput } from '../services'
import { CourseHeadingContainer } from './styles'

const CourseHeading = () => {
  const { course } = useCourses()
  const handleChange = useEditableInput()

  return (
    <header className="bg-primary-black fc-white">
      <CourseHeadingContainer className="container">
        <form onInput={handleChange}>
          <div className="mb-20">
            <h1
              contentEditable={true}
              suppressContentEditableWarning={true}
              className="fake-input"
              title="name"
            >
              {course?.name}
            </h1>
          </div>
          <div>
            <p
              className="mb-20 fake-input"
              contentEditable={true}
              suppressContentEditableWarning={true}
              title="short_description"
            >
              {course?.short_description}
            </p>
          </div>
          <div>
            <select
              name="language"
              defaultValue={course?.language || ''}
              className="fake-input"
            >
              <option value=""> - Select a language -</option>
              <option value="spanish">Spanish</option>
              <option value="english">English</option>
            </select>
          </div>
        </form>
      </CourseHeadingContainer>
    </header>
  )
}

export default CourseHeading
