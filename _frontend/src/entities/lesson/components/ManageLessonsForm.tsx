import styled from 'styled-components'
import SectionsList from 'src/entities/lesson/components/SectionsList'

const SectionsTab = () => {
  return (
    <CourseContainer className="p-20 normal-shadow">
      <h3 className="mb-20">Add lessons</h3>

      <SectionsList />
    </CourseContainer>
  )
}

export default SectionsTab

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
`
