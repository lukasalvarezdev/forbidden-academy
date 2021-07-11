import { Lesson } from 'src/entities/lesson/services'
import { VideoIcon } from '@/icons'
import styled from 'styled-components'

export interface LessonProps {
  lesson: Lesson
}

const LessonItem: React.FC<LessonProps> = ({ lesson }) => {
  return (
    <StyledLesson className="bg-white p-20 border-radius d-f align-items-c pointer">
      <div className="icon">
        <VideoIcon />
      </div>
      <h4 contentEditable suppressContentEditableWarning className="ml-20">
        {lesson.name}
      </h4>
    </StyledLesson>
  )
}

export default LessonItem

const StyledLesson = styled.div`
  height: 50px;
  margin-bottom: 5px;

  h4 {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-black);
  }

  .icon {
    padding: 5px;
    background-color: var(--medium-light-blue);

    svg {
      vertical-align: middle;
    }
  }
`
