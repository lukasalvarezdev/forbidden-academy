import '@testing-library/jest-dom/extend-expect'
import { render, screen, withTestRouter } from 'tests'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

jest.mock('api/courses', () => ({
  createCourse: jest.fn(),
}))

test('should render error message', () => {
  render(withTestRouter(<CreateCourse />))
  userEvent.click(screen.getByTestId('create-btn'))
  expect(screen.getByRole('alert')).toBeInTheDocument()
  expect(screen.getByRole('alert')).toHaveTextContent(/all fields are mandatory/i)
})

test('should redirect to created course id', () => {
  ;(coursesAPI.createCourse as jest.Mock).mockImplementation(async () => [
    { id: 'name-example' },
    null,
  ])
  const mockRouter = {
    push: jest.fn(),
  }
  ;(useRouter as jest.Mock).mockReturnValue(mockRouter)

  render(withTestRouter(<CreateCourse />))

  // only mandatory fields
  userEvent.type(screen.getAllByLabelText('name'), 'Name example')
  userEvent.type(screen.getAllByLabelText('description'), 'Description example')

  userEvent.click(screen.getByTestId('create-btn'))

  expect(mockRouter.push as jest.Mock).toHaveBeenCalledWith('/name-example')
})
