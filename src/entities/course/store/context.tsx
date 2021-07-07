import * as React from 'react'
import { useRouter } from 'next/router'
import { coursesAPI, CourseProvider, Course, parseCourse } from '../services'
import defaultCourse from '../utils/course.json'

const coursesContext = React.createContext<Partial<CourseProvider>>({
  course: defaultCourse as Course,
})

export function useCourses() {
  const context = React.useContext(coursesContext)
  if (!context) throw new Error('useCourses must be used within its provider')
  return context
}

const CoursesProvider: React.FC = ({ children }) => {
  const courseFormRef = React.useRef<HTMLFormElement>(null)
  const [course, setCourse] = React.useState(defaultCourse as Course)
  const {
    query: { id: courseId },
  } = useRouter()

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

    console.log(createdCourse)
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
      }}
    >
      <button onClick={handleSubmit}>pepe</button>
      <form ref={courseFormRef}>{children}</form>
    </coursesContext.Provider>
  )
}

export { CoursesProvider }
