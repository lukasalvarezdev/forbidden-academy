import { ClockIcon, BorderedArrowIcon } from '@/icons'
import styled from 'styled-components'

const Lesson = () => {
  return (
    <StyledLesson className="f-one">
      <div className="lesson-heading d-f center-f mb-30 bg-white">
        <h3>{lesson.name}</h3>
        <div className="lesson-duration d-f center-f font-semi-bold ml-20">
          <ClockIcon />
          <span className="ml-10">{lesson.duration}</span>
        </div>
      </div>

      <div className="lesson bg-white border-radius p-30 relative">
        <div className="skip absolute d-f center-f pointer">
          <BorderedArrowIcon />
        </div>
        <div className="skip absolute -reverse d-f center-f pointer">
          <BorderedArrowIcon />
        </div>
        <div className="img"></div>

        <p className="description font-light">{lesson.description}</p>
      </div>
    </StyledLesson>
  )
}

export default Lesson

const lesson = {
  name: 'First',
  description: 'Hello world',
  id: 'sdads',
  announcements: [
    {
      title: 'pepe',
      body: 'sd',
      posted_time: 'sd',
    },
  ],
  last_modified_time: 'sd',
  posted_time: 'sda',
  questions: [],
  section: '2jdsa',
  duration: '23:22',
}

const StyledLesson = styled.div`
  .lesson-heading {
    height: 70px;

    .lesson-duration {
      background-color: var(--medium-blue);
      border-radius: 30px;
      padding: 5px 15px;
      font-size: 14px;
    }
  }

  .lesson {
    width: 90%;
    margin: 0 auto;

    .img {
      width: 744px;
      height: 419px;
      background-color: #585454;
      border-radius: 4px;
      margin: 0 auto;
    }

    .description {
      margin: 0 auto;
      margin-top: 30px;
      color: var(--primary-gray);
      max-width: 744px;
      line-height: 1.8;
    }

    .skip {
      background-color: var(--medium-blue);
      height: 70px;
      width: 30px;
      left: -30px;

      &.-reverse {
        left: auto;
        right: -30px;
        transform: scale(-1, 1);
      }
    }
  }
`
