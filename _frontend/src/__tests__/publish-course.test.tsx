import '@testing-library/jest-dom/extend-expect'
import { render, screen, act, waitFor, withTestRouter } from 'tests'
import userEvent from '@testing-library/user-event'
import { ManageCourse } from 'views/ManageCourse'
import * as coursesAPI from 'api/courses'
import { useCourseForm } from 'hooks/useCourseForm'
import { CourseProvider } from 'context/course.context'
import { Course } from 'models/Course'

const completeCourseExample: Course = {
  description: 'some desc',
  id: '',
  language: 'english',
  name: 'Some name',
  price: 0,
  published: false,
  short_description: 'Some short desc',
  skill_level: 'advanced',
  user_id: '',
}
const incompleteCourseExample: Pick<Course, 'description' | 'name'> = {
  name: 'e',
  description: 'e',
}

jest.mock('api/courses', () => ({
  getCourse: jest.fn(),
  publishCourse: jest.fn(),
}))

test('should fail if the course is not fully filled', async () => {
  ;(coursesAPI.publishCourse as jest.Mock).mockReturnValue([true, null])
  let result: ReturnType<typeof useCourseForm>
  function TestComponent() {
    result = useCourseForm()
    return null
  }

  render(withTestRouter(<TestComponent />))

  await act(() => result.handlePublish({ preventDefault: () => {} } as any))

  await waitFor(() => expect(result.course.published).toBeFalsy())
})

test('should put course as published', async () => {
  ;(coursesAPI.getCourse as jest.Mock).mockReturnValue([completeCourseExample, null])
  ;(coursesAPI.publishCourse as jest.Mock).mockReturnValue([true, null])
  let result: ReturnType<typeof useCourseForm>
  function TestComponent() {
    result = useCourseForm()
    return null
  }

  render(withTestRouter(<TestComponent />))

  await act(() => result.getCourse(''))
  await act(() => result.handlePublish({ preventDefault: () => {} } as any))

  await waitFor(() => expect(result.course.published).toBeTruthy())
})

test('should show saved alert', async () => {
  ;(coursesAPI.getCourse as jest.Mock).mockImplementation((id: string) =>
    id === 'complete-id' ? [completeCourseExample, null] : [incompleteCourseExample, null],
  )
  ;(coursesAPI.publishCourse as jest.Mock).mockReturnValue([true, null])

  let rerender: any
  await act(async () => {
    const { rerender: jestRerender } = render(
      withTestRouter(
        <CourseProvider>
          <ManageCourse />
        </CourseProvider>,
        { query: { courseId: 'incomplete-id' } },
      ),
    )

    rerender = jestRerender
  })
  act(() => userEvent.click(screen.getByTestId('publish-btn')))
  await waitFor(() =>
    expect(screen.getByRole('alert')).toHaveTextContent(/all fields are mandatory/i),
  )

  rerender &&
    (await act(async () => {
      rerender(
        withTestRouter(
          <CourseProvider>
            <ManageCourse />
          </CourseProvider>,
          { query: { courseId: 'complete-id' } },
        ),
      )
    }))
  act(() => userEvent.click(screen.getByTestId('publish-btn')))

  await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(/published/i))
})
