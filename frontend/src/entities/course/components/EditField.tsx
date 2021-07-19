import styled from 'styled-components'
import { EditIcon } from '@/icons'
import { useCourses } from '../store/context'

export interface EditFieldProps {
  fieldRef: React.RefObject<any>
}

const EditField: React.FC<EditFieldProps> = ({ fieldRef }) => {
  const { isEditMode } = useCourses()

  if (!isEditMode) return null

  return (
    <StyledEditField
      className="pointer absolute d-b"
      onClick={e => {
        e.preventDefault()
        fieldRef.current.focus()
      }}
    >
      <EditIcon />
    </StyledEditField>
  )
}

const StyledEditField = styled.span`
  color: red;
  left: -30px;

  svg {
    width: 16px;
    height: 16px;
    fill: white;
  }
`

export default EditField
