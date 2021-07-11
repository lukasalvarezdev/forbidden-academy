import styled from 'styled-components'
import { BorderedArrowIcon } from '@/icons'
import LessonHeading from '../ui/LessonHeading'
import TabsCarousel from './TabsCarousel'
import Sections from './Sections'

const Lesson = () => {
  return (
    <StyledLesson className="f-one">
      <LessonHeading />

      <div className="lesson bg-white border-radius p-30 relative">
        <div className="skip absolute d-f center-f pointer">
          <BorderedArrowIcon />
        </div>
        <div className="skip absolute -reverse d-f center-f pointer">
          <BorderedArrowIcon />
        </div>
        <div className="img"></div>

        {/* <p className="description font-light">{lesson.description}</p> */}
        <TabsCarousel />
        <Sections />
      </div>
    </StyledLesson>
  )
}

export default Lesson

const StyledLesson = styled.div`
  .lesson {
    width: 90%;
    margin: 0 auto;

    @media screen and (max-width: 480px) {
      width: 100%;
      padding: 30px 0;
    }

    .img {
      height: 419px;
      max-width: 744px;
      width: 90%;
      background-color: #585454;
      border-radius: 4px;
      margin: 0 auto;

      @media screen and (max-width: 480px) {
        height: 200px;
      }
    }

    .description {
      margin: 0 auto;
      margin-top: 30px;
      color: var(--primary-gray);
      max-width: 744px;
      line-height: 1.8;

      @media screen and (max-width: 480px) {
        width: 90%;
      }
    }

    .skip {
      background-color: var(--medium-blue);
      height: 70px;
      width: 30px;
      left: -30px;

      @media screen and (max-width: 480px) {
        display: none;
      }

      &.-reverse {
        left: auto;
        right: -30px;
        transform: scale(-1, 1);
      }
    }
  }
`

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
