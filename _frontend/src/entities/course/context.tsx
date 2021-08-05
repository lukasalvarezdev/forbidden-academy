import * as React from 'react'
import { useRouter } from 'next/router'
import { coursesAPI, Course, defaultCourse } from 'src/entities/course/services'

export const CoursesProvider: React.FC<{ children: React.ReactChild; role: 'user' | 'admin' }> =
  ({ children, role }) => {
    const {
      query: { id: courseId },
      push,
    } = useRouter()
    const [course, setCourse] = React.useState<Course>(defaultCourse)

    const updateCourse: CourseProviderProps['updateCourse'] = async rewrites => {
      setCourse(x => ({ ...x, ...rewrites }))
    }

    const handleSubmit: CourseProviderProps['handleSubmit'] = async e => {
      e.preventDefault()

      // courseId ? handleSubmitUpdate() :
      handleCreate()
    }

    async function handleCreate() {
      const [id, error] = await coursesAPI.createCourse(course)

      if (!id || error) {
        console.log(error)
        return
      }

      push(`/courses/${id}`)
    }

    // async function handleSubmitUpdate() {
    //   const [wasUpdated, error] = await coursesAPI.updateCourse(course)

    //   if (!wasUpdated || error) {
    //     console.log(error)
    //     return
    //   }

    //   console.log('Updated!')
    // }

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

const coursesContext = React.createContext<CourseProviderProps>({
  course: defaultCourse,
} as CourseProviderProps)

export function useCourses() {
  const context = React.useContext(coursesContext)
  if (!context) throw new Error('useCourses must be used within its provider')
  return context
}

export interface CourseProviderProps {
  course: Course
  updateCourse: (rewrites: Partial<Course>) => Promise<void>
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
  role: 'user' | 'admin'
}
