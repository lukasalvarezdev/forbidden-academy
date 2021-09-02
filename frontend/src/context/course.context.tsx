import * as React from 'react'
import { useCourseForm, UseCourseFormReturnProps } from 'hooks/useCourseForm'
import { useRouter } from 'next/router'

export const CourseProvider: React.FC = ({ children }) => {
  const {
    query: { courseId },
  } = useRouter()
  const {
    course,
    handleSubmit,
    handleChange,
    message,
    getCourse,
    handlePublish,
    alerts,
    removeAlert,
  } = useCourseForm(courseId as string)

  React.useEffect(() => {
    getCourse(courseId as string)
  }, [courseId, getCourse])

  return (
    <courseContext.Provider
      value={{
        course,
        handleSubmit,
        handleChange,
        message,
        handlePublish,
        alerts,
        removeAlert,
      }}
    >
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
  course: UseCourseFormReturnProps['course']
  handleSubmit: UseCourseFormReturnProps['handleSubmit']
  handleChange: UseCourseFormReturnProps['handleChange']
  handlePublish: UseCourseFormReturnProps['handlePublish']
  message: UseCourseFormReturnProps['message']
  alerts: UseCourseFormReturnProps['alerts']
  removeAlert: UseCourseFormReturnProps['removeAlert']
}
