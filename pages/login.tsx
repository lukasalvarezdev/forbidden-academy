import GoogleLogo from '@/static/img/google-logo'
import styled from 'styled-components'

export default function LoginPage() {
  return (
    <div
      className="d-f center-f"
      style={{
        height: '100vh',
      }}
    >
      <StyledLogin className="normal-shadow text-center">
        <div className="logo text-center mb-20">
          <img src="logo.png" alt="Lukidemy logo" />
        </div>

        <form className="login-form mb-20">
          <div className="field mb-20">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <span className="d-b mb-20">Forgot your passowrd?</span>

          <button className="btn-primary -big">Log in</button>
        </form>

        <p className="mb-20">Or</p>

        <button className="google-login">
          <div className="google-box d-g center-g">
            <GoogleLogo />
          </div>
          Log in with google
        </button>
      </StyledLogin>
    </div>
  )
}

const StyledLogin = styled.div`
  background-color: #fff;
  border-radius: 5px;
  max-width: 450px;
  width: 95%;
  margin: 0 auto;
  padding: 30px 60px 40px 60px;

  .logo img {
    width: 160px;
  }

  span {
    margin-top: 5px;
    font-size: 12px;
    text-align: left;
  }

  .google-login {
    background-color: #4285f4;
    color: white;
    text-align: center;
    width: 100%;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    height: 40px;

    .google-box {
      background-color: #fff;
      border-radius: 3px;
      position: absolute;
      height: 34px;
      width: 34px;
      left: 3px;
      top: 3px;

      svg {
      }
    }
  }
`
