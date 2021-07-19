import React from 'react'
import styled from 'styled-components'

const TabsCarousel = () => {
  const [currentTab, setCurrentTab] = React.useState('description')
  const tabs = ['lessons', 'description']

  return (
    <StyledTabsCarousel className="d-f bg-white align-items-c">
      {tabs.map(tab => (
        <div
          className={`tab ${currentTab === tab ? 'current' : ''}`}
          key={tab}
          onClick={e => {
            e.preventDefault()
            setCurrentTab(tab)
          }}
        >
          <span>{tab}</span>
        </div>
      ))}
    </StyledTabsCarousel>
  )
}

export default TabsCarousel

const StyledTabsCarousel = styled.div`
  border-bottom: 1px solid var(--medium-blue);
  padding: 0 20px;

  .tab {
    padding: 15px 5px;
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-gray);
    text-transform: capitalize;

    &.current {
      color: var(--primary-black);
      border-bottom: 2px solid var(--primary-black);
    }
  }

  .lesson-duration {
    background-color: var(--medium-blue);
    border-radius: 30px;
    padding: 5px 15px;
    font-size: 14px;

    @media screen and (max-width: 900px) {
      margin: 0;
    }
  }
`
