import * as React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { FilledArrowIcon, SectionNumberContainerIcon, VideoIcon, EditIcon } from '@/icons'
import { useStateWithPromise } from 'src/hooks/useStateWithPromise'

const AddLessonForm = () => {
  const {
    query: { id },
  } = useRouter()
  const [openedSection, setOpenedSection] = React.useState('')
  const [sections, setSections] = React.useState<any>([])
  const [lessons, setLessons] = React.useState<any>([])
  const [editableSection, setEditableSection] = useStateWithPromise<string>('')
  const sectionTitleRef = React.useRef<HTMLInputElement>(null)

  function addLesson(e: any, id: string) {
    e.preventDefault()

    setLessons((lessons: any) => [
      ...lessons,
      {
        name: 'el pepe nuevo',
        id: Math.random().toString(),
        section_id: id,
      },
    ])
  }

  function addSection(e: any) {
    e.preventDefault()

    setSections((sections: any) => [
      ...sections,
      {
        name: 'el section nuevo',
        id: Math.random().toString(),
        course_id: id as string,
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

  return (
    <CourseContainer className="p-20 border-radius-primary normal-shadow">
      <h3 className="mb-20">Add lessons</h3>
      {sections.map((section: any, index: number) => (
        <div key={index} className="section mb-10">
          <div className="section-info p-20 border-radius-primary d-f align-items-c justify-content-sb relative bg-white normal-shadow">
            <div className="number-container absolute">
              <SectionNumberContainerIcon />
              <span className="absolute fc-white font-semi-bold">{index}</span>
            </div>
            <div className="d-f align-items-c">
              <span
                onClick={async () => {
                  await setEditableSection(editableSection === section.id ? '' : section.id)
                  sectionTitleRef.current?.focus()
                }}
              >
                <EditIcon className="mr-10 pointer" />
              </span>
              {editableSection === section.id ? (
                <input
                  type="text"
                  defaultValue={section.name}
                  className="section-name"
                  onChange={e => editSection(e, section.id)}
                  ref={sectionTitleRef}
                  onBlur={() => {
                    setEditableSection('')
                    onSaveSection(section.id)
                  }}
                />
              ) : (
                <h3>{section.name}</h3>
              )}
            </div>
            <div
              className="d-f f-one align-items-c justify-content-e h-100 pointer"
              onClick={() => setOpenedSection(openedSection === section.id ? '' : section.id)}
            >
              <FilledArrowIcon />
            </div>
          </div>

          {openedSection === section.id ? (
            <div className="lessons pl-10">
              {lessons.map((lesson: any, index: number) =>
                lesson.section_id === section.id ? (
                  <div
                    className="lesson bg-white p-20 border-radius d-f align-items-c pointer normal-shadow border-radius-primary"
                    key={index}
                  >
                    <div className="icon">
                      <VideoIcon />
                    </div>
                    <h4 className="ml-20">{lesson.name}</h4>
                  </div>
                ) : null,
              )}
              <button className="btn-primary -gray " onClick={e => addLesson(e, section.id)}>
                + Add lesson
              </button>
            </div>
          ) : null}
        </div>
      ))}

      <button className="btn-primary mt-20" onClick={e => addSection(e)}>
        + Add section
      </button>
    </CourseContainer>
  )
}

export default AddLessonForm

export const CourseContainer = styled.div`
  background-color: #fff;
  width: 95%;
  margin: 3rem auto;

  .btn-primary {
    height: 40px;
    width: auto;
    padding: 0 20px;
    font-size: 14px;
    font-weight: 400;

    &.-gray {
      height: 34px;
      padding: 0 15px;
      font-size: 12px;
      margin-top: 5px;
    }
  }

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

  .lesson {
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
  }
`
