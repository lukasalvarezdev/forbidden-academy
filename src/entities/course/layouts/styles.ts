import styled from 'styled-components'

export const CourseHeadingContainer = styled.div`
  padding: 4rem 0;

  .fake-input {
    outline: none;
    background-color: transparent;
    color: white;
  }

  & > form {
    max-width: 65%;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
  }

  p {
    font-family: var(--font-open);
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
