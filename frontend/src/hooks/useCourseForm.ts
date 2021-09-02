import * as React from 'react'
import { useRouter } from 'next/router'
import * as coursesAPI from 'api/courses'
import { Course } from 'models/Course'
import { useFetch } from './useFetch'

export function useCourseForm(id?: string) {
  const { push } = useRouter()
  const [course, setCourse] = React.useState<Course>({
    name: '',
    description: '',
  } as Course)
  const [message, setMessage] = React.useState('')
  const { alerts, removeAlert, fetchData, addAlert } = useFetch()

  const getCourse = React.useCallback(async (id: string) => {
    const [course, error] = await coursesAPI.getCourse(id)

    if (!course || error) {
      setMessage(error || 'There was an error')
      return
    }

    setMessage('')
    setCourse(course)
  }, [])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setCourse({ ...course, [e.target.name]: e.target.value })
  }

  async function handlePublish(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (
      !course.description ||
      !course.language ||
      !course.name ||
      !course.short_description ||
      !course.skill_level
    ) {
      addAlert({
        type: 'error',
        title: 'Oops, there was an error',
        message: 'All fields are mandatory',
      })
      return
    }

    fetchData(coursesAPI.publishCourse(id), {
      onSuccess: () => {
        setCourse(course => ({ ...course, published: true }))
      },
      successMessage: 'The course has been published!',
    })
  }

  async function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (course.name === '' || course.description === '') {
      addAlert({
        type: 'error',
        title: 'Oops, there was an error',
        message: 'All fields are mandatory',
      })
      return
    }

    fetchData(id ? coursesAPI.updateCourse(id, course) : coursesAPI.createCourse(course), {
      onSuccess: createdCourse => {
        !id && push('/courses/' + (createdCourse as Course).id)
      },
      successMessage: id ? 'The course has been saved' : 'Course created!',
    })
  }

  return {
    course,
    message,
    handleChange,
    handleSubmit,
    setCourse,
    getCourse,
    handlePublish,
    alerts,
    removeAlert,
  }
}

export type UseCourseFormReturnProps = ReturnType<typeof useCourseForm>
