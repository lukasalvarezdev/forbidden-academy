import * as React from 'react'
import { useCourseForm } from 'hooks/useCourseForm'
import { useRouter } from 'next/router'

export const CourseProvider: React.FC = ({ children }) => {
  const {
    query: { courseId },
  } = useRouter()
  const { course, handleSubmit, handleChange, message, getCourse } = useCourseForm(
    courseId as string,
  )

  React.useEffect(() => {
    getCourse(courseId as string)
  }, [courseId, getCourse])

  return (
    <courseContext.Provider value={{ course, handleSubmit, handleChange, message }}>
      {children}
    </courseContext.Provider>
  )
}

const courseContext = React.createContext<CourseContextProps>({} as CourseContextProps)

export function useCourse() {
  const ctx = React.useContext(courseContext)
  return ctx
}

interface CourseContextProps {
  course: ReturnType<typeof useCourseForm>['course']
  handleSubmit: ReturnType<typeof useCourseForm>['handleSubmit']
  handleChange: ReturnType<typeof useCourseForm>['handleChange']
  message: ReturnType<typeof useCourseForm>['message']
}
