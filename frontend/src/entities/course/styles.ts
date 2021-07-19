import styled from 'styled-components'

export const CourseContainer = styled.div`
  position: relative;

  .fake-input {
    outline: none;
    background-color: transparent;
  }

  .info-65 {
    max-width: 65%;

    @media screen and (max-width: 1200px) {
      max-width: 100%;
    }
  }
`
