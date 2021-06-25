import { useLesson } from 'src/entities/shared-lesson/services'
import WhatYouWillLearn from '../components/WhatYouWillLearn'
import { useEditableInput } from '../services'

const CourseBody = () => {
  const handleChange = useEditableInput()
  const { sections, lessons, createSection, createLesson } = useLesson('pepe')

  return (
    <>
      <form onChange={handleChange}>
        <div>
          <label htmlFor="xd">Description</label>
          <input type="text" name="description" />
        </div>

        <WhatYouWillLearn />
      </form>
      <div>
        {sections.map((section, index) => (
          <div key={index}>
            <input type="text" defaultValue={section.name} />
            <p>{section.number_of_lessons} Lessons</p>

            {lessons.map((lesson, index) =>
              lesson.section === section.id ? (
                <div key={index}>
                  <input type="text" defaultValue={lesson.name} />
                  <input type="text" defaultValue={lesson.description} />
                  <p>{lesson.posted_time}</p>
                </div>
              ) : null,
            )}
          </div>
        ))}

        <button
          onClick={e => {
            e.preventDefault()
            createSection('El pepe 99')
          }}
        >
          Create section
        </button>
        <button
          onClick={e => {
            e.preventDefault()
            createLesson({
              name: 'Class 1',
              description: 's',
              section: '2jdsa',
            })
          }}
        >
          Create lesson
        </button>
      </div>
    </>
  )
}

export default CourseBody
