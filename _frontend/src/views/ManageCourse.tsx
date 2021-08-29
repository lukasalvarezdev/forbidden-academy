import * as React from 'react'
import { useCourse } from 'context/course.context'

export const ManageCourse = () => {
  const { course, handleSubmit, handleChange, message } = useCourse()

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

        <button data-testid="update-btn">Create</button>
      </form>

      {message ? (
        <div role="alert">
          <p>{message}</p>
        </div>
      ) : null}
    </div>
  )
}
