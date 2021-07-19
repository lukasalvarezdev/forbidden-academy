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
    <CourseContainer>
      <form
        onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
          updateCourse({ [e.target.name]: e.target.value })
        }
      >
        <div className="mb-20">
          <input type="text" name="title" defaultValue={course.title} />
        </div>
        <div className="mb-20">
          <input type="text" name="description" defaultValue={course.description} />
        </div>
        <div className="mb-20">
          <input type="text" name="short_description" defaultValue={course.short_description} />
        </div>
        <div className="mb-20">
          <input type="text" name="skill_level" defaultValue={course.skill_level} />
        </div>
        <div className="mb-20">
          <input type="text" name="language" defaultValue={course.language} />
        </div>
        <div className="mb-20">
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

export const CourseContainer = styled.div``
