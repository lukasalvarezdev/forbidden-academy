import { useEditableInput } from '../services'
import WhatYouWillLearn from '../components/WhatYouWillLearn'
import Sections from './Sections'

const CourseBody = () => {
  const handleChange = useEditableInput()

  return (
    <>
      <form onChange={handleChange}>
        <div>
          <label htmlFor="xd">Description</label>
          <input type="text" name="description" />
        </div>

        <WhatYouWillLearn />
      </form>
      <Sections />
    </>
  )
}

export default CourseBody
