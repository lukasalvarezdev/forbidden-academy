import { Alerts } from 'components/Alerts'
import { useCourseForm } from 'hooks/useCourseForm'
import { CourseDetailsForm } from 'layouts/CourseDetailsForm'
import styled from 'styled-components'

export const CreateCourse = () => {
  const { course, handleSubmit, handleChange, message, alerts, removeAlert } = useCourseForm()

  return (
    <StyledCreateCourse className="container">
      <CourseDetailsForm
        {...{ course, handleSubmit, handleChange, message }}
        title="Set the course details"
      />
      {/* side options here */}
      <div className="normal-shadow border-radius-primary bg-white">Some content</div>
      <Alerts alerts={alerts} removeAlert={removeAlert} />
    </StyledCreateCourse>
  )
}

const StyledCreateCourse = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 30px;
`
