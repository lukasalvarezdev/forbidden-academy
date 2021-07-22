import * as React from 'react'

export const useStateWithPromise = <T>(
  initialState: T,
): [T, (stateAction: any) => Promise<unknown>] => {
  const [state, setState] = React.useState(initialState)
  const resolverRef = React.useRef<typeof setState | null>(null)

  React.useEffect(() => {
    if (resolverRef.current) {
      resolverRef.current?.(state)
      resolverRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolverRef.current, state])

  const handleSetState = React.useCallback(
    stateAction => {
      setState(stateAction)
      return new Promise(resolve => {
        resolverRef.current = resolve
      })
    },
    [setState],
  )

  return [state, handleSetState]
}
