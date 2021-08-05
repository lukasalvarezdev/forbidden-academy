import Link from 'next/link'
import { StarIcon } from 'src/utils'
import styled from 'styled-components'
import { Course } from '@/entities/course/services'

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <StyledCourseCard className="bg-white border-radius-primary">
      <Link href={`/courses/${course.id}`}>
        <a className="card">
          <div className="card-heading w-100">
            <div className="img w-100 h-100 border-radius-primary"></div>
          </div>
          <div className="card-body p-20">
            <h4>{course.title}</h4>
            <p className="mt-10">{course.description}</p>
            <span className="author mt-20 d-b">Lukas Alvarez</span>

            <div className="rating d-f align-items-c mt-10">
              <span className="rating-number mr-10">4.2</span>
              <div className="d-f align-items-c">
                {Array.from(Array(course.rating)).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <span className="rating-quantity">(666)</span>
            </div>
          </div>
          <button className="btn-primary">Add to cart</button>
        </a>
      </Link>
    </StyledCourseCard>
  )
}

export default CourseCard

export const StyledCourseCard = styled.div`
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.005);
  }

  .card {
    .card-heading {
      width: 100%;
      height: 170px;
      padding: 20px 20px 0 20px;
    }

    .img {
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
