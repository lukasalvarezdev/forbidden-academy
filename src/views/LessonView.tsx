import * as React from 'react'
import MobileLessonLayout from 'src/entities/lesson/layouts/MobileLessonLayout'
import LessonLayout from 'src/entities/lesson/layouts/LessonLayout'

export default function LessonPage() {
  const [isMobile, setIsMobile] = React.useState(document.body.clientWidth < 480)

  React.useEffect(() => {
    function setIsMobileFn() {
      setIsMobile(document.body.clientWidth < 480)
    }

    window.addEventListener('resize', setIsMobileFn)
    return () => window.removeEventListener('resize', setIsMobileFn)
  }, [])

  return <div>{isMobile ? <MobileLessonLayout /> : <LessonLayout />}</div>
}
