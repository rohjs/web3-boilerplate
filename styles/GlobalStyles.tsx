'use client'

import { createGlobalStyle, css } from 'styled-components'

import { fontFamily } from './constants/typography'
import {
  generateHexVariables,
  generateRgbVariables,
  media,
  noScrollbar,
} from './utils'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: ${fontFamily.text};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    ${generateHexVariables()};
    ${generateRgbVariables()};
    --w3m-z-index: 10000 !important;
  }

  html {
    width: 100%;
    min-height: -webkit-fill-available;
    overflow: hidden;
    font-size: 16px;
    font-family: ${fontFamily.text};
  }

  body {
    ${noScrollbar()}
    width: 100%;
    max-width: 100vw;
    min-height: -webkit-fill-available;
    overflow-x: hidden;
    overflow-y: auto;
    font-family: ${fontFamily.text};
    transition: 100ms;
  }

  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    font-family: ${fontFamily.text};
    background-color: transparent;
    border: 0;
    box-shadow: 0;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button {
    cursor: pointer;
  }

  button {
    padding: 0;
  }

  input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }

  abbr {
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    border: 0;
  }

  fieldset {
    border: 0;
    padding: 0;
  }


  // NOTE: Globally used classNames
  .a11y {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  .hidden {
    display: none !important;
  }

  .afterLaptop {
    display: none !important;

    ${media(
      'minLaptop',
      css`
        display: block !important;
      `
    )}
  }

  .beforeLaptop {
    ${media(
      'minLaptop',
      css`
        display: none !important;
      `
    )}
  }

  .mobileOnly {
    ${media(
      'minTablet',
      css`
        display: none !important;
      `
    )}
  }

  .handheldOnly {
    ${media(
      'minLaptop',
      css`
        display: none !important;
      `
    )}
  }

  .browserOnly {
    ${media(
      'maxLaptop',
      css`
        display: none !important;
      `
    )}
  }

  .afterMobile {
    ${media(
      'maxTablet',
      css`
        display: none !important;
      `
    )}
  }

  

  

`

export default GlobalStyles
