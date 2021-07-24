import { FilledArrowIcon, SectionNumberContainerIcon, EditIcon } from '@/icons'
import styled from 'styled-components'
import { useSection, Section } from '../services'

export interface SectionItemProps {
  section: Section
  index: number
  children: React.ReactNode
}

const SectionItem: React.FC<SectionItemProps> = ({ section, index, children }) => {
  const {
    editSection,
    onSaveSection,
    openedSection,
    setOpenedSection,
    editableSection,
    setEditableSection,
    sectionTitleRef,
  } = useSection(section.id)
  console.log(children)

  return (
    <div className="mb-10">
      <StyledSectionInfo className="p-20 border-radius-primary d-f align-items-c justify-content-sb relative bg-white normal-shadow">
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
      </StyledSectionInfo>

      {openedSection === section.id ? children : null}
    </div>
  )
}

export default SectionItem

const StyledSectionInfo = styled.div`
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
`
