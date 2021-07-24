import { VideoIcon, EditIcon } from '@/icons'
import styled from 'styled-components'
import { useLesson } from '../hooks/useLesson'

export interface LessonItemProps {
  lesson: any
  sectionId: string
}

const LessonItem: React.FC<LessonItemProps> = ({ lesson, sectionId }) => {
  const { editableLesson, setEditableLesson, lessonItemRef, editLesson, onSaveLesson } =
    useLesson()

  return (
    <StyledLesson className="bg-white p-20 border-radius d-f align-items-c pointer normal-shadow border-radius-primary">
      <div className="icon">
        <VideoIcon />
      </div>
      <span
        className="d-f align-items-c"
        onClick={async () => {
          await setEditableLesson(lesson.id)
          lessonItemRef.current?.focus()
        }}
      >
        <EditIcon className="ml-10 pointer" />
      </span>
      {editableLesson === lesson.id ? (
        <input
          type="text"
          defaultValue={lesson.name}
          className="section-name input-primary"
          onChange={e => editLesson(e, sectionId)}
          ref={lessonItemRef}
          onBlur={() => {
            setEditableLesson('')
            onSaveLesson(lesson.id)
          }}
        />
      ) : (
        <h4 className="ml-20">{lesson.name}</h4>
      )}
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

    @media screen and (max-width: 1200px) {
      font-size: 1.4rem;
    }
  }

  .icon {
    padding: 5px;
    background-color: var(--medium-light-blue);

    svg {
      vertical-align: middle;
    }
  }
`
