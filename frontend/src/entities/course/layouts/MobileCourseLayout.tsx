import * as React from 'react'
import styled from 'styled-components'
import CourseHeading from 'src/entities/course/layouts/CourseHeading'
import BuyCourseCard from 'src/entities/course/ui/BuyCourseCard'
import CourseBody from 'src/entities/course/layouts/CourseBody'
import EditModeBar from 'src/entities/course/layouts/EditModeBar'

const MobileCourseLayout = () => {
  return (
    <CourseContainer>
      <div className="heading">
        <EditModeBar />
        <div className="img"></div>
      </div>

      <div className="body">
        <CourseHeading />

        <CourseBody />
      </div>

      <BuyCourseCard />
    </CourseContainer>
  )
}

export default MobileCourseLayout

export const CourseContainer = styled.div`
  position: relative;

  .fake-input {
    outline: none;
    background-color: transparent;
  }

  .img {
    height: 220px;
    width: 100%;
    background-color: red;
  }

  .body {
    width: 90%;
    margin: 0 auto;
  }
`
