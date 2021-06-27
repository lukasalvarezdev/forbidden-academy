import { useCourses } from '../services'
import WhatYouWillLearn from '../components/WhatYouWillLearn'
import Sections from './Sections'
import { CourseBodyContainer } from '../styles'

const CourseBody = () => {
  const { course } = useCourses()

  return (
    <CourseBodyContainer className="container">
      <div className="info-65 mb-30">
        <p
          contentEditable={true}
          suppressContentEditableWarning={true}
          title="description"
          className="fake-input"
          defaultValue={course?.description}
        >
          {course?.description}
        </p>
      </div>

      <WhatYouWillLearn />
      <Sections />
    </CourseBodyContainer>
  )
}

export default CourseBody
