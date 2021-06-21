import { useEditableInput } from '../services'

const CourseInfoCard = () => {
  const handleChange = useEditableInput()

  return (
    <form onChange={handleChange}>
      <div>
        <label htmlFor="xs">Price</label>
        <input type="text" name="price" />
      </div>
    </form>
  )
}

export default CourseInfoCard
