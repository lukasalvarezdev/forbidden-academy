import { useLesson } from 'src/entities/shared-lesson/services'
import Lesson from '../ui/Lesson'
import styled from 'styled-components'
import { filledArrowIcon, sectionNumberContainerIcon } from 'src/utils/static/icons'

const StyledSections = styled.div`
  background-color: #d5e4f7;
  padding: 20px;
  border-radius: 4px;

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
        font-size: 2rem;
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
          font-size: 18px;
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
`

const Sections = () => {
  const { sections, lessons } = useLesson('pepe')

  return (
    <StyledSections className="info-65">
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
              lesson.section === section.id ? <Lesson lesson={lesson} key={index} /> : null,
            )}
          </div>
        </div>
      ))}
    </StyledSections>
  )
}

export default Sections
