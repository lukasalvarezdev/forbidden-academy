import { useCourses, useEditableInput } from '../services'

const CourseHeading = () => {
  const { course } = useCourses()
  const handleChange = useEditableInput()

  return (
    <form onChange={handleChange}>
      <div>
        <label htmlFor="xd">Title</label>
        <input type="text" name="title" />
      </div>
      <div>
        <label htmlFor="xd">Short description</label>
        <input type="text" name="short_description" />
      </div>
      <div>
        <label htmlFor="xd">Langugage</label>
        <select name="language" value={course?.language || ''}>
          <option value=""> --Select a language --</option>
          <option value="spanish">Spanish</option>
          <option value="english">English</option>
        </select>
      </div>
    </form>
  )
}

export default CourseHeading
