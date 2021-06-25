import { useLesson } from 'src/entities/shared-lesson/services'
import WhatYouWillLearn from '../components/WhatYouWillLearn'
import { useEditableInput } from '../services'

const CourseBody = () => {
  const handleChange = useEditableInput()
  const { sections, lessons } = useLesson('pepe')

  return (
    <form onChange={handleChange}>
      <div>
        <label htmlFor="xd">Description</label>
        <input type="text" name="description" />
      </div>

      <WhatYouWillLearn />

      {sections.map((section, index) => (
        <div key={index}>
          <h2>{section.name}</h2>
          <p>{section.number_of_lessons} Lessons</p>

          {lessons.map((lesson, index) =>
            lesson.section === section.id ? (
              <div key={index}>
                <p>{lesson.name}</p>
                <p>{lesson.description}</p>
                <p>{lesson.posted_time}</p>
              </div>
            ) : null,
          )}
        </div>
      ))}
    </form>
  )
}

export default CourseBody
