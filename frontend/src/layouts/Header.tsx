import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { SearchIcon, CartIcon, CoursesIcon, BellIcon, MenuIcon } from 'src/utils/static/icons'
import ResponsiveMenu from './ResponsiveMenu'

export default function Header() {
  const [openMenu, setIsOpenMenu] = React.useState(false)

  return (
    <StyledHeader className="d-f align-items-c normal-shadow justify-content-sb">
      <div className="d-f align-items-c f-one column">
        <Link href="/">
          <a className="mr-20 logo">
            <img src="/logo.png" alt="Lukidemy logo" />
          </a>
        </Link>
        <div className="desktop search-bar d-f align-items-c ml-30">
          <div className="field">
            <input type="text" placeholder="Search for anything" />
          </div>
          <button className="icon-primary d-f center-f ml-10">
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="desktop icons d-f align-items-c">
        <Link href="/courses/create">
          <a className="mr-20">Teach on lukidemy</a>
        </Link>
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

      <div className="icon-menu" onClick={() => setIsOpenMenu(!openMenu)}>
        <MenuIcon className="pointer" />
      </div>

      {openMenu ? <ResponsiveMenu /> : null}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 60px;
  background-color: #fff;
  padding: 0 20px;

  .icon-menu {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    .desktop.icons {
      display: none;
    }
    .icon-menu {
      display: block;
    }
    .desktop.search-bar {
      display: none;
    }
  }

  .logo img {
    width: 120px;
  }

  .search-bar {
    flex: 1;

    &.desktop {
      max-width: 40%;
    }

    .field {
      width: 100%;

      input {
        border-radius: 30px;
        padding-left: 2rem;
      }

      input ::placeholder {
        font-weight: 300;
      }
    }

    .icon-primary {
      background-color: var(--purple);
      border-radius: 50%;

      path {
        fill: white;
      }
    }
  }

  .icons {
    .icon-primary {
      margin-right: 20px;
    }

    &.desktop > a {
      font-size: 14px;
      color: var(--primary-gray);
    }

    .profile {
      width: 35px;
      height: 35px;
      background-color: #ff4a1d;
      color: white;
      border-radius: 50%;
      font-size: 14px;
      font-weight: 600;
    }
  }
`
