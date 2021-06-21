import * as React from 'react'
import { coursesAPI, CourseProvider, Course } from '../services'

const coursesContext = React.createContext<Partial<CourseProvider>>({
  course: {} as Course,
})

export function useCourses() {
  const context = React.useContext(coursesContext)
  if (!context) throw new Error('useCourses must be used within its provider')
  return context
}

const CoursesProvider: React.FC = ({ children }) => {
  const [course, setCourse] = React.useState({} as Course)

  const updateCourse: CourseProvider['updateCourse'] = async rewrites => {
    setCourse(x => ({ ...x, ...rewrites }))
    await coursesAPI.updateCourse(rewrites)
  }

  return (
    <coursesContext.Provider
      value={{
        course,
        updateCourse,
      }}
    >
      {children}
    </coursesContext.Provider>
  )
}

export default CoursesProvider
