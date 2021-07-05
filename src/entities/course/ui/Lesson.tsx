import { Lesson } from 'src/entities/shared-lesson/services'
import { videoIcon } from 'src/utils/static/icons'

export interface LessonProps {
  lesson: Lesson
}

const LessonItem: React.FC<LessonProps> = ({ lesson }) => {
  return (
    <div className="lesson">
      <div className="icon">{videoIcon}</div>
      <h4 contentEditable suppressContentEditableWarning>
        {lesson.name}
      </h4>
    </div>
  )
}

export default LessonItem
