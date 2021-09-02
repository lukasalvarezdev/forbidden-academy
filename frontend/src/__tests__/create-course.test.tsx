import '@testing-library/jest-dom/extend-expect'
import { render, screen, act, waitFor } from 'tests'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/router'
import { CreateCourse } from 'views/CreateCourse'
import * as coursesAPI from 'api/courses'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

jest.mock('api/courses', () => ({
  createCourse: jest.fn(),
}))

describe('Create course', () => {
  beforeEach(() => (useRouter as jest.Mock).mockReset())

  test('should render error message', () => {
    ;(useRouter as jest.Mock).mockReturnValue({ push: () => {} })
    render(<CreateCourse />)
    userEvent.click(screen.getByTestId('create-btn'))
    expect(screen.getByText(/all fields are mandatory/i)).toBeInTheDocument()
  })

  test('should redirect to created course id', async () => {
    ;(coursesAPI.createCourse as jest.Mock).mockImplementation(async () => [
      { id: 'name-example' },
      null,
    ])

    const mockRouter = {
      push: jest.fn(),
    }
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
    const courseExample = {
      name: 'Name example',
      description: 'Description example',
    }

    render(<CreateCourse />)
    userEvent.type(screen.getByLabelText(/name/i), courseExample.name)
    userEvent.type(screen.getByLabelText('Description'), courseExample.description)

    act(() => userEvent.click(screen.getByTestId('create-btn')))

    await waitFor(() => {
      expect(coursesAPI.createCourse as jest.Mock).toHaveBeenCalledWith(courseExample)
      expect(mockRouter.push as jest.Mock).toHaveBeenCalledWith('/courses/name-example')
    })
  })
})
