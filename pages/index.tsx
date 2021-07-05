import styled from 'styled-components'
import { searchIcon, cartIcon, coursesIcon, bellIcon, starIcon } from 'src/utils/static/icons'
import Link from 'next/link'

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
    }
  }

  .icons {
    > a {
      font-size: 14px;
      color: var(--primary-gray);
    }

    .icon {
      margin-right: 30px;
      background-color: #fff;
      padding: 5px;

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

const StyledCourses = styled.div`
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  padding: 30px 0;

  .card {
    background-color: #fff;
    border-radius: 4px;

    .card-heading {
      width: 100%;
      height: 170px;
      padding: 20px 20px 0 20px;
    }

    .img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background-color: #5e5e5e;
    }

    .btn-primary {
      border-radius: 0 0 4px 4px;
      font-size: 14px;
      height: 45px;
    }

    .card-body {
      > p {
        font-size: 14px;
        color: var(--primary-gray);
      }

      .author {
        font-size: 12px;
        color: var(--primary-gray);
        font-weight: 600;
      }

      .rating {
        .rating-number {
          font-weight: 600;
        }

        .rating-quantity {
          font-size: 12px;
          color: var(--primary-gray);
        }

        svg {
          margin-right: 5px;
        }
      }
    }
  }
`

export default function Home() {
  return (
    <>
      <StyledHeader className="d-f align-items-c normal-shadow justify-content-sb">
        <div className="d-f align-items-c f-one">
          <div className="logo">
            <img src="logo.png" alt="Lukidemy logo" />
          </div>
          <div className="search-bar d-f align-items-c ml-30">
            <input type="text" placeholder="Search for anything" />
            <button className="icon d-f center-f ml-20">{searchIcon}</button>
          </div>
        </div>

        <div className="icons d-f align-items-c">
          <Link href="/">
            <a className="mr-30">Teach on lukidemy</a>
          </Link>
          <button className="icon">{cartIcon}</button>
          <button className="icon">{coursesIcon}</button>
          <button className="icon">{bellIcon}</button>
          <div className="profile d-f center-f">LU</div>
        </div>
      </StyledHeader>

      <StyledCourses className="container d-g">
        {Array.from(Array(13)).map((_, index) => (
          <div className="card" key={index}>
            <div className="card-heading">
              <div className="img"></div>
            </div>
            <div className="card-body p-20">
              <h4>The complete guide NodeJS course</h4>
              <p className="mt-10">
                In this learning journey, you will find out how to be more digital and how to
                digitize your current skills.
              </p>
              <span className="author mt-20 d-b">Lukas Alvarez</span>
              <div className="rating d-f align-items-c mt-10">
                <span className="rating-number mr-10">4.2</span>
                <div className="d-f align-items-c">
                  {starIcon}
                  {starIcon}
                  {starIcon}
                  {starIcon}
                </div>
                <span className="rating-quantity">(666)</span>
              </div>
            </div>
            <button className="btn-primary">Add to cart</button>
          </div>
        ))}
      </StyledCourses>
    </>
  )
}
