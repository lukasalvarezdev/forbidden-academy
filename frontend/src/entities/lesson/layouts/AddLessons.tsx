import * as React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { FilledArrowIcon, SectionNumberContainerIcon, VideoIcon, EditIcon } from '@/icons'
import { useSection } from '../hooks/useSection'
import { useLesson } from '../hooks/useLesson'

const AddLessonForm = () => {
  const {
    query: { id },
  } = useRouter()
  const {
    sections,
    addSection,
    editSection,
    onSaveSection,
    openedSection,
    setOpenedSection,
    editableSection,
    setEditableSection,
    sectionTitleRef,
  } = useSection(id as string)
  const {
    lessons,
    editableLesson,
    setEditableLesson,
    lessonItemRef,
    addLesson,
    editLesson,
    onSaveLesson,
  } = useLesson()

  return (
    <CourseContainer className="p-20 normal-shadow">
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
                  await setEditableSection(section.id)
                  sectionTitleRef.current?.focus()
                }}
                className="d-f align-items-c"
              >
                <EditIcon className="mr-10 pointer" />
              </span>
              {editableSection === section.id ? (
                <input
                  type="text"
                  defaultValue={section.name}
                  className="section-name input-primary"
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
                        onChange={e => editLesson(e, section.id)}
                        ref={lessonItemRef}
                        onBlur={() => {
                          setEditableLesson('')
                          onSaveLesson(lesson.id)
                        }}
                      />
                    ) : (
                      <h4 className="ml-20">{lesson.name}</h4>
                    )}
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
  margin: 0 auto;
  border-radius: 0 4px 4px 4px;

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
