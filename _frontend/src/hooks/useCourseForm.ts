import * as React from 'react'
import { useRouter } from 'next/router'
import * as coursesAPI from 'api/courses'
import { Course } from 'models/Course'

export function useCourseForm(id?: string) {
  const { push } = useRouter()
  const [course, setCourse] = React.useState<Course>({
    name: '',
    description: '',
  })
  const [message, setMessage] = React.useState('')

  const getCourse = React.useCallback(async (id: string) => {
    const [course, error] = await coursesAPI.getCourse(id)

    if (!course || error) {
      setMessage(error || 'There was an error')
      return
    }

    setMessage('')
    setCourse(course)
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCourse({ ...course, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // console.log(course)

    if (course.name === '' || course.description === '') {
      setMessage('All fields are mandatory')
      return
    }

    const [createdCourse, error] = await (id
      ? coursesAPI.updateCourse(id, course)
      : coursesAPI.createCourse(course))

    if (!createdCourse || error) {
      setMessage('There was an error')
      return
    }

    if (id) {
      setMessage('saved')
      setTimeout(() => {
        setMessage('')
      }, 3000)
    } else {
      setMessage('')
    }
    !id && push('/courses/' + (createdCourse as Course).id)
  }

  return { course, message, handleChange, handleSubmit, setCourse, getCourse }
}
