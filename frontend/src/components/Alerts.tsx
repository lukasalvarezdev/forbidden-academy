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
            className={`alert ${alert.type} d-f align-items-c mb-10 p-10 normal-shadow`}
            key={alert.id}
          >
            <div className="alert-icon mr-10 d-f align-items-c">
              {alert.type === 'success' ? <SuccessIcon /> : null}
              {alert.type === 'error' ? <WarningIcon /> : null}
              {alert.type === 'loading' ? <InfoIcon /> : null}
            </div>
            <div>
              <p className="title">{alert.title}</p>
              <p className="message">{alert.message}</p>
            </div>
            <button
              className="d-f center-f"
              data-testid={`remove-alert-btn-${index}`}
              onClick={e => {
                e.preventDefault()
                removeAlert(alert.id)
              }}
            >
              <CloseIcon />
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
    min-height: 50px;
    border-radius: 4px;
    width: 100%;

    .title {
      font-size: 15px;
      font-weight: 600;
    }

    .message {
      font-size: 13px;
      color: var(--gray);
      font-weight: 300;
    }

    button {
      position: absolute;
      background-color: transparent;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      right: 1rem;
      top: 1rem;
      background-color: #fff;

      &:hover {
        background-color: #eeeeee;
      }

      svg path {
        fill: #a3a3a3;
      }
    }

    &.success {
      border-left: 5px solid var(--success);
    }
    &.error {
      border-left: 5px solid var(--warning);
    }
    &.info {
      border-left: 5px solid var(--info);
    }
    &.loading {
      border-left: 5px solid var(--info);
    }
  }
`

const SuccessIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 4.07825e-05C15.5228 4.07825e-05 20 4.4772 20 10C20 15.5228 15.5228 20 10 20C4.4772 20 4.14787e-05 15.5228 4.14787e-05 10C-0.0156734 4.49286 4.43598 0.0157556 9.94309 4.07825e-05C9.96207 -1.35942e-05 9.98104 -1.35942e-05 10 4.07825e-05Z"
      fill="#28B784"
    />
    <path
      d="M15.5397 7.24433L8.43748 14.3466L4.46021 10.3977L6.07954 8.80684L8.43748 11.1364L13.9204 5.65343L15.5397 7.24433Z"
      fill="white"
    />
  </svg>
)

const InfoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="10" fill="#1F7CE9" />
    <circle cx="10" cy="6" r="1" transform="rotate(180 10 6)" fill="white" />
    <rect
      x="11"
      y="15"
      width="2"
      height="7"
      rx="1"
      transform="rotate(180 11 15)"
      fill="white"
    />
  </svg>
)

const WarningIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="10" fill="#FFC021" />
    <circle cx="10" cy="14" r="1" fill="white" />
    <rect x="9" y="5" width="2" height="7" rx="1" fill="white" />
  </svg>
)

const CloseIcon = () => (
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
)
