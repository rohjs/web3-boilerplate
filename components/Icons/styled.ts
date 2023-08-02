import styled, { css } from 'styled-components'

import { inlineFlexbox } from 'styles/utils'

type StyledIconProps = {
  $size: number
}

const iconStyles = css`
  ${inlineFlexbox()}
  flex-shrink: 0;
  overflow: hidden;
`

export const StyledIcon = styled.svg<StyledIconProps>`
  ${iconStyles}
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
`

export const StyledConnectorIcon = styled.span<StyledIconProps>`
  ${iconStyles}

  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  border-radius: 50%;
  background-color: var(--white);

  .cryptoIcon {
    width: ${({ $size }) => `${$size * 0.8}px`};
    height: ${({ $size }) => `${$size * 0.8}px`};
  }
`

export const StyledTokenFragment = styled.div<StyledIconProps>`
  ${iconStyles}
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;

  .icon {
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;

    &.placeholder {
      background-color: rgba(var(--gray-25-rgb), 0.4);
    }
  }
`

export const StyledTokenIcon = styled.span<StyledIconProps>`
  ${iconStyles}
  justify-content: flex-start;
  min-width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  .mainToken {
    z-index: 2;
  }

  .tokenFragment {
    ${iconStyles}

    &:not(:first-child) {
      margin-left: -${({ $size }) => $size / 4}px;
    }

    &:first-child {
      position: relative;
      margin-left: 0 !important;
    }
  }
`
