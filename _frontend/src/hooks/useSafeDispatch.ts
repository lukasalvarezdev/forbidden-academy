import * as React from 'react'

export const useSafeDispatch = <T>(
  dispatch: React.Dispatch<React.SetStateAction<T>>,
): React.Dispatch<React.SetStateAction<T>> => {
  const mounted = React.useRef(false)

  React.useEffect(() => {
    mounted.current = true

    return () => {
      mounted.current = false
    }
  }, [])

  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch],
  )
}
