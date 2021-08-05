import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 60px;
  padding: 0 20px;

  @media screen and (max-width: 1200px) {
    .desktop.icons {
      display: none;
    }
    .icon-menu {
      display: block;
    }
    .desktop.search-bar {
      display: none;
    }
  }

  .logo img {
    width: 120px;
  }

  .search-bar {
    &.desktop {
      max-width: 40%;
    }

    .field input {
      border-radius: 30px;

      & ::placeholder {
        font-weight: 300;
      }
    }

    .icon-primary {
      background-color: var(--purple);
      border-radius: 50%;

      path {
        fill: white;
      }
    }
  }

  .icons {
    .icon-primary {
      margin-right: 20px;
    }

    &.desktop > a {
      font-size: 14px;
      color: var(--primary-gray);
    }

    .profile {
      width: 35px;
      height: 35px;
      background-color: #ff4a1d;
      color: white;
      border-radius: 50%;
      font-size: 14px;
      font-weight: 600;
    }
  }
`

export const StyledResponsiveMenu = styled.div`
  display: none;

  @media screen and (max-width: 1200px) {
    display: block;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #fff;
    z-index: 100;
    border-radius: 10px;
    padding: 40px 20px;
    width: 95%;
    top: 60px;

    .icons {
      > a {
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background-color: var(--purple);
        color: white;
        text-align: center;
        width: 100%;
        border-radius: 4px;
        font-weight: 600;
        margin: 0;
        margin-bottom: 20px;
      }
    }

    .search-bar .field {
      max-width: 100%;
    }
  }
`
