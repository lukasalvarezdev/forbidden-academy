import '@testing-library/jest-dom/extend-expect'
import { render, act, waitFor, withTestRouter, screen } from 'tests'
import { useAlerts } from 'hooks/useAlerts'
import { Alerts } from 'components/Alerts'
import userEvent from '@testing-library/user-event'

describe('useAlert hook', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.clearAllTimers()
  })

  test('should add alert', async () => {
    let result: ReturnType<typeof useAlerts>
    function TestComponent() {
      result = useAlerts()
      return null
    }

    render(withTestRouter(<TestComponent />))

    expect(result.alerts).toHaveLength(0)

    let createdAlertId: string
    act(() => {
      createdAlertId = result.addAlert({
        title: 'Alert title',
        message: 'Alert description',
        type: 'success',
      })
    })
    await waitFor(() => expect(result.alerts.map(alert => alert.id)).toContain(createdAlertId))
  })

  test('should remove alert', async () => {
    let result: ReturnType<typeof useAlerts>
    function TestComponent() {
      result = useAlerts()
      return null
    }

    render(withTestRouter(<TestComponent />))

    let createdAlertId: string
    act(() => {
      createdAlertId = result.addAlert({
        title: 'Alert title',
        message: 'Alert description',
        type: 'success',
      })
      result.addAlert({
        title: 'Alert title 2',
        message: 'Alert description 2',
        type: 'success',
      })
    })
    act(() => result.removeAlert(createdAlertId))

    await waitFor(() =>
      expect(result.alerts.map(alert => alert.id)).not.toContain(createdAlertId),
    )
  })

  test('should remove alert automatically', async () => {
    let result: ReturnType<typeof useAlerts>
    function TestComponent() {
      result = useAlerts()
      return null
    }

    render(withTestRouter(<TestComponent />))

    let createdAlertId: string
    act(() => {
      createdAlertId = result.addAlert({
        title: 'Alert title',
        message: 'Alert description',
        type: 'success',
        hideTime: 3000,
      })
    })

    // setTimeout deletes the alert
    act(() => {
      jest.runOnlyPendingTimers()
    })
    await waitFor(() =>
      expect(result.alerts.map(alert => alert.id)).not.toContain(createdAlertId),
    )
  })
})

describe('Alerts component', () => {
  const TestAlert = () => {
    const { addAlert, alerts, removeAlert } = useAlerts()

    return (
      <div>
        <button
          onClick={() =>
            addAlert({
              title: 'Alert title',
              message: 'Alert description example',
              type: 'success',
            })
          }
        >
          add alert
        </button>
        <Alerts alerts={alerts} removeAlert={removeAlert} />
      </div>
    )
  }

  test('should add alert', async () => {
    render(withTestRouter(<TestAlert />))

    act(() => userEvent.click(screen.getByText(/add alert/i)))

    expect(screen.getByText(/alert description example/i)).toBeInTheDocument()
  })

  test('should remove alert', async () => {
    render(withTestRouter(<TestAlert />))

    act(() => userEvent.click(screen.getByText(/add alert/i)))
    expect(screen.getByText(/alert description example/i)).toBeInTheDocument()

    act(() => userEvent.click(screen.getByTestId('remove-alert-btn-0')))

    expect(screen.queryByText(/alert description example/i)).not.toBeInTheDocument()
  })
})
