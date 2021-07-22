import * as React from 'react'
import { Lesson } from '../services'

export function useLesson(courseId: string) {
  const [sections, setSections] = React.useState([
    { name: 'Welcome to the project', id: '2jdsa', number_of_lessons: 29, courseId: 'edd' },
    { name: 'First project', id: '2jdsass', number_of_lessons: 29, courseId: 'edd' },
    { name: 'Introduction to Express', id: '2jdsasss', number_of_lessons: 29, courseId: 'eds' },
    { name: 'Second project', id: '2jdsassss', number_of_lessons: 29, courseId: 'edd' },
  ])

  const [lessons, setLessons] = React.useState<Lesson[]>([
    {
      name: 'First',
      description: 'Hello world',
      id: 'sdads',
      section_id: '2jdsa',
    },
    {
      name: 'First',
      description: 'Hello world',
      section_id: '2jdsa',
      id: 'sdads',
    },
    {
      name: 'First',
      description: 'Hello world',
      section_id: '2jdsa',
      id: 'sdads',
    },
    {
      name: 'First',
      description: 'Hello world',
      section_id: '2jdsa',
      id: 'sdads',
    },
    {
      name: 'First',
      description: 'Hello world',
      section_id: '2jdsa',
      id: 'sdads',
    },
    {
      name: 'First',
      description: 'Hello world',
      section_id: '2jdsa',
      id: 'sdads',
    },
    {
      name: 'First',
      description: 'Hello world',
      section_id: '2jdsa',
      id: 'sdads',
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

  function createLesson(lesson: any) {
    setLessons(lessons => [
      ...lessons,
      {
        ...lesson,
        name: 'First',
        description: 'Hello world',
        section_id: '2jdsa',
        id: 'sdads',
      },
    ])
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
