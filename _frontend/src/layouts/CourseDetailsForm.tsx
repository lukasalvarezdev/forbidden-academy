import { UseCourseFormReturnProps } from 'hooks/useCourseForm'
import styled from 'styled-components'

interface CourseFormProps {
  course: UseCourseFormReturnProps['course']
  handleSubmit: UseCourseFormReturnProps['handleSubmit']
  handleChange: UseCourseFormReturnProps['handleChange']
  handlePublish?: UseCourseFormReturnProps['handlePublish']
  message: UseCourseFormReturnProps['message']
  title: string
}

export const CourseDetailsForm = ({
  course,
  handleSubmit,
  handleChange,
  message,
  title,
  handlePublish,
}: CourseFormProps) => {
  return (
    <div>
      <Form className="p-30 normal-shadow border-radius-primary bg-white">
        <h2 className="mb-20">{title}</h2>

        <div className="form-field mb-10">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={course.name || ''}
            placeholder="Course name"
          />
        </div>
        <div className="form-field mb-10">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={course.description || ''}
            onChange={handleChange}
            placeholder="Course description"
          ></textarea>
        </div>

        <div className="form-field mb-10">
          <label htmlFor="short_description">Short description</label>
          <input
            type="text"
            id="short_description"
            name="short_description"
            onChange={handleChange}
            value={course.short_description || ''}
            placeholder="Course short description"
          />
        </div>

        <div className="d-f mb-10">
          <div className="form-field mr-20 f-one">
            <label htmlFor="short_description">Skill level</label>
            <select
              className="select-primary"
              id="skill_level"
              name="skill_level"
              onChange={handleChange}
              value={course.skill_level || ''}
              placeholder="Course short description"
            >
              <option value="">Choose a skill level</option>
            </select>
          </div>
          <div className="form-field  f-one">
            <label htmlFor="language">Language</label>
            <select
              className="select-primary"
              id="language"
              name="language"
              onChange={handleChange}
              value={course.language || ''}
              placeholder="Course short description"
            >
              <option value="">Choose a language</option>
            </select>
          </div>
        </div>

        <div className="form-field mb-20">
          <label htmlFor="price">Price ($ USD)</label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={handleChange}
            value={course.price || ''}
            placeholder="Course price"
          />
        </div>

        <div className="flex">
          <button data-testid="create-btn" onClick={handleSubmit}>
            Create
          </button>
          {handlePublish ? (
            <button data-testid="publish-btn" onClick={handlePublish} className="ml-20 invert">
              Publish
            </button>
          ) : null}
        </div>
      </Form>

      {message ? (
        <div role="alert">
          <p>{message}</p>
        </div>
      ) : null}
    </div>
  )
}

const Form = styled.form`
  h2 {
    font-size: 24px;
  }

  textarea {
    resize: none;
    height: 100px;
  }

  button {
    height: 35px;
    color: white;
    background-color: var(--purple);
    border-radius: 3px;
    padding: 0 70px;
    font-size: 14px;

    &.invert {
      color: var(--purple);
      background-color: #fff;
      border: 2px solid var(--purple);
    }
  }
`
