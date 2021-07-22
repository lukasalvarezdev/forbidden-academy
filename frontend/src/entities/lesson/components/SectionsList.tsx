import { FilledArrowIcon, SectionNumberContainerIcon } from '@/icons'
import { useLesson } from 'src/entities/lesson/services'
import styled from 'styled-components'
import LessonItem from '../ui/LessonItem'

const SectionsList = () => {
  const { sections, lessons } = useLesson('pepe')

  return (
    <>
      {sections.map((section, index) => (
        <StyledSection key={index} className="section mb-10">
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
              lesson.section_id === section.id ? (
                <LessonItem lesson={lesson} key={index} />
              ) : null,
            )}
          </div>
        </StyledSection>
      ))}
    </>
  )
}

export default SectionsList

const StyledSection = styled.div`
  .section-info {
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
