import styled from 'styled-components'
import Link from 'next/link'
import { SearchIcon, CartIcon, CoursesIcon, BellIcon } from 'src/utils/static/icons'

const StyledHeader = styled.header`
  height: 60px;
  background-color: #fff;
  padding: 0 20px;

  .logo img {
    width: 120px;
  }

  .search-bar {
    flex: 1;

    input {
      height: 40px;
      background-color: var(--light-blue);
      border: 0.5px solid var(--primary-gray);
      border-radius: 4px;
      width: 100%;
      padding-left: 15px;
      font-size: 14px;
      max-width: 40%;
      outline: none;

      &::placeholder {
        font-weight: 300;
      }
    }

    .icon {
      background-color: var(--purple);
      border-radius: 50%;
      height: 40px;
      flex: auto;
      flex-basis: 40px;
      flex-grow: 0;
      flex-shrink: 0;

      svg {
        transform: scale(0.9);
      }
    }
  }

  .icons {
    > a {
      font-size: 14px;
      color: var(--primary-gray);
    }

    .icon {
      margin-right: 20px;
      background-color: #fff;
      padding: 5px;

      svg {
        transform: scale(0.9);
      }
      svg path {
        fill: var(--primary-black);
      }
    }
    .profile {
      width: 40px;
      height: 40px;
      background-color: #ff4a1d;
      color: white;
      border-radius: 50%;
      font-size: 14px;
      font-weight: 600;
    }
  }
`

export default function Header() {
  return (
    <StyledHeader className="d-f align-items-c normal-shadow justify-content-sb">
      <div className="d-f align-items-c f-one">
        <div className="logo">
          <img src="/logo.png" alt="Lukidemy logo" />
        </div>
        <div className="search-bar d-f align-items-c ml-30">
          <input type="text" placeholder="Search for anything" />
          <button className="icon d-f center-f ml-20">
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="icons d-f align-items-c">
        <Link href="/">
          <a className="mr-20">Teach on lukidemy</a>
        </Link>
        <button className="icon">
          <CartIcon />
        </button>
        <button className="icon">
          <CoursesIcon />
        </button>
        <button className="icon">
          <BellIcon />
        </button>
        <div className="profile d-f center-f">LU</div>
      </div>
    </StyledHeader>
  )
}
