import WhatYouWillLearn from '../components/WhatYouWillLearn'

const CourseBody = () => {
  return (
    <>
      <div>
        <label htmlFor="xd">Description</label>
        <input type="text" name="description" />
      </div>

      <WhatYouWillLearn />
      {/** Course content */}
    </>
  )
}

export default CourseBody
