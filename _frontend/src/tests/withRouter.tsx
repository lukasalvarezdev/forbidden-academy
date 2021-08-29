import { NextRouter } from 'next/router'
import { RouterContext } from 'next/dist/shared/lib/router-context'

export function withTestRouter(tree: React.ReactElement, router: Partial<NextRouter> = {}) {
  const {
    route = '',
    pathname = '',
    query = {},
    asPath = '',
    push = jest.fn(),
    replace = async () => true,
    reload = () => null,
    back = () => null,
    prefetch = async () => undefined,
    beforePopState = () => null,
    isReady = true,
    isFallback = false,
    events = {
      on: () => null,
      off: () => null,
      emit: () => null,
    },
  } = router

  return (
    <RouterContext.Provider
      value={
        {
          route,
          pathname,
          query,
          asPath,
          push,
          replace,
          reload,
          back,
          prefetch,
          beforePopState,
          isFallback,
          events,
          isReady,
        } as NextRouter
      }
    >
      {tree}
    </RouterContext.Provider>
  )
}
