import styled from 'styled-components'

export const CourseContainer = styled.div`
  .fake-input {
    outline: none;
    background-color: transparent;
  }

  .info-65 {
    max-width: 65%;
  }
`

export const CourseHeadingContainer = styled.div`
  padding: 4rem 0;

  .fake-input {
    color: white;
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
  p {
    line-height: 1.7;
    color: var(--primary-gray);
    font-weight: 300;
  }
`
export const WhatYouWillLearnContainer = styled.div`
  border-radius: 3px;

  p {
    text-transform: capitalize;
  }
`
