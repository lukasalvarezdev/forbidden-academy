import * as React from 'react'
import { useCourse } from 'context/course.context'
import styled from 'styled-components'
import { CourseDetailsForm } from 'layouts/CourseDetailsForm'
import { Alerts } from 'components/Alerts'

export const ManageCourse = () => {
  const { course, handleSubmit, handleChange, message, handlePublish, alerts, removeAlert } =
    useCourse()

  return (
    <StyledManageCourse className="container">
      <CourseDetailsForm
        {...{ course, handleSubmit, handleChange, message, handlePublish }}
        title="Manage the course details"
      />
      {/* side options here */}
      <div className="normal-shadow border-radius-primary bg-white">Some content</div>
      <Alerts alerts={alerts} removeAlert={removeAlert} />
    </StyledManageCourse>
  )
}

const StyledManageCourse = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 30px;
`
