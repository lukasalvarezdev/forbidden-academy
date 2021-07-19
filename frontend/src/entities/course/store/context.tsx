import * as React from 'react'
import { useRouter } from 'next/router'
import { coursesAPI, CourseProvider, Course } from '../services'
import { defaultCourse } from '../utils/course'

const CoursesProvider: React.FC<{ children: React.ReactChild; role: 'user' | 'admin' }> = ({
  children,
  role,
}) => {
  const {
    query: { id: courseId },
    push,
  } = useRouter()
  const [course, setCourse] = React.useState(defaultCourse as Course)

  const updateCourse: CourseProvider['updateCourse'] = async rewrites => {
    setCourse(x => ({ ...x, ...rewrites }))
  }

  const handleSubmit: CourseProvider['handleSubmit'] = async e => {
    e.preventDefault()

    courseId ? handleSubmitUpdate() : handleCreate()
  }

  async function handleCreate() {
    const [createdCourse, error] = await coursesAPI.createCourse(course)

    if (!createdCourse || error) {
      console.log(error)
      return
    }

    push(`/courses/${createdCourse.id}`)
  }

  async function handleSubmitUpdate() {
    const [wasUpdated, error] = await coursesAPI.updateCourse(course)

    if (!wasUpdated || error) {
      console.log(error)
      return
    }

    console.log('Updated!')
  }

  return (
    <coursesContext.Provider
      value={{
        course,
        updateCourse,
        handleSubmit,
        role,
      }}
    >
      {children}
    </coursesContext.Provider>
  )
}

const coursesContext = React.createContext<CourseProvider>({
  course: defaultCourse as Course,
} as CourseProvider)

export function useCourses() {
  const context = React.useContext(coursesContext)
  if (!context) throw new Error('useCourses must be used within its provider')
  return context
}

export { CoursesProvider }
