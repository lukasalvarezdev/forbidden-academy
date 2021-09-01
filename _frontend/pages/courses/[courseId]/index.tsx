import { CourseProvider } from 'context/course.context'
import { ManageCourse } from 'views/ManageCourse'

export default function CreateCoursePage() {
  return (
    <CourseProvider>
      <ManageCourse />
    </CourseProvider>
  )
}
