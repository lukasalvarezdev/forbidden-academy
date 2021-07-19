import * as React from 'react'
import CourseLayout from 'src/entities/course/layouts/CourseLayout'
import MobileCourseLayout from 'src/entities/course/layouts/MobileCourseLayout'

const CoursePage = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    setIsMobile(document.body.clientWidth < 1200)

    function setIsMobileFn() {
      setIsMobile(document.body.clientWidth < 1200)
    }

    window.addEventListener('resize', setIsMobileFn)
    return () => window.removeEventListener('resize', setIsMobileFn)
  }, [])

  return <>{isMobile ? <MobileCourseLayout /> : <CourseLayout />}</>
}

export default CoursePage
