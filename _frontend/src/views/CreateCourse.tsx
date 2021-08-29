import * as React from 'react'
import { useCourseForm } from 'hooks/useCourseForm'

export const CreateCourse = () => {
  const { course, handleSubmit, handleChange, message } = useCourseForm()

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
