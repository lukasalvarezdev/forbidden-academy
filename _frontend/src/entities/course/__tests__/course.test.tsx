import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from 'src/testUtils'
import ManageCourse from 'src/entities/course/views/ManageCourse'
import { withTestRouter } from 'src/utils/testUtils/withTestRouter'

describe('Manage course page', () => {
  test('should not show lessons tab', async () => {
    const { queryByTestId } = render(
      withTestRouter(<ManageCourse />, {
        query: {},
      }),
      {},
    )
    const lessonTabBtn = queryByTestId('lessons-tab-btn')
    expect(lessonTabBtn).not.toBeInTheDocument()
  })

  test('should open lesson tab', async () => {
    const { queryByTestId, queryByRole } = render(
      withTestRouter(<ManageCourse />, {
        query: { id: '2' },
      }),
      {},
    )
    const lessonTabBtn = queryByTestId('lessons-tab-btn')
    fireEvent.click(lessonTabBtn)
    expect(queryByRole('create-course')).not.toBeInTheDocument()
  })
})
