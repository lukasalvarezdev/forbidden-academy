import styled from 'styled-components'
import { FilledArrowIcon, SectionNumberContainerIcon } from '@/icons'
import { useLesson } from 'src/entities/lesson/services'
import LessonItem from '../ui/LessonItem'

const Sections = () => {
  const { sections, lessons } = useLesson('pepe')

  return (
    <StyledSections className="info-65 border-radius p-20">
      {sections.map((section, index) => (
        <div key={index} className="section mb-10 ">
          <div className="section-info p-20 border-radius-primary d-f align-items-c justify-content-sb relative pointer bg-white">
            <div className="number-container absolute">
              <SectionNumberContainerIcon />
              <span className="absolute fc-white font-semi-bold">{index}</span>
            </div>
            <h3 contentEditable suppressContentEditableWarning>
              {section.name}
            </h3>
            <FilledArrowIcon />
          </div>

          <div className="lessons pl-10">
            {lessons.map((lesson, index) =>
              lesson.section === section.id ? <LessonItem lesson={lesson} key={index} /> : null,
            )}
          </div>
        </div>
      ))}
    </StyledSections>
  )
}

export default Sections

const StyledSections = styled.div`
  background-color: var(--medium-blue);

  .section .section-info {
    padding-left: 60px;
    height: 60px;
    margin-bottom: 5px;

    h3 {
      font-size: 2rem;
    }

    .number-container {
      top: -10%;
      left: 20px;

      span {
        left: 7.5px;
        top: 1px;
        font-size: 18px;
      }
    }
  }
`
