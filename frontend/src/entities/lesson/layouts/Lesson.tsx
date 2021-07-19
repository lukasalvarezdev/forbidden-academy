import styled from 'styled-components'
import { BorderedArrowIcon } from '@/icons'
import LessonHeading from '../ui/LessonHeading'
import TabsCarousel from './TabsCarousel'
import SectionsList from '../components/SectionsList'

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
        <div className="sections-list p-20 info-65 border-radius mt-20">
          <SectionsList />
        </div>
      </div>
    </StyledLesson>
  )
}

export default Lesson

const StyledLesson = styled.div`
  .lesson {
    width: 90%;
    margin: 0 auto;

    @media screen and (max-width: 1200px) {
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

      @media screen and (max-width: 1200px) {
        height: 200px;
      }
    }

    .description {
      margin: 0 auto;
      margin-top: 30px;
      color: var(--primary-gray);
      max-width: 744px;
      line-height: 1.8;

      @media screen and (max-width: 1200px) {
        width: 90%;
      }
    }

    .skip {
      background-color: var(--medium-blue);
      height: 70px;
      width: 30px;
      left: -30px;

      @media screen and (max-width: 1200px) {
        display: none;
      }

      &.-reverse {
        left: auto;
        right: -30px;
        transform: scale(-1, 1);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    margin-top: 3rem;

    .sections-list {
      background-color: transparent;
      padding: 0;
      width: 90%;
      margin: 0 auto;
      margin-top: 20px;

      .section-info {
        border-radius: 4px;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.158);

        h3 {
          font-size: 16px;
        }
      }

      .lessons > div {
        border-radius: 4px;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.158);

        h4 {
          font-size: 14px;
        }
      }
    }
  }
`
