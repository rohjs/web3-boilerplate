import styled from "styled-components"

import { flexbox, textStyle } from "styles/utils"

export const StyledAccount = styled.div`
  padding: 30px;
  background-color: rgba(var(--primary-50-rgb), 0.1);
  border-radius: 8px;

  h2 {
    ${textStyle("body", 4)}
    margin-bottom: 24px;
    text-align: center;
  }

  .account {
    ${flexbox()}
    margin-bottom: 30px;

    strong {
      ${textStyle("subtitle", 1)}
      margin-left: 16px;
    }
  }
`

export const StyledConnectWallets = styled.div`
  ${flexbox()}
  flex-direction: column;
  width: 100%;

  h1 {
    ${textStyle("display", 3)}
    margin-bottom: 40px;
    font-size: 30px;
    letter-spacing: -0.01em;
    text-align: center;
  }

  ul {
    width: 100%;
  }

  li {
    ${flexbox()}
    width: 100%;
    margin-top: 24px;

    &:first-child {
      margin-top: 0;
    }
  }
`

export const StyledHomePage = styled.div`
  ${flexbox()}
  flex-direction: column;
  max-width: 600px;
  padding: 100px 0;
  min-height: 100vh;
  margin: 0 auto;

  button {
    width: 400px;
  }
`

export const StyledSample = styled.section`
  margin-top: 50px;

  .hash {
    ${textStyle("body", 4)}
    display: block;
    margin-top: 40px;
    text-align: center;
  }

  .buttonGroup {
    button {
      margin-top: 20px;

      &:first-child {
        margin-top: 0;
      }
    }
  }
`
