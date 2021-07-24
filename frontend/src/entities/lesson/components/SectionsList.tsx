import { useRouter } from 'next/router'
import { useSection } from '../hooks/useSection'
import SectionItem from '../layouts/SectionItem'
import LessonsList from './LessonsList'

const SectionsList = () => {
  const {
    query: { id },
  } = useRouter()
  const { sections, addSection } = useSection(id as string)

  return (
    <>
      {sections.map((section: any, index: number) => (
        <SectionItem key={index} section={section} index={index}>
          <div className="pl-10">
            <LessonsList sectionId={section.id} />
          </div>
        </SectionItem>
      ))}

      <button className="btn-primary mt-20" onClick={e => addSection(e)}>
        + Add section
      </button>
    </>
  )
}

export default SectionsList
