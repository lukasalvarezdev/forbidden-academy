import * as React from 'react'
import { useRouter } from 'next/router'
import * as coursesAPI from 'api/courses'

export const CreateCourse = () => {
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

    push('/' + createdCourse.id)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={course.name}
            data-testid="pepe"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={course.description}
            onChange={handleChange}
          />
        </div>

        <button data-testid="create-btn">Create</button>
      </form>

      {message ? (
        <div role="alert">
          <p>{message}</p>
        </div>
      ) : null}
    </div>
  )
}
