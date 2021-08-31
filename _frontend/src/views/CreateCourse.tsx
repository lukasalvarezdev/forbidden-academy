import { useCourseForm } from 'hooks/useCourseForm'
import { CourseForm } from 'layouts/CourseForm'
import styled from 'styled-components'

export const CreateCourse = () => {
  const { course, handleSubmit, handleChange, message, handlePublish } = useCourseForm()

  return (
    <StyledCreateCourse className="container">
      <CourseForm
        {...{ course, handleSubmit, handleChange, message, handlePublish }}
        title="Set the course details"
      />
      {/* side options here */}
      <div className="normal-shadow border-radius-primary bg-white">Some content</div>
    </StyledCreateCourse>
  )
}

const StyledCreateCourse = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 30px;
`
