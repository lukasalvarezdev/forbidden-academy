import Header from 'src/layouts/Header'
import styled from 'styled-components'
import { starIcon } from 'src/utils/static/icons'
import Link from 'next/link'

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
      <Header />

      <StyledCourses className="container d-g">
        {Array.from(Array(13)).map((_, index) => (
          <Link key={index} href={`/courses/${index}`}>
            <a className="card">
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
            </a>
          </Link>
        ))}
      </StyledCourses>
    </>
  )
}
