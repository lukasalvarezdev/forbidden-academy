import { useLesson } from 'src/entities/shared-lesson/services'
import Lesson from '../ui/Lesson'

const Sections = () => {
  const { sections, lessons, createSection, createLesson } = useLesson('pepe')

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index}>
          <input type="text" defaultValue={section.name} />
          <p>{section.number_of_lessons} Lessons</p>

          {lessons.map((lesson, index) =>
            lesson.section === section.id ? <Lesson lesson={lesson} key={index} /> : null,
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
  )
}

export default Sections
