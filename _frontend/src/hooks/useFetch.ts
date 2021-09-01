import * as React from 'react'
import { useAlerts, UseAlertsReturn } from 'hooks/useAlerts'
import { useSafeDispatch } from 'hooks/useSafeDispatch'
import { RequestRes } from 'utils/fetch-middleware'
import { Status } from 'types'

export type InitialStateProps = { status: Status; error: string }
const initialState: InitialStateProps = {
  status: 'idle',
  error: '',
}

export function useFetch() {
  const { addAlert, alerts, removeAlert } = useAlerts()

  const [{ status, error }, unsafeDispatch] = React.useReducer(
    (curr: InitialStateProps, updates: Partial<InitialStateProps>) => ({
      ...curr,
      ...updates,
    }),
    initialState,
  )
  const dispatch = useSafeDispatch(unsafeDispatch)

  const fetchData = React.useCallback(
    async <Res>(promise: RequestRes<Res, string>, opts: FetchDataOpts) => {
      const { onFailure, onSuccess, preventAlert, successMessage } = opts || {}
      if (!promise || !promise.then) {
        dispatch({ error: 'There was an error.', status: 'rejected' })
        addAlert({ message: 'There was an error.', type: 'error' })
        return
      }
      dispatch({ status: 'pending' })
      let loadingAlertId
      if (!opts.preventLoadingAlert) {
        loadingAlertId = addAlert({ message: 'Loading...', type: 'loading' })
      }

      const [data, promiseError] = await promise

      if (!opts.preventLoadingAlert && loadingAlertId) {
        removeAlert(loadingAlertId)
      }

      if (!data || promiseError) {
        dispatch({
          error: promiseError || 'There was an error.',
          status: 'rejected',
        })
        addAlert({ message: promiseError || 'There was an error.', type: 'error' })
        onFailure?.(promiseError)
        return
      }

      onSuccess?.(data)
      dispatch({ status: 'resolved' })
      if (!preventAlert) {
        addAlert({ message: successMessage || 'Success.', type: 'success', hideTime: 3000 })
      }

      return data
    },

    [addAlert, dispatch, removeAlert],
  )

  return { status, error, addAlert, alerts, removeAlert, fetchData }
}

export interface UseFetchReturn extends UseAlertsReturn {
  status: ReturnType<typeof useFetch>['status']
  error: ReturnType<typeof useFetch>['error']
  fetchData: <Res>(promise: RequestRes<Res, string>, opts: FetchDataOpts) => Promise<Res | void>
}

export interface FetchDataOpts {
  preventAlert?: boolean
  onSuccess?: (...args: any) => any
  onFailure?: (...args: any) => any
  successMessage?: string
  preventLoadingAlert?: boolean
}
