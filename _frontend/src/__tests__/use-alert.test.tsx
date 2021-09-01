import '@testing-library/jest-dom/extend-expect'
import { render, act, waitFor, withTestRouter } from 'tests'
import { useAlerts } from 'hooks/useAlerts'

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
