import { Lesson } from 'src/entities/shared-lesson/services'

export interface LessonProps {
  lesson: Lesson
}

const LessonItem: React.FC<LessonProps> = ({ lesson }) => {
  return (
    <div>
      <input type="text" defaultValue={lesson.name} />
      <input type="text" defaultValue={lesson.description} />
      <p>{lesson.posted_time}</p>
    </div>
  )
}

export default LessonItem
