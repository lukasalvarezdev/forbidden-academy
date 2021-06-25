import * as React from 'react'
import { Lesson } from '../services'

export function useLesson(courseId: string) {
  const [sections, setSections] = React.useState([
    { name: 'First section', id: '2jdsa', number_of_lessons: 29, courseId: 'edd' },
    { name: 'First section', id: '2jdsas', number_of_lessons: 29, courseId: 'edd' },
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
  ])

  function createSection(name: string) {
    setSections(sections => [...sections, { name, id: 'das', number_of_lessons: 22, courseId }])
  }

  function updateSection(name: string, index: number) {
    const sectionsCopy = [...sections]
    sectionsCopy[index] = { ...sectionsCopy[index], name }
    setSections(sectionsCopy)
  }

  function createLesson(lesson: Lesson) {
    setLessons(lessons => [...lessons, lesson])
  }

  function updateLesson(rewrites: Partial<Lesson>, index: number) {
    const lessonsCopy = [...lessons]
    lessonsCopy[index] = { ...lessonsCopy[index], ...rewrites }
    setLessons(lessonsCopy)
  }

  return {
    sections,
    setSections,
    lessons,
    setLessons,
    createSection,
    updateSection,
    createLesson,
    updateLesson,
  }
}
