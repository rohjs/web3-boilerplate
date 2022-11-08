import styled from "styled-components"

import { flexbox, textStyle } from "styles/utils"

export const StyledAccount = styled.div`
  header {
    ${flexbox()}
    margin-bottom: 40px;
  }

  strong {
    ${textStyle("subtitle", 1)}
    margin-left: 16px;
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
