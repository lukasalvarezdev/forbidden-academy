import Link from 'next/link'
import { SearchIcon, CartIcon, CoursesIcon, BellIcon } from 'src/utils/static/icons'
import styled from 'styled-components'

const ResponsiveMenu = () => {
  return (
    <StyledResponsiveMenu className="normal-shadow">
      <div className="search-bar d-f align-items-c ml-30">
        <div className="field">
          <input type="text" placeholder="Search for anything" />
        </div>
        <button className="icon-primary d-f center-f ml-20">
          <SearchIcon />
        </button>
      </div>

      <div className="icons">
        <Link href="/courses/create">
          <a className="mr-20">Teach on lukidemy</a>
        </Link>
        <div className="d-f center-f">
          <button className="icon-primary">
            <CartIcon />
          </button>
          <button className="icon-primary">
            <CoursesIcon />
          </button>
          <button className="icon-primary">
            <BellIcon />
          </button>
          <div className="profile d-f center-f">LU</div>
        </div>
      </div>
    </StyledResponsiveMenu>
  )
}

export default ResponsiveMenu

const StyledResponsiveMenu = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #fff;
    z-index: 100;
    border-radius: 10px;
    padding: 40px 20px;
    width: 95%;
    top: 60px;

    .icons {
      display: block;

      > a {
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background-color: var(--purple);
        color: white;
        text-align: center;
        width: 100%;
        border-radius: 4px;
        font-weight: 600;
        margin: 0;
        margin-bottom: 20px;
      }
    }

    .search-bar {
      display: flex;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 30px;
      justify-content: space-between;

      .field {
        max-width: 100%;
      }
    }
  }
`
