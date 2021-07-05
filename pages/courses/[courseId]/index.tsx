import * as React from 'react'
import { Lesson } from 'src/entities/shared-lesson/services'
import Header from 'src/layouts/Header'
import styled from 'styled-components'
import LessonItem from 'src/entities/course/ui/Lesson'
import {
  borderedArrowIcon,
  clockIcon,
  filledArrowIcon,
  sectionNumberContainerIcon,
} from 'src/utils/static/icons'

const StlyedPepe = styled.div`
  height: 100%;

  > div {
    height: 100%;
  }

  .lessons-container {
    background-color: #d5e4f7;
    width: 25%;
    min-width: 380px;
    padding: 20px;
  }

  .section {
    margin-bottom: 10px;

    .section-info {
      background-color: #fff;
      padding: 20px;
      padding-left: 60px;
      border-radius: 4px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      position: relative;
      margin-bottom: 5px;

      h3 {
        font-size: 1.8rem;
      }

      .number-container {
        position: absolute;
        top: -10%;
        left: 20px;

        span {
          position: absolute;
          left: 7.5px;
          top: 1px;
          color: white;
          font-weight: 600;
          font-size: 16px;
        }
      }
    }

    .lessons {
      padding-left: 10px;

      .lesson {
        background-color: #fff;
        padding: 20px;
        border-radius: 4px;
        height: 50px;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-bottom: 5px;

        h4 {
          font-size: 16px;
          font-weight: 500;
          color: var(--primary-black);
          margin-left: 20px;
        }

        .icon {
          padding: 5px;
          background-color: #f4f7fe;
        }
      }
    }
  }

  .lesson-overview {
    flex: 1;

    .lesson-heading {
      background-color: #fff;
      height: 70px;

      .lesson-duration {
        background-color: #d5e4f7;
        border-radius: 30px;
        padding: 5px 15px;
        font-size: 14px;
        font-weight: 600;
        margin-left: 20px;
      }
    }

    .lesson {
      background-color: #fff;
      border-radius: 4px;
      padding: 30px;
      width: 90%;
      margin: 0 auto;
      position: relative;

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
        font-weight: 300;
        color: var(--primary-gray);
        max-width: 744px;
        line-height: 1.8;
      }

      .skip {
        background-color: #d5e4f7;
        position: absolute;
        height: 70px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        left: -30px;
        cursor: pointer;

        &.-reverse {
          left: auto;
          right: -30px;
          transform: scale(-1, 1);
        }
      }
    }
  }
`

export default function CreateCoursePage() {
  const [sections, setSections] = React.useState([
    { name: 'Welcome to the project', id: '2jdsa', number_of_lessons: 29, courseId: 'edd' },
    { name: 'First project', id: '2jdsass', number_of_lessons: 29, courseId: 'edd' },
    { name: 'Introduction to Express', id: '2jdsasss', number_of_lessons: 29, courseId: 'eds' },
    { name: 'Second project', id: '2jdsassss', number_of_lessons: 29, courseId: 'edd' },
  ])

  const [lessons, setLessons] = React.useState<Lesson[]>([
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
      name: 'Seconds',
      description: 'Hello worlddd',
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
      section: '2jdsas',
    },
    {
      name: 'Seconds',
      description: 'Hello worlddd',
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
      section: '2jdsas',
    },
    {
      name: 'Seconds',
      description: 'Hello worlddd',
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
      section: '2jdsas',
    },
  ])

  return (
    <StlyedPepe>
      <Header />
      <div className="d-f">
        <div className="lessons-container">
          {sections.map((section, index) => (
            <div key={index} className="section">
              <div className="section-info">
                <div className="number-container">
                  {sectionNumberContainerIcon}
                  <span>{index}</span>
                </div>
                <h3 contentEditable suppressContentEditableWarning>
                  {section.name}
                </h3>
                {filledArrowIcon}
              </div>

              <div className="lessons">
                {lessons.map((lesson, index) =>
                  lesson.section === section.id ? (
                    <LessonItem lesson={lesson} key={index} />
                  ) : null,
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="lesson-overview">
          <div className="lesson-heading d-f center-f mb-30">
            <h3>Installing NodeJS</h3>
            <div className="lesson-duration d-f center-f">
              {clockIcon}
              <span className="ml-10">12:32</span>
            </div>
          </div>

          <div className="lesson">
            <div className="skip">{borderedArrowIcon}</div>
            <div className="skip -reverse">{borderedArrowIcon}</div>
            <div className="img"></div>

            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis ipsum,
              tristique ut felis et, mollis ullamcorper lectus. Cras sed egestas lacus. Morbi
              fringilla, felis non aliquet tristique, massa quam blandit mauris, non bibendum
              lorem elit vel purus. Morbi pharetra augue dignissim ornare interdum. Phasellus
              leo est, tincidunt sed aliquet quis, molestie vestibulum leo. Donec laoreet tellus
              id neque congue, sit amet dictum nulla pretium. Vestibulum in nulla vehicula erat
              efficitur porta nec ut justo. Fusce malesuada elementum posuere. Vivamus
              condimentum dapibus mollis. Ut vel tristique velit, eget efficitur ex. Sed a elit
              vel lectus laoreet malesuada. Suspendisse vel blandit tellus. Donec sit amet
              luctus mauris, eget iaculis neque. Duis congue sapien non est gravida aliquet. Nam
              malesuada volutpat mi, et interdum odio pretium eget. Pellentesque eu gravida
              enim, eget tristique arcu. Aenean at mauris non nunc tempus maximus sed sed ipsum.
              Etiam id vestibulum nisi, at tincidunt dolor. Quisque vel turpis molestie, commodo
              tortor ac, pulvinar est. Sed et dignissim ligula. Duis viverra neque ut sem semper
              eleifend. Integer tincidunt justo vel lacus cursus porttitor. Quisque sit amet
              mattis nisl. Maecenas pretium eros nec elit egestas, id efficitur odio ultrices.
              Cras tincidunt ornare quam, in posuere nibh dignissim non. Donec a faucibus odio.
            </p>
          </div>
        </div>
      </div>
    </StlyedPepe>
  )
}
