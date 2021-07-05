import styled from 'styled-components'

export const CourseContainer = styled.div`
  position: relative;

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

export const CourseInfoCardContainer = styled.div`
  background-color: #fff;
  border-radius: 3px;
  width: 390px;
  position: fixed;
  top: calc(40px + 60px);
  margin-left: ${props => {
    // @ts-ignore
    return `${props['custom-body-width'] + 30}px`
  }};
  border-radius: 4px;

  .img {
    width: 100%;
    height: 200px;
    background-color: red;
    border-radius: 4px 4px 0px 0px;
  }

  h3 {
    font-size: 3.6rem;
    font-weight: 800;
  }

  li {
    font-size: 1.4rem;
  }
`
