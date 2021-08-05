import * as React from 'react'
import { useRouter } from 'next/router'
import { useCourses } from 'src/entities/course/services'
import styled from 'styled-components'

const ManageCourseForm = () => {
  const {
    query: { id },
  } = useRouter()
  const { updateCourse, course, handleSubmit } = useCourses()

  return (
    <CourseContainer className="p-20  normal-shadow">
      <form
        onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
          updateCourse({ [e.target.name]: e.target.value })
        }
      >
        <h3 className="mb-20">
          {id ? 'Edit the information of your course' : 'Fill course info'}
        </h3>
        <div className="field mb-20">
          <label htmlFor="pepe">Title</label>
          <input type="text" name="title" defaultValue={course.title} />
        </div>
        <div className="field mb-20">
          <label htmlFor="pepe">Description</label>
          <textarea name="description" defaultValue={course.description}></textarea>
        </div>
        <div className="field mb-20">
          <label htmlFor="pepe">Short description</label>
          <input type="text" name="short_description" defaultValue={course.short_description} />
        </div>
        <div className="field mb-20">
          <label htmlFor="pepe">Skill level</label>
          <select
            name="skill_level"
            defaultValue={course.skill_level}
            className="select-primary"
          >
            <option value="">Select an option</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div className="field mb-20">
          <label htmlFor="pepe">Language</label>
          <select name="language" defaultValue={course.language} className="select-primary">
            <option value="">Select a language</option>
            <option value="spanish">Spanish</option>
            <option value="english">English</option>
          </select>
        </div>
        <div className="field mb-20">
          <label htmlFor="pepe">Price</label>
          <input type="text" name="price" defaultValue={course.price} />
        </div>

        <button onClick={handleSubmit} className="btn-primary">
          {id ? 'Save' : 'Create'}
        </button>
      </form>
    </CourseContainer>
  )
}

export default ManageCourseForm

export const CourseContainer = styled.div`
  background-color: #fff;
  border-radius: 0 4px 4px 4px;

  .field {
    textarea {
      min-height: 15rem;
      line-height: 1.7;
      padding-top: 10px;
      resize: none;
    }

    .select-primary {
      padding-right: 15px;
    }
  }
`
