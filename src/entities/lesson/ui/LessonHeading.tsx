import { ClockIcon } from '@/icons'
import styled from 'styled-components'

const LessonHeading = () => {
  return (
    <StyledLessonHeading className="lesson-heading d-f center-f mb-30 bg-white">
      <h3>{lesson.name}</h3>
      <div className="lesson-duration d-f center-f font-semi-bold ml-20">
        <ClockIcon />
        <span className="ml-10">{lesson.duration}</span>
      </div>
    </StyledLessonHeading>
  )
}

export default LessonHeading

const StyledLessonHeading = styled.div`
  height: 70px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    margin-bottom: 0;
  }

  .lesson-duration {
    background-color: var(--medium-blue);
    border-radius: 30px;
    padding: 5px 15px;
    font-size: 14px;

    @media screen and (max-width: 900px) {
      margin: 0;
    }
  }
`

const lesson = {
  name: 'First',
  duration: '23:22',
}
