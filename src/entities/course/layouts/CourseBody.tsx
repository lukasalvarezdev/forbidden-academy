import WhatYouWillLearn from '../components/WhatYouWillLearn'
import { useEditableInput } from '../services'

const CourseBody = () => {
  const handleChange = useEditableInput()

  return (
    <form onChange={handleChange}>
      <div>
        <label htmlFor="xd">Description</label>
        <input type="text" name="description" />
      </div>

      <WhatYouWillLearn />
      {/** Course content */}
    </form>
  )
}

export default CourseBody
