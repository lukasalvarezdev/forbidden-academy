import * as React from 'react'
import styled from 'styled-components'
import { useCourses } from '../store/context'

const MobileCourseLayout = () => {
  const { updateCourse, course } = useCourses()

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
      </form>
    </CourseContainer>
  )
}

export default MobileCourseLayout

export const CourseContainer = styled.div``
