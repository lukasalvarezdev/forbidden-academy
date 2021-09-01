import '@testing-library/jest-dom/extend-expect'
import { render, act, waitFor, withTestRouter } from 'tests'
import { useFetch, UseFetchReturn } from 'hooks/useFetch'

test('should return error if there is no promise', async () => {
  let result: UseFetchReturn
  function TestComponent() {
    result = useFetch()
    return null
  }

  render(withTestRouter(<TestComponent />))

  expect(result.alerts).toHaveLength(0)
  act(() => {
    result.fetchData((() => {}) as unknown as any, {})
  })

  await waitFor(() => {
    expect(result.alerts.filter(alert => alert.type === 'error')).toHaveLength(1)
    expect(result.status).toBe('rejected')
  })
})

test('should call onSuccess function', async () => {
  let result: UseFetchReturn
  function TestComponent() {
    result = useFetch()
    return null
  }
  const onSuccess = jest.fn()

  render(withTestRouter(<TestComponent />))

  act(() => {
    result.fetchData((async () => ['success-response-example'])() as unknown as any, {
      onSuccess,
    })
  })

  await waitFor(() => {
    expect(result.status).toBe('resolved')
    expect(result.alerts.filter(alert => alert.type === 'success')).toHaveLength(1)
    expect(onSuccess.mock.calls).toEqual([['success-response-example']])
  })
})

test('should call onFailure function', async () => {
  let result: UseFetchReturn
  function TestComponent() {
    result = useFetch()
    return null
  }
  const onFailure = jest.fn()

  render(withTestRouter(<TestComponent />))

  act(() => {
    result.fetchData((async () => [null, 'error-response-example'])() as unknown as any, {
      onFailure,
    })
  })

  await waitFor(() => {
    expect(result.status).toBe('rejected')
    expect(result.alerts.filter(alert => alert.type === 'error')).toHaveLength(1)
    expect(onFailure.mock.calls).toEqual([['error-response-example']])
  })
})
