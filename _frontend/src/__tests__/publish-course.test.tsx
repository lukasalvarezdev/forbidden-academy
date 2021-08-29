import '@testing-library/jest-dom/extend-expect'
import { render, screen, act, waitFor, withTestRouter } from 'tests'
import userEvent from '@testing-library/user-event'
import { ManageCourse } from 'views/ManageCourse'
import * as coursesAPI from 'api/courses'
import { useCourseForm } from 'hooks/useCourseForm'
import { CourseProvider } from 'context/course.context'

jest.mock('api/courses', () => ({
  getCourse: jest.fn(),
  publishCourse: jest.fn(),
}))

test('should put course as published', async () => {
  ;(coursesAPI.publishCourse as jest.Mock).mockReturnValue([true, null])
  let result: ReturnType<typeof useCourseForm>
  function TestComponent() {
    result = useCourseForm()
    return null
  }

  render(withTestRouter(<TestComponent />))

  await act(() => result.handlePublish({ preventDefault: () => {} } as any))

  await waitFor(() => expect(result.course.published).toBeTruthy())
})

test('should show saved alert', async () => {
  ;(coursesAPI.getCourse as jest.Mock).mockReturnValue([{ name: 'e', description: 'e' }, null])
  ;(coursesAPI.publishCourse as jest.Mock).mockReturnValue([true, null])
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

  act(() => userEvent.click(screen.getByTestId('publish-btn')))

  await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(/published/i))
})
