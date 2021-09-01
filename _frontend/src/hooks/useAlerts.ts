import * as React from 'react'
import { useSafeDispatch } from 'hooks/useSafeDispatch'

export function useAlerts() {
  const [alerts, _setAlerts] = React.useState<Alert[]>([])
  const setAlerts = useSafeDispatch<Alert[]>(_setAlerts)

  const addAlert = React.useCallback(
    (alert: Omit<Alert, 'id'>) => {
      const id = (alerts.length - 1).toString() + new Date().toUTCString()
      setAlerts(alerts => [...alerts, { ...alert, id }])

      if (alert.hideTime) {
        setTimeout(() => {
          setAlerts(alerts => alerts.filter(x => x.id !== id))
        }, alert.hideTime)
      }

      return id
    },
    [alerts.length, setAlerts],
  )

  const removeAlert = React.useCallback(
    (id: string) => {
      setAlerts(alerts => alerts.filter(x => x.id !== id))
    },
    [setAlerts],
  )

  return { alerts, addAlert, removeAlert }
}

export interface UseAlertsReturn {
  alerts: ReturnType<typeof useAlerts>['alerts']
  addAlert: ReturnType<typeof useAlerts>['addAlert']
  removeAlert: ReturnType<typeof useAlerts>['removeAlert']
}

export interface Alert {
  type: 'loading' | 'success' | 'error'
  title?: string
  message: string
  hideTime?: number
  id: string
}
