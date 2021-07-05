import * as React from 'react'
import { useCourses } from '../services'
import CourseHeading from '../layouts/CourseHeading'
import CourseInfoCard from '../layouts/CourseInfoCard'
import CourseBody from '../layouts/CourseBody'
import { CourseContainer } from '../styles'

const CoursePage = () => {
  const { handleSubmit } = useCourses()

  return (
    <CourseContainer>
      <div>
        <CourseHeading />
        <CourseInfoCard />
      </div>

      <div>
        <CourseBody />
      </div>

      <button onClick={handleSubmit}>Create xd</button>
    </CourseContainer>
  )
}

export default CoursePage
