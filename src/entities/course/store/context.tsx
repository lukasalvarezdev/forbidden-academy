import * as React from 'react'
import { useRouter } from 'next/router'
import { coursesAPI, CourseProvider, Course, parseCourse } from '../services'
import defaultCourse from '../utils/course.json'

const coursesContext = React.createContext<CourseProvider>({
  course: defaultCourse as Course,
} as CourseProvider)

export function useCourses() {
  const context = React.useContext(coursesContext)
  if (!context) throw new Error('useCourses must be used within its provider')
  return context
}

const CoursesProvider: React.FC = ({ children }) => {
  const {
    query: { id: courseId },
    push,
  } = useRouter()
  const courseFormRef = React.useRef<HTMLFormElement>(null)
  const [course, setCourse] = React.useState(defaultCourse as Course)
  const [isEditMode, setEditMode] = React.useState(false)

  const updateCourse: CourseProvider['updateCourse'] = async rewrites => {
    setCourse(x => ({ ...x, ...rewrites }))
  }

  const handleSubmit: CourseProvider['handleSubmit'] = async e => {
    e.preventDefault()

    courseId ? handleSubmitUpdate() : handleCreate()
  }

  async function handleCreate() {
    const [parsedCourse, parseCourseError] = parseCourse(courseFormRef.current)

    if (!parsedCourse || parseCourseError) {
      console.log(parseCourseError)
      return
    }

    const [createdCourse, error] = await coursesAPI.createCourse(parsedCourse)

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
        courseFormRef,
        isEditMode,
        setEditMode,
      }}
    >
      <form ref={courseFormRef}>{children}</form>
    </coursesContext.Provider>
  )
}

export { CoursesProvider }
