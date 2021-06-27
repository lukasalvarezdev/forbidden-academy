import styled from 'styled-components'

export const CourseContainer = styled.div`
  .fake-input {
    outline: none;
    background-color: transparent;
  }
`

export const CourseHeadingContainer = styled.div`
  padding: 4rem 0;

  .fake-input {
    color: white;
  }

  & > form {
    max-width: 65%;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
  }

  select {
    font-size: 1.4rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    outline: none;

    option {
      background-color: var(--primary-black);
    }
  }
`
export const CourseBodyContainer = styled.div`
  & > form {
    max-width: 65%;
  }

  p {
    line-height: 1.7;
    color: var(--primary-gray);
    font-weight: 300;
  }
`
