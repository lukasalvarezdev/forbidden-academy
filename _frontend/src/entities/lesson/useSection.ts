import * as React from 'react'
import { useStateWithPromise } from 'src/hooks/useStateWithPromise'
import { Section } from 'src/entities/lesson/services'

export function useSection(courseId: string) {
  const [sections, setSections] = React.useState<Section[]>([])
  const [openedSection, setOpenedSection] = React.useState('')
  const [editableSection, setEditableSection] = useStateWithPromise<string>('')
  const sectionTitleRef = React.useRef<HTMLInputElement>(null)

  function addSection(e: any) {
    e.preventDefault()

    setSections((sections: any) => [
      ...sections,
      {
        name: 'Section name',
        id: Math.random().toString(),
        course_id: courseId as string,
      },
    ])
  }

  function editSection(e: any, id: string) {
    setSections(
      sections.map((sec: any) => (sec.id === id ? { ...sec, name: e.target.value } : sec)),
    )
  }

  function onSaveSection(id: string) {
    console.log('Saved!', id)
  }

  return {
    sections,
    setSections,
    addSection,
    editSection,
    onSaveSection,
    openedSection,
    setOpenedSection,
    editableSection,
    setEditableSection,
    sectionTitleRef,
  }
}
