import '@testing-library/jest-dom/extend-expect'
import { render, screen, act, waitFor, withTestRouter } from 'tests'
import userEvent from '@testing-library/user-event'
import { ManageCourse } from 'views/ManageCourse'
import * as coursesAPI from 'api/courses'
import { useCourseForm } from 'hooks/useCourseForm'
import { CourseProvider } from 'context/course.context'

jest.mock('api/courses', () => ({
  getCourse: jest.fn(),
  updateCourse: jest.fn(),
}))

test('course state should have values from API', async () => {
  const courseExample = {
    name: 'Name example',
    description: 'Description example',
    id: 'id-example',
  }
  const ERROR_EXAMPLE_TEXT = 'Error'
  ;(coursesAPI.getCourse as jest.Mock).mockImplementation((id?: string) =>
    id ? [courseExample, null] : [null, ERROR_EXAMPLE_TEXT],
  )

  let result: ReturnType<typeof useCourseForm>
  function TestComponent() {
    result = useCourseForm()
    return null
  }

  render(withTestRouter(<TestComponent />))
  expect(result.course.id).toBeUndefined()

  await act(() => result.getCourse(undefined as string))
  await waitFor(() => expect(result.message).toBe(ERROR_EXAMPLE_TEXT))

  await act(() => result.getCourse(courseExample.id))

  await waitFor(() => expect(result.course).toBe(courseExample))
})

test('should show saved alert', async () => {
  ;(coursesAPI.getCourse as jest.Mock).mockReturnValue([{ name: 'e', description: 'e' }, null])
  ;(coursesAPI.updateCourse as jest.Mock).mockReturnValue([true, null])
  await act(async () => {
    render(
      withTestRouter(
        <CourseProvider>
          <ManageCourse />
        </CourseProvider>,
        { query: { courseId: 'example' } },
      ),
    )
  })

  act(() => userEvent.click(screen.getByTestId('update-btn')))

  await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(/saved/i))
})
