import { useRouter } from 'next/router'
import * as React from 'react'
import styled from 'styled-components'
import { useCourses } from '../store/context'

const MobileCourseLayout = () => {
  const {
    query: { id },
  } = useRouter()
  const { updateCourse, course, handleSubmit } = useCourses()

  return (
    <CourseContainer className="p-20 border-radius-primary normal-shadow">
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
          <input type="text" name="skill_level" defaultValue={course.skill_level} />
        </div>
        <div className="field mb-20">
          <label htmlFor="pepe">Language</label>
          <input type="text" name="language" defaultValue={course.language} />
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

export default MobileCourseLayout

export const CourseContainer = styled.div`
  background-color: #fff;
  width: 95%;
  margin: 3rem auto;

  .field textarea {
    min-height: 15rem;
    line-height: 1.7;
    padding-top: 10px;
    resize: none;
  }
`
