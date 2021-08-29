import * as React from 'react'
import { useRouter } from 'next/router'
import * as coursesAPI from 'api/courses'

export function useCourseForm(id?: string) {
  const { push } = useRouter()
  const [course, setCourse] = React.useState({
    name: '',
    description: '',
  })
  const [message, setMessage] = React.useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCourse({ ...course, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (course.name === '' || course.description === '') {
      setMessage('All fields are mandatory')
      return
    }

    const [createdCourse, error] = await coursesAPI.createCourse(course)

    if (!createdCourse || error) {
      setMessage('There was an error')
      return
    }

    push('/courses/' + createdCourse.id)
  }

  return { course, message, handleChange, handleSubmit }
}
