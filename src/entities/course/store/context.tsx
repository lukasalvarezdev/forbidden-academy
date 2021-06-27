import * as React from 'react'
import { useRouter } from 'next/router'
import { coursesAPI, CourseProvider, Course } from '../services'
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
    const [createdCourse, error] = await coursesAPI.createCourse(course)

    if (!createdCourse || error) {
      console.log(error)
      return
    }

    console.log(createdCourse.id)
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
      }}
    >
      {children}
    </coursesContext.Provider>
  )
}

export default CoursesProvider
