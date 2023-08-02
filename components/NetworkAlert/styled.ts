import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import { flexbox, media, textStyle } from 'styles/utils'

import { buttonStyle } from 'components/Button/styled'

const ALERT_HEIGHT = 56
const GUTTER_MOBILE = 20
const GUTTER_TABLET = 80

type StyledAlertsProps = {
  $enabled?: boolean
}

export const StyledNetworkAlert = styled(motion.aside)<StyledAlertsProps>`
  ${flexbox()}
  flex-shrink: 0;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  max-height: 0;
  background-color: var(--error-400);
  cursor: pointer;
  will-change: max-height;
  transition: max-height 300ms;

  .content {
    ${flexbox()}
    padding: 0 ${GUTTER_MOBILE}px;
    height: ${ALERT_HEIGHT}px;

    .desc,
    .switchButton {
      margin-left: 12px;
    }

    .desc {
      ${textStyle('body', 4, 700)}
      color: var(--white);
    }

    .switchButton {
      ${buttonStyle}
      ${textStyle('caption')}
      flex-shrink: 0;
      height: 32px;
      padding: 0 16px;
      font-weight: 700;
      color: var(--orange-500);
      background-color: var(--white);
      border-radius: 50px;
      white-space: nowrap;
    }
  }

  ${media(
    'minTablet',
    css`
      .content {
        padding: 0 ${GUTTER_TABLET}px;
      }
    `
  )}

  ${media(
    'minLaptop',
    css`
      .content {
        .desc {
          ${textStyle('body', 2, 700)}
        }

        .switchButton {
          ${buttonStyle}
          ${textStyle('caption')}
          height: 32px;
          padding: 0 16px;
          font-weight: 700;
          color: var(--orange-500);
          background-color: var(--white);
          border-radius: 50px;
        }
      }
    `
  )}

  ${({ $enabled }) =>
    $enabled &&
    css`
      max-height: ${ALERT_HEIGHT}px;
    `}
`
