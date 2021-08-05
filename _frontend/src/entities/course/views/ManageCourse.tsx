import * as React from 'react'
import { useRouter } from 'next/router'
import ManageCourseForm from 'src/entities/course/components/ManageCourseForm'
import ManageLessonsForm from 'src/entities/lesson/components/ManageLessonsForm'
import styled from 'styled-components'

const ManageCourse = () => {
  const [tab, setTab] = React.useState('course')
  const {
    query: { id },
  } = useRouter()

  return (
    <StyledManageCourse>
      <div className="tabs d-f align-items-c">
        <div
          onClick={() => setTab('course')}
          className={`tab d-f align-items-c pointer ${tab === 'course' ? 'selected' : ''}`}
        >
          Course info
        </div>
        {id ? (
          <div
            onClick={() => setTab('lesson')}
            className={`tab d-f align-items-c pointer ${tab === 'lesson' ? 'selected' : ''}`}
            data-testid="lessons-tab-btn"
          >
            Lessons
          </div>
        ) : null}
      </div>
      <div className="form-container">
        {id ? (
          <>
            {tab === 'lesson' ? <ManageLessonsForm /> : null}
            {tab === 'course' ? <ManageCourseForm /> : null}
          </>
        ) : (
          <ManageCourseForm />
        )}
      </div>
    </StyledManageCourse>
  )
}

export default ManageCourse

const StyledManageCourse = styled.div`
  margin: 3rem auto;
  width: 95%;

  .tabs {
    .tab {
      background-color: #d6d6d6;
      height: 40px;
      border-radius: 5px 5px 0 0;
      margin-right: 10px;
      padding: 0 20px;
      font-size: 14px;
      font-weight: 500;
      box-shadow: -1px -2px 4px 0px rgb(0 0 0 / 4%);
      color: #afafaf;

      &.selected {
        color: var(--primary-black);
        background-color: white;
      }
    }
  }
`
