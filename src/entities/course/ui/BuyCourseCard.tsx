import * as React from 'react'
import styled from 'styled-components'
import { Circle } from '@/icons'
import { useCourses } from '../services'

const CourseInfoCard = () => {
  const { course } = useCourses()

  return (
    <CourseInfoCardContainer className="normal-shadow">
      <div className="card-headin img"></div>
      <div className="card-body p-20">
        <h3 className="mb-20">$ {course?.price}</h3>

        <div className="mb-20">
          <button className="btn-primary d-b mb-10">Add to cart</button>
          <button className="btn-primary -gray d-b">Buy now</button>
        </div>

        <h4 className="mb-20">This course includes</h4>
        <ul>
          <li className="d-f align-items-c mb-10">
            <Circle className="mr-10" /> 77 hours of video
          </li>
          <li className="d-f align-items-c mb-10">
            <Circle className="mr-10" />
            99 lessons
          </li>
          <li className="d-f align-items-c mb-10">
            <Circle className="mr-10" /> Full lifetime access
          </li>
          <li className="d-f align-items-c mb-10">
            <Circle className="mr-10" /> Access on mobile, TV and desktop
          </li>
        </ul>
      </div>
    </CourseInfoCardContainer>
  )
}

export default CourseInfoCard

const CourseInfoCardContainer = styled.div`
  background-color: #fff;
  border-radius: 3px;
  width: 390px;
  position: fixed;
  top: calc(40px + 60px);
  margin-left: 30px;
  border-radius: 4px;

  .img {
    width: 100%;
    height: 200px;
    background-color: red;
    border-radius: 4px 4px 0px 0px;
  }

  h3 {
    font-size: 3.6rem;
    font-weight: 800;
  }

  ul li {
    font-size: 1.4rem;
  }
`
