import * as React from 'react'

// todo: type run function
export function useAsync<T>(initialData: T): UseAsyncReturn<T> {
  const initialDataRef = React.useRef<T>(initialData)
  const initialState: State<T> = React.useMemo(
    () => ({
      status: 'idle',
      error: '',
      data: initialDataRef.current,
    }),
    [initialDataRef],
  )
  const [{ data, status, error }, dispatch] = React.useReducer(
    createReducer<typeof initialState>(),
    initialState,
  )

  async function run(promise: any, options?: Options) {
    dispatch({ status: 'pending' })

    if (!promise || !promise.then) {
      dispatch({ error: 'Error', status: 'rejected' })
      return
    }

    const [dataRes, error] = await promise
    if (!dataRes || error) {
      dispatch({ error, status: 'rejected' })
      return
    }

    if (!options?.preventDispatch) {
      dispatch({
        status: 'resolved',
        data: dataRes,
      })
      return dataRes
    }
    dispatch({
      status: 'resolved',
    })

    return dataRes
  }

  const runRef = React.useRef(run)

  return {
    dispatch,
    run: runRef.current,
    status,
    data,
    error,
  }
}

const createReducer =
  <T>() =>
  (curr: T, updates: Partial<T>): T => ({
    ...curr,
    ...updates,
  })

export interface UseAsyncReturn<T> {
  dispatch: Dispatch<T>
  run: Run<T>
  data: T
  status: Status
  error: Error
}

export interface State<T> {
  status: Status
  error: string
  data: T
}

export type Dispatch<T> = React.Dispatch<Partial<State<T>>>

export type Run<T> = (promise: any, options?: Options) => Promise<T>

export type Options = { preventAlert?: boolean; preventDispatch?: boolean }

export type Error = string

export type Status = 'idle' | 'pending' | 'resolved' | 'rejected'
