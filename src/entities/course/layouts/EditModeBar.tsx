import * as React from 'react'
import styled from 'styled-components'
import { useCourses } from '../services'

const CourseHeading = () => {
  const { isEditMode, setEditMode, handleSubmit, role } = useCourses()

  if (role !== 'admin') return null

  return (
    <StyledEditModeBar className=" bg-white d-f justify-content-e align-items-c">
      <div className="container d-f justify-content-e align-items-c">
        {!isEditMode ? (
          <button
            className="button"
            onClick={e => {
              e.preventDefault()
              setEditMode(true)
            }}
          >
            Edit mode
          </button>
        ) : null}

        {isEditMode ? (
          <button
            className="button cancel mr-20"
            onClick={e => {
              e.preventDefault()
              setEditMode(false)
            }}
          >
            Cancel
          </button>
        ) : null}

        {isEditMode ? (
          <button
            className="button"
            onClick={e => {
              e.preventDefault()
              handleSubmit(e)
              setEditMode(false)
            }}
          >
            Save changes
          </button>
        ) : null}
      </div>
    </StyledEditModeBar>
  )
}

export default CourseHeading

const StyledEditModeBar = styled.div`
  height: 40px;

  .button {
    background-color: var(--purple);
    color: white;
    border-radius: 30px;
    padding: 7px 13px;
    font-weight: 600;
    font-size: 13px;

    &.cancel {
      background-color: #d4dceb;
      color: var(--main-black);
    }
  }
`
