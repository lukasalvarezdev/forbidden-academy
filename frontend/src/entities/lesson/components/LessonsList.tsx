import { useLesson } from '../hooks/useLesson'
import LessonItem from './LessonItem'

const LessonsList = ({ sectionId }: { sectionId: string }) => {
  const { lessons, addLesson } = useLesson()

  return (
    <>
      {lessons.map((lesson: any, index: number) =>
        lesson.section_id === sectionId ? (
          <LessonItem lesson={lesson} sectionId={sectionId} key={index} />
        ) : null,
      )}
      <button className="btn-primary -gray " onClick={e => addLesson(e, sectionId)}>
        + Add lesson
      </button>
    </>
  )
}

export default LessonsList
