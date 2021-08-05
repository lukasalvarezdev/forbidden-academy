import * as React from 'react'
import Link from 'next/link'
import { StyledHeader, StyledResponsiveMenu } from './styles'
import { SearchIcon, CartIcon, CoursesIcon, BellIcon, MenuIcon } from 'src/utils'

export default function Header() {
  const [openMenu, setIsOpenMenu] = React.useState(false)

  return (
    <StyledHeader className="d-f align-items-c normal-shadow justify-content-sb bg-white">
      <div className="d-f align-items-c f-one column">
        <Link href="/">
          <a className="mr-20 logo">
            <img src="/logo.png" alt="Lukidemy logo" />
          </a>
        </Link>
        <div className="desktop search-bar d-f align-items-c ml-30 f-one">
          <div className="field w-100">
            <input type="text" placeholder="Search for anything" className="pl-20" />
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

      <div className="icon-menu d-n" onClick={() => setIsOpenMenu(!openMenu)}>
        <MenuIcon className="pointer" />
      </div>

      {openMenu ? <ResponsiveMenu /> : null}
    </StyledHeader>
  )
}

const ResponsiveMenu = () => (
  <StyledResponsiveMenu className="normal-shadow">
    <div className="search-bar d-f align-items-c w-100 mb-30 justfify-space-between m-0-auto">
      <div className="field w-100">
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
