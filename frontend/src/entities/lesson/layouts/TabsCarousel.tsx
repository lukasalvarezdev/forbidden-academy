import React from 'react'
import styled from 'styled-components'

const TABS = ['lessons', 'description']

const TabsCarousel = () => {
  const [currentTab, setCurrentTab] = React.useState('description')

  return (
    <StyledTabsCarousel className="d-f bg-white align-items-c">
      {TABS.map(tab => (
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
`
