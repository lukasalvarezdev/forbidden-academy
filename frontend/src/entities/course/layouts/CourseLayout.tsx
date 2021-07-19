import * as React from 'react'
import { CourseContainer } from 'src/entities/course/styles'
import CourseHeading from 'src/entities/course/layouts/CourseHeading'
import BuyCourseCard from 'src/entities/course/ui/BuyCourseCard'
import CourseBody from 'src/entities/course/layouts/CourseBody'

const CourseLayout = () => {
  return (
    <CourseContainer>
      <div>
        <CourseHeading />
        <BuyCourseCard />
      </div>

      <div>
        <CourseBody />
      </div>
    </CourseContainer>
  )
}

export default CourseLayout
