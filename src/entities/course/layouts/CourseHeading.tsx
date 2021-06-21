import { useEditableInput } from '../services'

const CourseHeading = () => {
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
        <input type="text" name="language" />
      </div>
    </form>
  )
}

export default CourseHeading
