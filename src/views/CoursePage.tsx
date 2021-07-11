import * as React from 'react'
import CourseLayout from 'src/entities/course/layouts/CourseLayout'
import MobileCourseLayout from 'src/entities/course/layouts/MobileCourseLayout'

const CoursePage = () => {
  const pepe = false
  return <>{pepe ? <CourseLayout /> : <MobileCourseLayout />}</>
}

export default CoursePage
