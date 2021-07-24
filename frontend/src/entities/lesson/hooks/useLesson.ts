import * as React from 'react'
import { useStateWithPromise } from 'src/hooks/useStateWithPromise'

export function useLesson() {
  const [lessons, setLessons] = React.useState<any>([])
  const [editableLesson, setEditableLesson] = useStateWithPromise<string>('')
  const lessonItemRef = React.useRef<HTMLInputElement>(null)

  function addLesson(e: any, id: string) {
    e.preventDefault()

    setLessons((lessons: any) => [
      ...lessons,
      {
        name: 'Lesson name',
        id: Math.random().toString(),
        section_id: id,
      },
    ])
  }

  function editLesson(e: any, id: string) {
    setLessons(
      lessons.map((lesson: any) =>
        lesson.id === id ? { ...lesson, name: e.target.value } : lesson,
      ),
    )
  }

  function onSaveLesson(id: string) {
    console.log('Saved!', id)
  }

  return {
    lessons,
    setLessons,
    editableLesson,
    setEditableLesson,
    lessonItemRef,
    addLesson,
    editLesson,
    onSaveLesson,
  }
}
