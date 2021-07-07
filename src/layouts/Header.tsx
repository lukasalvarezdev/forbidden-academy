import styled from 'styled-components'
import Link from 'next/link'
import { SearchIcon, CartIcon, CoursesIcon, BellIcon } from 'src/utils/static/icons'

export default function Header() {
  return (
    <StyledHeader className="d-f align-items-c normal-shadow justify-content-sb">
      <div className="d-f align-items-c f-one">
        <Link href="/">
          <a className="mr-20 logo">
            <img src="/logo.png" alt="Lukidemy logo" />
          </a>
        </Link>
        <div className="search-bar d-f align-items-c ml-30">
          <div className="field">
            <input type="text" placeholder="Search for anything" />
          </div>
          <button className="icon-primary d-f center-f ml-20">
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="icons d-f align-items-c">
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
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 60px;
  background-color: #fff;
  padding: 0 20px;

  .logo img {
    width: 120px;
  }

  .search-bar {
    flex: 1;

    .field {
      width: 100%;
      max-width: 40%;

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
    > a {
      font-size: 14px;
      color: var(--primary-gray);
    }

    .icon-primary {
      margin-right: 20px;
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
