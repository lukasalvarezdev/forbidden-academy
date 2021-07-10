import * as React from 'react'
import styled from 'styled-components'
import { useCourses } from '../services'

const CourseHeading = () => {
  const { isEditMode, setEditMode, handleSubmit, role } = useCourses()

  if (role !== 'admin') return null

  return (
    <StyledEditModeBar className="container d-f justify-items-e">
      {isEditMode ? (
        <button className="button" onClick={handleSubmit}>
          Save changes
        </button>
      ) : (
        <button
          className="button"
          onClick={e => {
            e.preventDefault()
            setEditMode(true)
          }}
        >
          Edit mode
        </button>
      )}
    </StyledEditModeBar>
  )
}

export default CourseHeading

const StyledEditModeBar = styled.div`
  height: 30px;
`
