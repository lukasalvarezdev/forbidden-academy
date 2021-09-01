import styled from 'styled-components'
import { UseAlertsReturn } from 'hooks/useAlerts'

interface AlertsProps {
  alerts: UseAlertsReturn['alerts']
  removeAlert: UseAlertsReturn['removeAlert']
}

export const Alerts = ({ alerts, removeAlert }: AlertsProps) => {
  return (
    <StyledAlerts>
      <ul>
        {alerts.map((alert, index) => (
          <li
            className={`alert ${alert.type} flex -middle margin-bottom padding`}
            key={alert.id}
          >
            <p className="no-spacing">{alert.title}</p>
            <p className="no-spacing">{alert.message}</p>
            <button
              className="flex -middle -center"
              data-testid={`remove-alert-btn-${index}`}
              onClick={e => {
                e.preventDefault()
                removeAlert(alert.id)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </StyledAlerts>
  )
}

const StyledAlerts = styled.div`
  width: 376px;
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 999;

  .alert {
    position: relative;
    padding-right: 2.5rem;
    box-sizing: border-box;
    background-color: #fff;
    min-height: 56px;
    border-radius: 4px;
    border: thin solid #d4d4d4;
    font-size: 14px;
    width: 100%;

    button {
      position: absolute;
      background-color: transparent;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      right: 1rem;
      top: calc(1rem - 3px);
      background-color: #fff;

      &:hover {
        background-color: #eeeeee;
      }

      svg path {
        fill: #a3a3a3;
      }
    }

    &.success {
      border-left: 4px solid #109e10;
    }
    &.error {
      border-left: 4px solid #e61919;
    }
    &.loading {
      border-left: 4px solid #a3a3a3;
    }
  }
`
