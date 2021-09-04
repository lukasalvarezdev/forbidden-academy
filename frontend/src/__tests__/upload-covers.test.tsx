import '@testing-library/jest-dom/extend-expect'
import { render, screen, act, waitFor, withTestRouter } from 'tests'
import userEvent from '@testing-library/user-event'
import { ManageCourse } from 'views/ManageCourse'
import * as coursesAPI from 'api/courses'
import { useCourseForm } from 'hooks/useCourseForm'
import { CourseProvider } from 'context/course.context'

jest.mock('api/courses', () => ({
  getCourse: jest.fn(),
}))

test('should upload cover image and video', async () => {
  ;(coursesAPI.getCourse as jest.Mock).mockReturnValue([{ name: 'e', description: 'e' }, null])

  const image = new File(['hello'], 'hello.png', { type: 'image/png' })
  const video = new File(['hello'], 'hello.mp4', { type: 'video/mp4' })
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
  const imageInput = screen.getByLabelText(/cover image/i)
  userEvent.upload(imageInput, image)

  expect((imageInput as HTMLInputElement).files[0]).toStrictEqual(image)
  expect((imageInput as HTMLInputElement).files.item(0)).toStrictEqual(image)
  expect((imageInput as HTMLInputElement).files).toHaveLength(1)

  const videoInput = screen.getByLabelText(/cover video/i)
  userEvent.upload(videoInput, video)
  expect((videoInput as HTMLInputElement).files[0]).toStrictEqual(video)
  expect((videoInput as HTMLInputElement).files.item(0)).toStrictEqual(video)
  expect((videoInput as HTMLInputElement).files).toHaveLength(1)
})
