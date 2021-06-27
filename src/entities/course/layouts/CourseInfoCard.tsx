import * as React from 'react'
import { CourseInfoCardContainer } from '../styles'
import { Circle } from '../ui/icons'

const CourseInfoCard = () => {
  const [courseBodyWith, setCouseBodyWidth] = React.useState(0)

  function setCourseWidthEvent() {
    const courseInfo = document.getElementById('course-info')
    if (!courseInfo) return

    setCouseBodyWidth((courseInfo?.offsetLeft as number) + (courseInfo?.offsetWidth as number))
  }

  React.useLayoutEffect(() => {
    setCourseWidthEvent()
  }, [])

  React.useEffect(() => {
    window.addEventListener('resize', setCourseWidthEvent)

    return () => window.removeEventListener('resize', setCourseWidthEvent)
  }, [])

  return (
    <CourseInfoCardContainer className="normal-shadow" custom-body-width={courseBodyWith}>
      <div className="img"></div>
      <div className="info p-20">
        <h3 className="mb-30">$ 99</h3>

        <div className="mb-30">
          <button className="button d-b mb-10">Add to cart</button>
          <button className="button button-t d-b">Buy now</button>
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
